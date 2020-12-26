import React from 'react';
import ReactDOM from 'react-dom';

const h1Style = {
    color: 'red'
};

function CssStyle(props){
    return <h1 style={h1Style}>{props.msg}</h1>
}

const CssStyleComp = <CssStyle msg="Hello from React App!"/>;
export default CssStyleComp;