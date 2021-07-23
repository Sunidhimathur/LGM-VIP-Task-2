import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{height: '850px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;
