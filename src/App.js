import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { receivePostData } from './actions/post'
import './App.css'
import Dashboard from './components/Dashboard'



function App(props) {
  useEffect(()=>{
    props.dispatch(receivePostData())
  })
  return (
   <Dashboard/>
  )
}

export default connect()(App);
