import Trend from "./Trend/Trend";
import { TrendsContainer } from "./trends.style";

const Trends: React.FC = () => {
	return (
		<TrendsContainer>
			<h5>trends for you</h5>

			<ul>
				<Trend />
				<Trend />
				<Trend />
				<Trend />
				<Trend />
				<Trend />
			</ul>
		</TrendsContainer>
	);
};

export default Trends;
