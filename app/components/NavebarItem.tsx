'use client'
import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'


interface Props {
  title: string;
  param: string;
};
const Search = ({ title, param }: Props) => {
  const searchPrams = useSearchParams();
  const genre = searchPrams.get('genre');
  return (
    <div>
      <Link className={`hover:text-blue-600 font-semibold 
        ${genre === param ? 'underline underline-offset-8 decoration-blue-500 rounded-lg' : ''}`}
        href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
const NavebarItem = ({ title, param }: Props) => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search title={title} param={param} />
    </Suspense>
  )
}

export default NavebarItem