import Image from "next/image";
import { Product } from "../../types/product.types";

import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import trash from "../../assets/trash.svg";
import { currencyFormat } from "../../utils/formatter";

import {
  ProductImageContainer,
  Info,
  ProductTopContainer,
  HandleProduct,
  ProductBottomContainer,
  ActionButtons,
  SubtotalContainer,
  Container,
} from "./styles";
import { useCart } from "../../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addProductToCart, removeProductFromCart, deleteProductFromCart } =
    useCart();

  return (
    <Container>
      <ProductImageContainer>
        <Image width={89} height={114} src={product.image} alt="Filme" />
      </ProductImageContainer>
      <Info>
        <ProductTopContainer>
          <p>{product.title}</p>

          <HandleProduct>
            <p>{currencyFormat(product.price)}</p>
            <Image
              onClick={() => deleteProductFromCart(product)}
              src={trash}
              alt="Remover"
            />
          </HandleProduct>
        </ProductTopContainer>
        <ProductBottomContainer>
          <ActionButtons>
            <Image
              onClick={() => removeProductFromCart(product)}
              src={minus}
              alt="Diminuir"
            />
            <div>
              <p>{product.quantity}</p>
            </div>
            <Image
              onClick={() => addProductToCart(product)}
              src={plus}
              alt="Aumentar"
            />
          </ActionButtons>

          <SubtotalContainer>
            <p>SUBTOTAL</p>
            <strong>{currencyFormat(product.price * product.quantity)}</strong>
          </SubtotalContainer>
        </ProductBottomContainer>
      </Info>
    </Container>
  );
}
