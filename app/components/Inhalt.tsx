"use client"
import { useEffect, useState } from 'react';
import Results from "./Results";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'
import Loading from '../loading';

const API_KEY = '3331ad998364698fd744ce1d30b48ffb';

function Search() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Zustand für das Laden
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || 'fetchTrending';
  const endpoint = genre === 'fetchTopRated' ? `movie/top_rated` : `trending/all/week`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`);
        if (!res.ok) {
          throw new Error("Anfrage fehlgeschlagen mit Statuscode: " + res.status);
        }
        const data = await res.json();
        setResults(data.results);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      } finally {
        setLoading(false); // Laden abgeschlossen
      }
    };

    setTimeout(fetchData, 1); 
  }, [endpoint]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading ? (
        <Loading />
      ) : (
        <Results results={results} />
      )}
    </main>
  );

}
export default function Home() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  )
}