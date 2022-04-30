import { FaSearch } from "react-icons/fa";
import { Button } from "..";
import { StyledForm } from "./search.style";

const Search = () => {
	return (
		<StyledForm>
			<label htmlFor="search">
				<FaSearch />
			</label>
			<input type="search" placeholder="search" />
			<Button primary>search</Button>
		</StyledForm>
	);
};

export default Search;
