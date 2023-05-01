import React from "react";
import Image from "next/image";
import Date from "../date/date";
import style from "./postdetail.module.css";

export default function Postdetail() {
  return (
    <div className={`flex ${style.postdetailContainer}`}>
      <h1>18 Things You Should Learn Before Moving Into a New Home</h1>
      <Date
        postTime={{
          date: "2023-01-25",
          readTime: 6,
        }}
      />
      <div className={style.postImage}>
        <Image
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Post Cover Photo"
          fill
          priority={true}
        />
      </div>

      <div className={style.postContent}>
        <p>
          Holy grail funding non-disclosure agreement advisor ramen
          bootstrapping ecosystem. Beta crowdfunding iteration assets business
          plan paradigm shift stealth mass market seed money rockstar niche
          market marketing buzz market. Burn rate release facebook termsheet
          equity technology. Interaction design rockstar network effects
          handshake creative startup direct mailing. Technology influencer
          direct mailing deployment return on investment seed round. Termsheet
          business model canvas user experience churn rate low hanging fruit
          backing iteration buyer seed money. Virality release launch party
          channels validation learning curve paradigm shift hypotheses
          conversion. Stealth leverage freemium venture startup
          business-to-business accelerator market.
        </p>
      </div>
    </div>
  );
}
