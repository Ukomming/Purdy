import Link from "next/link";

export default function Services () {
    return (
        <>
        <h2 className="  text-center mt-20 sm:text-6xl text-4xl text-green-500 capitalize underline hover:decoration-4 "> Our Services</h2>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="h-full p-4 lg:w-1/2">
            <div className=" bg-gray-100 px-8 pt-16 pb-16 relative flex md:text-lg text-red-500">
              <ul className=" mx-12  sm::mx-24 [&>*]:py-2 list-disc">
                <li>Halitosis</li>
                <li>Stroke</li>
                <li>High Blood Pressure</li>
                <li>Hapatitis B</li>
                <li>Rheumantism</li>
                <li>Mestrual Disorder</li>
                <li>Infertility</li>
                <li>Sexual Weakness</li>
                <li>Skin Disorder</li>
                <li>Headache</li>
                
              </ul>
              <ul className="[&>*]:py-2 list-disc">
                <li>Waist Pain</li>
                <li>General Pain Management</li>
                <li>Dizziness</li>
                <li>Ulcer </li>
                <li>Malaria</li>
                <li>Typhoid</li>
                <li>Diabetes</li>
                <li>Low Sperm Count And many more</li>
              </ul>
            </div>
          </div>
          <div className="h-full p-4 lg:w-1/2">
            <div className="bg-gray-100 px-8 pt-16 pb-16 relative text-green-500">
              <h1 className="title-font sm:text-2xl text-xl  mb-3">Lab & Massage</h1>
              <p className="mb-3">We use ultra modern diagnotic machine to diagnose the human body to find any ailment</p>
              <Link href="/services" className="text-indigo-500 underline inline-flex items-center">Learn More</Link>
            </div>
          </div>
        </div>
        </>
      );
     }
