import React from "react";
import Bio from "@/components/bio/bio";
import Skills from "@/components/skills/skills";
import Container from "@/components/container/container";
import Splitscreen from "@/components/splitscreen/splitscreen";
import Profilecontainer from "@/components/profilecontainer/profilecontainer";
import Certifications from "@/components/certifications/certifications";
import { bio } from "@/locale/bio";
import { certifications } from "@/locale/certifications";

export default function Author() {
  return (
    <Container>
      <Profilecontainer />
      <Splitscreen leftWeight={1} rightWeight={0} gap={"1rem"}>
        <div>

        <Bio bio={bio.bio} experience={bio.experience} />
        </div>
        <div style={{minWidth: "270px"}}>
          <Skills />
          <Certifications certifications={certifications} />
        </div>
      </Splitscreen>
    </Container>
  );
}
