import React from 'react'
import actions from '../redux/actions'
class TextTodo extends React.Component {
	constructor(){
		super()
		this.state ={
			InputT:''
		}
	}
	handle(event){
		this.setState({
			InputT : event.target.value
		})
	}
  handleSubmit(event){
		event.preventDefault()
		this.props.dispatch(actions.addTodo(this.state.InputT))
	}
	render(){
		return (
			<div>
				<input type="text" value={this.state.InputT} onChange={this.handle.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}
}
export default TextTodo;
