import styled, { css } from "styled-components";

interface ButtonInterface {
	primary?: boolean | undefined;
	secondary?: boolean | undefined;
	icon?: boolean | undefined;
	socialBtn?: boolean | undefined;
	type?: string | undefined;
}

export const ButtonStyle = styled.button<ButtonInterface>`
	text-transform: capitalize;
	padding: 0.5em 1.5em;
	border: none;
	outline: none;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	${({ primary }) =>
		primary &&
		css`
			background-color: ${({ theme: { colors } }) => colors.blue};
			color: #ffffff;

			&:hover {
				background-color: ${({ theme: { colors } }) => colors.darkBlue};
			}
		`}

	${({ secondary }) =>
		secondary &&
		css`
			background: none;
			color: ${({ theme: { colors } }) => colors.blue};

			&:hover {
				color: ${({ theme: { colors } }) => colors.darkBlue};
			}
		`}

		${({ socialBtn }) =>
		socialBtn &&
		css`
			background: none;
			color: inherit;
			&:hover {
				background: #f2f2f2;
			}
		`}

	${({ icon }) =>
		icon &&
		css`
			display: flex;
			flex-direction: row;
			align-items: center;
			& svg {
				margin-right: 0.5em;
				color: inherit;
			}
		`}
`;
