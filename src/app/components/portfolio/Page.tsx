import React from "react";
import ProjectCard from "./ProjectCard";
import mordernaura from "@/app/assets/Images/modernaura.png";
import oyefish from "@/app/assets/Images/oyefish.png";
import joonbeauty from "@/app/assets/Images/joon-beauty.png";
import bankai from "@/app/assets/Images/bankai.png";
import coppercurtains from "@/app/assets/Images/copper-curtains.png";
import spsgame from "@/app/assets/Images/stone-paper-scissor.png"

const page = () => {
  return (
    <section id="portfolio" className="custom-container">
      <div className="details">
        <h2 className="text-center pb-4 md:pb-12">My <span className="auto-type">Projects.</span></h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ProjectCard
          img={mordernaura}
          gitLink={"https://github.com/tabishkhan03/modernaura"}
          liveLink={"https://modernaura.in"}
        />
        <ProjectCard
          img={oyefish}
          gitLink={"https://github.com/tabishkhan03/oyefish"}
          liveLink={"https://tabishkhan03.github.io/oyefish/"}
        />
        <ProjectCard
          img={joonbeauty}
          gitLink={"https://github.com/tabishkhan03/joon-beauty"}
          liveLink={"https://tabishkhan03.github.io/joon-beauty/"}
        />
        <ProjectCard
          img={bankai}
          gitLink={"https://github.com/tabishkhan03/bankai"}
          liveLink={"https://tabishkhan03.github.io/bankai/"}
        />
        <ProjectCard
          img={coppercurtains}
          gitLink={"https://github.com/tabishkhan03/copper-curtains"}
          liveLink={"https://tabishkhan03.github.io/copper-curtains/"}
        />
        <ProjectCard
          img={spsgame}
          gitLink={"https://github.com/tabishkhan03/stone-paper-scissor"}
          liveLink={"https://tabishkhan03.github.io/stone-paper-scissor/"}
        />
      </div>
    </section>
  );
};

export default page;
