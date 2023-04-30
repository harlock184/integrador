import SearchBar from "../SearchBar/SearchBar";
import React from 'react';



const Nav = ({onSearch})=>{
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )

}
export default Nav;