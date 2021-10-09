import { SearchIcon } from "@heroicons/react/outline"
import Contact from './Contact'
import PostInput from "./PostInput"

import edwardAvatar from '../public/images/edward.jpg'
import edwinAvatar from '../public/images/edwin.jpg'
import einsteinAvatar from '../public/images/einstein.jpg'

const RightBar = () => {
    return (
        <div className='hidden lg:flex flex-col h-screen p-2 w-1/5 bg-white border-l-2 border-gray-200'>
            <div className='hidden md:inline-flex  items-center rounded-full bg-gray-100 p-2 mt-10 '>
                <SearchIcon className="h-6 text-gray-600" />
                <input
                    className='hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink'
                    placeholder='Search Fern'
                />
            </div>
            <div className='p-2 justify-items-center items-center'>
                <h2 className='p-2 pl-8 m-10  border-b-2 border-gray-200 text-fern-green-500'>Active Network</h2>
            </div>
            <div className='pl-2 '>
                <Contact src={edwardAvatar} name='Edward Gadasu' />
                <Contact src={edwinAvatar} name='Edwin Gadasu' />
                <Contact src={einsteinAvatar} name='Einstein Essibu'/>
            </div>
            <div className='justify-items-center items-center'>
                <PostInput />
            </div>
            
        </div>
    )
}

export default RightBar
