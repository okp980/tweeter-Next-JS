import { FaUserPlus } from "react-icons/fa";
import Avatar from "../../Avatar/Avatar";
import Button from "../../Button/Button";
import { CardDesc, CardHead, CardImage, Container } from "./person.style";
import Image from "next/image";
const Person = () => {
	return (
		<Container>
			<CardHead>
				<Avatar image="" />
				<div className="user">
					<h4>Mikael Stanley</h4>
					<p>230k followers</p>
				</div>
				<div className="cta">
					<Button icon primary>
						<FaUserPlus />
						follow
					</Button>
				</div>
			</CardHead>
			<CardDesc>
				<p>Photographer & Filmmaker based in Copenhagen, Denmark</p>
			</CardDesc>
			<CardImage>
				<Image
					src="/assets/images/follow-cover.jpg"
					alt="cover photo"
					width={265}
					height={75}
				/>
			</CardImage>
		</Container>
	);
};

export default Person;
