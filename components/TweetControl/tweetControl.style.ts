import styled from "styled-components";

export const TweetControlStyle = styled.div`
	.info {
		display: flex;
		justify-content: flex-end;

		ul {
			display: flex;

			li {
				font-family: Noto Sans;
				font-style: normal;
				font-weight: 500;
				font-size: 12px;
				line-height: 16px;
				letter-spacing: -0.035em;

				/* Gray 4 */

				color: #bdbdbd;
				padding: 0.5em 0;
				margin-left: 1em;
				text-transform: capitalize;
			}
		}
	}

	.controls {
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
		padding: 0.7em 0;
		display: flex;
		justify-content: space-around;

		li {
			font-family: Noto Sans;
			font-style: normal;
			font-weight: 500;

			line-height: 19px;
			/* identical to box height */

			letter-spacing: -0.035em;

			button {
				font-size: 12px;
			}
		}
	}
`;
