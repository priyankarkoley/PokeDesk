import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
  <>
    <div className="flex bg-red-400 p-3">
			<div className="mr-auto ml-8 space-x-10">
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
			</div>
			<div className="mr-10 flex">
				<span class="material-symbols-outlined mr-3">search</span>
				<input type="text" className="border border-black rounded"/>
			</div>
    </div>
  </>
  );
}
