import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Comments from "../Comments";
import theme from "../../../styles/theme";

const comments = [
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
];

describe("<Comments/>", () => {
	test("should render 3 comments in the comments section", () => {
		render(
			<ThemeProvider theme={theme}>
				<Comments comments={comments} />
			</ThemeProvider>
		);

		expect(screen.getAllByTestId(/single-comment/i).length).toBe(3);
	});
	test("should show no comments if there are no comments", () => {
		render(
			<ThemeProvider theme={theme}>
				<Comments comments={[]} />
			</ThemeProvider>
		);
		expect(screen.getByText(/no comment/i)).toBeInTheDocument();
	});
});
