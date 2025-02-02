'use client'
import Results from '@/app/components/Results';
import React, { useState, useEffect } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Page = ({ params }: { params: { searchTerm: string } }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchTerm = params.searchTerm;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
                if (!res.ok) {
                    throw new Error(`Anfrage fehlgeschlagen mit Statuscode: ${res.status}`);
                }
                const data = await res.json();
                setResults(data.results);
            } catch (error) {
                
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Fehler: {error}</div>;
    }

    return (
        <div>
            {results.length === 0 ? (
                <h1 className='text-center pt-6'>No results found</h1>
            ) : (
                <Results results={results} />
            )}
        </div>
    );
}

export default Page;
