import { useState } from "react"
import Modal from "./Modal"

const PostInput = () => {
    const [openModal, setOpenModal] = useState(false)
    const postModal = () => {
        setOpenModal(true)
    }
    
    return (
        <div>
        <div onClick={postModal} className='flex justify-center  absolute bottom-10 p-2 w-40 ml-11 rounded-full cursor-pointer 
        bg-fern-green-500 hover:bg-fern-green-600 shadow-md border-2 border-gray-400'>
            <p className='text-white text-xl font-bold'>Post</p>
            
        </div>
            {openModal && <Modal closeModal={ setOpenModal }/>}
        </div>
    )
}

export default PostInput
