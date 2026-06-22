import {  FaLink } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-white/10 text-blue lg:mx-[490px] font-space">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6  ">

        {/* Copyright */}
        <p className="text-center text-xs text-blue-600  font-serif italic sm:text-left">
          © {new Date().getFullYear()} 4darDigital Hub. All Rights Reserved.
        </p>

        {/* Brand */}
        <div className="text-sm  tracking-wide  text-blue-600  font-bold">
          4darDigital 
        </div>

         {/* Project Section */}
        
        <a
        href="https://web-4dadigital.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs text-white transition hover:scale-105 font-semibold font-space"
        >
          <FaLink className="text-base" />
          Klik Projek Kami
        </a>

       
      </div>
    </footer>
  );
}