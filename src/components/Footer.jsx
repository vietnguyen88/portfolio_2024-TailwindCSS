// import { svgs } from './svg';
const Footer = () => {
  return (
    <footer className="text-center bg-slate-300 w-full relative font-robo text-xs">
      Copyright © {new Date().getFullYear()} Viet Nguyen. All Rights Reserved.
      <a href="#header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute  animate-[bounce_1s_infinite] sm:bottom-6  bottom-8 right-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </a>
    
    </footer>
  );
};

export default Footer;
