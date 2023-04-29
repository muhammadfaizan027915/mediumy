import React from "react";
import Image from "next/image";
import style from "./profileimage.module.css";

export default function Profileimage({ image, imgContainerClass }) {
  return (
    <div className={imgContainerClass}>
      <div className={style.profileimage}>
        <Image
          src={image ? image : "/images/avatar.png"}
          alt="author"
          fill
          priority={true}
        />
      </div>
    </div>
  );
}
