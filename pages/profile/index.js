import Header from '../../components/Header'
import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'
import Profile from '../../components/Profile'

const index = () => {
    return (
         <div className='h-screen bg-gray-100 overflow-hidden'>
            {/* Header */}
            <Header page='Profile'/> 

            <main className='flex'>
                {/* Left Section */}
                <LeftBar/>

                {/* Middle Section */}
                <Profile />

                {/* Right Section */}
                <RightBar />
            </main>
        
        </div>
    )
}

export default index
