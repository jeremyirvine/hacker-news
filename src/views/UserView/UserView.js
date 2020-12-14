import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import Post from '../../components/Post/Post';
import UserMeta from '../../components/UserMeta/UserMeta';
import { fetchPosts, fetchUser } from '../../utils/api';
import './UserView.css'

const UserView = (props) => {

    const {match} = props

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchUser(match.params.login)
            .then(res => {
                setUser(res)    

                fetchPosts(res.submitted)
                    .then(s => {
                        setPosts(s)
                    })
            })
    }, [])

    return ( 
        <div>
            <div className="title">
                <h1>u/{match.params.login}</h1>
            </div>
            <UserMeta 
                karma={user.karma} 
                time={user.created} />

            <h1>Posts</h1>
            {posts.length == 0 ? (
                <Loading />
            ) : posts.map(post => (
                <Post 
                    post={post}
                    key={post.id} />
            ))}
        </div>
     );
}
 
export default UserView;