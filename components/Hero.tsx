import Link from "next/link";
import { useRouter } from "next/router";
import { heroEn } from "../locales/en";
import { heroFr } from "../locales/fr";

export default function Hero() {
  const { locale } = useRouter();
  const source = locale === "en" ? heroEn : heroFr;
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-200 to-gray-900">
      <video
        playsInline
        preload="none"
        src={"/assets/videos/hero.mp4"}
        poster="/assets/images/hero_bg.jpg"
        autoPlay
        loop
        muted
        className=" opacity-70 absolute top-0 left-0 right-0 bottom-0 w-full  h-screen object-cover object-center"
      />
      <div className=" absolute top-0 left-0 right-0 bottom-0  h-screen w-screen bg-gradient-to-b from-transparent to-black opacity-70 mix-blend-overlay" />

      <div className="relative  lg:container mx-auto w-full h-screen flex flex-col items-center justify-end  z-[3] pb-20">
        <div className="w-auto h-auto flex items-center justify-center flex-col">
          <h1 className="uppercase text-center text-white font-Oswald text-5xl sm:text-7xl pb-5">
            {source.title}
          </h1>
          <h2 className="text-white text-center font-normal font-Quattrocento leading-loose text-xl sm:text-4xl pb-10">
            {source.subtitle}
          </h2>
          <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mx-auto justify-evenly">
            <Link href={"#contact"} passHref>
              <button
                type="button"
                className="min-w-[120px] w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {source.primaryAction}
              </button>
            </Link>
            <Link href={"#services"} passHref>
              <button
                type="button"
                className="min-w-[120px] mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {source.secondaryAction}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
