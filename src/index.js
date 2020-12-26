import React from 'react';
import ReactDOM from 'react-dom';
import Hello_comp, {HelloClass} from './test.jsx';
import COMP_LIFE from './componentLifeCycle.jsx';
import Form from './form';
import EventTest from './events';
import CssStyleComp from './addstyle';
import AddStyleExternalComp from './addStyleExternal';

ReactDOM.render(
    Hello_comp,
    document.getElementById('function')
);

ReactDOM.render(
    <HelloClass msg="Hello! This is a props!"/>,
    document.getElementById('class')
);

ReactDOM.render(
    <COMP_LIFE />,
    document.getElementById('component_life')
);

ReactDOM.render(
    <Form />,
    document.getElementById('form')
);

ReactDOM.render(
    <EventTest />,
    document.getElementById('event')
);

ReactDOM.render(
    CssStyleComp,
    document.getElementById('style')
);

ReactDOM.render(
    AddStyleExternalComp,
    document.getElementById('externalstyle')
);