import {applyMiddleware,compose,createStore} from 'redux'
import reducer from './reducer'
import {createLogger} from 'redux-logger'
// TOdo add middleware
let finalCreateStore = compose(
  applyMiddleware(createLogger())
)(createStore)
export default function configureStore(initialState = {todos:[],data:[]}){
  return finalCreateStore(reducer,initialState)
}
