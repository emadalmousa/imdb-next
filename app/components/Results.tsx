import React from 'react'
import Card from './Card';

interface Props {
    results: any;
};
const Results = ({ results }: Props) => {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {results.map((result: any) => (
                <Card  result={result} key={result.id}></Card>
            ))}
        </div>
    );
}

export default Results