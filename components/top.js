import Image from "next/image";
export default function TOP() {
  return (
    <a href="#top" className="btn bg-green-500 btn-circle flex text-4xl  ">
      <Image src={"/up-arrow-icon.svg"} height={20} width={20} />
    </a>
    
  );
}
