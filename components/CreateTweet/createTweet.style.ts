import { HiColorSwatch } from "react-icons/hi";
import styled from "styled-components";
import Card from "../Card/Card";

export const CreateTweetStyle = styled(Card)`
	position: relative;

	display: grid;
	padding: 1em;

	h3 {
		color: ${({ theme: { colors } }) => colors.gray2};
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: -0.035em;
		text-transform: capitalize;

		border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray5};
	}

	form {
		padding: 0.5em 0;
		display: grid;
		grid-template-columns: 40px 1fr;
		grid-gap: 0.3em;
		grid-template-areas:
			"displayPic message"
			". btnGrp";

		.userIcon {
			grid-area: displayPic;
			width: 100%;
			height: 40px;
		}

		textarea {
			grid-area: message;
			resize: none;
			border: none;
			outline: none;
			padding: 0.3em;
			color: ${({ theme: { colors } }) => colors.gray3};
			font-size: 1rem;
			border-radius: 4px;
			transition: all 0.3s ease-in-out;

			&:focus {
				background-color: #fafafa;
			}

			&::placeholder {
				font-family: Noto Sans;
				font-style: normal;
				font-weight: 500;
				font-size: 16px;
				line-height: 22px;
				/* identical to box height */

				letter-spacing: -0.035em;
			}
		}
	}
`;

export const ButtonGroup = styled.div`
	grid-area: btnGrp;
	display: flex;
	justify-content: space-between;
`;

export const SelectModal = styled(Card)`
	height: 200px;
	width: 300px;
	position: absolute;
	bottom: -105%;
	z-index: 1;
	box-sizing: border-box;
	padding: 20px;

	h4 {
		font-size: 12px;
		line-height: 18px;
		margin-bottom: 5px;
		color: ${({ theme: { colors } }) => colors.gray2};
	}
	p {
		font-size: 12px;
		line-height: 16.34px;
		margin-bottom: 5px;
		color: ${({ theme: { colors } }) => colors.gray3};
	}

	div {
		.active {
			background-color: #f2f2f2;
		}
	}

	div > div {
		display: flex;
		padding: 10px;
		cursor: pointer;
		border-radius: 8px;

		p {
			padding-left: 10px;
		}
	}
`;
