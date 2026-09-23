import React from "react";

function CategoryFilter ({ category, setCategory, }) {

    return (
        <select
        value={category}
        onChange={(e) => setCategory (e.target.value)}
        className="category-filter"
        >

            <option value ="All" > All Categories </option>
            <option value ="Tech" > Tech </option>
            <option value ="Workshop" > Workshop </option>
            <option value ="Sports" > Sports </option>
            <option value ="Cultural" > Cultural </option>

         </select>   
    );
}

export default CategoryFilter;