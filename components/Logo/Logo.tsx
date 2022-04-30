import Image from "next/image";
import LogoStyle from "./logo.style";
import logo from "../../public/assets/images/tweeter-small.svg";

interface ILogo {}

const Logo: React.FC<ILogo> = () => {
	return (
		<LogoStyle>
			<Image
				src={logo}
				alt="tweeter-logo"
				width="40"
				height="40"
				layout="fixed"
			/>
			<div>tweeter</div>
		</LogoStyle>
	);
};

export default Logo;
