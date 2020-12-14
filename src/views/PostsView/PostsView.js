import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import {fetchMainPosts} from '../../utils/api'

const PostsView = (props) => {
    const {type} = props
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetchMainPosts(type).then(res => { setLoading(false); setArticles(res) })
    }, [type])

    return ( 
        <div>
            {loading ? "Loading..." : articles.map(article => <Post 
                                                                key={article.id} 
                                                                post={article} />)}
        </div>
     );
}
 
export default PostsView;