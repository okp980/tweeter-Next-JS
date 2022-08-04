import { CardStyle } from "./card.style";

interface CardInterface {
	className?: string;
}

const Card: React.FC<CardInterface> = ({ children, ...props }) => {
	return <CardStyle {...props}>{children}</CardStyle>;
};

export default Card;
