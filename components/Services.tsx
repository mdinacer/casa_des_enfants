import { useRouter } from "next/router";
import { servicesEn } from "../locales/en";
import { servicesFr } from "../locales/fr";

export default function Services() {
  const { locale } = useRouter();
  const { items, title } = locale === "en" ? servicesEn : servicesFr;
  return (
    <div className="relative py-20 shadow-inner shadow-slate-900 h-full w-full  bg-gradient-to-br  from-slate-300 to-slate-400 dark:bg-gradient-to-br dark:from-slate-500 dark:to-slate-700 text-black dark:text-white">
      <div
        className={`absolute bg-fixed top-0 left-0 min-h-screen h-full w-full bg-servicesBg z-[1] grayscale mix-blend-overlay`}
      ></div>
      <div className="relative lg:container  px-10 h-full flex flex-col items-center justify-center z-10">
        <h1 className=" text-5xl mb-20 font-Oswald self-start">{title}</h1>

        <section className="relative grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rows-auto z-10">
          <article className="mb-5 lg:bg-opacity-90 lg:dark:bg-opacity-90 hover:bg-opacity-100 rounded-2xl  bg-emerald-400 hover:bg-pink-500 p-10 shadow-none lg:hover:shadow-lg lg:hover:shadow-pink-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto  mix-blend-overlay"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <div className="container">
              <h1 className="text-2xl font-Oswald mt-5 mb-3">
                {items.item1.title}
              </h1>

              <div className="text-lg sm:text-base">
                {items.item1.description}
              </div>
            </div>
          </article>

          <article className=" mb-5 lg:dark:bg-opacity-90 lg:bg-opacity-90 hover:bg-opacity-100 rounded-2xl bg-blue-500 hover:bg-teal-300 p-10 shadow-none lg:hover:shadow-lg lg:hover:shadow-teal-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mix-blend-overlay"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <div className="container">
              <h1 className="text-2xl font-Oswald mt-5 mb-3">
                {items.item2.title}
              </h1>
              <p className="text-lg sm:text-base">{items.item2.description}</p>
            </div>
          </article>

          <article className="mb-5 lg:dark:bg-opacity-90 lg:bg-opacity-90 hover:bg-opacity-100 rounded-2xl bg-amber-500 hover:bg-rose-500 p-10 shadow-none lg:hover:shadow-lg lg:hover:shadow-rose-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mix-blend-overlay"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path
                fillRule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="container">
              <h1 className="text-2xl font-Oswald mt-5 mb-3">
                {items.item3.title}
              </h1>
              <p className="text-lg sm:text-base">{items.item3.description}</p>
            </div>
          </article>

          <article className="mb-5 lg:dark:bg-opacity-90 lg:bg-opacity-90 hover:bg-opacity-100 rounded-2xl bg-fuchsia-500 hover:bg-red-500 p-10 shadow-none lg:hover:shadow-lg lg:hover:shadow-red-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mix-blend-overlay "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="container">
              <h1 className="text-2xl font-Oswald mt-5 mb-3">
                {items.item4.title}
              </h1>
              <p className=" text-lg sm:text-base">{items.item4.description}</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
