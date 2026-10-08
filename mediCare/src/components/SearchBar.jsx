function SearchBar(props){
    const {value,onChange}=props;
    return (
        <input
          type="text"
          placeholder="Search by Name"
          className=" border border-black m-2"
          value={value}
          onChange={onChange}
        />

    );
}

export default SearchBar;


