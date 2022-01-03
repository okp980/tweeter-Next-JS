import Card from "../Card/Card";
import TweetBody from "../TweetBody/TweetBody";
import TweetControl from "../TweetControl/TweetControl";
import TweetHead from "../TweetHead/TweetHead";
import { TweetStyle } from "./tweet.style";
import { AiOutlineRetweet } from "react-icons/ai";
import CommentSection from "../CommentSection/CommentSection";

const Tweet = () => {
	return (
		<TweetStyle>
			<p className="retweet">
				<AiOutlineRetweet />
				daniel jansen retweeted
			</p>
			<Card className="tweet-card">
				<TweetHead />
				<TweetBody />
				<TweetControl />
				<CommentSection />
			</Card>
		</TweetStyle>
	);
};

export default Tweet;
