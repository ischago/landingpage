import { useState, useRef } from "react";
import "./index.css";
import FinderWindow from "./components/FinderWindow";
import VideoCard from "./components/VideoCard";
import FAQSection from "./components/FAQSection";
import { ArrowDownIcon } from "./components/Icons";

import miniFolder from "./assets/mini-folder.svg";
import vsl from "./assets/vsl.mp4";
import textStartHere from "./assets/text-start-here.svg";
import arrowDown from "./assets/arrow-down.svg";
import frame from "./assets/Frame.svg";
import firstVideo from "./assets/first-video.MP4";
import secondVideo from "./assets/second-video.MP4";
import thirdVideo from "./assets/third-video.MP4";

import review1 from "./assets/review-1.svg";
import review2 from "./assets/review-2.svg";
import review3 from "./assets/review-3.jpeg";
import review4 from "./assets/review-4.jpeg";
import review5 from "./assets/review-5.jpeg";
import review6 from "./assets/review-6.jpeg";
import review7 from "./assets/review-7.jpeg";
import review8 from "./assets/review-8.jpeg";
import review9 from "./assets/review-9.jpeg";

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.controls = true;
      videoRef.current.load();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section className="relative py-10 bg-[#F5FFF4] animate-fade-in-up">
        <div className="absolute inset-0 opacity-70 bg-[url('./assets/TEXTURE_Paper.png')] bg-cover bg-center bg-no-repeat pointer-events-none mask-[linear-gradient(to_bottom,black_70%,transparent)]"></div>
        <div className="flex flex-col items-center justify-start gap-6 relative z-10">
          <h2 className="font-instrument-serif text-center italic max-[400px]:text-2xl text-3xl text-[#163A11]">
            Masterclass de Contenido Único
          </h2>
          <h1 className="font-neue-bold text-5xl max-w-3xl text-center text-[#262926] leading-tight px-4">
            CREA CONTENIDO CON POTENCIAL Y ESTILO PROPIO
          </h1>
          <p className="font-neue text-xl text-center text-[#262926] max-w-2xl px-4">
            Estas a un solo paso de{" "}
            <span className="font-neue-bold">dominar la habilidad</span> más
            demandada de esta década, la cuál te hará conseguir todo aquello que
            estés buscando.
          </p>
          <div className="flex flex-col items-center gap-2 w-full px-4">
            <button className="font-neue text-xl font-extrabold text-center bg-[#346C2D] text-white px-8 py-4 rounded-lg hover:bg-[#2a5624] transition-colors cursor-pointer relative">
              Acceder
              <img
                src={textStartHere}
                alt=""
                className="absolute top-3 -left-30 scale-100 sm:right-40 sm:scale-100"
              />
            </button>
          </div>
          <div className="w-full px-4 flex justify-center mt-20 relative z-10">
            <div className="relative w-full max-w-4xl md:max-h-[548px] mx-auto rounded-xl shadow-[0_5px_20px_0_#0004] overflow-hidden group">
              {/* Window Header */}
              <div className="bg-[#444441] backdrop-blur-md px-4 py-3 flex items-center">
                <div className="flex gap-2 group-hover:gap-2.5 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-[#FF736A] shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-[#19C332] shadow-inner"></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-60">
                  <img
                    src={miniFolder}
                    alt="Folder"
                    className="w-4 h-4 text-white"
                  />
                  <span className="font-neue text-xs font-medium text-white tracking-wide pt-0.5">
                    Masterclass_crea_contenido
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex justify-center bg-[#F5FFF4]">
                {!isPlaying && (
                  <button
                    onClick={handlePlay}
                    className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 3L19 12L5 21V3Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
                <video
                  ref={videoRef}
                  muted
                  autoPlay
                  playsInline
                  disablePictureInPicture
                  className="w-full h-auto md:max-w-4xl md:max-h-[548px] object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src={vsl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="animate-fade-in-up">
        <div className="flex flex-col justify-center bg-[#F5FFF4] pt-10 pb-20 gap-20">
          <div className="flex flex-col items-center">
            <h3 className="font-neue-bold text-2xl w-2/3 text-center text-[#262926]">
              EXPLORA EL CONTENIDO DE LA
            </h3>
            <h3 className="font-instrument-serif italic text-4xl text-[#163A11]">
              masterclass
            </h3>
            <img src={arrowDown} alt="arrow-down" className="scale-60" />
          </div>
          <div className="flex justify-center px-4">
            <FinderWindow />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center bg-[#F5FFF4] py-10">
          <button className="font-neue text-xs font-extrabold text-center bg-[#346C2D] text-white px-5 py-3 rounded-lg hover:bg-[#2a5624] tracking-wider transition-colors cursor-pointer">
            Desbloquear Contenido Completo
          </button>
        </div>
      </section>
      <section className="animate-fade-in-up">
        <div className="pt-20 flex flex-col justify-center items-center gap-20 bg-[#F5FFF4]">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-[#2962D9] px-3 rounded-full">
              <ArrowDownIcon />
              <img src={frame} alt="frame" className="scale-80" />
              <h4 className="font-neue font-extrabold text-lg text-white">
                Alumnos de la masterclass
              </h4>
            </div>
            <h3 className="font-instrument-serif italic text-4xl text-center text-[#163A11]">
              Creadores que confiaron en esta masterclass
            </h3>
          </div>
          <div className="flex flex-col gap-9 lg:grid lg:grid-rows-2 lg:grid-cols-3 items-center justify-center px-7 pb-8">
            <div className="row-span-2">
              <VideoCard
                title="@nacho.lietor"
                description="“Conseguí resultados gracias a crear contenido diferente”"
                videoSrc={firstVideo}
              />
            </div>
            <div className="row-span-2 flex flex-col lg:flex-col-reverse gap-9">
              <img src={review1} alt="review-1" className="w-full" />
              <VideoCard
                title="@tiago360_"
                description="“Di el paso que me faltaba para publicar sin miedo”"
                videoSrc={secondVideo}
              />
            </div>
            <div className="row-span-2 flex flex-col gap-9">
              <img src={review2} alt="review-2" className="w-full" />
              <VideoCard
                title="@ismontxu"
                description="“No tenía experiencia y acabé haciendo contenido increible”"
                videoSrc={thirdVideo}
              />
            </div>
            <div className="col-span-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <img src={review3} alt="review-3" className="rounded-lg" />
              <img src={review4} alt="review-4" className="rounded-lg" />
              <img src={review5} alt="review-5" className="rounded-lg" />
              <img src={review6} alt="review-6" className="rounded-lg" />
              <img src={review7} alt="review-7" className="rounded-lg" />
              <img src={review8} alt="review-8" className="rounded-lg" />
              <img src={review9} alt="review-9" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <footer className="animate-fade-in-up">
        <div className="px-1 md:px-2 pt-30 bg-[#F5FFF4]">
          <FAQSection />
        </div>
      </footer>
    </>
  );
}

export default App;
