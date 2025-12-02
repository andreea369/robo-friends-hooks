import React from "react";

const SearchBox = ({searchChange}) => {
        return(
            <div>
             <input type="search" placeholder="search robots"  onChange={searchChange}
              className="p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
            </div>
        );
}

export default SearchBox;