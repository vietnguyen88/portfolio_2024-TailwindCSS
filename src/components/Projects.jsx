const projects = [
  {
    name: "Todo-App",
    des: "Welcome to our new and intuitive Todo App, where productivity meets seamless design! Our Todo App leverages the power of Evergreen UI for a clean and elegant user interface, paired with Firebase Firestore as the backend database, ensuring a robust and scalable solution for all your task management needs.",
    img: "https://firebasestorage.googleapis.com/v0/b/todo-app-2024.appspot.com/o/Screenshot_2024-03-21_215232-removebg-preview%20(2).png?alt=media&token=05ebb9ae-f7f2-492a-b770-823384a2868f",
    link_code:
      "https://github.com/vietnguyen88/Todo-App-EvergreenUI-Firebase-Firestore-",
    link_demo: "https://todo-app-evergreen-ui-firebase-firestore.vercel.app/",
  },
  {
    name: "Weather-App",
    des: "Weather-App is a sleek and intuitive weather application built using Next.js, Weather API, and Tailwind CSS, designed to provide accurate and up-to-date weather information at your fingertips. With its user-friendly interface, Weather-App allows users to effortlessly search for and display local time, current weather conditions, and a five-hour weather forecast based on the time of query.",
    img: "https://firebasestorage.googleapis.com/v0/b/todo-app-2024.appspot.com/o/Untitled%20design.png?alt=media&token=7ffbd0ab-c441-4281-9cc7-97ae6e08a7f6",
    link_code: "https://github.com/vietnguyen88/weather-app",
    link_demo: "https://weather-app-orcin-seven-24.vercel.app/",
  },
  {
    name: "Ecommerce-Shop",
    des: "Coming Soon",
    img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link_code: "/",
    link_demo: "/",
  },
  {
    name: "Recipe App",
    des: "Coming Soon",
    img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link_code: "https://github.com/vietnguyen88/FoodRecipe",
    link_demo: "https://food-recipe-tan.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="animate-spin font-bold my-20 px-10 md:w-3/5 md:px-0 mx-auto md:flex md:items-center "
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
            key={project.name}
            className={`relative md:flex md:gap-10 mb-10 md:jusfity-evenly md:items-center ${
              index % 2 !== 1 ? "md:flex-row-reverse" : ""
            }  shadow-lg p-5 rounded-lg bg-slate-100`}
          >
            <div className="md:w-1/2">
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
            <div className="rounded-full mt-2 md:mt-0  md:h-60 h-60 ">
              <img
                className="w-full h-full rounded-lg object-contain"
                src={project.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-full mt-10 md:mt-0"></div>
    </div>
  );
};

export default Projects;
