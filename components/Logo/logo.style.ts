import styled from "styled-components";

const LogoStyle = styled.div`
	width: 150px;
	height: 29px;
	margin-left: 5px;
	display: flex;
	align-items: center;

	span {
		font-size: 18px;
		font-family: "Poppins";
		text-transform: capitalize;
		font-weight: 600;
		margin-left: 10px;

		@media screen and (max-width: 600px) {
			display: none;
		}
	}
`;

export default LogoStyle;
