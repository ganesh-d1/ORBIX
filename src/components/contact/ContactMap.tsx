import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactMap() {
  const [location, setLocation] = useState("office");

  return (
    <div className="overflow-clip px-4 xl:px-0">
      <section className="text-secondary mx-auto max-w-7xl font-thin">
        <h3 className="text-h4 md:text-h3 text-center">
          Contact <span className="text-primary">Us.</span>
        </h3>
        <h4 className="text-h6 md:text-h4 mt-10">
          We are located <span className="text-primary">in.</span>
        </h4>

        <div
          aria-label="Illustrative map of fictional ORBIX demo locations"
          className="relative mx-auto mt-4 flex aspect-[1000/300] min-h-48 w-full max-w-[1000px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#071018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(114, 180, 203, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(114, 180, 203, 0.08) 1px, transparent 1px), radial-gradient(ellipse at 50% 50%, rgba(0, 128, 200, 0.2), transparent 55%)",
            backgroundSize: "48px 48px, 48px 48px, cover",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute h-[55%] w-[55%] rotate-[-18deg] rounded-[50%] border border-primary/30"
          />
          <div
            aria-hidden="true"
            className="absolute h-[35%] w-[35%] rotate-[25deg] rounded-[50%] border border-white/10"
          />
          <div className="absolute inset-0">
            <MapPin
              aria-hidden="true"
              className="text-primary absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2"
              style={{
                top: location === "office" ? "42%" : "61%",
                left: location === "office" ? "47%" : "62%",
              }}
            />
          </div>
          <div className="relative rounded-lg border border-white/10 bg-black/60 px-5 py-3 text-center backdrop-blur">
            <p className="text-xs tracking-[0.2em] text-[#aeb8c0] uppercase">
              ORBIX Demo Location
            </p>
            <p className="mt-1 text-sm text-white md:text-base">
              {location === "office" ? "Austin Demo HQ" : "Boulder Research Lab"}
            </p>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-[#948c8d]">
          Illustrative location graphic only. All addresses below are fictional.
        </p>

        <div className="text-sm text-[#948c8d]">
          <p className="flex w-fit items-center justify-center gap-2">
            <Image
              src="/images/contact/mail.png"
              alt=""
              height={15}
              width={15}
            />
            demo@orbix.example
          </p>
          <p className="flex w-fit items-center justify-center gap-2">
            <Image
              src="/images/contact/phone.png"
              alt=""
              height={15}
              width={15}
            />
            +1 (555) 010-2048
          </p>
        </div>

        <div className="my-5 flex flex-col gap-2 md:flex-row md:gap-10">
          <div className="rounded-xl bg-[#011019] p-5">
            <button
              type="button"
              aria-pressed={location === "office"}
              className="flex items-center gap-2 text-left text-[18px]"
              onClick={() => setLocation("office")}
            >
              <div
                className={`${location === "office" ? "bg-primary" : "bg-background"} ml-[2px] h-2 w-2 rounded-full ring-[0.5px] ring-[#8f8f8f] ring-offset-3 ring-offset-black`}
              />
              Demo Headquarters
            </button>
            <p className="mt-2 text-sm font-thin text-[#afb2b4]">
              1200 Orbit Way, Suite 400, Austin, TX 78701, USA
            </p>
          </div>
          <div className="rounded-xl bg-[#011019] p-5">
            <button
              type="button"
              aria-pressed={location === "lab"}
              className="flex items-center gap-2 text-left text-[18px]"
              onClick={() => setLocation("lab")}
            >
              <div
                className={`${location === "lab" ? "bg-primary" : "bg-background"} ml-[2px] h-2 w-2 rounded-full ring-[0.5px] ring-[#8f8f8f] ring-offset-3 ring-offset-black`}
              />
              Research and Development Lab
            </button>
            <p className="mt-2 text-sm font-thin text-[#afb2b4]">
              88 Celestial Drive, Boulder, CO 80301, USA
            </p>
          </div>
        </div>

        <p className="text-thin mx-auto my-10 text-center text-sm leading-5 md:w-1/2 md:text-[18px]">
          Have a question, seeking assistance, or exploring partnership
          opportunities? We&apos;re here to support you every step of the way.
        </p>

        <div className="mx-auto my-10 flex max-w-7xl flex-col-reverse items-center gap-8 rounded-xl bg-[#090b0e] px-6 py-8 text-[#cbcbcb] sm:px-10 md:flex-row-reverse md:justify-evenly md:gap-0 md:py-6">
          <div className="flex flex-col justify-center gap-2 text-[18px]">
            <Link
              href="#contact-form"
              className="rounded-full bg-[#1b1b1a] px-4 py-2 text-center"
            >
              Send Us a Message
            </Link>
          </div>

          {/* Divider — horizontal on mobile, vertical on md+ */}
          {/* <div className="w-full border-t border-white/10 md:h-32 md:w-px md:border-t-0 md:border-l" /> */}

          {/* Right */}
          <div className="text-h6 flex w-full flex-col justify-center gap-6 p-5 text-center md:w-1/2 md:gap-10 md:p-10 md:text-[26px]">
            <p>
              Want to Join us and <span className="text-primary">lead</span> the
              way in sustainable{" "}
              <span className="text-primary">space engineering.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
