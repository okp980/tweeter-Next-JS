import styled from "styled-components";

export const CreateCommentStyle = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5em 0;
	border-bottom: 1px solid #f2f2f2;

	form {
		margin-left: 1em;
		width: 100%;

		textarea {
			width: 100%;
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
				font-size: 14px;
				line-height: 19px;
				/* identical to box height */

				letter-spacing: -0.035em;

				color: #bdbdbd;
			}
		}
	}
`;
