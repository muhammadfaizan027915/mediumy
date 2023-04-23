import React from "react";
import Heading from "../heading/heading";
import Postcard from "../postcard/postcard";
import {posts} from "../../locale/posts"
import style from "./featuredposts.module.css";

export default function Featuredposts({ count, containerClassName, column, heading }) {
  return (
    <section className={containerClassName}>
      <Heading heading={heading} />
      <div className={`flex ${style.ftPostsContainer}`}>
        {posts.length && posts.map((post) => (
          <Postcard postInfo={post} column={column ? true : false} key={post?.id}/>
        ))}
      </div>
    </section>
  );
}
