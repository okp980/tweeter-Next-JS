import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import Tweets from "../Tweets";

const tweets = [
	{
		_id: "Lorem ipsum dolor sit amet consectetur.",
		createdBy: {
			name: "Lorem ipsum dolor sit amet consectetur.",
			image: "/assets/images/tweet.jpg",
		},
		desc: "Lorem ipsum dolor sit amet consectetur.",
		createdAt: "12 aug 2021 at 12:00pm",
		comments: [{}, {}, {}, {}],
		likes: [{}, {}],
		retweet: [{}],
		saves: [{}, {}, {}],
	},
	{
		_id: "Lorem ipsum dolor sit amet consectetur.",
		createdBy: {
			name: "Lorem ipsum dolor sit amet consectetur.",
			image: "/assets/images/tweet.jpg",
		},
		desc: "Lorem ipsum dolor sit amet consectetur.",
		createdAt: "12 aug 2021 at 12:00pm",
		comments: [{}, {}, {}, {}],
		likes: [{}, {}],
		retweet: [{}],
		saves: [{}, {}, {}],
	},
];

describe("<Tweets/>", () => {
	test("should render 2 tweets", () => {
		render(
			<ThemeProvider theme={theme}>
				<Tweets tweets={tweets} />
			</ThemeProvider>
		);
		expect(screen.getAllByTestId(/tweet-card/i).length).toBe(2);
	});
});
