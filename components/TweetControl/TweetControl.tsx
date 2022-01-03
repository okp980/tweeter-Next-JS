import Button from "../Button/Button";
import { TweetControlStyle } from "./tweetControl.style";
import { BiComment } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const TweetControl = () => {
	return (
		<TweetControlStyle>
			<div className="info">
				<ul>
					<li>499 comments</li>
					<li>459k retweets</li>
					<li>234 saved</li>
				</ul>
			</div>
			<ul className="controls">
				<li>
					<Button socialBtn icon type="button">
						<BiComment />
						comment
					</Button>
				</li>
				<li>
					<Button socialBtn icon type="button">
						<AiOutlineRetweet />
						retweet
					</Button>
				</li>
				<li>
					<Button socialBtn icon type="button">
						<AiOutlineHeart />
						{/* <AiFillHeart /> */}
						like
					</Button>
				</li>
				<li>
					<Button socialBtn icon type="button">
						<FaRegBookmark />
						save
					</Button>
				</li>
			</ul>
		</TweetControlStyle>
	);
};

export default TweetControl;
