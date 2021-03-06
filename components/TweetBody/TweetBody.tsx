import Image from "next/image";
import { TweetBodyStyle } from "./tweetBody.style";

const TweetBody = () => {
	return (
		<TweetBodyStyle>
			<p>
				âWe travel, some of us forever, to seek other places, other lives, other
				souls.â â Anais Nin
			</p>
			<Image src="/assets/images/tweet.jpg" alt="" height={400} width={800} />
		</TweetBodyStyle>
	);
};

export default TweetBody;
