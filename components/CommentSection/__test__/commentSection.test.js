import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CommentSection from "../CommentSection";
import theme from "../../../styles/theme";

describe("<CommentSection/>", () => {
	test("should not render the comments by default", () => {
		render(
			<ThemeProvider theme={theme}>
				<CommentSection />
			</ThemeProvider>
		);
		expect(screen.queryByTestId(/comment-section/i)).not.toBeInTheDocument();
	});
});
