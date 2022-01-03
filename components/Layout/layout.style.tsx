import styled from "styled-components";

export const HeaderStyle = styled.header`
	background-color: #ffffff;
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.625rem 1.25rem;
		max-width: 2200px;
		margin: 0 auto;

		@media screen and (min-width: 720px) {
			padding: 0;
			height: 69px;
		}
	}
`;

export const MainContainer = styled.main`
	.well {
		background-color: red;
	}
	padding: 2em 1.25em;
	max-width: 900px;
	margin: 0 auto;
`;
