import React from 'react';
import './UserOutput.css';

const outputFile = (props) => {
    return (
    <div className = "output">
        <p> Hi!!! My name is {props.name}</p>
        <p> These are the characters from a TV Series named Game of Thrones!!! Shortly called GOT </p>
    </div>  
)
};

export default outputFile;