import Image from "next/image";
import LogoStyle from "./logo.style";

interface ILogo {}

const Logo: React.FC<ILogo> = () => {
	return (
		<LogoStyle>
			<Image
				src="/assets/images/tweeter-small.svg"
				alt="logo"
				width="40"
				height="32"
			/>
			<span>tweeter</span>
		</LogoStyle>
	);
};

export default Logo;
