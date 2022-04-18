export default function Tag(props) {
    return (
        <div className='bg-LightCyan rounded text-cyan-700 font-semibold my-auto flex'>
            <p className='my-auto p-1 px-2 w-full text-center'>{props.name}</p>
            <button className='bg-cyan-700 text-white p-1 rounded-r hover:bg-opacity-60 duration-200' onClick={()=>{props.setIsTag(!props.isTag)}}>
                <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M6 18L18 6M6 6l12 12' />
                </svg>
            </button>
        </div>
    )
}
