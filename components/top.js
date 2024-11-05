import Image from "next/image";
import Link from "next/link";
export default function TOP() {
  return (
    <Link href="#top" className="btn ml- bg-white btn-circle flex ml-10 hover:bg-green-500 text-4xl ">
      <Image src={"/up-arrow-icon.svg"} height={20} width={20} />
    </Link>
    
  );
}
