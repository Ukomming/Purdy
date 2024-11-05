"use-client"
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <>
    <Link href={'/'} className=" underline text-teal-600 lg:invisible">Back to Home Page </Link>
      <h2 className="  text-center mt-20 sm:text-6xl text-4xl text-green-500 capitalize underline hover:decoration-4 ">
        Gallery
      </h2>

      <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
        <div role="tablist" className="tabs tabs-lifted0">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-blue-500 underline"
            aria-label="Picture"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="carousel w-full lg:w-96 lg:ml-96">
              <div id="slide1" className="carousel-item relative w-full">
                <Image
                  src="/purdy-pics/20231129_153351.jpg"
                  width={500}
                  height={1}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <Image
                  src="/purdy-pics/IMG_20231122_142521_855.jpg"
                  width={1100}
                  height={10}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <Image
                  src="/purdy-pics/20231129_153556.jpg"
                  width={1000}
                  height={10}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <Image
                  src="/purdy-pics/20231129_153715.jpg"
                  width={1200}
                  height={10}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-blue-500 underline"
            aria-label="Videos"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 sm:text-6xl text-red-500"
          >
            {/* Coming soon */}
            <iframe width="250" 
            height="389" 
            src="https://www.youtube.com/embed/I-xdrH9gXnI" 
            title="Brief Review of Purdy Natural Herbal Clinic Services - Dr. Albert Zotorvi" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
