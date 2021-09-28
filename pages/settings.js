import Header from '../components/Header'
import LeftBar from '../components/LeftBar'

const settings = () => {
    return (
        <div className='h-screen bg-gray-100 overflow-hidden'>
            {/* Header */}
            <Header page='Settings'/> 

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

export default settings
