"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

const SignIn = () => {
  const mainDiv = useRef(null);

  const signIn = useRef(null);
  const signInButton = useRef(null);
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const emailInput = useRef(null);
  const redirectionRef = useRef(null);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  useEffect(() => {
    gsap.fromTo(
      mainDiv.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      usernameInput.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      passwordInput.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      emailInput.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      redirectionRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center gap-1 items-center h-screen">
        {/* SIGN UP */}
        <form
          action=""
          className="flex flex-col gap-3 w-[19.5rem] min-h-[25rem] h-auto mt-10 bg-cyan-300 rounded-xl relative -top-14"
          ref={mainDiv}
        >
          <h1
            className="mx-auto mt-12 p-2 font-semibold text-3xl border-black border-b-2"
            ref={signIn}
          >
            Sign up
          </h1>
          {/* USERNAME INPUT */}
          <div
            className="flex flex-col w-[17rem] mx-auto mt-5"
            ref={usernameInput}
          >
            <label htmlFor="userName" className="text-sm">
              Username
            </label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="h-[2.3rem] mt-1 p-4 outline-none rounded-md"
            />
          </div>
          {/* PASSWORD INPUT */}
          <div
            className="flex flex-col w-[17rem] mx-auto mt-4"
            ref={passwordInput}
          >
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <div className="flex mt-1 w-[17rem] h-[2.4rem] bg-white justify-between rounded-md">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="h-[2.2rem] w-[17rem] p-3 outline-none translate-x-1"
              />
              {showPassword ? (
                <BsEyeSlashFill
                  onClick={toggleShowPassword}
                  size={40}
                  className="p-1 pr-3"
                />
              ) : (
                <IoEyeSharp
                  size={40}
                  onClick={toggleShowPassword}
                  className="p-1 pr-3"
                />
              )}
            </div>
          </div>
          {/* Email INPUT */}
          <div
            className="flex flex-col w-[17rem] mx-auto mt-5"
            ref={emailInput}
          >
            <label htmlFor="email" className="text-sm">
              E-Mail
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="h-[2.3rem] mt-1 p-4 outline-none rounded-md"
            />
          </div>
          {/* LOGIN BUTTON */}
          <button
            type=""
            className="mx-auto m-6 w-[6rem] h-[2rem] bg-cyan-200 hover:bg-cyan-500 rounded-lg"
            ref={signInButton}
          >
            Sign in
          </button>
        </form>
        <div className="flex flex-col gap-2 items-center" ref={redirectionRef}>
          <p>Aldready have an account?</p>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
