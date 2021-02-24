import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Link,useParams} from 'react-router-dom'
import { Dropdown, DropdownButton, Badge,ButtonGroup } from 'react-bootstrap'
import { BiCommentAdd } from 'react-icons/bi'
import Post from './Post'
import PostEditModal from './PostEditModal'
import '../App.css'
import { categoryPostsData, receivePostData } from '../actions/post'
import Category from './Category'

function Dashboard({ posts, categories,dispatch }) {

    const [modalShow, setModalShow] = useState(false)
    const {category}=useParams()
    const [postIds,setPostIds]=useState([])
    const [sort,setSort]=useState('date')
    

    // const handleSort=(e)=>{
    //     if(e==='date'){
    //         setPostIds(Object.keys(posts)
    //           .sort((a,b)=>posts[b].timestamp-posts[a].timestamp)
    //         )
    //     }
    //     else if(e==='votescore'){
    //         setPostIds(Object.keys(posts)
    //         .sort((a,b)=>posts[b].voteScore-posts[a].voteScore)
    //         )
    //     }
    //     else{
    //         setPostIds(Object.keys(posts))
    //     }
    // }

    return (
        <div className='container'>
            <div className='filterContainer'>
                <DropdownButton id="dropdown-item-button"
                     as={ButtonGroup}
                     //id="dropdown-menu-align-right"
                    title={`Caterogy ${category?category:'all'}`}
                    >
                    <Dropdown.Item  eventKey='all' > 
                        <Link to='/' className='link'>
                        All 
                        </Link>
                    </Dropdown.Item>
                    {categories && categories.categories ? categories.categories.map((category) => {
                        return (
                            <Link to={`/${category.name}`} className='link' key={category.name}>
                            <Dropdown.Item 
                                
                                as="button"
                                eventKey={category.name}
                            >
                                
                                    {category.name}
                               
                            </Dropdown.Item>
                            </Link>
                        )
                    }) : null
                    }

                </DropdownButton>
                <DropdownButton 
                    id="dropdown-item-button"
                    className='categorySpace'
                    title={`Sort by ${sort}`}
                    onSelect={(e)=>setSort(e)}
                    >
                    <Dropdown.Item as="button" eventKey='date'>date</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey='vote score'>vote score</Dropdown.Item>
                </DropdownButton>
            </div>
            <button onClick={() => setModalShow(true)} className='addPost'>
                <Badge 
                variant="success" 
                style={{
                     margin: 5,
                     width:130,
                     height:35,
                     fontSize:15,
                      }}>
                    Add a post <BiCommentAdd></BiCommentAdd>
                </Badge>
            </button>
            <PostEditModal
            show={modalShow}
            onHide={()=>setModalShow(false)}
            postId={null}
            />
            <Category
            category={category}
            sort={sort}
            />
        </div>
    )
}


function mapStateToProps({ posts, categories }) {
    return {
        categories,
        posts
    }
}

export default connect(mapStateToProps)(Dashboard)