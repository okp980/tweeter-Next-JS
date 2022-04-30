import { IColumn } from "../../../interface/interface";
import { ColumnContainer } from "./column.style";

const Column: React.FC<IColumn> = ({ children, size }) => {
	return <ColumnContainer size={size}>{children}</ColumnContainer>;
};

export default Column;
