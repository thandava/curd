import React from 'react'
import Db from '../components/Db'
import {connect} from 'react-redux'
class Dbs extends React.Component{
	render(){
		return (
			<div>
       <Db dispatch={this.props.dispatch} data={this.props.data}/>
			</div>
			)
	}
}
function mapsStateToProps(state){
	return state
}
export default connect(mapsStateToProps)(Dbs);
