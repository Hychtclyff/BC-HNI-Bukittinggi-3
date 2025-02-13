import GridItem from "@/components/Card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Skeleton from "@/components/ui/skeleton";
import { WobbleCard } from "@/components/ui/wobble-card";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

/* Hero */
const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <div className=" container mx-auto px-10 lg:px-28 flex relative">
        <div className="1/3 py-20 flex flex-col gap-5">
          <h1 className="lg:w-1/2 text-justify font-semibold text-4xl">
            <span className="text-green-300">Improving</span> Lives with the
            Power of <span className="text-green-300">Herbal</span> Medicine
          </h1>
          <p className="lg:w-1/2">
            HNI is a herbal brand committed to improving lives through the power
            of herbal medicine, utilizing natural and effective ingredients.
          </p>
          <div className="actions flex gap-3">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Join Us
              </span>
            </button>
            <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                About
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Service = () => {
  return (
    <>
      <div className="py-10 flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Our Service</h1>
        <div className="list-services">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={
                <Box className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="HNI Product"
              description="Running out of copy so I'll write anything."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={
                <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Education HNI Business"
              description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={
                <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Recipe Herbal"
              description="It's the best money you'll ever spend"
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Bonus disbursement"
              description="I'm not even kidding. Ask my mom if you don't believe me."
            />

            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={
                <Search className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Discover Additional Offers"
              description="I'm writing the code as I record this, no shit."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

const Owners = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Owners</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-sm">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Novi Erni Linda Nofita
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
            <img
              src="/img/novi.png"
              className="w-auto h-96 absolute -right-4 lg:-right-[0%] grayscale filter -bottom-28 object-contain rounded-2xl"
              alt=""
            />
            {/* <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className=""
          /> */}
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Erizal
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
            </div>
            {/* <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          /> */}
          </WobbleCard>
        </div>
      </div>
    </>
  );
};

const Products = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-center font-semibold text-3xl">Products</h1>

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

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-10 lg:px-28 py-10  flex flex-col lg:grid grid-cols-4 gap-5 ">
        <div className=" flex flex-col ">
          <span>
            Jalan Kusuma Bhakti no 13 Kelurahan Kubu Gulai Bancah, Kota
            Bukittinggi, Sumatra Barat
          </span>
          <p>bcbkt3@gmail.com</p>
          <span>08123456789</span>
        </div>
        <div className="navigation">
          <ul className="font-bold flex lg:flex-col gap-5">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Owners</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <span>Contact Us</span>
          <ul className="flex gap-2 ">
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/wa.svg" className="w-8 h-auto" alt="wa-icon" />
            </li>
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/ig.svg" className="w-8 h-auto" alt="ig-icon" />
            </li>
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/fb.svg" className="w-8 h-auto" alt="fb-icon" />
            </li>
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/tt.svg" className="w-8 h-auto" alt="tt-icon" />
            </li>
          </ul>
        </div>
        <div className="logo flex flex-col">
          <span>
            © 2020 BC HNI Bukittinggi 3. All Right Reserved. Design by Quls
            Projects
          </span>
          <div className="logo w-20 h-5 bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-10 lg:px-28 py-5 flex flex-col gap-10">
        <Service />
        <Owners />
        <Products />
      </div>
      <Footer />
      {/* 
      <Service />
      <Support /> */}
    </>
  );
}
