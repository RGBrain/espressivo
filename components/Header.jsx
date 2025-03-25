"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-orange p-6 py-2">
      <Link href="/" title="return to homepage">
        <Image
          className="shrink-1 m-6"
          src="/esp_logo_white.svg"
          width={250}
          height={250}
          alt="Espressivo Logo"
        />
      </Link>
      <nav>
        {/* Mobile menu */}
        <section className="flex lg:hidden">
          <div
            //   Hamburger Icon
            className="m-6 space-y-2 max-xs:mr-0"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {/* X close icon */}
            <div
              className="absolute right-4 top-6 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex min-h-[250px] flex-col items-center justify-between">
              <NavItem linkName="Whats On" />
              <NavItem linkName="Previous Events" />
              <NavItem linkName="About Us" />
              <NavItem linkName="Contact Us" />
            </ul>
          </div>
        </section>
        {/* Desktop Menu */}
        <ul className="hidden space-x-6 text-xl font-bold text-white lg:flex">
          <NavItem linkName="Whats On" />
          <NavItem linkName="Previous Events" />
          <NavItem linkName="About Us" />
          <NavItem linkName="Contact Us" />
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
