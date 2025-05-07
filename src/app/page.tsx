import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "../../components/HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow">
        <HomePage />
        <About />
      </main>
      <Footer />
    </>
  );
}
