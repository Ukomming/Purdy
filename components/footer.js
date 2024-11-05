import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10  bg-black   text-white mt-20">
      <aside >
        <Image 
          src={"/purdy.jpg"}
          width={50}
          height={50}
          className="fill-current py-3  rounded-md"
          />

        <p>
          Purdy Natural Herbal Clinic And Research Centre.
          <br />
          Live the Natural Way
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link href="/services" className="link link-hover">
          Stroke
        </Link>
        <Link href="/services" className="link link-hover">
          Infertility Solutions
        </Link>
        <Link href="/services" className="link link-hover">
          Menstral Disorders Treatment
        </Link>
        <Link href="/services" className="link link-hover">
          Prostate Treatment
        </Link>
        <Link href="/services" className="link link-hover">
          Hepatitis B Management
        </Link>
        <Link href="/services" className="link link-hover">
          Rheumatism Relief
        </Link>
        <Link href="/services" className="link link-hover">
          And many more ...
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Follow us</header>
        <div className="lg:flex lg:flex-col lg:gap-2 lg:ml-8 flex flex-row  gap-8">
          <a href="https://web.facebook.com/profile.php?id=61563265301526">
            <Image
              src={
                "/social/facebook-network-communication-internet-interaction-svgrepo-com.svg"
              }
              width={40}
              height={40}
              />
          </a>
          <a href="https://www.instagram.com/@purdytvgh">
            <Image
              src={"/social/instagram-1-svgrepo-com.svg"}
              width={40}
              height={40}
              />
          </a>
          <a href="https://www.tiktok.com/@purdytvgh">
            <Image
              src={"/social/tiktok-icon-black-1-logo-svgrepo-com.svg"}
              width={40}
              height={40}
              />
          </a>
          <a href="https://www.x.com/@purdytvgh">
            <Image
              src={"/social/twitter-svgrepo-com.svg"}
              width={40}
              height={40}
              />
          </a>
          <a href="https://www.youtube.com/@PurdyTvgh">
            <Image
              src={"/social/youtube-color-svgrepo-com.svg"}
              width={40}
              height={40}
              />
          </a>
        </div>
      </nav>
      <nav>
        <header className="footer-title">Email</header>
        <h2 className="py-3">
          <a className="flex">
            <Image
              src={"/social/gmail-svgrepo-com.svg"}
              width={30}
              height={30}
              />
            {" "}
            <span className="ml-2">
            albertpudy@gmail.com
            </span>
          </a>
        </h2>

        <h3>&copy; Copyright 3023 Purdy Nartural Herbal And Research Centre</h3>
        <h4>
          {" "}
          Developed by <a href="https://github.com/Ukomming/">Mr Upkomming</a>
        </h4>
      </nav>
    </footer>
  );
}
