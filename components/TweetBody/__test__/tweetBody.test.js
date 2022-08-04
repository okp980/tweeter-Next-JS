import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import TweetBody from "../TweetBody";

const props = {
	tweet:
		"'We travel, some of us forever, to seek other places, other lives, other souls.' – Anais Nin.",
	img: {
		url: "/assets/images/tweet.jpg",
		alt: "travel tweet",
	},
};

describe("<TweetBody/>", () => {
	test("should show tweet message", () => {
		render(<TweetBody {...props} />);
		expect(
			screen.getByText(
				/'We travel, some of us forever, to seek other places, other lives, other souls.' – Anais Nin./i
			)
		).toBeInTheDocument();
	});
	test("should show image with correct src", () => {
		render(<TweetBody {...props} />);
		expect(screen.getByAltText(/travel tweet/i)).toBeInTheDocument();
	});
});
