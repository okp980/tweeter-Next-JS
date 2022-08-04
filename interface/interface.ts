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

export interface IUser {
	image: string;
	name: string;
	_id: string;
}

export interface IComment {
	createdAt: string;
	desc: string;
	likes: [string];
	user: IUser;
}

export interface ITweet {
	_id: string;
	createdBy: {
		name: string;
		image: string;
	};
	desc: string;
	likes: [string];
	comments: [IComment];
	saves: [string];
	retweet: [string];
	createdAt: string;
}
