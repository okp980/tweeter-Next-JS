import styled from "styled-components";

const LogoStyle = styled.div`
	display: flex;
	align-items: center;

	div {
		font-size: 1.125rem;
		font-family: "Poppins";
		text-transform: capitalize;
		font-weight: 600;
		color: #333333;
		letter-spacing: -0.035em;
		margin-left: 7px;

		@media screen and (max-width: 726px) {
			display: none;
		}
	}
`;

export default LogoStyle;
