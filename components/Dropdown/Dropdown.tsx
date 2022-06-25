import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { FaBell, FaPowerOff, FaUserAlt, FaUserCog } from "react-icons/fa";
import { URL } from "url";
import { DropdownLink } from "../../interface/interface";
import StyledMenu from "./dropdown.style";

type Props = {
	links: DropdownLink[];
	show: boolean;
};

// links
// profile, notification, signIn, signOut, settings

function Dropdown({ links, show }: Props) {
	return (
		<StyledMenu show={show}>
			{links.map((link, index) => {
				return link.type === "url" ? (
					<li className="links" key={index}>
						<Link href={`${link.url}`}>
							<a>
								<span className="name">{link.name}</span>
								<span className="icon">{link.icon}</span>
							</a>
						</Link>
					</li>
				) : link.type === "button" ? (
					<li className="links button" key={index} onClick={link.method}>
						<span className="name">{link.name}</span>
						<span className="icon">{link.icon}</span>
					</li>
				) : null;
			})}
		</StyledMenu>
	);
}

export default Dropdown;
