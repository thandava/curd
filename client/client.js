import React from 'react'
import {render} from 'react-dom'
import Apps from '../components/apps'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import Dbs from '../components/Dbs'
import {Router , Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
let initialState = {
  todos:[{
    id:0,
    completed:false,
    text:'initial state bro'
  }],
  data :[{accno:0,bal:1,name:'gup'}]
}
let store = configureStore(initialState)
render(
  <Provider store={store}>
  <Router history = {history}>
    <div>
         <Route path="/h" component={Apps}/>
         <Route path="/by" component={Dbs} />
      </div>
     </Router>
 </Provider>
 ,document.getElementById('app')
)
