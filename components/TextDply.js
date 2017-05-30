import React from 'react'
class TextD extends React.Component {
	constructor(){
		super()
		this.state ={
			InputT:'Hello'
		}
	}
	handle(event){
		this.setState({
			InputT : event.target.value
		})
	}
	delLetter(){
		this.setState({
			InputT : this.state.InputT.substring(0,this.state.InputT.length -1)
		})
	}
	render(){
		return (
			<div>
				<input type="text" value={this.state.InputT} onChange={this.handle.bind(this)}/>
				<Display Text={this.state.InputT} del={this.delLetter.bind(this)}/>
			</div>
		)
	}
}

export default TextD;
