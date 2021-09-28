import RowSection from "./RowSection"
import {
    UserIcon,
    ChatIcon,
    HomeIcon,
    BellIcon,
    CubeTransparentIcon
} from '@heroicons/react/outline'
import { HomeIcon as activeHome } from "@heroicons/react/solid" 
import Setting from "./Setting"


const LeftBar = () => {
    return (
        <div className='p-2 h-screen  max-w-[600px] xl:min-w-[300px] bg-white border-r-2 border-gray-200' >

            <RowSection Icon={HomeIcon} title="Home" page="/" active ActiveIcon={activeHome}/>
            <RowSection Icon={BellIcon } title="Notifications" page="/notifications" />
            <RowSection Icon={ ChatIcon} title="Chat" page="/chat"/>
            <RowSection Icon={UserIcon} title="Profile" page="/profile"/>
            <Setting Icon={CubeTransparentIcon} page="/settings"/>
            
        </div>
    )
}

export default LeftBar


