import { useEffect, useState } from "react";

import { HomeContainer } from "../styles/pages/home";

import { Product } from "../types/product.types";
import api from "../services/api";
import Loader from "../assets/loader.gif";

import { MovieCard } from "../components/MovieCard";
import Image from "next/image";

import { useProducts } from "../hooks/useProducts";

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
