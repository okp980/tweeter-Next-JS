import Image from "next/image";
import { FaUserCircle, FaGlobeAsia } from "react-icons/fa";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { ButtonGroup, CreateTweetStyle } from "./createTweet.style";
const CreateTweet: React.FC<> = () => {
	return (
		<CreateTweetStyle>
			<Card className="createTweet-card">
				<h3>tweet something</h3>
				<form>
					<label htmlFor="message">
						<FaUserCircle className="userIcon" />
					</label>
					<textarea
						name="message"
						id="message"
						cols={30}
						rows={5}
						placeholder='what"s happening?'
					></textarea>
					<ButtonGroup>
						<Button type="button" secondary icon>
							<FaGlobeAsia /> everyone can reply
						</Button>
						<Button type="submit" primary>
							tweet
						</Button>
					</ButtonGroup>
				</form>
			</Card>
		</CreateTweetStyle>
	);
};

export default CreateTweet;
