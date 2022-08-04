import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";
describe("Button", () => {
	test("should render its children as its title", () => {
		render(<Button>well</Button>);
		const button = screen.getByRole("button", {
			name: /well/i,
		});
		expect(button).toBeInTheDocument();
	});
});
