import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 flex h-12 items-center bg-red-400">
        <div className="flex items-center mr-auto ml-8 space-x-10">
          <Link href="/">
            <Image
              src="/pokedex.png"
              height='100'
              width={100}
              alt="PokeDesk"
              priority='true'
            ></Image>
          </Link>
        </div>
        <div className="mr-2 sm:mr-10 flex items-center">
          <span className="material-symbols-outlined pt-[0.1rem] mr-3">
            search
          </span>
          <input
            type="text"
            className="hidden sm:inline-block border border-black rounded"
          />
        </div>
      </div>
    </>
  );
}
