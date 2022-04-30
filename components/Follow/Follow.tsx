import { Container } from "./follow.style";
import Person from "./Person/Person";

const Follow: React.FC = () => {
	return (
		<Container>
			<h5>who to follow</h5>

			<ul className="follow-menu">
				<Person />
				<Person />
			</ul>
		</Container>
	);
};

export default Follow;
