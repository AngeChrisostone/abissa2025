import React from "react";
import videos from '@/public/json/videos.json';

export default function GalerieVideos(){
    return(
<section className="max-w-7xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-semibold text-customcolor1 mb-6 text-center">Vidéos des Festivités</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.videos.map((video) => (
            <div key={video.id} className="overflow-hidden rounded-lg shadow-lg">
            <iframe
                className="w-full h-60"
                src={video.src}
                title={`Vidéo Abissa ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
                    ))}
    </div>
</section>
    );
}