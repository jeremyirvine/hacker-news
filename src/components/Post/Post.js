import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchComments, fetchItem } from '../../utils/api';
import './Post.css'


const Post = (props) => {
    const {post} = props

    const formatDate = (time) => {
        let date = new Date(time)

        return `${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`
    }

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
                {/* {post.title} */}
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
            <div className="meta">
                Posted by <a target={"_blank"} href={`https://news.ycombinator.com/user?id=${post.by}`}>{post.by}</a> {formatDate(post.time)} • <a target={"_blank"} href={`https://news.ycombinator.com/item?id=${post.id}`}>{post.descendants} comments</a>
            </div>
        </div>
     );
}
 
export default Post;