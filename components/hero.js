export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5452255/pexels-photo-5452255.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="sm:mb-10 mb-20 capitalize sm:pb-10 text-white text-5xl sm:text-6xl">
            Welcome To
          </h1>
          <p
            className="sm:mb-5 capitalize sm:pb-10 pb-5 text-green-500  text-4xl  sm:text-6xl  
      "
          >
            PURDY NATURAL HERBAL CLINIC
          </p>
          <p
            className=" capitalize pb-10 text-white hover:text-green-500 text-2xl  sm:text-4xl 
       underline decoration-2 hover:decoration-4"
          >
            Stay Alive The Natural Way
          </p>
        </div>
      </div>
    </div>
  );
}
