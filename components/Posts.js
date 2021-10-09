import { useState, useEffect } from 'react'

import { db } from "../firebase";
import { collection, query, orderBy,  onSnapshot } from "firebase/firestore"; 

import GeneralPost from './GeneralPost'

const Posts = ({posts}) => {
    const [newPosts, setNewPosts] = useState([])
    useEffect(() => {
        const q = query(collection(db, "Posts"), orderBy('createdAt','desc'))
        onSnapshot(q, (snapShot) => 
        setNewPosts(snapShot.docs.map((doc) =>  ({...doc.data(), id: doc.id}))))
    }, [newPosts])
    
    return (
        <div>
            {newPosts  && newPosts.map((post) => (
                <GeneralPost key={post.id} name={post.name}  message={post.message}  postImage={post.postImage}  timestamp={post.createdAt} />

            ))}
            {posts.map((post) => (
                    <GeneralPost key={post.id} name={post.name}  message={post.message}  postImage={post.postImage}  timestamp={post.createdAt} />
                ))}
        </div>
    )
}

export default Posts
