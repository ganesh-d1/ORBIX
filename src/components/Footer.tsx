import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative z-99 w-full bg-[#0a0b0e]">
      <main className="text-secondary mx-auto w-full max-w-7xl bg-[#0a0b0e] px-4 md:pt-10">
        <div className="mx-auto w-fit text-center">
          <h4 className="text-[22px] font-thin text-[#979798]">
            Throttling to the Beyond
          </h4>
          <Image
            src="/icon/SvgLogo.png"
            alt="ORBIX"
            height={80}
            width={340}
            className="my-5 h-auto w-[min(80vw,340px)]"
          />
          <Link
            href="/contact"
            className="text-p rounded-md bg-[#f8f3ea] px-14 py-1.5 text-black"
          >
            Contact Us
          </Link>
          <p className="mt-5 mb-2 font-thin text-[#979798]">
            © 2026 ORBIX
          </p>
        </div>
        <div className="h-px w-full bg-[#818181]" />
        <div className="flex w-full flex-col py-8 text-sm font-thin text-[#bababd] md:flex-row">
          <div className="flex w-full justify-evenly gap-5 md:w-1/2 md:justify-start">
            <Link href="/home">Home</Link>
            <Link href="/missions">Missions</Link>
            <Link href="/engineering">Engineering</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="mt-4 flex w-full justify-center gap-2 md:mt-0 md:w-1/2 md:justify-end">
            <a
              href="https://www.instagram.com/orbixspace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon/Instagram.png"
                alt="Instagram"
                height={40}
                width={40}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/orbix-space/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon/Linkedin.png"
                alt="LinkedIn"
                height={40}
                width={40}
              />
            </a>
            <a
              href="https://x.com/orbixspace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icon/X.png" alt="X" height={40} width={40} />
            </a>
            <a
              href="https://www.crunchbase.com/organization/orbix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon/CB.png"
                alt="Crunchbase"
                height={40}
                width={40}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
