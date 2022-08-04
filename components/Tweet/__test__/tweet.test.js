import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import Tweet from "../Tweet";

const tweet = {
	_id: "Lorem ipsum dolor sit amet consectetur.",
	createdBy: {
		name: "Lorem ipsum dolor sit amet consectetur.",
		image: "/assets/images/tweet.jpg",
	},
	desc: "Lorem ipsum dolor sit amet consectetur.",
	createdAt: "12 aug 2021 at 12:00pm",
	comments: [
		{
			createdAt: "Lorem ipsum dolor sit amet consectetur.",
			desc: "Lorem ipsum dolor sit amet consectetur.",
			user: {
				name: "Lorem ipsum dolor sit amet consectetur.",
				image: "/assets/images/tweet.jpg",
			},
			likes: [{}, {}],
		},
		{
			createdAt: "Lorem ipsum dolor sit amet consectetur.",
			desc: "Lorem ipsum dolor sit amet consectetur.",
			user: {
				name: "Lorem ipsum dolor sit amet consectetur.",
				image: "/assets/images/tweet.jpg",
			},
			likes: [{}, {}],
		},
		{
			createdAt: "Lorem ipsum dolor sit amet consectetur.",
			desc: "Lorem ipsum dolor sit amet consectetur.",
			user: {
				name: "Lorem ipsum dolor sit amet consectetur.",
				image: "/assets/images/tweet.jpg",
			},
			likes: [{}, {}],
		},
	],
	likes: [{}, {}],
	retweet: [{}],
	saves: [{}, {}, {}],
};

describe("<Tweet/>", () => {
	test("should show comments when the comment button is clicked", () => {
		render(
			<ThemeProvider theme={theme}>
				<Tweet tweet={tweet} />
			</ThemeProvider>
		);
		fireEvent.click(
			screen.getByRole("button", {
				name: /comment/i,
			})
		);
		expect(screen.getByTestId(/comment-section/i)).toBeInTheDocument();
	});
});
