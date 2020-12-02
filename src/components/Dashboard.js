import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dropdown, DropdownButton, Badge } from 'react-bootstrap'
import { BiCommentAdd } from 'react-icons/bi'
import Post from './Post'
import PostEditModal from './PostEditModal'
import '../App.css'

function Dashboard({ postIds, categories }) {

    const [modalShow, setModalShow] = useState(false)


    return (
        <div className='container'>
            <div className='filterContainer'>
                <DropdownButton id="dropdown-item-button"
                    title={`Caterogy ${postIds[0]}`}>
                    <Dropdown.ItemText>All</Dropdown.ItemText>
                    {categories && categories.categories ? categories.categories.map((category) => {
                        return (
                            <Dropdown.Item key={category.name}
                                as="button"
                            >
                                {category.name}
                            </Dropdown.Item>
                        )
                    }) : null
                    }

                </DropdownButton>
                <DropdownButton id="dropdown-item-button"
                    className='categorySpace'
                    title={`Sort by ${postIds[0]}`}>
                    <Dropdown.Item as="button">Date</Dropdown.Item>
                    <Dropdown.Item as="button">Vote Score</Dropdown.Item>
                </DropdownButton>
            </div>
            <button onClick={() => setModalShow(true)}>
                <Badge variant="success" style={{ margin: 5 }}>
                    Add a post <BiCommentAdd></BiCommentAdd>
                </Badge>
            </button>
            <PostEditModal
            show={modalShow}
            onHide={()=>setModalShow(false)}
            postId={null}
            />
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


function mapStateToProps({ posts, categories }) {
    const postIds = Object.keys(posts)
    console.log('all posts inside dashboard', posts)
    return {
        postIds,
        categories
    }
}

export default connect(mapStateToProps)(Dashboard)