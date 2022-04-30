import Head from "next/head";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import UserProfile from "../UserProfile/UserProfile";
import { HeaderStyle, MainContainer } from "./layout.style";

interface Iprops {}

const Layout: React.FC<Iprops> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Tweeter</title>
				<meta
					charSet="utf-8"
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="description" content="new Social App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderStyle>
				<div className="container">
					<Logo />
					<Nav />
					<UserProfile />
				</div>
			</HeaderStyle>

			<MainContainer>{children}</MainContainer>
		</>
	);
};

export default Layout;
