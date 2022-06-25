import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Column, Grid, Search, TweeterLinks, Tweets } from "../../components";
import { exploreLinks } from "../../constants/constants";

const Explore: NextPage = () => {
	return (
		<Grid reverse>
			<Column size="small">
				<TweeterLinks links={exploreLinks} />
			</Column>
			<Column size="big">
				<Search />
				<Tweets />
			</Column>
		</Grid>
	);
};

export default Explore;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	console.log(session?.user);

	if (!session) {
		return {
			redirect: {
				destination: "/auth/signin?callbackUrl=/explore",
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
