import styled from "styled-components";

export const Item = styled.li`
	padding: 0.5em;
	@media screen and (max-width: 726px) {
		padding: 1em;
		border: 1px solid #e0e0e0;
		border-radius: 2em;
		background-color: #fff;

		&:not(:last-of-type) {
			margin-right: 1em;
		}
	}
	h4 {
		font-family: Noto Sans;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 22px;
		/* identical to box height */

		letter-spacing: -0.035em;

		/* Gray 1 */

		color: #333333;
	}

	p {
		font-family: Noto Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: -0.035em;
		margin-top: 0.5em;

		@media screen and (max-width: 726px) {
			display: none;
		}

		/* Gray 3 */

		color: #828282;
	}
`;
