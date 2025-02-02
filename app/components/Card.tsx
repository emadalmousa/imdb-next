import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';
interface Props {
    result: any,
    key: any
};
const Card = ({ result, key }: Props) => {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm_border 
        sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}

                    width={500} height={300}
                    className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300' alt={result.title}>
                </Image>
                <div className='p_2'>
                    <p className='line-clamp-2 text-md'>{result.overview}</p>
                    <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
                    <p className='flex items-center '>
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className='h-5 mr-1 ml-3'/>
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
export default Card
// ${result.backdrop_path || result.poster_path}`} alt={''}