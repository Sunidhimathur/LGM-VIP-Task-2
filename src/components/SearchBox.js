import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--green bg-light-blue'
                 type="search" 
                 placeholder='search by name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
