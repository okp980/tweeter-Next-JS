import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Body, CommentStyle, Head, Message } from "./comment.style";
import { AiOutlineHeart } from "react-icons/ai";

const Comment: React.FC = () => {
	return (
		<CommentStyle>
			<Avatar />
			<Message>
				<Head>
					<h4>Waqar Bloom </h4>
					<span>24 August at 20:43</span>
				</Head>
				<Body>
					<p>
						I have seen awe-inspiring things that I thought I did never be able
						to explain to another person.
					</p>
					<div className="comment-controls">
						<Button secondary icon>
							<AiOutlineHeart />
							like
						</Button>
						<span>12k Likes</span>
					</div>
				</Body>
			</Message>
		</CommentStyle>
	);
};

export default Comment;
