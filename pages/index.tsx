import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import {
	Trends,
	Follow,
	Tweets,
	CreateTweet,
	Grid,
	Column,
} from "../components";

const Home: NextPage = () => {
	return (
		<Grid>
			<Column size="big">
				<CreateTweet />
				<Tweets />
			</Column>
			<Column size="small">
				<Trends />
				<Follow />
			</Column>
		</Grid>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	console.log(session?.user);

	if (!session) {
		return {
			redirect: {
				destination: "/auth/signin?callbackUrl=/",
				permanent: true,
			},
		};
	}
	return {
		props: {
			prsons: "well",
		}, // will be passed to the page component as props
	};
};
