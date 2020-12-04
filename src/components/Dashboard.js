import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dropdown, DropdownButton, Badge,ButtonGroup } from 'react-bootstrap'
import { BiCommentAdd } from 'react-icons/bi'
import Post from './Post'
import PostEditModal from './PostEditModal'
import '../App.css'
import { categoryPostsData, receivePostData } from '../actions/post'

function Dashboard({ postIds, categories,dispatch }) {

    const [modalShow, setModalShow] = useState(false)
    const [category,setCategory]=useState('all')


    const handleCategory=(e)=>{
        if(e==='all'){
            setCategory(e)
            dispatch(receivePostData())
        }else{
            setCategory(e)
            dispatch(categoryPostsData(e))
        }
    }

    return (
        <div className='container'>
            <div className='filterContainer'>
                <DropdownButton id="dropdown-item-button"
                     as={ButtonGroup}
                     id="dropdown-menu-align-right"
                    title={`Caterogy ${category}`}
                     onSelect={handleCategory}
                    >
                    <Dropdown.Item  eventKey='all' > All </Dropdown.Item>
                    {categories && categories.categories ? categories.categories.map((category) => {
                        return (
                            <Dropdown.Item 
                                key={category.name}
                                as="button"
                                eventKey={category.name}
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