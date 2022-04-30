import styled from "styled-components";
import { IGrid } from "../../interface/interface";

export const GridContainer = styled.div<IGrid>`
	display: grid;
	grid-template-columns: ${({ reverse }) =>
		reverse ? "300px 1fr" : "1fr 300px"};
	grid-gap: 1em;
	/* grid-template-areas: ${({ reverse }) =>
		reverse ? "smallCol bigCol" : "bigCol smallCol"}; */

	@media screen and (max-width: 726px) {
		grid-template-columns: 100%;
		grid-template-areas: "smallCol" "bigCol";
	}
`;
