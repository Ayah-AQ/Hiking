import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
 
  return (
    <SearchBarStyle onChange={(event) => props.setQuery(event.target.value)}
     placeholder="Write Distination or country" />
  );
  
};

export default SearchBar;
