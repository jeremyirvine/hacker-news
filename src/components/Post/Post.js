import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchComments, fetchItem } from '../../utils/api';
import PostMeta from '../PostMeta/PostMeta';
import './Post.css'


const Post = (props) => {
    const {post} = props

    const handleTitleClick = () => {
        
    }

    // useEffect(() => {
    //     fetchComments(post.kids)
    //         .then(res => {
    //             console.log(res)
    //         })
    // }, [post])
    
    return ( 
        <div className="Post">
            <div className="title" onClick={handleTitleClick}>
                <a target="_blank" href={post.url}>{post.title}</a>
            </div>
            <PostMeta 
                author={post.by}
                time={post.time}
                id={post.id}
                comments={post.descendants} />
        </div>
     );
}
 
export default Post;