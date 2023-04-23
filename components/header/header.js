import style from "./header.module.css";
import Container from "../container/container";
import Navbar from "../navbar/navbar";


export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navHeader}>
        <Container>
          <Navbar justifyContent="spacebetween" alignItems="align-center" linksClass={style.linkcontainer}/>          
        </Container>
      </nav>
    </header>
  );
}
