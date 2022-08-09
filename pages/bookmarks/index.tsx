import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Column, Grid, TweeterLinks, Tweets } from "../../components";
import { bookmarkLinks } from "../../constants/constants";
import { ITweet } from "../../interface/interface";
import dbConnect from "../../lib/db";
import Comment from "../../model/Comment";
import Tweet from "../../model/Tweet";
import User from "../../model/User";

interface IProp {
	tweets: [ITweet];
}
const Bookmarks: NextPage<IProp> = ({ tweets }) => {
	return (
		<Grid reverse>
			<Column size="small">
				<TweeterLinks links={bookmarkLinks} />
			</Column>
			<Column size="big">
				<Tweets tweets={tweets} />
			</Column>
		</Grid>
	);
};

export default Bookmarks;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	console.log(session?.user);
	// @ts-ignore
	await dbConnect();
	let tweets;
	try {
		tweets = await Tweet.find()
			.sort({ createdAt: "descending" })
			.populate("createdBy", "", User)
			.populate({
				path: "comments",
				select: "",
				model: Comment,
				populate: { path: "user", select: "name image", model: User },
			});
	} catch (error) {
		console.log(error);
	}

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
			tweets: JSON.parse(JSON.stringify(tweets)),
		},
	};
};
