import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props){
	return <h1>{props.msg} inside a react app function!</h1>
}
const Hello_comp = <Hello msg="Hello, This is a props!" />;

class HelloClass extends React.Component {
	constructor(props){
		super(props);
			this.state = {
				msg: "Hello, This is a react state object!"
			}
	}
	render(){
		return <div>
			<h1>{this.state.msg} inside the react app class!</h1>
			<h1>{this.props.msg} inside the react app class!</h1>
		</div>;
	}
}

export default Hello_comp;
export {HelloClass};