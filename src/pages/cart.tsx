import Image from "next/image";

import {
  CartContainer,
  CartProductsContainer,
  FinishOrderBtn,
  Footer,
  NoItemCard,
  OrderActions,
  TotalContainer,
} from "../styles/pages/cart";

import woman from "../assets/woman.png";
import Link from "next/link";
import { useCart } from "../hooks/useCart";
import { ProductCard } from "../components/ProductCard";
import { currencyFormat } from "../utils/formatter";

export default function Cart() {
  const { quantity, productsInCart, total, clearCart } = useCart();
  return (
    <CartContainer>
      {quantity < 1 ? (
        <NoItemCard>
          <h1>Parece que não há nada por aqui :(</h1>
          <Image src={woman} alt="Imagem silhueta de uma mulher" />
          <Link href="/">
            <div>
              <p>Voltar</p>
            </div>
          </Link>
        </NoItemCard>
      ) : (
        <CartProductsContainer>
          <div>
            {productsInCart.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Footer>
            <hr />
            <OrderActions>
              <TotalContainer>
                <p>TOTAL</p>
                <strong>{currencyFormat(total)}</strong>
              </TotalContainer>
              <FinishOrderBtn onClick={() => clearCart()}>
                <Link href="/success">
                  <p>FINALIZAR PEDIDO</p>
                </Link>
              </FinishOrderBtn>
            </OrderActions>
          </Footer>
        </CartProductsContainer>
      )}
    </CartContainer>
  );
}
