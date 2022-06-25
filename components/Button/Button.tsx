import { ButtonStyle } from "./button.style";
interface BtnInterface {
	primary?: boolean;
	secondary?: boolean;
	icon?: boolean;
	socialBtn?: boolean;
	type?: string;
}

const Button: React.FC<BtnInterface> = ({ children, ...props }) => {
	// @ts-ignore
	return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
