import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useRouter } from "next/router";
import { homeEn } from "../locales/en";
import { homeFr } from "../locales/fr";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const { locale } = useRouter();
  const { links, title } = locale === "en" ? homeEn : homeFr;

  const linksList = [
    { title: links.home, path: `/${locale}` },
    { title: links.services, path: `#services` },
    { title: links.products, path: `#products` },
    { title: links.contact, path: `#contact` },
    { title: links.about, path: `#about` },
  ];
  return (
    <header>
      <nav className="fixed w-full text-black dark:text-white bg-opacity-50 dark:bg-opacity-60 font-Oswald  flex flex-wrap items-center justify-between px-2 py-2 mb-3  bg-blue-400 dark:bg-blue-800 z-50 drop-shadow-lg backdrop-blur-sm">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href={"/"} locale={"en"} passHref>
              <figure className={"flex flex-row items-center cursor-pointer"}>
                <svg
                  fill="currentColor"
                  className="mr-2 mb-1 -ml-1 w-8 h-8"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 469.999 469.999"
                >
                  <g>
                    <circle cx="122.5" cy="379.999" r="7.5" />
                    <circle cx="347.5" cy="379.999" r="7.5" />
                    <circle cx="235" cy="59.999" r="7.5" />
                    <circle cx="205" cy="89.999" r="7.5" />
                    <path d="m385,194.999c4.143,0 7.5-3.358 7.5-7.5v-60c0-4.142-3.357-7.5-7.5-7.5h-26.893l-117.804-117.803c-2.93-2.929-7.678-2.928-10.607,2.22045e-15l-117.803,117.803h-26.893c-4.142,0-7.5,3.358-7.5,7.5v60c0,4.142 3.358,7.5 7.5,7.5h17.5v110h-17.5c-4.142,0-7.5,3.358-7.5,7.5v150c0,4.142 3.358,7.5 7.5,7.5h50c4.142,0 7.5-3.358 7.5-7.5 0-51.005 41.495-92.5 92.5-92.5s92.5,41.495 92.5,92.5c0,4.142 3.357,7.5 7.5,7.5h50c4.143,0 7.5-3.358 7.5-7.5v-150c0-4.142-3.357-7.5-7.5-7.5h-17.5v-110h17.5zm-150-176.893l101.893,101.894h-203.787l101.894-101.894zm-142.5,116.893h285v45h-167.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h82.5v110h-115v-110h2.5c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-87.5v-45zm25,60h45v110h-45v-110zm260,260h-35.259c-3.864-55.79-50.487-100-107.241-100s-103.377,44.21-107.241,100h-35.259v-135h285v135zm-25-150h-45v-110h45v110z" />
                  </g>
                </svg>

                <a className=" font-normal  inline-block mr-4 py-2 whitespace-nowrap   text-xl  font-Oswald leading-none">
                  La Casa des Enfants
                </a>
              </figure>
            </Link>

            <div className={"flex flex-row sm:block lg:hidden items-center"}>
              <ThemeSwitcher />
              <LanguageSwitcher />
              <button
                title="menu"
                className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (open ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto  mx-auto ">
              {linksList.map(({ title, path }, index) => (
                <li
                  key={index}
                  className={
                    "nav-item" + (selected === index && "text-red-400")
                  }
                  onClick={() => {
                    console.log(index);

                    setSelected(index);
                  }}
                >
                  <Link href={path} passHref>
                    <a
                      className={`px-3 py-2 flex items-center text-md uppercase underline-offset-2  leading-snug hover:opacity-75 transition-all duration-300 ${
                        selected === index
                          ? "text-orange-600 dark:text-orange-400 underline "
                          : "text-black dark:text-white "
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-row justify-end items-center">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
