import Button from "../Button/Button";
import { TweetControlStyle } from "./tweetControl.style";
import { BiComment } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IComment } from "../../interface/interface";

interface IProps {
	controls: {
		comments: [IComment];
		likes: [string];
		retweet: [string];
		saves: [string];
	};
	onHandleShow: () => void;
}

const TweetControl: React.FC<IProps> = ({ controls, onHandleShow }) => {
	const getCommentLength = () => {
		const length = controls.comments.length;
		return length > 1 ? `${length} comments` : `${length} comment`;
	};
	const getRetweetLength = () => {
		const length = controls.retweet.length;
		return length > 1 ? `${length} retweets` : `${length} retweet`;
	};
	const getSavesLength = () => {
		const length = controls.saves.length;
		return length > 1 ? `${length} saves` : `${length} save`;
	};
	const getLikesLength = () => {
		const length = controls.likes.length;
		return length > 1 ? `${length} likes` : `${length} like`;
	};
	return (
		<TweetControlStyle>
			<div className="info">
				<ul>
					<li>{getLikesLength()}</li>
					<li>{getCommentLength()}</li>
					<li>{getRetweetLength()}</li>
					<li>{getSavesLength()}</li>
				</ul>
			</div>
			<ul className="controls">
				<li>
					<Button socialBtn icon type="button" onClick={onHandleShow}>
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
