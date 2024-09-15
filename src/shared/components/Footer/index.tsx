import { FC } from "react";
import Image from "next/image";

import { Container } from "./styles";
import { RevealWrapper } from "next-reveal";

export const Footer: FC = () => {
  return (
    <Container>
      <RevealWrapper reset>
        <div className="footer-items">
          <div className="footer-item" style={{ marginRight: 40 }}>
            <strong>Produto</strong>

            <div>
              <div className="footer-link">
                <a href="">Inicio</a>
              </div>

              <div className="footer-link">
                <a href="">Sobre</a>
              </div>

              <div className="footer-link">
                <a href="">Clientes</a>
              </div>

              <div className="footer-link">
                <a href="">Depoimentos</a>
              </div>
            </div>
          </div>

          <div className="footer-item">
            <strong>Empresa</strong>

            <div>
              <div className="footer-link">
                <a href="">Endereço</a>
              </div>

              <div className="footer-link">
                <a href="">Políticas de Privacidade</a>
              </div>

              <div className="footer-link">
                <a href="">Termos de uso</a>
              </div>

              <div className="footer-link">
                <a href="">Política de Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>

      <div className="copy-content">
        <div className="copy">
          <RevealWrapper reset>
            <strong>© {new Date().getFullYear()} por SendWork.</strong>
          </RevealWrapper>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
        <RevealWrapper reset>
          <Image
            width={50}
            height={50}
            src="/images/icons/linkedin.svg"
            style={{ marginRight: 10 }}
            alt="welcome"
          />

          <Image
            width={50}
            height={50}
            src="/images/icons/facebook.svg"
            style={{ marginRight: 10 }}
            alt="welcome"
          />

          <Image
            width={50}
            height={50}
            src="/images/icons/instagram.svg"
            style={{ marginRight: 10 }}
            alt="welcome"
          />
        </RevealWrapper>
        </div>
      </div>
    </Container>
  );
};
