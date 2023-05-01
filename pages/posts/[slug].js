import React from "react";
import Container from "@/common/container/container";
import Splitscreen from "@/common/splitscreen/splitscreen";
import Postdetail from "@/components/postdetail/postdetail";
import Sharepost from "@/components/sharepost/sharepost";

export default function Slug() {
  return (
    <Container>
      <Splitscreen leftWeight={2} rightWeight={10} gap="1rem">
        <div className="flex left" >
          <Sharepost />
        </div>
        <div className="flex ">
          <Postdetail />
        </div>
      </Splitscreen>
    </Container>
  );
}
