import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "../date/date";
import style from "./author.module.css";

export default function Author({ author, postTime }) {
  const { name, image } = author || {};
  return (
    <div className={`flex align-center ${style.authorcontainer}`}>
      <div className={style.avatarcontainer}>
        <Link href="/author">
          <Image
            src={image ? image : "/images/avatar.jpg"}
            alt="author"
            fill
            priority={true}
          />
        </Link>
      </div>
      <div className={style.authorname}>
        <p>
          <Link href="/author">{name}</Link>
        </p>
        <Date postTime={postTime} />
      </div>
    </div>
  );
}
