import { Campaigns } from "./(components)/campaigns";
import { Carousel } from "./(components)/carousel";
import { Contact } from "./(components)/contact";
import { Latestresource } from "./(components)/latestresource";
import { Footer } from "./(components)/footer";
import { NavBar } from "./(components)/navbar";
import { News } from "./(components)/news";
import { Whoweare } from "./(components)/who_we_are";
export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <Campaigns></Campaigns>
      <Whoweare></Whoweare>
      <Carousel></Carousel>
      <News></News>
      <Latestresource></Latestresource>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
