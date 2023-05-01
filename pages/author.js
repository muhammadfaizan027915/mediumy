import React from "react";
import Bio from "@/components/bio/bio";
import Skills from "@/components/skills/skills";
import Container from "@/common/container/container";
import Splitscreen from "@/common/splitscreen/splitscreen";
import Workexperience from "@/components/workexperience/workexperience";
import Certifications from "@/components/certifications/certifications";
import Profilecontainer from "@/components/profilecontainer/profilecontainer";
import { certifications } from "@/locale/certifications";
import { bio } from "@/locale/bio";
import Projects from "@/components/projects/projects";

export default function Author() {
  return (
    <Container>
      <Profilecontainer />
      <Splitscreen leftWeight={1} rightWeight={0} gap={"1rem"}>
        <div>
          <Bio bio={bio.bio} experience={bio.experience} />
          <Workexperience />
          <Projects />
        </div>
        <div style={{ minWidth: "270px" }}>
          <Skills />
          <Certifications certifications={certifications} />
        </div>
      </Splitscreen>
    </Container>
  );
}
