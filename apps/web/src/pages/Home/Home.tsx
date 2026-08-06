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
        <ProductCard 
  image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700"
  category="Smartwatch"
  title="Smartwatch Ultra X"
  description="Pantalla AMOLED, llamadas Bluetooth y resistencia al agua."
  price="$349.900"
 />
      </div>
    </>
  );
}

export default Home;