import styled from "styled-components";
import { CardStyle } from "../Card/card.style";

export const Container = styled(CardStyle)`
	padding: 0.5em 0;
	margin-top: 0.5em;

	@media screen and (max-width: 726px) {
		background-color: unset;
		box-shadow: unset;
	}
	h5 {
		font-size: 12px;

		color: #4f4f4f;
		text-transform: capitalize;
		padding: 0.5em 1em;

		@media screen and (min-width: 726px) {
			border-bottom: 1px solid #e0e0e0;
		}
	}

	.follow-menu {
		display: flex;
		overflow-x: scroll;
		padding: 1em;

		&::-webkit-scrollbar {
			display: none;
		}

		@media screen and (min-width: 726px) {
			display: block;
			overflow-x: hidden;
		}
	}
`;
