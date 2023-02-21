const Cards = ({ movie }) => {
    return (
        <div className='bg-white bg-opacity-5 hover:bg-opacity-20 transition shadow-sm shadow-gray-400 rounded-sm py-2 px-2'>
            <div className=''>
                <img src={movie?.Images[1]} alt="img" className='object-cover h-36 w-full' />
            </div>
            <div>
                <h1 className='text-center font-bold text-xl text-white'>{movie?.Title}</h1>
                <p className='text-center font-bold text-sm text-white'>{movie?.Year}</p>
            </div>
        </div>
    )
}

export default Cards;