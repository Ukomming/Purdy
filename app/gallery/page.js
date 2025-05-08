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
            <div className=" ml-40 mr-40 mt-40">


<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="purdy-pics/1.jpg"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="purdy-pics/2.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
  src="purdy-pics/3.jpg" 
     className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="purdy-pics/4.jpg"
      className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img
      src="purdy-pics/5.jpg"
      className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full">
    <img
      src="purdy-pics/6.jpg"
      className="w-full" />
  </div>
  <div id="item7" className="carousel-item w-full">
    <img
      src="purdy-pics/7.jpg"
      className="w-full" />
  </div>
  <div id="item8" className="carousel-item w-full">
    <img
      src="purdy-pics/8.jpg"
      className="w-full" />
  </div>
  <div id="item9" className="carousel-item w-full">
    <img
      src="purdy-pics/9.jpg"
      className="w-full" />
  </div>
  <div id="item10" className="carousel-item w-full">
    <img
      src="purdy-pics/10.jpg"
      className="w-full" />
  </div>
  <div id="item11" className="carousel-item w-full">
    <img
      src="purdy-pics/11.jpg"
      className="w-full" />
  </div>
  <div id="item12" className="carousel-item w-full">
    <img
      src="purdy-pics/12.jpg"
      className="w-full" />
  </div>
  <div id="item13" className="carousel-item w-full">
    <img
      src="purdy-pics/13.jpg"
      className="w-full" />
  </div>

</div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>  
  <a href="#item6" className="btn btn-xs">6</a>
  <a href="#item7" className="btn btn-xs">7</a>
  <a href="#item8" className="btn btn-xs">8</a>
  <a href="#item9" className="btn btn-xs">9</a>
  <a href="#item10" className="btn btn-xs">10</a>
  <a href="#item12" className="btn btn-xs">12</a>
  <a href="#item13" className="btn btn-xs">13</a>
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
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
