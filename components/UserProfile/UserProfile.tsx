import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
	FaAngleDown,
	FaBell,
	FaPowerOff,
	FaUserAlt,
	FaUserCog,
} from "react-icons/fa";
import { DropdownLink } from "../../interface/interface";
import Dropdown from "../Dropdown/Dropdown";
import { StyledDiv } from "./userprofile.style";

const UserProfile = () => {
	const { asPath, push } = useRouter();
	const dropdownLink = useMemo(
		() => [
			{
				name: "sign-in",
				url: `/auth/signin?callbackUrl=${asPath}`,
				icon: <FaPowerOff />,
				type: "url",
			},
			{ name: "profile", url: "/profile", icon: <FaUserAlt />, type: "url" },
			{
				name: "notification",
				url: "/notification",
				icon: <FaBell />,
				type: "url",
			},
			{ name: "settings", url: "/settings", icon: <FaUserCog />, type: "url" },
			{
				name: "sign-out",
				icon: <FaPowerOff />,
				type: "button",
				method: async () => {
					await signOut({ redirect: false });
					push(`/auth/signin?callbackUrl=${asPath}`);
				},
			},
		],
		[]
	);

	const [showDropdown, setShowDropdown] = useState(false);
	const { data: session } = useSession();

	const [links, setLinks] = useState<DropdownLink[]>([]);
	const name = session?.user?.name?.split(" ");
	const firstName = name && name[0];
	const user = session?.user;

	useEffect(() => {
		setShowDropdown(false);
	}, [asPath]);

	useEffect(() => {
		if (user) {
			const loggeInLink = dropdownLink.filter(
				(link) => link.name !== "sign-in"
			);
			setLinks(loggeInLink);
		}
		if (!user) {
			const loggeInLink = dropdownLink.filter(
				(link) => link.name !== "sign-out"
			);
			setLinks(loggeInLink);
		}
		console.log(links);
	}, [user, dropdownLink]);

	return (
		<StyledDiv onClick={() => setShowDropdown((prev) => !prev)}>
			<div className="user__image">
				<Image
					src="/assets/images/profile-pic.jpg"
					layout="fill"
					alt="profile-pic"
				/>
			</div>
			<div className="user__name">{firstName}</div>
			<FaAngleDown />
			<Dropdown links={links} show={showDropdown} />
		</StyledDiv>
	);
};

export default UserProfile;
