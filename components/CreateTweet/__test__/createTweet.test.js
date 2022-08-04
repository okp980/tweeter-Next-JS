import "@testing-library/jest-dom";
import { screen, render, fireEvent, getByTestId } from "@testing-library/react";
import CreateTweet from "../CreateTweet";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";

const tweet = (props) =>
	render(
		<ThemeProvider theme={theme}>
			<CreateTweet {...props} />
		</ThemeProvider>
	);

describe("CreateTweet", () => {
	tweet();
	test("should render a disabled button when message field is empty", () => {
		fireEvent.change(message, { target: { value: "" } });
		expect(
			screen.getByRole("button", {
				name: /tweet/i,
			})
		).toBeDisabled();
	});
	test("should not render who-can-reply modal by default", () => {
		tweet();
		expect(screen.queryByTestId(/who can reply/i)).toBeNull();
	});

	test("should be able to toggle the who-can-reply modal with button ", () => {
		tweet();
		fireEvent.click(screen.getByTestId(/toggle modal/i));
		expect(screen.queryByTestId(/who can reply/i)).toBeInTheDocument();
		fireEvent.click(screen.getByTestId(/toggle modal/i));
		expect(screen.queryByTestId(/who can reply/i)).toBeNull();
	});

	test("should be able to change who can reply to everyone", () => {
		tweet();
		fireEvent.click(screen.getByTestId(/toggle modal/i));
		fireEvent.click(screen.getByTestId(/everyone/i));
		expect(screen.getByText(/everyone can reply/i));
	});

	test("should be able to change who can reply to people you follow", () => {
		tweet();
		fireEvent.click(screen.getByTestId(/toggle modal/i));
		fireEvent.click(screen.getByTestId(/people you follow/i));
		expect(screen.getByText(/people you follow can reply/i));
	});

	test("should clear the tweet message when submit button is clicked", () => {
		tweet();
		const message = screen.getByTestId("message");
		fireEvent.change(message, { target: { value: "wella so better" } });
		expect(message.value).toBe("wella so better");
		fireEvent.click(
			screen.getByRole("button", {
				name: /tweet/i,
			})
		);
		expect(message.value).toBe("");
	});
});
