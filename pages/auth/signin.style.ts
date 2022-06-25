import styled from "styled-components";

const StyledSection = styled.section`
	.hero {
		width: 100%;
		height: 400px;
		position: relative;
		@media (min-width: 900px) {
			flex: 1;
			height: 100vh;
		}
	}
	.image {
		position: relative;
		width: 100%;
		height: 100%;

		&::after {
			position: absolute;
			content: "";
			inset: 0;
			background: rgb(2, 0, 36);
			background: linear-gradient(
				351deg,
				rgba(2, 0, 36, 1) 0%,
				rgba(97, 97, 227, 0.6834443249956232) 35%,
				rgba(0, 212, 255, 1) 100%
			);
		}
	}

	.info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		color: #fff;

		.container {
			padding-inline: 10px;
			@media (min-width: 900px) {
				padding-inline: 10em;
			}

			h1 {
				text-transform: capitalize;
				font-size: 1.8rem;
				margin-bottom: 0.5em;
				@media (min-width: 900px) {
					font-size: 2.8rem;
				}
			}

			p {
				line-height: 1.5;
				@media (min-width: 900px) {
					font-size: 1.2rem;
				}
			}
		}
	}

	.cta {
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media (min-width: 900px) {
			flex: 1;
			height: 100vh;
		}
	}

	h1 {
		margin-bottom: 30px;
		font-size: 3rem;
		@media (min-width: 900px) {
			font-size: 5rem;
		}
	}

	p {
		margin-bottom: 10px;
		@media (min-width: 900px) {
			font-size: 1.2rem;
		}
	}

	button {
		padding: 1em 2em;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background-color: #db4437;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		width: 300px;
		border-radius: 3px;
		cursor: pointer;

		svg {
			font-size: 1.6rem;
			color: #fff;
		}

		span {
			margin-left: 1em;
			color: #fff;
			font-weight: 600;
		}
	}

	@media (min-width: 900px) {
		display: flex;
		flex-direction: row-reverse;
	}
`;

export default StyledSection;
