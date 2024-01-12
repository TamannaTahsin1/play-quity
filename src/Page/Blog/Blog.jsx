import img1 from "../../assets/img/img1.png";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center bg-purple-700 py-10 text-white text-5xl  md:mt-3">
        Our Blog
      </h1>
        {/* first point */}
      <div className="max-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-10">
        <div className="grid grid-cols-1 lg:flex lg:justify-center lg:items-center lg:gap-10 my-10">
          <h1 className="text-center w-16 text-4xl text-white font-bold p-2 px-5 shadow-purple-600 rounded-full bg-orange-500">
            1
          </h1>
          <div>
            <p className="text-2xl text-purple-600 mb-9">
              Stage One - Incubator: <br />
              Training girls to be spirited athletes
            </p>
            <p className="text-sm">
              Playquity will provide a comprehensive ultimate frisbee training
              program for girls (only) <br /> that will enable them to develop
              not only athletic skills but also confidence, empathy, <br />{" "}
              communication and inter-personal skills that are critical to their
              development. Special <br /> sessions for the mothers of the girls
              will be conducted to earn their trust and to <br /> strengthen the
              effects of our programming. At the end of this stage, Playquity
              will help <br /> the girls identify coaches, managers, and player
              positions.
            </p>
          </div>
          <img src={img1} className="md:w-[700px] md:h-72 mt-5" alt="" />
        </div>
        {/* second point */}
        <div className="grid grid-cols-1 lg:flex lg:justify-center lg:items-center lg:gap-10 my-10">
         <div className="text-center">
         <h1 className=" text-center w-16 text-4xl text-white font-bold p-2 px-5 shadow-purple-600 rounded-full bg-orange-500">
            1
          </h1>
         </div>
          <div>
            <p className="text-2xl text-purple-600 mb-9">
              Stage One - Incubator: Training girls to be spirited athletes
            </p>
            <p>
              Playquity will provide a comprehensive ultimate frisbee training
              program for girls (only) <br /> that will enable them to develop
              not only athletic skills but also confidence, empathy, <br />{" "}
              communication and inter-personal skills that are critical to their
              development. Special <br /> sessions for the mothers of the girls
              will be conducted to earn their trust and to <br /> strengthen the
              effects of our programming. At the end of this stage, Playquity
              will help <br /> the girls identify coaches, managers, and player
              positions.
            </p>
          </div>
          <img src={img1} className="md:w-[800px] md:h-72" alt="" />
        </div>
        <div className="grid grid-cols-1 lg:flex lg:justify-center lg:items-center lg:gap-10 my-10">
          <h1 className=" w-16 text-center text-4xl text-white font-bold p-2 px-5 shadow-purple-600 rounded-full bg-orange-500">
            1
          </h1>
          <div>
            <p className="text-2xl text-purple-600 mb-9">
              Stage One - Incubator: Training girls to be spirited athletes
            </p>
            <p>
              Playquity will provide a comprehensive ultimate frisbee training
              program for girls (only) <br /> that will enable them to develop
              not only athletic skills but also confidence, empathy, <br />{" "}
              communication and inter-personal skills that are critical to their
              development. Special <br /> sessions for the mothers of the girls
              will be conducted to earn their trust and to <br /> strengthen the
              effects of our programming. At the end of this stage, Playquity
              will help <br /> the girls identify coaches, managers, and player
              positions.
            </p>
          </div>
          <img src={img1} className="md:w-[800px] md:h-72" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
