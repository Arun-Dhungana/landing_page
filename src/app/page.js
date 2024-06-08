import { Campaigns } from "./(components)/campaigns";
import { Carousel } from "./(components)/carousel";
import { Contact } from "./(components)/contact";
import { Latestresource } from "./(components)/latestresource";
import { Image } from "./(components)/homeimage";
import { News } from "./(components)/news";
import { Whoweare } from "./(components)/who_we_are";
export default function Home() {
  return (
    <main>
      <Image></Image>
      <Campaigns></Campaigns>
      <Whoweare></Whoweare>
      <Carousel></Carousel>
      <News></News>
      <Latestresource></Latestresource>
      <Contact></Contact>
    </main>
  );
}
