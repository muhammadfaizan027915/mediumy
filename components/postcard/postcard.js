import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "../author/author";
import style from "./postcard.module.css";

export default function Postcard({ column, postInfo }) {
  const { author, postTime } = postInfo | {};
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
          <Image
            src={
              "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            fill
          />
        </Link>
      </div>
      <div className={`flex spacebetween ${style.detailcontainer}`}>
        <div className={style.detail}>
          <h1>
            <Link href="/posts">We are living some starage times</Link>
          </h1>
          <p>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>

        <Author author={author} postTime={postTime} />
      </div>
    </div>
  );
}
