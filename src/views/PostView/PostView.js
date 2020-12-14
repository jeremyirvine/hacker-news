import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import PostContent from '../../components/PostContent/PostContent';
import PostMeta from '../../components/PostMeta/PostMeta';
import { fetchComments, fetchItem } from '../../utils/api';
import './PostView.css'

const PostView = (props) => {

    const {match, history} = props

    const [post, setPost] = useState({})
    const [comments, setComments] = useState(['-1'])

    useEffect(() => {
        fetchItem(match.params.id)
            .then(res => {
                setPost(res)
                
                if(res.kids == undefined) {
                    setComments([])
                }
                else {
                    fetchComments(res.kids)
                    .then(c => {
                        setComments(c)
                    })
                }
            })

        
    }, [])

    console.log()

    return ( 
        <div className="PostView">
            {(Object.keys(post).length !== 0 && comments[0] != -1) ? (
                
                <>
                    <div className="title" onClick={() => { window.open(post.url, "_blank") }}>
                        <h1>{post.title}</h1>
                    </div>

                    <PostMeta 
                        author={post.by}
                        time={post.time}
                        id={post.id}
                        comments={post.descendants} />

                        <br />

                    {comments.map(c => (
                        <PostContent 
                            post={c}
                            key={c.id} />
                    ))}
                </>
            ) : (
                <Loading />
            )}
            
        </div>  
     );
}
 
export default PostView;