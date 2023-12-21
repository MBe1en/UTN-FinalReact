import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/search.css";

function Search({ search }) {
  const iconSearch = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  const handleSearch = (event) => {
    search(searchInput.value);
  };

  return (
    <div className="searchContainer">
      <input type="text" id="searchInput" placeholder="Buscar..."></input>
      <button id="search-button" onClick={handleSearch}>
        {iconSearch}
      </button>{" "}
    </div>
  );
}

export default Search;
