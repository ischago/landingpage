import React, { useState } from "react";
import FolderIcon from "./Icons";
import IntroductionWindow from "./IntroductionWindow";

import folderIcon from "../assets/folder-icon-apple.svg";

const SidebarItem = ({ label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer text-[12px] font-medium transition-colors ${
      active ? "bg-[#D6D6D6] text-black" : "text-[#616161] hover:bg-[#E8E8E8]"
    }`}
  >
    <FolderIcon className="scale-90" fill={`${active ? "#48e" : "#0009"}`} />
    <span>{label}</span>
  </div>
);

const ToolbarIcon = ({ children }) => (
  <div className="p-1 px-1.5 text-[#5C5C5C] transition-colors cursor-pointer">
    {children}
  </div>
);

export default function FinderWindow() {
  const [activeItem, setActiveItem] = useState("Masterclass");

  const folders = [
    { id: 1, title: "1. Introducción", subtitle: "MCCU" },
    { id: 2, title: "2. Titular", subtitle: "MCCU" },
    { id: 3, title: "3. Titular", subtitle: "MCCU" },
    { id: 4, title: "4. Titular", subtitle: "MCCU" },
    { id: 5, title: "5. Introducción", subtitle: "MCCU" },
    { id: 6, title: "6. Introducción", subtitle: "MCCU" },
    { id: 7, title: "7. Introducción", subtitle: "MCCU" },
    { id: 8, title: "8. Introducción", subtitle: "MCCU" },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D1D1D1] font-sans antialiased select-none group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="flex h-[700px] relative">
        {/* Sidebar */}
        <div className="p-1 h-full">
          <div className="hidden bg-linear-to-br from-gray-400/10 to-gray-100/10 backdrop-blur-xl border border-white/10 rounded-3xl md:flex w-56 p-3 flex-col gap-6 font-medium text-[#616161] h-full">
            {/* Favorites Section */}
            <div className="flex gap-2 group-hover:gap-2 transition-all duration-300 mr-2">
              <div className="w-4 h-4 rounded-full bg-[#FF5F57] shadow-sm"></div>
              <div className="w-4 h-4 rounded-full bg-[#FEBC2E] shadow-sm"></div>
              <div className="w-4 h-4 rounded-full bg-[#28C840] shadow-sm"></div>
            </div>
            <div>
              <div className="text-xs font-bold text-[#8F8F8F] mb-2 px-3">
                Favoritos
              </div>
              <div className="flex flex-col">
                <SidebarItem label="Curso" />
                <SidebarItem
                  active={activeItem === "Masterclass"}
                  onClick={() => setActiveItem("Masterclass")}
                  label="Masterclass"
                />
                <SidebarItem label="Recursos" />
                <SidebarItem label="Grabaciones" />
                <SidebarItem label="Materiales" />
              </div>
            </div>

            {/* Locations Section */}
            <div>
              <div className="text-xs font-bold text-[#8F8F8F] mb-2 px-3 flex justify-between group cursor-pointer">
                <span>iCloud</span>
                <span className="hidden group-hover:block text-[#8F8F8F]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <SidebarItem
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  }
                  label="No borrar"
                />
                <SidebarItem
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  }
                  label="BackUp"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-white px-2 pt-2 overflow-y-auto">
          {/* Header / Toolbar */}
          <div className="h-16 sticky top-0 flex items-start justify-between">
            <div className="flex gap-0.5 items-center justify-start">
              {/* Navigation Controls */}
              <div className="flex bg-linear-to-br from-gray-400/10 to-gray-100/10 backdrop-blur-xl border border-white/30 shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-full p-0.5 text-[#5C5C5C] items-center">
                <ToolbarIcon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </ToolbarIcon>
                <div className="w-px h-4 bg-gray-400/20 mx-0.5"></div>
                <ToolbarIcon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </ToolbarIcon>
              </div>

              {/* Title */}
              <span className="font-semibold text-sm text-[#464646]">
                Masterclass
              </span>
            </div>

            {/* Right Toolbar */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-linear-to-br from-gray-400/10 to-gray-100/10 backdrop-blur-xl border border-white/30 rounded-full p-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <ToolbarIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </ToolbarIcon>
                <ToolbarIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2-2v2"></path>
                  </svg>
                </ToolbarIcon>
                <ToolbarIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </ToolbarIcon>
                <ToolbarIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </ToolbarIcon>
              </div>

              <div className="flex items-center bg-linear-to-br from-gray-400/10 to-gray-100/10 backdrop-blur-xl border border-white/30 rounded-full p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5C5C5C]"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>

              <div className="relative group hidden md:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-[#9A9A9A] z-10">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="py-1 pl-8 pr-2 w-32 transition-all duration-300 bg-linear-to-br from-gray-400/10 to-gray-100/10 backdrop-blur-xl border border-white/30 rounded-full text-sm text-[#464646] placeholder-[#9A9A9A] focus:outline-none shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {folders.map((folder) => (
              <div
                key={folder.id}
                onClick={() => setActiveItem(folder)}
                className="flex flex-col items-center gap-2 group cursor-pointer p-2 rounded-xl hover:bg-[#E8E8E8] transition-colors"
              >
                <img src={folderIcon} alt="folder" />
                <div className="text-center">
                  <div className="font-neue-medium text-xs text-nowrap text-[#262626]">
                    {folder.title}
                  </div>
                  <div className="font-neue-medium text-xs text-[#262626]">
                    {folder.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {typeof activeItem === "object" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative animate-in zoom-in-95 duration-200">
            <div
              className="absolute inset-[-1000px]"
              onClick={(e) => {
                e.stopPropagation();
                setActiveItem("Masterclass");
              }}
            ></div>
            <div className="relative z-10 w-full max-w-2xl flex justify-center">
              <IntroductionWindow
                title={activeItem.title}
                onClose={() => setActiveItem("Masterclass")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
