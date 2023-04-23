import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "../author/author";
import style from "./postcard.module.css";

export default function Postcard({ column, postInfo }) {
  const { author, title, description, coverImage, postTime } = postInfo || {};
  return (
    <div
      className={
        column
          ? `flex ${style.colcard} ${style.cardlayout}`
          : `flex ${style.card} ${style.cardlayout}`
      }
    >
      <div className={`${style.imagecontainer}`}>
        <Link href={"/posts"}>
          <Image src={coverImage} fill alt="post cover image" priority={true}/>
        </Link>
      </div>
      <div className={`flex spacebetween ${style.detailcontainer}`}>
        <div className={style.detail}>
          <h1>
            <Link href="/posts">{title}</Link>
          </h1>
          <p>{description}</p>
        </div>

        <Author author={author} postTime={postTime} />
      </div>
    </div>
  );
}
