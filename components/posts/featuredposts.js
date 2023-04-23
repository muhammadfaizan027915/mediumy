import React from "react";
import Heading from "../heading/heading";
import Postcard from "../postcard/postcard";
import {posts} from "../../locale/posts"
import style from "./featuredposts.module.css";

export default function Featuredposts({ count, column, heading }) {
  return (
    <section>
      <Heading heading={heading} />
      <div className={`flex ${style.ftPostsContainer}`}>
        {posts.length && posts.map((post) => (
          <Postcard postInfo={post} column={column ? true : false} key={post?.id}/>
        ))}
      </div>
    </section>
  );
}
