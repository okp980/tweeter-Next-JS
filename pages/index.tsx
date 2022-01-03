import type { NextPage } from "next";

import {
	Grid,
	Column,
	Trends,
	Follow,
	Tweets,
	CreateTweet,
} from "../components";

const Home: NextPage = () => {
	return (
		<Grid>
			<Column>
				<CreateTweet />
				<Tweets />
			</Column>
			<Column>
				<Trends />
				<Follow />
			</Column>
		</Grid>
	);
};

export default Home;
