import { useInView } from "react-intersection-observer";

const ProjectCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col p-10 bg-white transform ${
        inView ? "animate__animated animate__fadeInUp" : "opacity-0"
      } transition-all duration-600 ease-in-out`}
    >
      <div>
        <div
          className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
          }}
        >
          <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Best website collections
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Website
            </p>
          </div>
        </div>
        {/* projectt info */}

        <div>
          <h1>Project name</h1>
          <p>Description</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
