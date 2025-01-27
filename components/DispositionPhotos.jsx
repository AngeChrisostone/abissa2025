import React, { useState } from "react";
import Image from "next/image";
import img from "@/public/json/img.json";

export default function Disposition(){
    const [selectedImage, setSelectedImage] = useState(null);
    return(
        
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {img.photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        onClick={() => setSelectedImage(photo.src)} // Ouvre la lightbox
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            className="group-hover:scale-105 transition-transform duration-300"
                            width={400}
                            height={300}
                        />
                    </div>
                ))}
                  {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Image agrandie"
                        className="max-w-full max-h-full"
                    />
                </div>
            )}
    </div>
    );
}