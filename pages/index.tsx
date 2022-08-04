import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

import {
	Trends,
	Follow,
	Tweets,
	CreateTweet,
	Grid,
	Column,
} from "../components";
import { ITweet } from "../interface/interface";
import dbConnect from "../lib/db";
import Comment from "../model/Comment";
import Tweet from "../model/Tweet";
import User from "../model/User";

interface IProp {
	tweets: [ITweet];
}

const Home: NextPage<IProp> = ({ tweets }) => {
	return (
		<Grid>
			<Column size="big">
				<CreateTweet />
				<Tweets tweets={tweets} />
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
	// @ts-ignore
	await dbConnect();
	let tweets;
	try {
		tweets = await Tweet.find()
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
				destination: "/auth/signin?callbackUrl=/",
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
