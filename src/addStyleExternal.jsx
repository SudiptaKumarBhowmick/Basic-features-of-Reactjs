import React from 'react';
import ReactDOM from 'react-dom';

let classforh1 = 'h1tag';

function AddStyleExternal(props) {
    return <h1 className={classforh1}>{props.msg}</h1>;
}

const AddStyleExternalComp = <AddStyleExternal msg="Hello, from React App using external css!"/>;
export default AddStyleExternalComp;