import React from "react";
import Container from "@/common/container/container";
import Splitscreen from "@/common/splitscreen/splitscreen";
import Postdetail from "@/components/postdetail/postdetail";
import Sharepost from "@/components/sharepost/sharepost";

export default function Slug() {
  return (
    <Container>
      <Splitscreen rightWeight={3}>
        <div className="flex" >
          <Sharepost />
        </div>
        <div className="flex center" >
          <Postdetail />
        </div>
      </Splitscreen>
    </Container>
  );
}
