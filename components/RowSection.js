import Link from 'next/link'

const RowSection = ({ Icon, title, page, active, ActiveIcon}) => {
    
   
    return (
        <Link href={`${page}`}>
            <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">

                {!active && Icon && <Icon className='h-8 w-8 text-fern-green-500' />}
                {active && <ActiveIcon  className='h-8 w-8 text-fern-green-500'/>}
                <p className={`${active ? "font-bold" : "font-medium" } hidden sm:inline-flex text-fern-green-500`}>{title}</p>
            </div>
        </Link>
    )
}

export default RowSection
