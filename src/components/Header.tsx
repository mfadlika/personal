import React, { useState, useEffect } from "react";
import { ArrowLeftSVG, PlusSVG } from "../../public/assets/svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [isActive, SetIsActive] = useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const { pathname, events } = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);
    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleStop);
    events.on("routeChangeError", handleStop);
    return () => {
      events.off("routeChangeStart", handleStart);
      events.off("routeChangeComplete", handleStop);
      events.off("routeChangeError", handleStop);
    };
  }, [events]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 rounded-full border-4 border-t-blue-500 border-b-purple-500 border-l-transparent border-r-transparent animate-spin-slow"></span>
              <span className="absolute w-12 h-12 rounded-full border-4 border-t-fuchsia-500 border-b-cyan-400 border-l-transparent border-r-transparent animate-spin-reverse"></span>
              <span className="w-8 h-8 bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-purple-500 rounded-full animate-pulse"></span>
            </div>
            <span className="mt-8 text-xl text-white font-bold tracking-widest animate-fade-in-up uppercase drop-shadow-lg">
              Loading
              <span className="inline-block animate-bounce delay-100">.</span>
              <span className="inline-block animate-bounce delay-200">.</span>
              <span className="inline-block animate-bounce delay-300">.</span>
            </span>
          </div>
        </div>
      )}
      {pathname !== "/" && (
        <div className="mobile-back lg:hidden">
          {pathname !== "/" && (
            <Link href="/">
              <ArrowLeftSVG fill="#516d91"/>
            </Link>
          )}
        </div>
      )}
      <div className={isActive ? "card-box wider" : "card-box"}>
        {isActive && pathname !== "/" && (
          <Link href="/" className="nav-back max-lg:hidden">
            <ArrowLeftSVG fill="#516d91" />
          </Link>
        )}
        <nav className="nav w-full">
          <div className={isActive ? "navlink w-4/12" : "hidden"}>
            <Link href="/work">
              <span className="text-2xl font-bold">Gallery</span>
            </Link>
          </div>
          <button
            onClick={() => SetIsActive(!isActive)}
            className={isActive ? "w-4/12" : ""}
          >
            <PlusSVG
              height="50px"
              fill="#1A1A1D"
              className={isActive ? "three-dots animate" : "three-dots"}
            />
          </button>
          <div className={isActive ? "navlink w-4/12" : "hidden"}>
            <Link href="/about">
              <span className="text-2xl font-bold">About</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

/* Tailwind custom animations (add to your global CSS if not present):
.animate-spin-slow { animation: spin 2s linear infinite; }
.animate-spin-reverse { animation: spinReverse 2.5s linear infinite; }
@keyframes spinReverse { 100% { transform: rotate(-360deg); } }
.animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(.39,.575,.565,1.000) both; }
@keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: none; } }
*/
