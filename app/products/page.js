"use-client"
import Link from "next/link";

export default function Products() {
  return (
    <>
    <Link href={'/'} className=" underline text-teal-600 lg:invisible">Back to Home Page </Link>
      <h2 className="  text-center mt-20 sm:text-6xl text-4xl text-green-500 capitalize underline hover:decoration-4 ">
        Products
      </h2>
<br/>
<br/>
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
    </>
  );
}
