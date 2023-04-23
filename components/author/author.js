import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "../date/date";
import style from "./author.module.css";

export default function Author({ author, postTime }) {
  return (
    <div className={`flex align-center ${style.authorcontainer}`}>
      {/* Avatar Image */}
      <div className={style.avatarcontainer}>
        <Link href="/author">
          <Image src="/images/avatar.jpg" fill />
        </Link>
      </div>
      <div className={style.authorname}>
        <p>
          <Link href="/author">
            {/* {author.name} */}
            Muhammad Faizan
          </Link>
        </p>
        <Date postTime={postTime} />
      </div>
    </div>
  );
}
