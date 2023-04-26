import React from "react";
import { posts } from "@/locale/posts";
import Postcard from "@/components/postcard/postcard";
import Container from "@/components/container/container";
import style from "../styles/posts.module.css";

export default function Posts() {
  return (
    <Container>
      <div className={style.postscontainer}>
        {posts.length &&
          posts.map((post) => (
            <Postcard
              postInfo={post}
              column
              cardClass={style.cardcontainer}
              contentClass={style.contentcontainer}
              imgageClass={style.imagecontainer}
              key={post?.id}
            />
          ))}
      </div>
    </Container>
  );
}
