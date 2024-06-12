'use client'
import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation';


interface Props {
  title: string;
  param: string;
};
const NavebarItem = ({ title, param }: Props) => {
  const searchPrams = useSearchParams();
  const genre = searchPrams.get('genre');
  return (
    <div>
      <Link className={`hover:text-blue-600 font-semibold 
        ${genre===param?'underline underline-offset-8 decoration-blue-500 rounded-lg':''}`}
         href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavebarItem