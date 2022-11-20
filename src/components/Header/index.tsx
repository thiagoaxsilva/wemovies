import Image from "next/image";

import basket from "../../assets/basket.svg";

import {
  CartItems,
  CartItemsContainer,
  HeaderContainer,
  LogoText,
  MyCart,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import Link from "next/link";

export function Header() {
  const { quantity } = useCart();
  return (
    <HeaderContainer>
      <Link href="/">
        <LogoText>WeMovies</LogoText>
      </Link>
      <Link href="/cart">
        <MyCart>
          <CartItemsContainer>
            <p>Meu Carrinho</p>
            <CartItems>{quantity ? quantity : 0} itens</CartItems>
          </CartItemsContainer>
          <Image src={basket} alt="Cesta de Compras" />
        </MyCart>
      </Link>
    </HeaderContainer>
  );
}
