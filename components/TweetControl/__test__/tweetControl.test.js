import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import TweetControl from "../TweetControl";

const props = {
	comments: [{}, {}, {}, {}],
	likes: [{}, {}],
	retweet: [{}],
	saves: [{}, {}, {}],
};

describe("<TweetControl/>", () => {
	describe("comments length", () => {
		test("should show 4 comments", () => {
			render(<TweetControl controls={props} />);
			expect(screen.getByText(/4 comments/i)).toBeInTheDocument();
		});
		test("should show 1 comment", () => {
			const comments = [{}];
			render(<TweetControl controls={{ ...props, comments }} />);
			expect(screen.getByText(/1 comment/i)).toBeInTheDocument();
		});
	});
	describe("likes length", () => {
		test("should show 2 likes", () => {
			render(<TweetControl controls={props} />);
			expect(screen.getByText(/2 likes/i)).toBeInTheDocument();
		});
		test("should show 1 like", () => {
			const likes = [{}];
			render(<TweetControl controls={{ ...props, likes }} />);
			expect(screen.getByText(/1 like/i)).toBeInTheDocument();
		});
	});
	describe("retweet length", () => {
		test("should show 1 retweet", () => {
			render(<TweetControl controls={props} />);
			expect(screen.getByText(/1 retweet/i)).toBeInTheDocument();
		});
		test("should show 2 retweets", () => {
			const retweet = [{}, {}];
			render(<TweetControl controls={{ ...props, retweet }} />);
			expect(screen.getByText(/2 retweets/i)).toBeInTheDocument();
		});
	});
	describe("saves length", () => {
		test("should show 3 saves", () => {
			render(<TweetControl controls={props} />);
			expect(screen.getByText(/3 saves/i)).toBeInTheDocument();
		});
		test("should show 1 save", () => {
			const saves = [{}];
			render(<TweetControl controls={{ ...props, saves }} />);
			expect(screen.getByText(/1 save/i)).toBeInTheDocument();
		});
	});
});
