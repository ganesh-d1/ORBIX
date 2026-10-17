"use client";
import TransitionLinks from "./TransitionLinks";
import Image from "next/image";
import Nav from "./Nav";

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/home",
  },
  {
    id: 2,
    title: "Missions",
    href: "/missions",
  },
  {
    id: 3,
    title: "Engineering",
    href: "/engineering",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 flex min-h-[70px] items-center justify-center bg-transparent">
        {/* Navbar for large displays */}
        <div className="navbar fixed left-[50%] z-999 hidden h-[70px] w-full -translate-x-[50%] items-center justify-between px-10 text-white backdrop-blur-3xl md:flex md:px-4 lg:px-10">
          <TransitionLinks
            prefetch
            href="/home"
            className="flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/icon/SvgLogo.png"
              alt="ORBIX"
              height={40}
              width={180}
              className="h-9 w-auto object-contain"
            />
          </TransitionLinks>
          <ul className="flex lg:pl-20">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative cursor-pointer rounded-full px-3 py-1"
              >
                <TransitionLinks
                  className="underlineAnimationLinks text-secondary text-sm"
                  href={link.href}
                >
                  {link.title}
                </TransitionLinks>
              </li>
            ))}
          </ul>
          <TransitionLinks
            prefetch
            href="/contact"
            className="flex items-center gap-2 rounded-sm bg-linear-65 from-purple-700 to-teal-400 px-6 py-0.5 tracking-tight"
          >
            <span>Contact Us</span>
          </TransitionLinks>
        </div>
        {/* Navbar for small displays */}
        <div className="fixed left-0 z-999 flex w-full max-w-full flex-1 items-center justify-between pl-4 text-white md:hidden">
          <TransitionLinks href="/home" className="flex items-center gap-2">
            <Image
              src="/icon/SvgLogo.png"
              alt="ORBIX"
              width={135}
              height={34}
              className="h-8 w-auto object-contain"
            />
          </TransitionLinks>
          <div>
            <Nav />
          </div>
        </div>
      </nav>
    </>
  );
}
