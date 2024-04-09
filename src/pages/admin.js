import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const admin = () => {
  return (
    <>
      <header className="flex justify-between items-center md:px-16 sm:px-8 px-4 py-6 bg-white border-b-2 mb-16">
        <Image src="ku.svg" width={100} height={100} />
        <div className="flex items-center gap-4">
          <Link href="/">
            <button>Login</button>
          </Link>
          <button className="px-4 py-2 rounded-3xl bg-black text-white">
            Sign Up
          </button>
        </div>
      </header>
      <main className=" flex flex-col gap-10 md:px-16 sm:px-8 px-4 ">
        <h1 className=" text-2xl font-bold mb-5">Contact Admin</h1>
        <Image src="/qr.png" width={400} height={400} />
        <p>Please contact the admin to finish up the process.</p>
      </main>
    </>
  );
};

export default admin;
