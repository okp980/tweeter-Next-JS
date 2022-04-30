import styled, { css } from "styled-components";
import { IColumn } from "../../../interface/interface";

export const ColumnContainer = styled.div<IColumn>`
	grid-area: ${({ size }) => (size === "big" ? "bigCol" : "smallCol")};
	@media screen and (min-width: 726px) {
		grid-area: unset;
	}
`;
