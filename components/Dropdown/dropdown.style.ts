import styled, { css } from "styled-components";
interface IProp {
	show: boolean;
}

const StyledMenu = styled.ul<IProp>`
	position: absolute;
	top: 60px;
	right: 0;
	width: 200px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	overflow: hidden;
	transition: transform 0.3s ease-in-out;

	.links {
		transition: background-color 0.3s ease-in-out;
		&:hover {
			background-color: #e0e0e0;
		}

		&.button {
			display: flex;
			height: 50px;
			align-items: center;
			justify-content: space-between;
			padding-inline: 1em;
			color: #4f4f4f;
			text-transform: capitalize;
		}
		a {
			text-decoration: none;
			text-transform: capitalize;
			padding-inline: 1em;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #4f4f4f;

			svg {
				color: #4f4f4f;
			}

			.name {
				display: block;
				/* flex: 1; */
			}

			.icon {
				display: block;

				/* width: 10px; */
			}
		}
	}

	${(props) =>
		props.show
			? css`
					visibility: visible;
					transform: translateX(0);
			  `
			: css`
					visibility: hidden;
					transform: translateY(-10px);
			  `}
`;

export default StyledMenu;
