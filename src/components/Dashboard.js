import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Post from './Post'
import '../App.css'

function Dashboard({ postIds,categories }) {
    return (
        <div className='container'>
            <div className='filterContainer'>
                <DropdownButton id="dropdown-item-button"
                    title={`Caterogy ${postIds[0]}`}>
                    <Dropdown.ItemText>All</Dropdown.ItemText>
                    {categories && categories.categories? categories.categories.map((category)=>{
                        return(
                        <Dropdown.Item key = {category.name}
                        as="button"
                        >
                            {category.name}
                        </Dropdown.Item>
                        )
                    }):null
                    }

                </DropdownButton>
                <DropdownButton id="dropdown-item-button"
                    className='categorySpace'
                    title={`Sort by ${postIds[0]}`}>
                    <Dropdown.Item as="button">Date</Dropdown.Item>
                    <Dropdown.Item as="button">Vote Score</Dropdown.Item>
                </DropdownButton>
            </div>
            <ul className='liDecoration'>
                {postIds.map((postId) => {
                    return (
                        <li key={postId} >
                            <Post postId={postId} />
                        </li>
                    )
                })}
                <Post postId={postIds[0]} />
            </ul>
        </div>
    )
}


function mapStateToProps({posts,categories}) {
    const postIds = Object.keys(posts)
    console.log('all categories inside dashboard',categories)
    return {
        postIds,
        categories
    }
}

export default connect(mapStateToProps)(Dashboard)