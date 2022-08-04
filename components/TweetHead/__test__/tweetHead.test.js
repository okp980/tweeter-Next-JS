import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import TweetHead from "../TweetHead";

describe("<TweetHead/>", () => {
	test("should render a heading and date from props", () => {
		render(<TweetHead title="john doe" date="24 August at 20:43" />);
		expect(
			screen.getByRole("heading", {
				name: /john doe/i,
			})
		).toBeInTheDocument();
		expect(screen.getByText(/24 August at 20:43/i)).toBeInTheDocument();
	});
});
