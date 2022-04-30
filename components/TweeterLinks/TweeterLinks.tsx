import { StyledMenu } from "./tweeterLinks.style";

interface ILinks {
	links: { name: string; active?: boolean }[];
}

const TweeterLinks: React.FC<ILinks> = ({ links }) => {
	return (
		<StyledMenu>
			{links.map((link, index) => (
				<li key={index} className={link?.active ? "active" : ""}>
					{link.name}
				</li>
			))}
		</StyledMenu>
	);
};

export default TweeterLinks;
