import Nav from "./components/nav";
import Body from "./components/body";
import Footer from "./components/footer";

export default async function Home() {
  return (
    <div>
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}
