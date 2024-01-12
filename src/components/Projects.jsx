const projects = [
  {
    name: 'Games',
    des: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.",
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link_code: 'abc',
    link_demo: 'abc',
  },
  {
    name: 'Cosmetics',
    des: " Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.",
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link_code: 'abc',
    link_demo: 'abc',
  },
  {
    name: 'Shop',
    des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link_code: 'abc',
    link_demo: 'abc',
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="animate-spin font-bold my-20 px-10 sm:w-3/5 sm:px-0 mx-auto sm:flex sm:items-center "
    >
      <div>
        <h1 className="text-blue-500 animate-[bounce_2s_infinite] font-playfair text-xl  ">
          Portfolio
        </h1>
        <p className="font-robo tracking-wide mb-5">
          Each project is a chance to grow
        </p>
        {projects.map((project, index) => (
          <div
            className={`relative sm:flex sm:gap-10 mb-10 sm:jusfity-evenly ${
              index % 2 !== 1 ? 'sm:flex-row-reverse' : ''
            }  shadow-lg p-5 rounded-lg bg-slate-100`}
          >
            <div className="sm:w-1/2">
              <h1>{project.name}</h1>
              <p className="text-base text-slate-600 font-medium leading-6 font-robo">
                {project.des}
              </p>
              <div className="flex gap-10  text-xs  mt-2">
                <a href={project.link_code}>
                  <span>Code</span>
                  <svg
                    className="inline align-sup ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </a>
                <a href={project.link_demo}>
                  <span>Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 inline align-sup  ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-full mt-2 sm:mt-0 sm:w-60 sm:h-60 h-60 ">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={project.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-full mt-10 sm:mt-0"></div>
    </div>
  );
};

export default Projects;
