import React, { useCallback, useEffect, useMemo } from "react";
import StyledSection from "./signin.style";
import { GrGoogle } from "react-icons/gr";
import Image from "next/image";
import { signIn, getProviders, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

type Props = {};

function Signin({}: Props) {
	const { data: session, status } = useSession();
	const { push, query } = useRouter();

	const user = useMemo(() => session?.user, [session?.user]);
	const pushTo = useCallback(
		() => push(query.callbackUrl ? `${query.callbackUrl}` : "/"),
		[push, query.callbackUrl]
	);

	useEffect(() => {
		if (user) pushTo();
	}, [pushTo, user]);
	const handleSignIn = () => signIn("google");

	return (
		<StyledSection>
			<div className="hero">
				<div className="image">
					<Image
						src="/assets/images/login-background.jpg"
						layout="fill"
						alt="sign in"
					/>
				</div>
				<div className="info">
					<div className="container">
						<h1>happy community</h1>

						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
							pariatur recusandae laudantium!
						</p>
					</div>
				</div>
			</div>
			<div className="cta">
				<h1>Tweeter </h1>
				<p>Join a community of happy people</p>
				<button onClick={handleSignIn}>
					<GrGoogle /> <span>Sign in with Google </span>
				</button>
			</div>
		</StyledSection>
	);
}

export default Signin;
