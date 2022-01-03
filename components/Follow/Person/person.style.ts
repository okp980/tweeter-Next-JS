import styled from "styled-components";

export const Container = styled.li`
	border-bottom: 1px solid #e0e0e0;

	&:last-of-type {
		border: none;
	}
`;
export const CardHead = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5em;
	.user {
		padding: 0.5em;
		h4 {
			font-family: Poppins;
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 24px;
			/* identical to box height */

			letter-spacing: -0.035em;

			color: #000000;
		}

		p {
			font-family: Noto Sans;
			font-style: normal;
			font-weight: 500;
			font-size: 10px;
			line-height: 16px;
			letter-spacing: -0.035em;

			/* Gray 3 */

			color: #828282;
		}
	}

	.cta {
		button {
			font-size: 12px;
		}
	}
`;
export const CardDesc = styled.div`
	font-family: Noto Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	/* identical to box height */

	letter-spacing: -0.035em;

	color: #828282;
`;
export const CardImage = styled.div`
	padding: 1em 0;

	overflow: hidden;
	img {
		border-radius: 8px;
	}
`;
