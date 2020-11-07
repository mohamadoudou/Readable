import React from 'react'
import { connect } from 'react-redux'
import { Dropdown,DropdownButton } from 'react-bootstrap'
import Post from './Post'
import '../App.css'

function Dashboard({ postIds }) {
    return (

        <div className='container'>
            <div className='filterContainer'>
                <DropdownButton id="dropdown-item-button"
                title={`Caterogy ${postIds[0]}`}>
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button" >Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button"
                className='categorySpace'
                title={`Sort by ${postIds[0]}`}>
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
          {  postIds.map((postId)=>{
            return(
            <li key={postId}>
            <Post posts={postId}/>
            </li>
            )
            })  }
            <Post />
        </div>
    )
}


function mapStateToProps({ posts }) {
    const postIds = Object.keys(posts)
    return {
        postIds
    }
}

export default connect(mapStateToProps)(Dashboard)