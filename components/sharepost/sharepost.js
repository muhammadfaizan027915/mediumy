import React from "react";
import { generateSharingURL, sharelinks } from "@/locale/sharelinks";
import Commonlist from "@/common/commonlist/commonlist";
import style from "./sharepost.module.css";

export default function Sharepost() {
  const sharePost = ({ target }) => {
    const URL = generateSharingURL[target.name](
      encodeURIComponent(document.URL)
    );

    window.open(URL, "_blank");
  };
  return (
    <div className={`flex align-center ${style.sharepostContainer}`}>
      <span>Share</span>
      <Commonlist className={`flex ${style.sharebuttonsContainer}`}>
        {sharelinks.map((name, index) => (
          <li key={index}>
            <button
              name={name}
              onClick={sharePost}
              className={
                name === "facebook"
                  ? `${style.sharebutton} ${style.icons8Facebook}`
                  : name === "twitter"
                  ? `${style.sharebutton} ${style.icons8Twitter}`
                  : `${style.sharebutton} ${style.icons8Whatsapp}`
              }
            />
          </li>
        ))}
      </Commonlist>
    </div>
  );
}
