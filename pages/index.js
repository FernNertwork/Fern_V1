import Header from '../components/Header'
import LeftBar from '../components/LeftBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar'

import { collection, getDocs,query, orderBy } from "firebase/firestore";
import { db } from '../firebase'






export default function Home() {


  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      {/* Header */}
      <Header page='Home'/> 

      <main className='flex'>
        {/* Left Section */}
        <LeftBar/>

        {/* Middle Section */}
        <Feed/>
        
        {/* Right Section */}
        <RightBar />
      </main>
      
    </div>
  )
}


// export const getServerSideProps = async (context) => {
//   // Fetch all posts from collection
//   let posts = []
//   const q = query(collection(db, "Posts"), orderBy('createdAt','desc'))
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     posts.push({"id":doc.id, ...doc.data()})
//   })

//   const fetchedPosts = JSON.parse(JSON.stringify(posts))

//   return {
//     props: {posts: fetchedPosts}
//   }
 
// }
