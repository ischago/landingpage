import React from "react";

export default function VideoCard({
  title = "Title Here",
  description = "Here’s to the crazy ones, the misfits, the rebels, the troublemakers...",
  videoSrc = "./src/assets/img-for-example.png",
}) {
  return (
    <div className="bg-[#F2F2F2CC]/80 backdrop-blur-xl rounded-3xl shadow-[0_5px_20px_0_#0004] p-0 overflow-hidden flex flex-col select-none">
      {/* Header */}
      <div className="pt-6 pb-4 px-6 text-center">
        <h3 className="font-neue-medium text-2xl text-black mb-1 tracking-tight">
          {title}
        </h3>
        <p className="font-neue font-extrabold text-base text-black/90 leading-tight">
          {description}
        </p>
      </div>

      {/* Media Content */}
      <div className="px-0 relative mb-0 flex-1">
        <div className="w-full max-w-full aspect-9/16 relative overflow-hidden">
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            controls
            muted
            playsInline
            disablePictureInPicture
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>

      {/* Footer / Controls */}
      <div className="h-16 flex border-t border-gray-200">
        <button className="flex-1 hover:bg-gray-50 active:bg-gray-100 transition-colors text-[#007AFF] text-xl font-neue font-extrabold border-r border-gray-200">
          Pausar
        </button>
        <button className="flex-1 hover:bg-gray-50 active:bg-gray-100 transition-colors text-[#007AFF] text-xl font-neue-medium text-center">
          Reproducir
        </button>
      </div>
    </div>
  );
}
