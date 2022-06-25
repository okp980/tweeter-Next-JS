import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface IGrid {
	reverse?: boolean;
}

export interface IColumn {
	size: "big" | "small";
}

export interface DropdownLink {
	name: string;
	url?: URL | string | undefined;
	icon: ReactElement<IconType>;
	type: string;
	method?: () => void;
}
