"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import About from "@/app/components/about/Page";
import Portfolio from "@/app/components/portfolio/Page";
import Services from "@/app/components/services/Page";
import Typed from "typed.js";
import profile from "@/app/assets/Images/linkedinprofile.jpg";
import Contact from "@/app/components/contact/Page";
import Footer from "@/app/components/footer/Page";
import Navbar from "@/app/components/navbar/Page"
import { LuMail } from "react-icons/lu";


export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Backend Developer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar/>
      <section id="home" className=" custom-container">
        <div className="grid grid-cols-12 gap-4">
          <div className="details md:col-span-8 col-span-12 order-2 md:order-1">
            <h3>Hi,Myself</h3>
            <h2>Tabish Khan</h2>
            <h3>
              And I&#39;m a <span ref={el} className="auto-type"></span>
            </h3>
            <p>
              Experienced Full-Stack Developer proficient in MERN stack, Java,
              and JavaScript with a strong background in creating dynamic,
              responsive web applications. Proven track record in developing
              e-commerce sites and custom web solutions.
            </p>
            <div className="social-media flex content-between">
              <div className="icons p-4 md:p-8 pl-0 text-base md:text-2xl ">
                <Link target="_blank" href="https://github.com/tabishkhan03">
                  <div className="icon-border">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="icons p-4 md:p-8 text-base md:text-2xl ">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/tabish-khan-b31334235/"
                >
                  <div className="icon-border">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="icons p-4 md:p-8 text-base md:text-2xl ">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/_crazy_taby_/?igsh=MXZsN3o4NXg0cmJ6dA%3D%3D"
                >
                  <div className="icon-border">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="icons p-4 md:p-8 text-base md:text-2xl ">
                <Link target="_blank" href="mailto:tabish25u@gmail.com">
                  <div className="icon-border">
                    <LuMail />
                  </div>
                </Link>
              </div>
            </div>
            <button className="custom-btn">
              <a href="/Resume.pdf" download="Tabish_Khan_Resume">
                Download CV
              </a>
            </button>
          </div>
          <div className=" pb-12 sm:pb-24 md:pb-0 md:col-span-4 col-span-12 flex justify-center items-center order-1 md:order-2">
            <figure className="w-36 h-36 sm:w-52 sm:h-52 lg:w-64 lg:h-64 flex justify-center items-center rounded-full overflow-hidden">
              <Image alt="profile" src={profile}></Image>
            </figure>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
