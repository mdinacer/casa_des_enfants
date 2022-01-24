import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Products } from "../data/products";
import { homeCatalogEn } from "../locales/en";
import { homeCatalogFr } from "../locales/fr";

export default function HomeCatalog() {
  const [selected, setSelected] = useState(0);
  const { locale } = useRouter();
  const { title, action } = locale === "en" ? homeCatalogEn : homeCatalogFr;

  const collections = [
    { id: 1, title: "Bicycles", color: "red" },
    { id: 2, title: "Bikes", color: "blue" },
    { id: 3, title: "Toys", color: "emerald" },
    { id: 4, title: "Board Games", color: "teal" },
    { id: 5, title: "Dolls", color: "pink" },
  ];
  return (
    <div className="relative shadow-slate-500 min-h-screen h-full w-full py-20   bg-slate-200 dark:bg-slate-700 text-black dark:text-white overflow-hidden">
      <div
        className={`absolute bg-fixed top-0 left-0 min-h-screen h-full w-full bg-catalogBg z-[1] grayscale mix-blend-overlay`}
      ></div>
      <div className="container px-10 z-[10] relative">
        <h1 className="font-Oswald text-5xl ">{title}</h1>
        {/* <div className="flex items-center ">
          <div className="flex flex-col sm:flex-row justify-evenly items-center uppercase font-Oswald mx-auto">
            {collections.map(({ id, title, color }) => (
              <button
                type="button"
                onClick={() => {
                  setSelected(id);
                  console.log(selected);
                }}
                key={id}
                className={`min-w-[120px]  bg-transparent rounded-lg  hover:bg-indigo-300 dark:hover:bg-indigo-800 w-full mx-2 py-1 px-2 transition-all duration-300 ${
                  selected === id
                    ? "bg-transparent text-indigo-800 dark:text-indigo-300 underline underline-offset-2 scale-125"
                    : "bg-transparent"
                }`}
              >
                <div>{title}</div>
              </button>
            ))}
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3  sm:grid-cols-2 md:grid-cols-2 gap-4 py-20">
            {Products.map((product) => (
              // <div
              //   key={product.id}
              //   className="relative h-full w-full  bg-slate-300 dark:bg-slate-600  rounded-md overflow-hidden"
              // >
              //   <div className="relative min-w-80 bg-white  w-full h-60  mx-auto  ">
              //     <Image
              //       src={`/assets/images/${product.image}`}
              //       alt={product.name}
              //       layout="fill"
              //     />
              //   </div>
              //   <div className="absolute top-0 left-0 w-full shadow-sm shadow-gray-500 bg-slate-800 bg-opacity-40 font-bold text-white font-Montserrat px-3 py-1 rounded-t-md">
              //     $ {product.price}
              //   </div>
              //   <div className="absolute top-0 right-0 text-center bg-red-600 bg-opacity-70 min-w-[60px] font-bold text-white font-Montserrat px-3 py-1 rounded-tr-md">
              //     {product.age}
              //   </div>

              //   <div className=" py-2 px-4 h-max ">
              //     <p className=" font-Oswald text-lg flex-grow-1 flex-shrink flex-auto">
              //       {product.name}
              //     </p>
              //   </div>
              // </div>
              <div
                key={product.id}
                className="w-80 h-80 bg-slate-300 dark:bg-slate-600 rounded-3xl overflow-hidden shadow-sm shadow-gray-500"
              >
                <div className="  py-3 pl-10 pr-2  h-max flex flex-row justify-between items-center w-full ">
                  <p className=" font-Oswald text-lg ">{product.price} DA</p>

                  <p className=" font-Oswald text-lg text-center bg-red-600 min-w-[50px]  rounded-tr-xl px-3 rounded-md text-white">
                    {product.age}
                  </p>
                </div>
                <div className="overflow-hidden">
                  <div className="relative w-full h-52 md:hover:scale-110 bg-white mx-auto bg-blend-multiply transition-all duration-500 ease-in-out">
                    <Image
                      src={`/assets/images/${product.image}`}
                      alt={product.name}
                      layout="fill"
                      objectFit="scale-down"
                    />
                  </div>
                </div>
                <div className="py-3 px-5 h-max w-max">
                  <p className=" font-Oswald text-lg flex-grow-1 flex-shrink flex-auto">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="font-Oswald text-lg bg-orange-600 py-2 px-5 text-white uppercase rounded-lg shadow-none hover:shadow-lg hover:shadow-orange-800 scale-100 hover:scale-110 transition-all  duration-300 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:bg-opacity-30 hover:backdrop-blur-md"
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
}
