import React from "react";

const SearchBar = ({ keyword, onSubmit, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                className="search"
                onChange={onChange}
                type="text"
                value={keyword}
                placeholder="Buscar gif..."
            />
        </form>
    );
};

export default SearchBar;
