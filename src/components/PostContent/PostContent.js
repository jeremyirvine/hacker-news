import React from 'react';
import PostMeta from '../PostMeta/PostMeta';
import './PostContent.css'

const PostContent = (props) => {

    const {post, showComments} = props

    return ( 
        <div className="PostContent">
            <PostMeta 
                author={post.by}
                time={post.time}
                id={post.id}
                comments={showComments && post.descendants} />
            <div dangerouslySetInnerHTML={{__html: post.text}}>

            </div>
        </div>  
     );
}
 
export default PostContent;