import Comments from "../Comments/Comments";
import CreateComment from "../CreateComment/CreateComment";

const CommentSection = () => {
	return (
		<div>
			<CreateComment />
			<Comments />
		</div>
	);
};

export default CommentSection;
