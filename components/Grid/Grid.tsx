import { IGrid } from "../../interface/interface";
import { GridContainer } from "./grid.style";

const Grid: React.FC<IGrid> = ({ reverse, children }) => {
	return <GridContainer reverse={reverse}>{children}</GridContainer>;
};

export default Grid;
