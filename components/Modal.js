import React from 'react'
import avatar from '../public/fern_logo.png'
import Image from 'next/image'
import {
    XCircleIcon,
    NewspaperIcon,
    CameraIcon,
    LocationMarkerIcon
} from '@heroicons/react/outline'
import MediaInput from './MediaInput';


import { useRef } from 'react';
import { db } from '../firebase';
import { collection, addDoc,serverTimestamp } from 'firebase/firestore';



const Modal = ({ closeModal }) => {

    const inputRef = useRef(null)

    const sendPost = async (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;
        //console.log(inputRef.current.value)
        const postData =  {
            name: "Geoffery Koranteng",
            message: inputRef.current.value,
            postImage: null,
            createdAt: serverTimestamp()
        }

        close()
        const docRef = await addDoc(collection(db, "Posts"), postData);
        //console.log("Document id is : ", docRef.id);



        //inputRef.current.value = "";
        //console.log(inputRef.current.value)
    }

    const close = () => {
        closeModal(false)
    }

    return (
        <>
        <div onClick={close} className=' absolute bottom-0 left-0 h-screen w-screen z-40  bg-gray-300 bg-opacity-50'/>
        <div className='flex absolute bottom-0 left-0 items-center justify-center h-screen  w-screen'>
            <div className='bg-white flex flex-col p-6 w-2/5 h-auto rounded-xl shadow-xl z-40'>
                <div className='flex justify-between'>
                    <Image
                        className='rounded-full cursor-pointer'
                        src= {avatar}
                        width="25"
                        height="25"
                        layout="fixed"
                    />

                    <h2 className='text-fern-green-500 text-xl font-bold'>
                        Create Post
                    </h2>

                    <XCircleIcon
                        className="text-fern-green-500 hover:bg-gray-200 rounded-full cursor-pointer"
                        onClick={close}
                        width="25"
                        height="25"
                    />
                </div>
                <div className='flex flex-col items-center justify-center w-full h-auto  pt-4'>
                    <textarea
                        className="flex p-2 bg-gray-100 h-48 w-full focus:outline-none rounded-2xl text-2xl font-normal shadow-inner "
                        type="text"
                        placeholder="Some Cringe Science Joke"
                        ref={inputRef}
                        autoFocus  
                    />
                    <div className='flex justify-center text-white mt-2 mb-1 p-2 w-32 text-xl font-bold bg-fern-green-500
                    hover:bg-fern-green-600 rounded-full ring-2 ring-gray-400 cursor-pointer' onClick={sendPost}>
                        Post
                    </div>
                </div>

                <div className='flex justify-between p-3 mt-2 border-t'>
                    <div className=" flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                        <MediaInput />
                    </div>
                    <div className="flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                        <NewspaperIcon className="h-7 text-green-400" />
                        <p className="text-xs sm:text-sm xl:text-base">Paper</p>
                        <input
                            type="file"
                            hidden
                        />
                    </div>
                    <div className="flex space-x-1 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                        <LocationMarkerIcon className="h-7 text-yellow-300" />
                        <p className="text-xs sm:text-sm xl:text-base">Events</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     
    )
}

export default Modal
