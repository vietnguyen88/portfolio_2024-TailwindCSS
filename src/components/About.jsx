const About = () => {
  return (
    <div
      id="about"
      className="font-bold my-20 px-10 sm:w-3/5 sm:px-0 mx-auto  sm:justify-evenly sm:items-center gap-10"
    >
      <h1 className="text-blue-500 animate-[bounce_2s_infinite] text-lg font-playfair text-xl mb-5 ">
        About Me
      </h1>
      <div className=" sm:flex sm:justify-center">
        <p className="text-base text-slate-600 font-medium leading-6 font-robo sm:w-2/4">
          My journey in web development began with a fascination for creating
          visually appealing and interactive websites. As a React enthusiast,
          I've delved deep into the React ecosystem, leveraging its powerful
          features to build modern and scalable applications. I thrive on
          turning design concepts into reality, ensuring that the user
          experience is not just functional but delightful.
        </p>
        <div className="rounded-full mt-10 sm:mt-0 h-72 sm:w-72">
          <img
            src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
