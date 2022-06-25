import { ButtonStyle } from "./button.style";
// interface BtnInterface {
// 	primary?: boolean | undefined;
// 	secondary?: boolean | undefined;
// 	icon?: boolean | undefined;
// 	socialBtn?: boolean | undefined;
// 	type?: string | undefined;
// }

const Button = ({ children, ...props }) => {

	return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
