//Libs
import Image from "next/image";

// Components
import { MovieCard } from "../components/MovieCard";

// Hooks
import { useProducts } from "../hooks/useProducts";

// Styles
import { HomeContainer } from "../styles/pages/home";

// Assets
import Loader from "../assets/loader.gif";

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <HomeContainer>
      {loading ? (
        <Image width={83} height={83} src={Loader} alt="loader" />
      ) : (
        products.map((product) => (
          <MovieCard key={product.id} product={product} />
        ))
      )}
    </HomeContainer>
  );
}
