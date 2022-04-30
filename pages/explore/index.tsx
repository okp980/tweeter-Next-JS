import type { NextPage } from "next";
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
