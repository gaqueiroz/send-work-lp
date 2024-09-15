"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Container } from "./styles";
import { language } from "@/shared/language";
import { useInViewport } from "react-in-viewport";
import { ScaleFade } from "@chakra-ui/transition";
import { RevealWrapper } from "next-reveal";

export const PlatformPreview: FC = () => {


  return (
    <Container>
      <RevealWrapper reset>
        <div className="preview">
          <Image
            width={800}
            height={600}
            src={`/images/platform-preview.svg`}
            alt="logo"
          />
        </div>
      </RevealWrapper>

      <div className="actions-content" style={{ marginTop: -20 }}>
        <RevealWrapper reset>
          <button>
            <span>Nossos clientes</span>
          </button>
        </RevealWrapper>
      </div>

      <RevealWrapper reset>
        <div
          className="picture-preview"
          style={{ margin: "auto", textAlign: "center", marginTop: -20 }}
        >
          <Image
            width={800}
            height={100}
            src="/images/icons/partners.svg"
            alt="logo"
          />
        </div>
      </RevealWrapper>

      <RevealWrapper reset>
        <div
          className="step-gradient"
          style={{ margin: "auto", textAlign: "center", marginBottom: 16 }}
        >
          <Image
            width={800}
            height={100}
            src="/images/step-gradient.svg"
            alt="logo"
          />
        </div>
      </RevealWrapper>

      <RevealWrapper reset>
        <div className="steps">
          <div className="step" style={{ flex: 1 }}>
            <div className="icon-content">
              <Image
                width={61.83}
                height={59.61}
                src="/images/icons/steps/step-1.svg"
                alt="logo"
              />
            </div>

            <h2>{language.platformPreview.steps.step1.title}</h2>

            <p>{language.platformPreview.steps.step1.description}</p>
          </div>

          <div
            className="step"
            style={{
              flex: 1,
              backgroundColor: "#B059F7",
              background:
                "linear-gradient(#313131, #313131) padding-box linear-gradient(80deg, #fff, #8107e3) border-box",
              border: "1px solid transparent",
            }}
          >
            <div className="icon-content">
              <Image
                width={61.83}
                height={59.61}
                src="/images/icons/steps/step-2.svg"
                alt="logo"
              />
            </div>

            <h2 style={{ color: "#FFF" }}>
              {language.platformPreview.steps.step2.title}
            </h2>

            <p style={{ color: "#FFF" }}>
              {language.platformPreview.steps.step2.description}
            </p>
          </div>

          <div className="step" style={{ flex: 1 }}>
            <div className="icon-content">
              <Image
                width={61.83}
                height={59.61}
                src="/images/icons/steps/step-3.svg"
                alt="logo"
              />
            </div>

            <h2>{language.platformPreview.steps.step3.title}</h2>

            <p>{language.platformPreview.steps.step3.description}</p>
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper reset>
        <div className="steps">
          <div className="step">
            <div className="icon-content">
              <Image
                width={61.83}
                height={59.61}
                src="/images/icons/steps/step-4.svg"
                alt="logo"
              />
            </div>

            <h2>{language.platformPreview.steps.step4.title}</h2>

            <p>{language.platformPreview.steps.step4.description}</p>
          </div>

          <div
            className="step"
            style={{
              backgroundColor: "#B059F7",
              background:
                "linear-gradient(#313131, #313131) padding-box linear-gradient(80deg, #fff, #8107e3) border-box",
              border: "1px solid transparent",
            }}
          >
            <div className="icon-content">
              <Image
                width={61.83}
                height={59.61}
                src="/images/icons/steps/step-5.svg"
                alt="logo"
              />
            </div>

            <h2 style={{ color: "#FFF" }}>
              {language.platformPreview.steps.step5.title}
            </h2>

            <p style={{ color: "#FFF" }}>
              {language.platformPreview.steps.step5.description}
            </p>
          </div>
        </div>
      </RevealWrapper>
    </Container>
  );
};
