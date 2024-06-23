"use client"
import Link from "next/link";
import React from "react";

const page = () => {
    let Openmenu=()=>{
        document.querySelector(".phone-menu")?.classList.add("phone-menu-open")
    }
    let Closemenu=()=>{
        document.querySelector(".phone-menu")?.classList.remove("phone-menu-open")
    }
  return (
    <>
      <nav>
        <div className="navbar custom-container">
          <div className="logo">
            <h3>Portfolio.</h3>
          </div>
          <ul className="nav-list">
            <li>
              <Link href="#/">Home</Link>
            </li>

            <li>
              <Link href="#about">About</Link>
            </li>

            <li>
              <Link href="#services">Services</Link>
            </li>

            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>

            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <button className="hamburger" onClick={Openmenu} >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={0}
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </nav>
      <section className="phone-menu w-full">
        <ul className="phone-menu-nav-list">
          <li>
            <div className="cross">
              <button onClick={Closemenu}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M52.47 16.94L16.95 52.45 71.3 106.6h22.59L215 227.7v56.5L93.84 405.4H71.28l-54.26 54.2 35.34 35.5 54.24-54.4v-22.5L227.8 297h56.4l121.2 121.2v22.5l54.2 54.3 35.4-35.4-54.3-54.2h-22.5L297 284.2v-56.5l121.1-121.1h22.6L495 52.36 459.7 17l-54.3 54.25v22.57L284.2 215h-56.4L106.6 93.86V71.28L52.47 16.94z" />
                </svg>
              </button>
            </div>
          </li>
          <li>
            <Link onClick={Closemenu} href="#home">Home</Link>
          </li>
          <li>
            <Link onClick={Closemenu} href="#about">About</Link>
          </li>
          <li>
            <Link onClick={Closemenu} href="#services">Services</Link>
          </li>
          <li>
            <Link onClick={Closemenu} href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link onClick={Closemenu} href="#contact">Contact</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default page;
