import styled from "styled-components";

export const StyledMenu = styled.ul`
	border-radius: 0.75rem;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	background: #ffffff;
	overflow: hidden;

	li {
		padding: 1em 1.5em;
		text-transform: capitalize;
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 21px;
		color: #828282;

		letter-spacing: -0.035em;

		&.active {
			color: #2f80ed;
			border-left: 3px solid #2f80ed;
		}
	}
`;
