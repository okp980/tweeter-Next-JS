import { IComment } from "../../interface/interface";
import Comment from "../Comment/Comment";

interface IProps {
	comments: [IComment];
}

const Comments: React.FC<IProps> = ({ comments }) => {
	if (comments.length > 0) {
		return (
			<ul data-testid="comment-section">
				{comments.map((comment, index) => (
					<Comment key={index} comment={comment} />
				))}
			</ul>
		);
	}

	return <p>No comments</p>;
};

export default Comments;
