import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='flex justify-center'>
        <Image src="/spinner.svg" alt="Loading spinner" width={500} height={500} />
    </div>
  )
}

export default loading
