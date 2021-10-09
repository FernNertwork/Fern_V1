import RowSection from "./RowSection"
import Setting from "./Setting"
import { useState } from "react"
import {
    UserIcon,
    ChatIcon,
    HomeIcon,
    BellIcon,
    CubeTransparentIcon
} from '@heroicons/react/outline'
import {
    HomeIcon as activeHome,
    UserIcon as activeUser,
    ChatIcon as activeChat,
    BellIcon as activeBell,
    CubeTransparentIcon as activeCog
} from "@heroicons/react/solid"



const LeftBar = () => {
    // const [isActive, setIsActive] = useState("");
    
    return (
        <div className='p-2 h-screen  max-w-[600px] xl:min-w-[300px] bg-white border-r-2 border-gray-200' >

            <RowSection Icon={HomeIcon} title="Home" page="/"  active ActiveIcon={activeHome} />
            <RowSection Icon={BellIcon} title="Notifications" ActiveIcon={ activeBell} page="/notifications" />
            <RowSection Icon={ ChatIcon} title="Chat" ActiveIcon={ activeChat} page="/chat"/>
            <RowSection Icon={UserIcon} title="Profile" ActiveIcon={ activeUser}  page="/profile"/>
            <Setting Icon={CubeTransparentIcon}   ActiveIcon={ activeCog}  page="/settings"/>
            
        </div>
    )
}

export default LeftBar


