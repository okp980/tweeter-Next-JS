import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import classes from "./avatar.module.css";

interface IProps {
	image: string;
}
const Avatar: React.FC<IProps> = ({ image }) => {
	return image ? (
		<Image
			src={image}
			alt="profile pic"
			className={classes.userIcon}
			width={40}
			height={40}
		/>
	) : (
		<FaUserCircle className={classes.userIcon} />
	);
};

export default Avatar;
