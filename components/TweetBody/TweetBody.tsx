import Image from "next/image";
import { TweetBodyStyle } from "./tweetBody.style";

interface IProps {
	tweet: string;
	img: {
		url: string;
		alt: string;
	};
}

const TweetBody: React.FC<IProps> = ({ tweet, img }) => {
	return (
		<TweetBodyStyle>
			<p>{tweet}</p>
			<Image src={img.url} alt={img.alt} height={400} width={800} />
		</TweetBodyStyle>
	);
};

export default TweetBody;
