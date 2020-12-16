import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { getCategoryData } from './actions/category'
import { receivePostData } from './actions/post'
import './App.css'
import Dashboard from './components/Dashboard'
import PostDetail from './components/PostDetail'
import Nav from './components/Nav'


function App(props) {
  useEffect(()=>{
    props.dispatch(receivePostData())
    props.dispatch(getCategoryData())
  },[])
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <Dashboard/>
        </Route> 
        <Route path='/detail'>
          <PostDetail />
        </Route>
      </Switch>
    </>
  )
}


export default connect()(App);
