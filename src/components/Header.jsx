import { useEffect, useState } from 'react';
// import { animate, stagger } from 'motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // animate('.open',{y:[-100,0]},{duration:2})
    // animate('.closed',{y:[0,-100]},{duration:2})
    // animate('li a', { opacity: [0, 1] }, { delay: stagger(0.1) });
  }, [isOpen]);
  return (
    <header
      className="flex justify-between sm:justify-around items-center p-3 "
      id="header"
    >
      <div className="text-3xl font-bodoni text-shadow-sm shadow-indigo-500 ">
        nqv.dev
      </div>

      <div>
        <ul
          className={`gap-3 font-playfair text-center test  ${
            isOpen ? 'open' : 'closed hidden '
          } sm:flex sm:static sm:flex-row sm:bg-inherit sm:h-[unset] `}
        >
          {isOpen ? (
            <li className="mx-auto cursor-pointer hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </li>
          ) : (
            ''
          )}

          <li className="relative mx-auto" onClick={() => setIsOpen(!isOpen)}>
            <a
              href="/"
              className="text-white sm:text-black before:absolute before:h-1 before:w-0 hover:before:w-full before:bg-red-400 before:bottom-0 hover:before:transition-all hover:before:duration-500 hover:font-bold"
            >
              Home
            </a>
          </li>
          <li className="relative mx-auto" onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#about"
              className="text-white sm:text-black before:absolute before:h-1 before:w-0 hover:before:w-full before:bg-red-400 before:bottom-0 hover:before:transition-all hover:before:duration-500 hover:font-bold"
            >
              About
            </a>
          </li>
          <li className="relative mx-auto " onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#projects"
              className="text-white sm:text-black before:absolute before:h-1 before:w-0 hover:before:w-full before:bg-red-400 before:bottom-0 hover:before:transition-all hover:before:duration-500 hover:font-bold"
            >
              Projects
            </a>
          </li>
          <li className="relative mx-auto" onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#contact"
              className="text-white sm:text-black before:absolute before:h-1 before:w-0 hover:before:w-full before:bg-red-400 before:bottom-0 hover:before:transition-all hover:before:duration-500 hover:font-bold"
            >
              Contact
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
