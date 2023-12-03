import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div id='top' className="navbar bg-base-100  sm:px-16 text-green-500 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/services"}>Our Services</Link>
            </li>
            <li>
              <a>Gallery</a>
              <ul className="p-2">
                <li>
                  <Link href={"/gallery"}>Pictures</Link>
                </li>
                <li>
                  <Link href={"/gallery"}>Videos</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Image src="/purdy.jpg" width={100} height={100} alt="logo of purdy" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/services"}>Our Services</Link>
          </li>

          <li tabIndex={0}>
            <details>
              <summary>Galary</summary>
              <ul className="p-2">
                <li>
                  <Link href={"/gallery"}>Pictures</Link>
                </li>
                <li>
                  <Link href={"/gallery"}>Videos</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* The button to open modal */}
        <a
          href="#my_modal_8"
          className=" btn btn-success hover:mb-2  btn-outline text-white"
        >
          Book an appointment
        </a>
        {/* Put this part before </body> tag */}
        <div className="modal" role="dialog" id="my_modal_8">
          <div className="modal-box">
            <h3 className="font-bold text-2xl">Want to book an appointment with the doctor?</h3>
            <p className="py-4">
              Call us on <span className="text-red-500">0500407426</span> or <span className="text-red-500">054834588 </span>to book an appointment now!
            </p>
            <div className="modal-action">
              <a href="#" className="btn">
                BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
