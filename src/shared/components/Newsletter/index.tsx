import { FC, useState } from "react";

import { TitleGradient } from "../TitleGradient";
import { Container } from "./styles";
import { maskDocument, unmask } from "@/shared/utils/masks";
import { RevealWrapper } from "next-reveal";
import { validateDocument } from "@/shared/utils/validateDocument";

export const Newsletter: FC = () => {
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [errorMesssage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !document) {
      setErrorMessage('Preencha todos os campos para entrarmos em contato')
      return;
    }

    if (email && (!email.includes('@') || !email.includes('.'))) {
      setErrorMessage('Email inválido')
      return;
    }

    if (document && !validateDocument(unmask(document))) {
      setErrorMessage('Documento inválido')
      return;
    }

    window.open(
      `https://api.whatsapp.com/send/?phone=5521964982495&text=(Nome: ${email} / CPF: ${document}) - Olá, quero saber mais informaçÕes.&type=phone_number&app_absent=0`
    );
  };

  return (
    <Container>
      <RevealWrapper reset>
        <div className="card">
          <div className="content">
            <div>
              <h1>
                Entre em contato <br />
                conosco
              </h1>

              {errorMesssage && (
                <div style={{ 
                  marginTop: 11,
                  backgroundColor: '#ff377b',
                  padding: 14,
                  borderRadius: 8,
                  fontSize: 14
                 }}>
                  <strong>{errorMesssage}</strong>
                </div>
              )}

              <div>
                <input
                  className="email"
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => {
                    setErrorMessage('');
                    setEmail(e.target.value);
                  }}
                />

                <input
                  className="document"
                  placeholder="CPF/CNPJ"
                  value={maskDocument(document)}
                  onChange={(e) => {
                    setErrorMessage("");
                    setDocument(e.target.value);
                  }}
                />
              </div>
              {/* newsletter-detail */}

              <div className="footer">
                <div>
                  <button onClick={handleSubmit}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper reset>
        <TitleGradient />
      </RevealWrapper>

      <div style={{ margin: 20 }} />
    </Container>
  );
};
