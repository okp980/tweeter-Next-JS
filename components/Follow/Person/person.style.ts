import styled from "styled-components";

export const Container = styled.li`
	flex-direction: column;
	border: 1px solid #e0e0e0;
	margin-right: 1em;
	border-radius: 8px;
	&:last-of-type {
		margin-right: unset;
	}

	@media screen and (min-width: 726px) {
		border: none;
		border-bottom: 1px solid #e0e0e0;
		margin-right: unset;
		border-radius: unset;
		&:last-of-type {
			border: none;
		}
	}
`;
export const CardHead = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5em;

	@media screen and (max-width: 726px) {
		flex-direction: column;
		background-color: #fff;
		padding: 1em;
		border-radius: 8px;
	}
	.user {
		padding: 0.5em;
		h4 {
			font-size: 12px;
			line-height: 24px;
			/* identical to box height */

			color: #000000;
		}

		p {
			font-size: 10px;
			line-height: 16px;

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
	display: none;
	@media screen and (min-width: 726px) {
		display: block;
		font-family: Noto Sans;
		font-style: normal;
		font-size: 14px;
		line-height: 19px;
		/* identical to box height */

		letter-spacing: -0.035em;

		color: #828282;
	}
`;
export const CardImage = styled.div`
	display: none;
	@media screen and (min-width: 726px) {
		display: block;
		padding: 1em 0;

		overflow: hidden;
		img {
			border-radius: 8px;
		}
	}
`;
