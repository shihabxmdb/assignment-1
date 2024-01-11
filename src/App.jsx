import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";
import TableContent from "./components/tableContent";

function App() {
  return (
    <div className="bg-[#172227] text-white">
      <Nav />
      <Hero />
      <TableContent />
      <Footer />
    </div>
  );
}

export default App;
