import Card from "../Card/Card";
import TweetBody from "../TweetBody/TweetBody";
import TweetControl from "../TweetControl/TweetControl";
import TweetHead from "../TweetHead/TweetHead";
import { TweetStyle } from "./tweet.style";
import { AiOutlineRetweet } from "react-icons/ai";
import CommentSection from "../CommentSection/CommentSection";
import { ITweet } from "../../interface/interface";
import { useCallback, useState } from "react";

interface IProps {
	tweet: ITweet;
}
//"24 August at 20:43"

const Tweet: React.FC<IProps> = ({ tweet }) => {
	const [show, setShow] = useState(false);
	const { createdBy, desc, createdAt, comments, likes, retweet, saves } = tweet;

	const handleShowComment = useCallback(() => {
		setShow((prev) => !prev);
	}, []);
	return (
		<TweetStyle data-testid="tweet-card">
			<p className="retweet">
				<AiOutlineRetweet />
				daniel jansen retweeted
			</p>
			<Card className="tweet-card">
				<TweetHead
					title={createdBy?.name}
					date={createdAt}
					image={createdBy?.image}
				/>
				<TweetBody
					tweet={desc}
					img={{
						url: "/assets/images/tweet.jpg",
						alt: createdBy?.name,
					}}
				/>
				<TweetControl
					controls={{ comments, likes, retweet, saves }}
					onHandleShow={handleShowComment}
				/>
				<CommentSection comments={comments} show={show} />
			</Card>
		</TweetStyle>
	);
};

export default Tweet;
