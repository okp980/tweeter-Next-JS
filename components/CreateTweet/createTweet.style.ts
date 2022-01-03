import { HiColorSwatch } from "react-icons/hi";
import styled from "styled-components";

export const CreateTweetStyle = styled.section`
	.createTweet-card {
		display: grid;
		/* grid-template-areas: '' */
		padding: 1em;
		height: 161px;

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
	}
`;

export const ButtonGroup = styled.div`
	grid-area: btnGrp;
	display: flex;
	justify-content: space-between;
`;
