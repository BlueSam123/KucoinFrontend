import Image from "next/image";
import Link from "next/link";
import React from "react";

const Confirm = () => {
  return (
    <>
      <header className="flex justify-between items-center md:px-16 sm:px-8 px-4 py-6 bg-white border-b-2 mb-16">
        <Image src="ku.svg" width={100} height={100} />
        <div className="flex items-center gap-4">
          <button>Login</button>
          <button className="px-4 py-2 rounded-3xl bg-black text-white">
            Sign Up
          </button>
        </div>
      </header>
      <main className=" flex flex-col gap-10 md:px-16 sm:px-8 px-4 ">
        <h1 className=" text-2xl font-bold mb-5">Code</h1>
        <p>
          Enter 2fa 6-Digital token code received in your email or phone number.{" "}
        </p>
        <div className="flex flex-col gap-8">
          <input
            placeholder="Code"
            type="text"
            className=" p-4  rounded-lg  border-green-500 border-2 bg-white"
          ></input>
        </div>
        <Link href="/">
          <button className="px-4 py-2 rounded-3xl bg-black text-white">
            Proceed
          </button>
        </Link>
      </main>
    </>
  );
};

export default Confirm;
