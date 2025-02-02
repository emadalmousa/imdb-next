import React from 'react'
import NavebarItem from './NavebarItem'

const Navebar = () => {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-600 justify-center gap-8'>
      <NavebarItem title="Trending" param="fetchTrending" />
      <NavebarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navebar