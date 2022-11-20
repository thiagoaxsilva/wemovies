import Image from "next/image";

import basket from "../../assets/basket.svg";

import { CartItems, HeaderContainer, LogoText } from "./styles";
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
        <div>
          <CartItems>{quantity ? quantity : 0} itens</CartItems>
          <Image src={basket} alt="Cesta de Compras" />
        </div>
      </Link>
    </HeaderContainer>
  );
}
