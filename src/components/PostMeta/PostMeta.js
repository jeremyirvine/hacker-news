import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostMeta.css'

const PostMeta = (props) => {

    const {author, time, id, comments} = props

    const formatDate = (time) => {
        let date = new Date(time)
        return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
    }

    return ( 
        <div className="PostMeta">
            Posted by <Link to={`/user/${author}`}>{author}</Link> {formatDate(time)}
                {(comments || comments === 0) && <>• <Link to={`/post/${id}`}>{comments} comments</Link></>}
        </div>
     );
}
 
export default PostMeta;