import "./search-box.style.css";

const SearchBox = ({ onChangeHandler, className, placeholder }) => (
  <input
    type="search"
    onChange={onChangeHandler}
    className={className}
    placeholder={placeholder}
  />
);

export default SearchBox;
