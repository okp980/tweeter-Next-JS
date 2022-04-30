import type { NextPage } from "next";

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
