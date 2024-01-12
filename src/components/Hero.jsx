import { useEffect, useRef, useState } from 'react';
import { svgs } from './svg';
import { animate, stagger, timeline } from 'motion';
import { interpolate } from 'flubber';
import b from '../assets/blob.svg';

const AnimatedTitle = () => {
  const text = 'Front-End React Developer';

  useEffect(() => {
    animate(
      'h1 span',
      { opacity: [0, 1] },
      { delay: stagger(0.1), duration: 5, endDelay: 10 }
    );
  }, []);

  return (
    <h1 className="text-3xl font-bold font-playfair">
      {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </h1>
  );
};

const Hero = () => {
  const shape = useRef();
  const [test, setTest] = useState('normal');
  useEffect(() => {
    const paths = [
      'M29.2,-35C37.1,-28.2,42.2,-18.3,42.8,-8.5C43.4,1.2,39.3,10.8,34.2,19.7C29,28.5,22.6,36.6,14.3,40C5.9,43.4,-4.4,42.1,-13.3,38.2C-22.2,34.3,-29.7,27.8,-34.1,19.8C-38.5,11.8,-40,2.3,-38.8,-7.2C-37.6,-16.7,-33.7,-26.1,-26.8,-33.2C-19.9,-40.2,-9.9,-44.9,0.4,-45.4C10.7,-45.8,21.3,-41.9,29.2,-35Z',
      'M25.5,-31.9C32.2,-24.7,36.4,-15.9,38,-6.7C39.6,2.5,38.8,12.2,34.4,19.9C30,27.6,22.1,33.4,13,37.4C3.9,41.3,-6.4,43.6,-15.3,40.8C-24.1,38.1,-31.6,30.3,-35.5,21.5C-39.4,12.7,-39.8,2.8,-37.8,-6.3C-35.8,-15.5,-31.4,-23.9,-24.7,-31C-18,-38.1,-9,-44.1,0.2,-44.3C9.4,-44.5,18.8,-39,25.5,-31.9Z',
      'M27.8,-34.3C34.6,-27.4,37.8,-17.3,38.4,-7.7C39,1.9,36.9,11,32.4,18.5C27.8,26,20.8,31.8,12.7,34.6C4.7,37.3,-4.4,37.1,-12.8,34.3C-21.2,31.6,-29,26.4,-34,19C-39.1,11.6,-41.4,1.9,-39.3,-6.4C-37.2,-14.8,-30.7,-21.8,-23.4,-28.6C-16.1,-35.4,-8.1,-42,1.2,-43.5C10.5,-44.9,20.9,-41.2,27.8,-34.3Z',
    ];

    let currentPath = shape.current.getAttribute('d');
    function test() {
      let mixPaths;
      let indexOfPath = paths.indexOf(currentPath);

      let nextIndex = indexOfPath === paths.length - 1 ? 0 : indexOfPath + 1;
      // console.log('index', currentPath);
      // console.log('next index', nextIndex);

      mixPaths = interpolate(paths[indexOfPath], paths[nextIndex], {
        maxSegmentLength: 1,
      });
      animate((pro) => shape.current.setAttribute('d', mixPaths(pro)), {
        duration: 2,
      });
      currentPath = paths[nextIndex];
    }

    setInterval(() => test(), 2000);
    // test();
  }, []);

  return (
    <div className="sm:w-3/5 mx-auto my-20 ">
      <div className="flex flex-col gap-10 items-center sm:flex-row sm:justify-evenly px-10 sm:px-0 ">
        <div className="sm:w-1/2">
          <AnimatedTitle />

          <p className="my-5 text-slate-700 font-robo leading-8 font-semibold">
            I'm Viet Nguyen, a passionate front-end React developer with a keen
            eye for creating engaging and dynamic user interfaces.
          </p>
        </div>
        <div className="w-52 h-52 relative ">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-80 absolute z-[-1] -top-14 -left-16"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              d="M29.2,-35C37.1,-28.2,42.2,-18.3,42.8,-8.5C43.4,1.2,39.3,10.8,34.2,19.7C29,28.5,22.6,36.6,14.3,40C5.9,43.4,-4.4,42.1,-13.3,38.2C-22.2,34.3,-29.7,27.8,-34.1,19.8C-38.5,11.8,-40,2.3,-38.8,-7.2C-37.6,-16.7,-33.7,-26.1,-26.8,-33.2C-19.9,-40.2,-9.9,-44.9,0.4,-45.4C10.7,-45.8,21.3,-41.9,29.2,-35Z"
              ref={shape}
              fill="black"
              stroke="black"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="1"
            ></path>
          </svg>
          <img
            className="rounded-full w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          ></img>
        </div>
      </div>
      <div className="flex items-center sm:justify-center mt-20">
        <h1 className="px-5 font-robo">Tech Stack</h1>
        <div className="w-full sm:w-5/12 flex flex-row overflow-hidden after:absolute after:bg-gradient-to-r from-transparent to-white after:w-10 after:h-[50px] after:right-0  before:absolute before:bg-gradient-to-l from-transparent to-white before:z-10 before:w-10 before:h-[50px] before:left-15 sm:after:content-none sm:before:content-none">
          <div className="gap-5 w-full flex animate-[sliding_10s_linear_infinite] sm:animate-none ">
            {svgs.html}
            {svgs.css}
            {svgs.javascript}
            {svgs.react}
            {svgs.tailwind}
          </div>
          <div className="gap-5 w-full flex animate-[sliding_10s_linear_infinite] sm:animate-none sm:hidden">
            {svgs.html}
            {svgs.css}
            {svgs.javascript}
            {svgs.react}
            {svgs.tailwind}
          </div>
          <div className="gap-5 w-full flex animate-[sliding_10s_linear_infinite] sm:animate-none sm:hidden">
            {svgs.html}
            {svgs.css}
            {svgs.javascript}
            {svgs.react}
            {svgs.tailwind}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
