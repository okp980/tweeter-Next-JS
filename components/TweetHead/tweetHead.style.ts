import styled from "styled-components";

export const TweetHeadStyle = styled.div`
	display: flex;

	div {
		margin-left: 1em;
		h4 {
			text-transform: capitalize;
			font-family: Poppins;
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			letter-spacing: -0.035em;
			color: #000000;
		}

		h6 {
			font-family: Noto Sans;
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
			letter-spacing: -0.035em;

			/* Gray 4 */

			color: #bdbdbd;
		}
	}
`;
