import Header from "./components/Header";
import hero from "./assets/images/image-hero.webp";
import "./App.css";
import Articles from "./components/Articles";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <header className="relative overflow-hidden bg-transparent after:content-empty after:bg-dark-purple after:block after:w-[190%] after-h-full after:rounded-b-[40%] after:absolute after:-z-10 after:left-[-45%] after:bottom-0 lg:px-40 lg:h-500px">
        <Header />
      </header>
      <div className="hero-section absolute top-[15%] left-[3%] sm:left-[10%] md:left-[22%] md:top-[14%] lg:top-[20%] lg:left-[28%] xl:left-[35%]">
        <img src={hero} alt="a phone image" className="sm:w-[32rem]" />
      </div>
      <main className="relative pt-48 text-darkPurple text-center -z-9 lg:px-10">
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
