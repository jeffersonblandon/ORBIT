import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Benefits from "../../components/Benefits";
import ProductCard from "../../components/ProductCard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />

      <div className="wrap" style={{ padding: "60px 0" }}>
        <ProductCard />
      </div>
    </>
  );
}

export default Home;