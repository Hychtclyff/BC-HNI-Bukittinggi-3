import GridItem from "@/components/GridItem";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Skeleton from "@/components/ui/skeleton";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

import { Spotlight } from "@/components/ui/spotlight";
import { Vortex } from "@/components/ui/vortex";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Route = createLazyFileRoute("/")({
  component: LandingPage,
});

/* Hero */
const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <div className=" container mx-auto px-10 lg:px-28 flex relative">
        <div className="1/3 py-20 flex flex-col gap-5">
          <h1 className="lg:w-1/2 text- font-semibold text-7xl">
            <span className="text-green-300">Improving</span> Lives with the
            Power of <span className="text-green-300">Herbal</span> Medicine
          </h1>
          <p className="lg:w-1/2 text-2xl">
            HNI is a herbal brand committed to improving lives through the power
            of herbal medicine, utilizing natural and effective ingredients.
          </p>
          <div className="actions flex gap-3">
            <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-xl font-medium text-white backdrop-blur-3xl">
                Belanja Sekarang!
              </span>
            </button>
            <Link
              to="/about/aboutProduct"
              className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-1  text-xl font-medium text-black backdrop-blur-3xl">
                Tentang
              </span>
            </Link>
          </div>
          <div className="logo flex justify-start gap-3 items-center text-light text-gray-500">
            <img
              src="/img/logo-hni.png"
              alt="logo-hni"
              className="h-auto w-8 "
            />
            <span>Herbal Network International</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ProductAdds() {
  return (
    <div className=" w-full py-5 rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Kopi Sevel
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Kopi Sevel 7 Elemen adalah pilihan tepat bagi Anda yang mencari
          minuman sehat dan nikmat. Dibuat dari bahan-bahan alami, kopi ini
          mengandung sedikit kafein dan sangat cocok untuk semua orang, bahkan
          mereka dengan penyakit maag.
        </p>
      </div>
    </div>
  );
}

function BusinessAdds() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md py-5  overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-3xl  font-bold text-center">
          Yuk, Bergabung dengan Bisnis HNI HPAI bersama BC HNI Bukittinggi 3 dan
          Raih Kesuksesan Bersama! 🚀✨
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Join
          </button>
          <button className="px-4 py-2  text-white bg-transparent ">
            Learn More
          </button>
        </div>
      </Vortex>
    </div>
  );
}
const Service = () => {
  return (
    <>
      <div className="py-10 flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Layanan</h1>
        <div className="list-services">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={
                <Box className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Produk HNI"
              description="Running out of copy so I'll write anything."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={
                <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Edukasi Bisnis HNI "
              description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={
                <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Resep Herbal"
              description="It's the best money you'll ever spend"
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Pencairan Bonus"
              description="I'm not even kidding. Ask my mom if you don't believe me."
            />

            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={
                <Search className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Penawaran Menarik Lainya"
              description="I'm writing the code as I record this, no shit."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

const Products = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Produk HNI</h1>

        <BentoGrid className="mx-auto md:grid-cols-5">
          <BentoGridItem
            title="Herbs Product"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias laudantium aliquid."
            header={<Skeleton />}
            icon=""
            className="md:row-span-2 md:col-span-2"
          />
          <BentoGridItem
            title="Health Food & Beverges"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias laudantium aliquid."
            header={<Skeleton />}
            icon=""
            className="md:col-span-3"
          />
          <BentoGridItem
            title="Cosmetics & Home Care"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias laudantium aliquid."
            header={<Skeleton />}
            icon=""
            className="md:col-span-3"
          />
        </BentoGrid>
      </div>
    </>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  ];
  return (
    <>
      <div className="py-10 flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Galeri</h1>
        <ParallaxScroll images={images} />
      </div>
    </>
  );
};

const Achievements = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <>
      <div className="py-10 flex flex-col gap-5 ">
        <h1 className="text-center font-semibold text-3xl">Pencapaian</h1>
        <div className="py-5 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center  relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
};

const Agenda = () => {
  const items = [
    {
      title: "The Dawn of Innovation",
      description: (
        <div className="flex flex-col space-y-1 p-4  ">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Lokasi</span>
            <span>:</span>
            <span>Bukittinggi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Tanggal</span>
            <span>:</span>
            <span>12 Maret 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Waktu</span>
            <span>:</span>
            <span>09:00</span>
          </div>
          <button className="bg-slate-800  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex  items-center z-10 rounded-full bg-zinc-950 hover:bg-white hover:text-black py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Daftar</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      ),
      header: <Skeleton />,
      icon: "",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: "",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: "",
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: "",
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: "",
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: "",
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: "",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Jadwal Acara</h1>
        <BentoGrid className="mx-auto md:grid-cols-5 ">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
};

const Benefits = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-between  ">
        <h1 className="text-center font-semibold text-3xl">Manfaat</h1>
        <div className="list-benefit flex  gap-3   justify-center items  flex-col md:flex-row">
          <img src="/img/benefit-logo-2.png" alt="" className="w-96 h-auto" />
          <ul className=" flex flex-col gap-1">
            <li className="flex gap-3 px-3 py-2 border border-gray-300 rounded-md ">
              <img src="/svg/herbs.svg" alt="" className="h-auto w-8" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, quasi.
              </span>
            </li>
            <li className="flex gap-3 px-3 py-2 border border-gray-300 rounded-md ">
              <img src="/svg/herbs.svg" alt="" className="h-auto w-8" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, quasi.
              </span>
            </li>
            <li className="flex gap-3 px-3 py-2 border border-gray-300 rounded-md ">
              <img src="/svg/herbs.svg" alt="" className="h-auto w-8" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, quasi.
              </span>
            </li>
            <li className="flex gap-3 px-3 py-2 border border-gray-300 rounded-md ">
              <img src="/svg/herbs.svg" alt="" className="h-auto w-8" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, quasi.
              </span>
            </li>
            <li className="flex gap-3 px-3 py-2 border border-gray-300 rounded-md ">
              <img src="/svg/herbs.svg" alt="" className="h-auto w-8" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, quasi.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Faq = () => {
  return (
    <>
      <div className="flex  gap-5  justify-center flex-col md:flex-row">
        <h1 className="text-center font-semibold text-3xl">
          Frequently Asked Question
        </h1>
        <div className="list-question md:w-1/2">
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-10 lg:px-28 py-5 flex flex-col gap-10">
        <Benefits />
        <Service />
        <ProductAdds />
        {/* <Owners /> */}
        <Products />
        {/* <OurTeam /> */}
        {/* <BusinessAdds /> */}
        <Achievements />
        <Gallery />
        <Agenda />
        <Faq />
      </div>
      {/* <Footer /> */}
      {/* 
      <Service />
      <Support /> */}
    </>
  );
}
