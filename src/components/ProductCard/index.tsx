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
  ActionsButtonsContainer,
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
        <h6>PRODUTO</h6>
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
          <ActionsButtonsContainer>
            <h6>QTD</h6>
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
          </ActionsButtonsContainer>

          <SubtotalContainer>
            <h6>SUBTOTAL</h6>
            <strong>{currencyFormat(product.price * product.quantity)}</strong>
          </SubtotalContainer>
        </ProductBottomContainer>
      </Info>
    </Container>
  );
}
