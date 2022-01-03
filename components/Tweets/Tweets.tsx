import Tweet from "../Tweet/Tweet";
import { TweetsSection } from "./tweets.style";

const Tweets: React.FC = () => {
	return (
		<TweetsSection>
			<ul>
				<Tweet />
				<Tweet />
				<Tweet />
			</ul>
		</TweetsSection>
	);
};

export default Tweets;
