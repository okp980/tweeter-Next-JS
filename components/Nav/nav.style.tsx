import styled from "styled-components";

const NavStyled = styled.nav`
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	justify-content: space-around;
	align-items: center;
	background-color: #ffffff;
	padding: 1.5rem 0;

	@media screen and (min-width: 600px) {
		position: static;
		padding: 0;
		height: 100%;
	}

	a {
		text-decoration: none;
		position: relative;
		padding: 0.3rem 1.5rem;
		color: ${({ theme: { colors } }) => colors.gray3};

		@media screen and (min-width: 600px) {
			height: 100%;
			display: flex;
			align-items: center;
		}
		&.active,
		:active,
		:hover {
			background-color: #f2f2f2;
			border-radius: 0.5rem;

			@media screen and (min-width: 600px) {
				color: ${({ theme: { colors } }) => colors.blue};
				background-color: unset;
				border-radius: unset;

				::after {
					content: "";
					background-color: ${({ theme: { colors } }) => colors.blue};
					border-radius: 8px 8px 0px 0px;
					position: absolute;
					left: 0;
					bottom: 4px;
					right: 0;
					height: 3px;
					/* width: 50%; */
				}
			}
		}

		.nav-icon {
			color: #828282;
			font-size: 20px;
			stroke: currentcolor;
			fill: #828282;
			stroke-width: 0;
			height: 1em;
			width: 1em;

			@media screen and (min-width: 600px) {
				display: none;
			}
		}

		span {
			display: none;
			text-transform: capitalize;
			@media screen and (min-width: 600px) {
				display: inline-block;
			}
		}
	}
`;

export default NavStyled;
