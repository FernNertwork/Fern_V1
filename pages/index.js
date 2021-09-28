import Header from '../components/Header'
import LeftBar from '../components/LeftBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar'


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
