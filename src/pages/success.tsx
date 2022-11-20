import { SuccessBuy, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";
import Image from "next/image";

import man from "../assets/man.png";

export default function Success() {
  return (
    <SuccessContainer>
      <SuccessBuy>
        <h1>Compra realizada com sucesso!</h1>
        <Image src={man} alt="Imagem silhueta de um homem" />
        <Link href="/">
          <div>
            <p>Voltar</p>
          </div>
        </Link>
      </SuccessBuy>
    </SuccessContainer>
  );
}
