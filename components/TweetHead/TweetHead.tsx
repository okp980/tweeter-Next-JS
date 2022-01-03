import Avatar from "../Avatar/Avatar";
import { TweetHeadStyle } from "./tweetHead.style";

const TweetHead: React.FC = () => {
	return (
		<TweetHeadStyle>
			<Avatar />
			<div>
				<h4>paytons lyons</h4>
				<h6>24 August at 20:43</h6>
			</div>
		</TweetHeadStyle>
	);
};

export default TweetHead;
