import styled from "styled-components";

export const StyledForm = styled.form`
	background-color: #fff;
	padding: 1em;
	display: flex;
	align-items: center;
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

	label {
		color: #bdbdbd;
	}

	input {
		flex: 1;
		margin-inline: 0.5em;
		padding: 0.3em;
		font-size: 1em;
		color: #bdbdbd;

		&::placeholder {
			text-transform: capitalize;
			color: #bdbdbd;
		}
	}
`;
