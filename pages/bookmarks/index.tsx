import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Column, Grid, TweeterLinks, Tweets } from "../../components";
import { bookmarkLinks } from "../../constants/constants";

const Bookmarks: NextPage = () => {
	return (
		<Grid reverse>
			<Column size="small">
				<TweeterLinks links={bookmarkLinks} />
			</Column>
			<Column size="big">
				<Tweets />
			</Column>
		</Grid>
	);
};

export default Bookmarks;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	console.log(session?.user);

	if (!session) {
		return {
			redirect: {
				destination: "/auth/signin?callbackUrl=/bookmarks",
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
