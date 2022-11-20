import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";
import { CartProvider } from "../contexts/CartContext";
import { ProductsProvider } from "../contexts/ProductsContext";
import { Header } from "../components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </Container>
  );
}
