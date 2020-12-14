import React from 'react';

const PostView = (props) => {

    const {post} = props

    return ( 
        <div>
            ID: {props.match.params.id}
        </div>  
     );
}
 
export default PostView;