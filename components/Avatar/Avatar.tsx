import { FaUserCircle } from "react-icons/fa";
import classes from "./avatar.module.css";

const Avatar: React.FC = () => {
	return <FaUserCircle className={classes.userIcon} />;
};

export default Avatar;
