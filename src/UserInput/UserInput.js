import React from 'react';

const inputStyle = {
    border : '2px solid blue',
    textAlign : 'center'
}


const inputFile = (props) => {
    return(
        <div className = "input">
            <input type ="text" 
            style ={inputStyle}
            onChange = {props.changed} 
            value = {props.name} />
        </div>
    )
};

export default inputFile;