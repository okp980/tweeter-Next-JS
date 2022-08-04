import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Body, CommentStyle, Head, Message } from "./comment.style";
import { AiOutlineHeart } from "react-icons/ai";
import { IComment } from "../../interface/interface";
import { log } from "console";
import { useEffect } from "react";

interface IProps {
	comment: IComment;
}

const Comment: React.FC<IProps> = ({ comment }) => {
	useEffect(() => {
		console.log(comment.user.image);
	}, [comment]);

	return (
		<CommentStyle data-testid="single-comment">
			<Avatar image={comment.user.image} />
			<Message>
				<Head>
					<h4>{comment.user.name}</h4>
					<span>{comment.createdAt}</span>
				</Head>
				<Body>
					<p>{comment.desc}</p>
					<div className="comment-controls">
						<Button secondary icon>
							<AiOutlineHeart />
							like
						</Button>
						<span>{`${comment.likes.length} Likes`}</span>
					</div>
				</Body>
			</Message>
		</CommentStyle>
	);
};

export default Comment;
