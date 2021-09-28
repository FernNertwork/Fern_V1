import Header from '../../components/Header'
import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'

const index = () => {
    return (
         <div className='h-screen bg-gray-100 overflow-hidden'>
            {/* Header */}
            <Header page='Profile'/> 

            <main className='flex'>
                {/* Left Section */}
                <LeftBar/>

                {/* Middle Section */}
                

                {/* Right Section */}
                {/* <RightBar isHome=true/> */}
            </main>
        
        </div>
    )
}

export default index
