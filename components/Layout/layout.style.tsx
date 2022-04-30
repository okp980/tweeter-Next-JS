import styled from "styled-components";

export const HeaderStyle = styled.header`
	background-color: #ffffff;
	position: sticky;
	top: 0;
	z-index: 999;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
		max-width: 1800px;
		margin: 0 auto;

		@media screen and (min-width: 726px) {
			justify-content: space-around;
			padding: 0 1em;
			height: 69px;
		}
	}
`;

export const MainContainer = styled.main`
	padding: 2em 1.25em;
	max-width: 900px;
	margin: 0 auto;
`;
