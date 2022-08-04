import { IComment } from "../../interface/interface";
import Comments from "../Comments/Comments";
import CreateComment from "../CreateComment/CreateComment";

interface IProps {
	show: Boolean;
	comments: [IComment];
}

const CommentSection: React.FC<IProps> = ({ show, comments }) => {
	return (
		<div>
			<CreateComment />
			{show && <Comments comments={comments} />}
		</div>
	);
};

export default CommentSection;
