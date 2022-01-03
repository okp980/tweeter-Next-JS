import Head from "next/head";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import UserProfile from "../UserProfile/UserProfile";
import { HeaderStyle, MainContainer } from "./layout.style";

interface Iprops {}

const Layout: React.FC<Iprops> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Tweeter</title>
				<meta name="description" content="new Social App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderStyle>
				<div>
					<Logo />
					<Nav />
					<UserProfile />
				</div>
			</HeaderStyle>

			<MainContainer>
				<p className="well">well</p>
				{children}
			</MainContainer>
		</>
	);
};

export default Layout;
