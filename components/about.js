"use-client"

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h2 className="  text-center mt-20 sm:text-6xl text-4xl text-green-500 capitalize  underline hover:decoration-4">
        {" "}
        About us
      </h2>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="h-full p-4 lg:w-1/3">
          <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
            <h2 className=" flex gap-3 text-base mb-1 text-red-500">
              <Image
                src="/location_map_map pin_marker_pin_icon.svg"
                width={30}
                height={5}
                alt="logo of purdy"
              />
              Location
            </h2>
            <h1 className="title-font sm:text-2xl text-xl  mb-3">
              ADDA KASSEH{" "}
            </h1>
            <p className="mb-3">
              OPPOSITE GREEN HEIGHT HOTEL , NEAR AWILLOW'S HOUSE
            </p>
            <Link
              href="/about"
              className="text-indigo-500 underline inline-flex items-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className=" h-full p-4 lg:w-1/3">
          <div className="bg-gray-100 px-8 pt-16 pb-16 relative">
            <h2 className="flex gap-3 text-base mb-1 capitalize text-red-500">
              <Image
                src="/time-125.svg"
                width={35}
                height={10}
                alt="logo of purdy"
              />
              Working hours
            </h2>
            <h1 className="title-font sm:text-2xl text-xl  mb-3 text-green-500">
              MONDAY - FRIDAY{" "}
            </h1>
            <p className="mb-3">7:00AM - 5:00PM</p>
            <h1 className="title-font sm:text-2xl text-xl  mb-3 text-green-500">
              SATURDAYS{" "}
            </h1>
            <p className="mb-3">7:30AM - 2:00PM</p>
            <Link
              href="/about"
              className="text-indigo-500 underline inline-flex items-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="h-full p-4 lg:w-1/3">
          <div className="bg-gray-100 px-8 pt-16 pb-16 relative mw-[300px]">
            <h2 className="flex gap-3 text-base mb-1 text-red-500">
              {" "}
              <Image
                src="/phone_call_telephone_icon.svg"
                width={10}
                height={5}
                alt="logo of purdy"
              />
              Contact Us
            </h2>
            <h1 className="title-font sm:text-2xl text-xl mb-3 text-green-500">
              Telephone line
            </h1>
            <p className="mb-3">0500 407 426</p>
            <p className="mb-3">0548349588</p>
            <h1 className="title-font sm:text-2xl text-xl mb-3 text-green-500">
              WhatsApp
            </h1>
            <p className="mb-3">0548349588</p>
            <h1 className="title-font sm:text-2xl text-xl mb-3 text-green-500">Email</h1>
            <p>albertpurdy@gmail.com</p>
            <p className="mb-3"></p>
            <Link
              href="/about"
              className="text-indigo-500 underline inline-flex items-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
