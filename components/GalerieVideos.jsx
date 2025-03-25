"use client";
import React, { useState } from "react";
import videos from "@/public/json/videos.json";

export default function GalerieVideos() {
 const [activeVideo, setActiveVideo] = useState(null);

 return (
  <section
   className="max-w-7xl mx-auto px-4 py-10"
   aria-labelledby="videos-title"
  >
   <h2
    id="videos-title"
    className="text-2xl font-semibold text-customcolor1 mb-6 text-center"
   >
    Vidéos des Festivités
   </h2>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {videos.videos.map((video) => (
     <div
      key={video.id}
      className="relative overflow-hidden rounded-lg shadow-lg aspect-video"
     >
      {activeVideo === video.id ? (
       <iframe
        className="w-full h-full"
        src={video.src}
        title={`Vidéo Abissa ${video.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
       />
      ) : (
       <button
        onClick={() => setActiveVideo(video.id)}
        aria-label={`Lire la vidéo ${video.id}`}
        className="w-full h-full bg-black/70 text-white flex items-center justify-center text-2xl font-bold hover:bg-black/80 transition duration-300"
       >
        ▶
       </button>
      )}
     </div>
    ))}
   </div>
  </section>
 );
}
