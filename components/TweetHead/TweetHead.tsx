import Avatar from "../Avatar/Avatar";
import { TweetHeadStyle } from "./tweetHead.style";

interface IProps {
	title: string;
	date: string;
	image: string;
}

const TweetHead: React.FC<IProps> = ({ title, date, image }) => {
	return (
		<TweetHeadStyle>
			<Avatar image={image} />
			<div>
				<h4>{title}</h4>
				<h6>{date}</h6>
			</div>
		</TweetHeadStyle>
	);
};

export default TweetHead;
