import { ITweet } from "../../interface/interface";
import Tweet from "../Tweet/Tweet";
import { TweetsSection } from "./tweets.style";

interface IProp {
	tweets: [ITweet];
}

const Tweets: React.FC<IProp> = ({ tweets }) => {
	return (
		<TweetsSection>
			<ul>
				{tweets.map((tweet, index) => (
					<Tweet key={index} tweet={tweet} />
				))}
			</ul>
		</TweetsSection>
	);
};

export default Tweets;
