import {
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon,
} from "@heroicons/react/outline";

import Image from 'next/image'
import avatar from '../public/fern_logo.png'
import moment from "moment";


const GeneralPost = ({ name, message, postImage, timestamp }) => {
  
    
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-xl'>
                <div className='flex  justify-between items-center space-x-2'>
                    <Image
                        className='rounded-full cursor-pointer'
                        src={avatar}
                        width='40'
                        height='40'
                    />
                    <div>
                        <p className='text-base text-gray-800 font-semibold cursor-pointer'> {name} </p>

                        

                    </div>
                    <div>
                        {timestamp ? (
                               
                            <p className="text-xs text-gray-400">
                                {moment(timestamp?.toDate()).fromNow()}
                            </p>
                        ) : (
                            <p className="text-xs text-gray-400">...</p>
                        )}
                    </div>
                </div>
                <p className='pt-4'>{ message }</p>
            </div>
            
            {postImage && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src={postImage} objectFit="cover" layout="fill" />
                </div>
            )}

            {/* Post Footer */}
            <div className='flex justify-between items-center bg-white text-gray-400 border-t border-b-2'>

                <div className='flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center 
                 cursor-pointer p-3 rounded-none '>
                    <ThumbUpIcon className='h-4' />
                    <p className="text-xs sm:text-base">Like</p>
                </div>

                <div className='flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center 
                 cursor-pointer p-3 rounded-none'>
                    <ChatAltIcon className='h-4' />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>

                <div className='flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center 
                 cursor-pointer p-3 rounded-none'>
                    <ShareIcon className='h-4' />
                    <p className="text-xs sm:text-base">Share</p>
                </div>
            </div>
            <div className='flex rounded-b-2xl bg-white shadow-xl p-2 '>
                <Image
                    className='rounded-full cursor-pointer '
                    src={avatar}
                    width='35'
                    height='35'
                    layout='fixed'
                />
                <div className='flex ml-2 p-2 w-full bg-gray-100 rounded-full shadow-inner'>
                    <input
                        className='hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink cursor-text'
                        placeholder='Comment'
                    />
                </div>
            </div>
        </div>
    )
}

export default GeneralPost
