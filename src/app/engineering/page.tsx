import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import EngineSpecs from "@/src/components/engineering/EngineSpecs";
import EngineSpecs2 from "@/src/components/engineering/EngineSpecs2";
import Navbar from "@/src/components/Navbar";

export default function EngineeringPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-secondary">
        <section
          className="relative mx-auto flex min-h-[75vh] max-w-[1440px] flex-col justify-center px-6 pt-20"
          style={{
            backgroundImage: "url('/images/engineering/gitBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#000407]" />
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="text-primary text-sm tracking-[0.25em] uppercase">
              Space propulsion
            </p>
            <h1 className="mt-3 text-4xl font-light tracking-tight md:text-6xl">
              Engineering
            </h1>
            <p className="mt-5 max-w-2xl text-base font-light text-[#c5c5c5] md:text-lg">
              Explore ORBIX propulsion systems, from efficient electric
              thrusters to high-performance hybrid rocket engines.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#git-rf-200"
                className="rounded-sm bg-white/10 px-5 py-2 backdrop-blur transition-colors hover:bg-white/20"
              >
                GIT-RF 200
              </a>
              <a
                href="#hy-rocen"
                className="rounded-sm bg-white/10 px-5 py-2 backdrop-blur transition-colors hover:bg-white/20"
              >
                Hy-RocEn
              </a>
            </div>
          </div>
        </section>

        <section id="git-rf-200" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-3xl font-light tracking-tight md:text-5xl">
              GIT-RF 200
            </h2>
            <p className="text-primary mt-3 text-sm tracking-wide md:text-lg">
              RADIO FREQUENCY GRIDDED ION THRUSTER
            </p>
            <p className="mt-5 text-sm leading-6 text-[#acacad] md:text-base">
              Our RF-gridded ion thrusters deliver efficient, precise electric
              propulsion for satellite applications, from station-keeping to
              interplanetary maneuvers.
            </p>
          </div>
          <EngineSpecs2 />
        </section>

        <section
          id="hy-rocen"
          className="scroll-mt-24 border-t border-white/10 px-4 py-16 md:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative mb-12 flex min-h-[50vh] items-center overflow-hidden rounded-2xl">
              <video
                src="/thrusterVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full scale-x-[-1] object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              <div className="relative z-10 max-w-2xl p-6 md:p-12">
                <h2 className="text-3xl font-light md:text-5xl">Hy-RocEn</h2>
                <p className="text-primary mt-3 text-sm tracking-wide md:text-lg">
                  HYBRID ROCKET ENGINE
                </p>
                <p className="mt-5 text-sm leading-6 text-[#d5d5d5] md:text-base">
                  Hybrid propulsion designed for strong performance,
                  reliability, and efficiency, with safety and cost-effectiveness
                  in mind.
                </p>
              </div>
            </div>
            <EngineSpecs />
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
