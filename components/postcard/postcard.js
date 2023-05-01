import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "../author/author";
import style from "./postcard.module.css";

export default function Postcard({
  column,
  postInfo,
  cardClass,
  imgageClass,
  contentClass,
}) {
  const { author, title, description, coverImage, postTime } = postInfo || {};
  const slug = title.split(" ").join("-");

  return (
    <div
      className={
        column
          ? `flex ${style.colcard} ${cardClass} ${style.cardlayout}`
          : `flex ${style.card} ${cardClass} ${style.cardlayout}`
      }
    >
      <div className={`${style.imagecontainer} ${imgageClass}`}>
        <Link href={`/posts/${slug}`}>
          <Image src={coverImage} fill alt="Post Cover Photo" priority={true} />
        </Link>
      </div>
      <div
        className={`flex spacebetween ${style.detailcontainer} ${contentClass}`}
      >
        <div className={style.detail}>
          <h2>
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h2>
          <p>{description}</p>
        </div>

        <Author author={author} postTime={postTime} />
      </div>
    </div>
  );
}
