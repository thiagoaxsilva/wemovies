import Image from "next/image";

import {
  CartContainer,
  CartProductsContainer,
  HandleProduct,
  Info,
  NoItemCard,
  ProductBottomContainer,
  ProductCard,
  ProductTopContainer,
  SubtotalContainer,
} from "../styles/pages/cart";

import woman from "../assets/woman.png";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import trash from "../assets/trash.svg";

import filme1 from "../assets/filme2.png";

import { ProductImageContainer, ActionButtons } from "../styles/pages/cart";

export default function Cart() {
  return (
    <CartContainer>
      {/* <NoItemCard>
        <h1>
          Parece que não
          <br /> há nada por aqui :(
        </h1>
        <Image src={woman} alt="Imagem silhueta de uma mulher" />
        <div>
          <p>Voltar</p>
        </div>
      </NoItemCard> */}
      <CartProductsContainer>
        <ProductCard>
          <ProductImageContainer>
            <Image src={filme1} alt="Filme" />
          </ProductImageContainer>
          <Info>
            <ProductTopContainer>
              <p>Homem Aranha</p>

              <HandleProduct>
                <p>R$ 29,99</p>
                <Image src={trash} alt="Remover" />
              </HandleProduct>
            </ProductTopContainer>
            <ProductBottomContainer>
              <ActionButtons>
                <Image src={minus} alt="Diminuir" />
                <div>
                  <p>1</p>
                </div>
                <Image src={plus} alt="Aumentar" />
              </ActionButtons>

              <SubtotalContainer>
                <p>SUBTOTAL</p>
                <strong>R$ 29,99</strong>
              </SubtotalContainer>
            </ProductBottomContainer>
          </Info>
        </ProductCard>
        <hr />
        <div>
          <div>
            <p>TOTAL</p>
            <p>29,90</p>
          </div>
          <div>
            <p>FINALIZAR PEDIDO</p>
          </div>
        </div>
      </CartProductsContainer>
    </CartContainer>
  );
}
