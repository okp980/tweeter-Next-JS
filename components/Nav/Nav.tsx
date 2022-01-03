import Link from "next/link";
import { AiFillHome, AiFillStop } from "react-icons/ai";
import { HiBookmark } from "react-icons/hi";
import NavStyled from "./nav.style";
import { useRouter } from "next/router";

const Nav = () => {
	const { asPath } = useRouter();

	return (
		<NavStyled>
			<Link href="/">
				<a className={asPath === "/" ? "active" : ""}>
					<AiFillHome className="nav-icon" />

					<span>home</span>
				</a>
			</Link>
			<Link href="/explore">
				<a className={asPath === "/explore" ? "active" : ""}>
					<AiFillStop className="nav-icon" />
					<span>explore</span>
				</a>
			</Link>
			<Link href="/bookmarks">
				<a className={asPath === "/bookmarks" ? "active" : ""}>
					<HiBookmark className="nav-icon" />
					<span>bookmarks</span>
				</a>
			</Link>
		</NavStyled>
	);
};

export default Nav;
