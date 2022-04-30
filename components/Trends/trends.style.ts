import styled from "styled-components";
import { CardStyle } from "../Card/card.style";

export const TrendsContainer = styled(CardStyle)`
	width: 100%;
	padding: 0.5em 0;
	overflow: hidden;
	@media screen and (max-width: 726px) {
		background-color: unset;
		box-shadow: unset;
	}

	h5 {
		font-size: 12px;
		border-bottom: 1px solid #e0e0e0;
		line-height: 18px;
		color: #4f4f4f;
		text-transform: capitalize;
		padding: 0.5em 1em;

		@media screen and (max-width: 726px) {
			border: none;
		}
	}

	.trend-menu {
		overflow: hidden;
		overflow-x: scroll;
		padding-block: 1em;
		display: flex;
		padding-inline: 0.5em;

		&::-webkit-scrollbar {
			display: none;
		}

		@media screen and (min-width: 726px) {
			display: block;
			overflow-x: hidden;
			padding: 0;
		}
	}
`;
