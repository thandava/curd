import React from 'react'
import TextTodo from '../components/TextTodo'
import TodoList from '../components/TodoList'
import Db from '../components/Db'
import {connect} from 'react-redux'
class Apps extends React.Component{
	render(){
		return (
			<div>
				<div>This is react Now Wows yes!</div>
				<TextTodo dispatch={this.props.dispatch} />
				<TodoList  todos={this.props.todos}/>
			</div>
			)
	}
}
function mapsStateToProps(state){
	return state
}
export default connect(mapsStateToProps)(Apps);
