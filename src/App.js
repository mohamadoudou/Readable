import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { receivePostData } from './actions/post'
import './App.css'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'


function App(props) {
  useEffect(()=>{
    props.dispatch(receivePostData())
  })
  return (
    <>
    <Nav/>
   <Dashboard/>
   </>
  )
}

export default connect()(App);
