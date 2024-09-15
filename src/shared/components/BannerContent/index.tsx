"use client";

import { FC } from "react";

import { Container } from "./styles";
import { FaArrowRight } from "react-icons/fa";
import { language } from "@/shared/language";
import { ScaleFade } from "@chakra-ui/transition";

export const BannerContent: FC = () => {
  return (
    <Container>
      <div className="content">
        <div className="infos-content">
          <ScaleFade in={true} delay={0.1}>
            <h1 className="first-title">{language.banner.title1}</h1>

            <h1 className="second-title">{language.banner.title2}</h1>
          </ScaleFade>

          <ScaleFade in={true} delay={0.6}>
            <h2>
              <b>{language.banner.descriptionBold}</b>
              <br />
              <b>{language.banner.descriptionBold2}</b>
              &nbsp;{language.banner.description}
            </h2>
          </ScaleFade>
        </div>

        <div className="actions-content">
       
          <ScaleFade in={true} delay={1}>
            <button
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send/?phone=5521964982495&text=&type=phone_number&app_absent=0`
                );
              }}
            >
              <span>Testar agora</span>

              <div className="icon-content">
                <FaArrowRight color="#8f20e8" />
              </div>
            </button>
          </ScaleFade>
        </div>
      </div>
    </Container>
  );
};
