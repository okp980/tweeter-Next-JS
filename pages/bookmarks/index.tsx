import type { NextPage } from "next";
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
