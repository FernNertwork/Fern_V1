import Link from 'next/link'

const Setting = ({ Icon, page }) => {
    return (
        <Link href={`${page}`}>
            <div className='absolute bottom-5 left-0 mx-2 mt-5 max-w-[600px] xl:min-w-[280px]'>
                <div className='flex items-center  space-x-2  p-4 hover:bg-gray-200 rounded-2xl cursor-pointer'>

                {Icon && <Icon className='h-8 w-8 text-fern-green-500' />}
                <p className='hidden sm:inline-flex font-medium  text-fern-green-500'>Settings</p>
            
                </div>
            </div>
        </Link>
    )
}

export default Setting
