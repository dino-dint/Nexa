import Features from "../home/Features";
import Hero from "../home/Hero";
import Categories from "../home/Categories";


function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Categories />
        <Features />
        <ProductCard />
      </main>
    </div>
  );
}

export default Home;
