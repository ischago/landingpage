import React from "react";

const Description = ({ text, bold }) => (
  <p className="font-neue font-bold max-[480px]:text-sm text-lg md:text-base mb-4 text-[#262626]">
    {text}
    {bold && <span className="font-neue-bold">{bold}</span>}
  </p>
);

export default function IntroductionWindow({
  title,
  description,
  bold,
  description2,
  description3,
  description4,
  description5,
  description6,
  subtitle,
  items,
  onClose,
}) {
  return (
    <div className="animate-pop-in bg-white rounded-2xl shadow-2xl max-[480px]:w-[300px] w-[430px] max-w-2xl overflow-y-auto custom-scrollbar font-sans border border-gray-100 h-[600px] md:h-[510px] md:w-[600px]">
      {/* Header */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-black/10 sticky top-0 bg-white z-10">
        <div className="flex gap-2">
          <div
            onClick={onClose}
            className="w-3.5 h-3.5 flex items-end justify-center rounded-full bg-[#FF5F57] shadow-sm cursor-pointer hover:bg-[#FF5F57]/80 active:scale-90 transition-all"
          >
            <span className="text-black text-xs font-light block opacity-0 hover:opacity-100 active:opacity-100 transition-all">
              ×
            </span>
          </div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] shadow-sm"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#28C840] shadow-sm"></div>
        </div>
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#8F8F8F]"
          >
            <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
          </svg>
          <span
            className={`font-neue-bold text-nowrap text-[#464646] max-[480px]:text-xs text-base md:text-base ${title.length > 20 ? "text-xs" : "text-base"}`}
          >
            {title}
          </span>
        </div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="px-10 py-4 text-[#262626]">
        <Description text={description} bold={bold} />

        {subtitle && (
          <h3 className="font-instrument-serif italic max-[480px]:text-xl text-2xl md:text-[22px] text-[#262626] mb-4">
            {subtitle}
          </h3>
        )}

        {description2 && <Description text={description2} />}
        {description3 && <Description text={description3} />}
        {description4 && <Description text={description4} />}
        {description5 && <Description text={description5} />}
        {description6 && <Description text={description6} />}

        {items && (
          <ul className="font-neue font-bold max-[480px]:text-sm text-lg md:text-base text-[#262626]">
            {items.map((item, index) => (
              <li key={index} className={`flex items-center gap-3`}>
                <span className="mt-2 w-1 h-1 bg-black rounded-full shrink-0"></span>
                <span>
                  {item.text}
                  <span className="font-neue-bold">{item?.bold}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
