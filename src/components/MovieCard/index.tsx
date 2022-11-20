import Image from "next/image";
import { Product } from "../../types/product.types";
import { currencyFormat } from "../../utils/formatter";
import { Movie, PuchBtn } from "./styles";

import cart from "../../assets/cart.svg";
import { useCart } from "../../hooks/useCart";

interface MovieCardProps {
  product: Product;
}

export function MovieCard({ product }: MovieCardProps) {
  const { addProductToCart } = useCart();

  return (
    <Movie>
      <Image
        src={product.image}
        width={147}
        height={188}
        alt={`Capa do filme ${product.title}`}
      />
      <p>{product.title}</p>
      <strong>{currencyFormat(product.price)}</strong>

      <PuchBtn
        color={product.quantity > 0 ? "active" : "inactive"}
        onClick={() => addProductToCart(product)}
      >
        <div>
          <Image src={cart} alt="Carrinho de compras" />
          <p>{product.quantity}</p>
        </div>
        <p>Adicionar ao Carrinho</p>
      </PuchBtn>
    </Movie>
  );
}
