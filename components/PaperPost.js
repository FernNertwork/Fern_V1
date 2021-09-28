import Image from 'next/image'
import avatar from '../public/fern_logo.png'
import {
    ThumbDownIcon,
    ThumbUpIcon,
} from "@heroicons/react/outline";

const PaperPost = ({name, postPaper, initials, author, paperTitle}) => {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-xl'>
                {/* Header */}
                <div className='flex  justify-between items-center space-x-2'>
                    <Image
                        className='rounded-full cursor-pointer'
                        src={avatar}
                        width='40'
                        height='40'
                    />
                    <div>
                        <p className='text-base text-gray-800 font-semibold cursor-pointer'> {name} </p>

                        {/* {timestamp ? (
                            <p className="text-xs text-gray-400">
                                {new Date(timestamp?.toDate()).toLocaleString()}
                            </p>
                        ) : (
                            <p className="text-xs text-gray-400">Loading</p>
                        )} */}

                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>6:57PM</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className='flex h-auto w-auto border-t-2 border-gray-200'>
                {/* Paper Thumbnail */}
                {postPaper && (
                    <div className="relative h-56 w-3/5 md:h-96 bg-white border-2 border-gray-100 cursor-pointer">
                        <Image src={postPaper} objectFit="cover" layout="fill" />
                    </div>
                )}
                
                {/* Comment Section */}
                <div className='flex h-56 md:h-96 w-2/5 bg-white shadow-inner pl-1 pt-1'>
                    <div className='cursor-pointer text-base font-medium text-fern-green-500'>
                        {initials}
                    </div>
                    <div>
                        <p className='ml-2 text-xs text-gray-500 break-words'> I am trying to type a long  text to  see  how  text wraps and  if it  doesnt I will try and fix it</p>
                    </div>

                </div>
            </div>

            {/* Post Footer */}
            <div className='flex flex-col bg-white text-gray-400 border-double border-t-2 rounded-b-2xl shadow-xl'>

                {author && (<div className='ml-1 mt-2 border-b-2 border-gray-200'>
                    <p className='text-base text-black italic'>{paperTitle}</p>
                    <p className='text-base text-fern-green-500 font-bold'> By  {author}</p>
                    
                </div>)}

                <div className='flex justify-between mt-0'>
                    <div className='flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center 
                    cursor-pointer p-3 rounded-none  rounded-bl-2xl'>
                        <ThumbUpIcon className='h-4' />
                        <p className="text-xs sm:text-base">Upvote</p>
                    </div>

                    <div className='flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center 
                    cursor-pointer p-3 rounded-none rounded-br-2xl'>
                        <ThumbDownIcon className='h-4' />
                        <p className="text-xs sm:text-base">Downvote</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PaperPost
