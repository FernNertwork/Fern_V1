import GeneralPost from './GeneralPost'
import PaperPost from './PaperPost'

import avatar from '../public/fern_logo.png'
import paper from '../public/images/relatity.png'
import Posts from './Posts'

import { useEffect, useState} from 'react'
import { collection, onSnapshot, orderBy,  query } from '@firebase/firestore'
import { db } from '../firebase'



const Feed = () => {
    
    const [posts, setPost] = useState([])
    // Todo: Make the useEffect asynchronous
    useEffect(() => {
        const getPost = async () => {
            const q = query(collection(db, "Posts"), orderBy('createdAt','desc'))
            onSnapshot(q, (snapShot) => 
            setPost(snapShot.docs.map((doc) =>  ({...doc.data(), id: doc.id}))))
        }

        return getPost();
    },[])

    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                {/* <Posts posts={posts}/> */}
                {posts.map((post) => (
                    <GeneralPost key={post.id} name={post.name}  message={post.message}  postImage={post.postImage}  timestamp={post.createdAt} />
                ))}
                {/* <GeneralPost name='Geoffery Koranteng' message='At Last I have built the  Post  Component' />
                <PaperPost name='Geoffery Koranteng' postPaper={paper} initials='GK' author='Albert Einstein' paperTitle='The theory of Relativity'/>
                <GeneralPost name='Geoffery Koranteng' message='That Looks like a beautiful Fern' postImage={avatar}/>
                <GeneralPost name='Geoffery Koranteng' message='This was supposed to be a funny a science'/>
                <GeneralPost name='Geoffery Koranteng' message='I was reading a book on helium. I couldn’t put it down.'/>
                <GeneralPost name='Geoffery Koranteng'
                    message='Q: What is the fastest way to determine the sex of a chromosome?
                            A: Pull down its genes.'/>
                <GeneralPost name='Geoffery Koranteng' message='One tectonic plate bumped into another and said, “Sorry, my fault."' /> */}
            </div>
        </div>
        )
    }


export default Feed


