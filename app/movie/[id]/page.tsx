"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";


const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MoviePage = ({ params }: { params: { id: string } }) => {
  const movieId = params.id;
  const [movie, setMovie] = useState<any>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovie();
  }, [movieId]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([newComment, ...comments]);
      setNewComment(""); // Eingabefeld zurücksetzen
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };


  if (!movie) return <p className="text-center p-4">Lädt...</p>;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt={movie.original_title || "Movie Image"}
          className="rounded-lg"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>{movie.vote_count} Bewertungen</p>
        </div>
      </div>

      {/* Kommentar-Sektion */}
      <div className="max-w-4xl mx-auto p-4 mt-6 border-t">
        <h3 className="text-xl font-bold mb-4">Kommentare</h3>

        {/* Kommentar-Eingabe */}
        <div className="mb-4 flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Schreib einen Kommentar..."
            className="flex-1 border p-2 rounded-md"
          />
          <button
            onClick={handleAddComment}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Senden
          </button>
        </div>

        {/* Kommentar-Liste */}
        <div>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <p key={index} className="border-b py-2">{comment}</p>
                <FaTrash
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  size={16}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">Noch keine Kommentare vorhanden.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
