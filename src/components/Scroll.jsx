import React from "react";


const Scroll =(props) =>{
    return(
        <div style={{overflowY: 'scroll', border: '3px solid  rgba(7,27,82,1)', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
