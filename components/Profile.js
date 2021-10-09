import Image from 'next/image'
import {useState} from 'react'

import avatar from '../public/fern_logo.png'
import edwardAvatar from '../public/images/edward.jpg'
import GeneralPost from './GeneralPost'


const Profile = () => {
    const [tab, setTab] = useState('posts');

    return (
        <div className=' flex-grow h-screen pb-44 overflow-y-auto scrollbar-hide' >
            <div className='bg-white'>
                {/* Cover Image and Profile Picture */}
                <div className='relative mt-0 w-full pb-10 rounded-b-xl  '>
                    <Image
                        className='mt-0 rounded-b-3xl '
                        src={avatar}
                        alt='No Cover Image'
                        width='1000'
                        height='500'
                        objectFit='cover'
                        layout='responsive'
                    />
                    <div className='flex absolute items-center justify-center bottom-0 inset-x-0 p-2'>
                        <Image
                            className='rounded-full mt-4 w-full'
                            src={edwardAvatar}
                            width='150'
                            height='150'
                            objectFit='fill'
                            layout='fixed'
                        />

                    </div>
                </div>

                {/* Bio Section */}
                <div className='flex flex-col mx-2 pb-2 border-b-2 '>
                    <div className='flex justify-center '>
                        <p className='font-bold italic text-xl'> Geoffery Koranteng</p>
                    </div>
                    <div className='flex justify-center'>
                    <p className='text-fern-green-500 font-semibold cursor-pointer'> Add Bio </p> 
                    </div>
                </div>

                {/* Profile Feed */}
                {/* flex justify-evenly border-b-2 mx-2 py-2 */}
                <div className='grid grid-cols-2 divide-x-2 border-b-2 mx-2 py-2 '>
                    <div onClick={() => {setTab('posts')}} className='flex justify-center hover:font-bold cursor-pointer '>
                        <h2 className=''>Posts</h2>
                    </div>
                    <div onClick={() => {setTab('interactions')}} className='flex justify-center hover:font-bold cursor-pointer' >
                        <h2>Iteractions</h2>
                    </div>
                </div>
             </div>   

            {tab == 'posts' &&
                <div className='h-auto pb-0 bg-gray-100'>
                    <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                        <GeneralPost name='Geoffery Koranteng' message='That Looks like a beautiful Fern' postImage={avatar}/>
                        <GeneralPost name='Geoffery Koranteng' message='This was supposed to be a funny a science' />
                        <GeneralPost name='Geoffery Koranteng' message='This was supposed to be a funny a science'/>
                        <GeneralPost name='Geoffery Koranteng' message='This was supposed to be a funny a science'/>
                        <GeneralPost name='Geoffery Koranteng' message='This was supposed to be a funny a science'/>
                        <GeneralPost name='Geoffery Koranteng' message='This was supposed to be a funny a science'/>

                    </div>
                    
                </div>
            }
            {tab == 'interactions' &&
                <div className='h-auto pb-0 bg-gray-100' >
                <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                        <GeneralPost name='Geoffery Koranteng' message='Welcome to interactions'/>
                        <GeneralPost name='Geoffery Koranteng' message='How is it going'/>

                    </div>
                
                </div>
            }
            
        </div>
    )
}

export default Profile
