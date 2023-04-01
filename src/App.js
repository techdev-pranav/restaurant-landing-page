import "./App.css";
import { Header } from "./components";
import { Home, About, Menu, Contact, Offers, Footer } from "./container";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <About />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
