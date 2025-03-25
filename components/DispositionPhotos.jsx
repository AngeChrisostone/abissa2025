"use client";
import React, { useState } from "react";
import Image from "next/image";
import photos from "@/public/json/img.json";

export default function Disposition() {
 const [selectedImage, setSelectedImage] = useState(null);

 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   {photos.photos.map((photo, index) => (
    <div
     key={photo.id}
     className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
     onClick={() => setSelectedImage(photo)}
    >
     <Image
      src={photo.src}
      alt={photo.alt}
      width={400}
      height={300}
      className="group-hover:scale-105 transition-transform duration-300"
      loading={index < 3 ? "eager" : "lazy"}
      priority={index < 3}
      sizes="(max-width: 768px) 100vw, 33vw"
     />
    </div>
   ))}

   {selectedImage && (
    <div
     className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
     onClick={() => setSelectedImage(null)}
     role="dialog"
     aria-modal="true"
     aria-label="Image agrandie"
    >
     <div className="relative max-w-3xl w-full">
      <Image
       src={selectedImage.src}
       alt={selectedImage.alt}
       width={1000}
       height={700}
       className="w-full h-auto rounded-lg"
      />
      <button
       onClick={() => setSelectedImage(null)}
       className="absolute top-2 right-2 text-white text-3xl bg-black/60 rounded-full px-2 hover:bg-black"
       aria-label="Fermer"
      >
       ✕
      </button>
     </div>
    </div>
   )}
  </div>
 );
}
