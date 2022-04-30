import styled from "styled-components";

export const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	.user__image {
		height: 36.6px;
		width: 32px;
		overflow: hidden;
		border-radius: 0.5em;
		position: relative;
	}

	.user__name {
		margin-inline: 1em;
		text-transform: capitalize;
		color: #333333;
		font-weight: 700;
		@media screen and (max-width: 815px) {
			display: none;
		}
	}

	svg {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #333333;
		@media screen and (max-width: 815px) {
			display: none;
		}
	}
`;
