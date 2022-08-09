import Avatar from "../Avatar/Avatar";
import { CreateCommentStyle } from "./CreaComment.style";

const CreateComment = () => {
	return (
		<CreateCommentStyle>
			<Avatar image="" />
			<form>
				<textarea
					name="tweet"
					id="tweet"
					placeholder="Tweet your reply"
				></textarea>
			</form>
		</CreateCommentStyle>
	);
};

export default CreateComment;
