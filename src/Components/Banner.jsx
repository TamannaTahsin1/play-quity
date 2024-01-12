const Banner = () => {
  return (
    <div>

    <div
      className="hidden lg:hero h-[60vh] bg-fixed"
      style={{
          backgroundImage: "url(./banner.jpg)",
        }}
        >
      <div className="hero-overlay  bg-opacity-60 rounded-md overflow-hidden"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="offered">
          <div className="md:flex justify-between items-center  gap-5">
            <div className="w-3/4"></div>
            <div className="text-end ">
              <p className="text-4xl text-white font-bold text-end">
                Building equity through play by inverting gender roles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
  );
};

export default Banner;
