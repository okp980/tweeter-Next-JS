import { GridContainer } from "./grid.style";

interface GridInterface {}

const Grid: React.FC<GridInterface> = ({ children }) => {
	return <GridContainer>{children}</GridContainer>;
};

export default Grid;
