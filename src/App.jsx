import "./App.css";
import "./index.css";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Article1 />
      <Article2 />
      <Footer />
    </main>
  );
}

export default App;
