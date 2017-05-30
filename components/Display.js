import React from 'react'
class Display extends React.Component {
	render(){
		return (
			<div>
				<div>Text was here: {this.props.Text}</div>
				<button onClick={this.props.del}>Delete</button>
			</div>
		)
	}
}

export default Display;
