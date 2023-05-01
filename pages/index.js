import Hero from "@/components/hreo/hero";
import Container from "@/common/container/container";
import Featuredposts from "@/components/featuredposts/featuredposts";
import style from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Featuredposts heading="Recent Posts" />
        <Featuredposts
          column
          containerClassName={style.allPostsContainer}
          heading="All Posts"
        />
      </Container>
    </>
  );
}
