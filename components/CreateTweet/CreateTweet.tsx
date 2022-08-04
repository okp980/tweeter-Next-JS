import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaUserCircle, FaGlobeAsia, FaUserFriends } from "react-icons/fa";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { ImEarth } from "react-icons/im";
import {
	ButtonGroup,
	CreateTweetStyle,
	SelectModal,
} from "./createTweet.style";
const CreateTweet: React.FC = () => {
	const [tweet, setTweet] = useState("");
	const [option, setOption] = useState<
		"everyone can reply" | "people you follow can reply"
	>("everyone can reply");
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal((prevState) => !prevState);
	};

	const handleOption = (
		text: "everyone can reply" | "people you follow can reply"
	) => {
		setOption(text);
		setShowModal(false);
	};
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(tweet);
		setTweet("");
	};
	return (
		<CreateTweetStyle>
			<h3>tweet something</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="message">
					<FaUserCircle className="userIcon" />
				</label>
				<textarea
					data-testid="message"
					name="message"
					id="message"
					cols={30}
					rows={5}
					value={tweet}
					onChange={(e) => setTweet(e.target.value)}
					placeholder='what"s happening?'
				></textarea>
				<ButtonGroup>
					<Button
						type="button"
						secondary
						icon
						data-testid="toggle modal"
						onClick={handleOpenModal}
					>
						<FaGlobeAsia /> {option}
					</Button>
					<Button type="submit" primary disabled={tweet.length === 0}>
						tweet
					</Button>
				</ButtonGroup>
			</form>
			{showModal && (
				<SelectModal data-testid="who can reply">
					<div>
						<h4>Who can reply</h4>
						<p>Choose who can reply to this Tweet.</p>
						<div
							className={option === "everyone can reply" ? "active" : ""}
							data-testid="everyone"
							onClick={() => handleOption("everyone can reply")}
						>
							<ImEarth />
							<p>Everyone</p>
						</div>
						<div
							className={
								option === "people you follow can reply" ? "active" : ""
							}
							data-testid="people you follow"
							onClick={() => handleOption("people you follow can reply")}
						>
							<FaUserFriends />
							<p>People you follow</p>
						</div>
					</div>
				</SelectModal>
			)}
		</CreateTweetStyle>
	);
};

export default CreateTweet;
