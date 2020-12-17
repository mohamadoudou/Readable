import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import { getCategoryData } from './actions/category'
import './App.css'
import Dashboard from './components/Dashboard'
import PostDetail from './components/PostDetail'
import Nav from './components/Nav'


function App(props) {

  useEffect(()=>{
    props.dispatch(getCategoryData())
  },[])
  
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <Dashboard/>
        </Route>
        <Route exact path='/:category'>
          <Dashboard/>
        </Route> 
        <Route path='/:category/:postId'>
          <PostDetail />
        </Route>
      </Switch>
    </>
  )
}


export default connect()(App);
