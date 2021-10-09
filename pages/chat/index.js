import Header from '../../components/Header'
import LeftBar from '../../components/LeftBar'
import Network from '../../components/Network'

const index = () => {
    return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      {/* Header */}
      <Header page='Chat'/> 

      <main className='flex'>
        {/* Left Section */}
        <LeftBar/>

        {/* Middle Section */}
        <Network />  
        

      
      </main>
      
    </div>
    )
}

export default index
