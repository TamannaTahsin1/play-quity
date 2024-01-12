import img1 from "../../assets/img/img1.png";
import "./Blog.css";
import { FaLocationArrow } from "react-icons/fa";


const Blog = () => {
  return (
    <div>
      <h1 className="text-center bg-purple-700 py-8 text-white text-5xl  md:mt-3">
        Our Blog
      </h1>
      {/* first point */}
      <div className="max-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-10">
        <div className="grid grid-cols-1 lg:flex lg:justify-center lg:items-center lg:gap-10 my-10">
          <h1 className="rounded">1</h1>
          <div>
            <p className="text-2xl text-purple-600 mb-9">
              Stage One - Home: <br />
              Project Details
            </p>
            <p className="text-base">
              In Playquity website, their is a progressive <br /> organization
              dedicated to building equity through play <br /> by challenging
              traditional gender roles. Their ultimate <br /> frisbee coaching
              program empowers girls to become <br /> spirited athletes,
              fostering both sports and leadership <br /> skills. The initiative
              goes beyond the field, aiming to instill <br />
              confidence and independence in girls, preparing them to take on <br />
              coaching  roles in their communities. Also there are a model
              section where they <br /> give  a detail view of their learning
              structure.
            </p>
          </div>
          <img src={img1} className="md:w-[700px] md:h-72 mt-5" alt="" />
        </div>
        {/* second point */}
        <div className="grid grid-cols-1 lg:flex lg:justify-center lg:items-center lg:gap-10 my-10">
          <div className="text-center">
            <h1 className=" rounded">2</h1>
          </div>
          <div>
            <p className="text-2xl text-purple-600 mb-9">
              Stage two - Functionality: <br /> Routes, buttons and others
            </p>
            <p>
              All buttons on the website have real functions. <br />
              Each button redirects users to different links, <br /> ensuring a
              practical and efficient user experience. <br /> Sections on the
              website align with route names, making navigation intuitive. Users
              can expect that each section is directly related to the indicated
              route, streamlining the overall structure. In addition, I link the
              join us section where their is form so that user can use the form
              if they want
            </p>
          </div>
          <img src={img1} className="md:w-[800px] md:h-72" alt="" />
        </div>
      </div>
      <div className="bg-purple-700 text-white mb-20 p-5">
        <h1 className="text-center text-4xl">My ideas about this website</h1>
        <div className="text-start mt-5">
          <div className="flex justify-center items-center gap-2">
          <FaLocationArrow /> 
         <p> I can improve and accentuate the UI appearance.</p>
          </div>
          <div className="flex justify-center md:items-center gap-2">
          <FaLocationArrow />
          <p>
          Additionally, I can add more animation and functionality to make this website more enjoyable for users.
          </p>
          </div>
          <div className="flex justify-center items-center gap-2">
          <FaLocationArrow /> 
          <p>
          Furthermore, I can incorporate authentication to enhance the websites security.
          </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
