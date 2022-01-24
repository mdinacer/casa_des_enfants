import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function Footer() {
  const { locale } = useRouter();

  const title = locale === "en" ? "Contact Us" : "Contactez nous";
  const location = locale === "en" ? "Location" : "Localisation";
  return (
    <footer
      className="relative w-full h-full bg-slate-300 dark:bg-slate-600 
     text-black dark:text-white p-10 py-10"
    >
      <div
        className={`absolute bg-fixed top-0 left-0 bg-cover bg-center h-full w-full bg-contactBg z-[1] grayscale mix-blend-overlay`}
      ></div>

      <div className="container relative">
        <h1 className="text-5xl my-5 font-Oswald">{title}</h1>
        <div className="relative font-Oswald  p-4  grid grid-cols-1 sm:grid-cols-5 gap-4 z-10">
          <a
            href="https://www.instagram.com/la_casa_des_enfants/"
            target={"_blank"}
            className="flex flex-col items-center py-3 px-5 rounded-md text-white lg:scale-90 lg:hover:scale-110 transition-all duration-200"
            style={{
              background: `radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)`,
            }}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className=" w-8 h-8 m-1"
              icon={faInstagram}
            ></FontAwesomeIcon>
            <p className="uppercase">Instagram</p>
          </a>

          <a
            href="https://www.facebook.com/LACASADESENFANT"
            rel="noreferrer"
            target={"_blank"}
            className="flex flex-col items-center bg-[#4267B2] py-3 px-5 rounded-md text-white lg:scale-90 lg:hover:scale-110 transition-all duration-200"
          >
            <FontAwesomeIcon
              className=" w-8 h-8 m-1"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <p className="uppercase">Facebook</p>
          </a>

          <a
            href="mailto:capitaineamine31@gmail.com"
            className="bg-[#EA4335] text-white py-3 px-5 rounded-md lg:scale-90 lg:hover:scale-110 transition-all duration-200"
          >
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                className=" w-8 h-8 m-1  "
                icon={faMailBulk}
              ></FontAwesomeIcon>
              <p className="">capitaineamine31@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+213770818652"
            className="flex flex-col items-center bg-[#25D366] py-3 px-5 rounded-md  text-white lg:scale-90 lg:hover:scale-110 transition-all duration-200"
          >
            <FontAwesomeIcon
              className=" w-8 h-8 m-1"
              icon={faPhone}
            ></FontAwesomeIcon>
            0770 81 86 52
          </a>

          <a
            href="https://www.google.com/maps/dir/35.5642835,-0.3007358/35.7194677,-0.582241/"
            target={"_blank"}
            rel={"noreferrer"}
            className="flex flex-col items-center bg-[#4A89F3] py-3 px-5 rounded-md  text-white lg:scale-90 lg:hover:scale-110 transition-all duration-200"
          >
            <FontAwesomeIcon
              className=" w-8 h-8 m-1"
              icon={faLocationArrow}
            ></FontAwesomeIcon>
            {location}
          </a>
        </div>
      </div>
    </footer>
  );
}
