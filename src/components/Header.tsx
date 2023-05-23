import React, { useState } from "react";
import { ArrowLeftSVG, PlusSVG } from "../../public/assets/svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [isActive, SetIsActive] = useState<Boolean>(false);
  const { pathname } = useRouter();

  return (
    <>
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
