import img1 from "../../assets/img/img1.png";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <h1 className="text-center bg-purple-700 py-10 text-white text-5xl  md:mt-3">
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
              Stage One - Functionality: <br /> Routes, buttons and others
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
    </div>
  );
};

export default Blog;
