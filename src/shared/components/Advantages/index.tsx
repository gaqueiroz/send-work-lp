"use client";

import { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { Container } from "./styles";
import { TitleGradient } from "../TitleGradient";
import { language } from "@/shared/language";
import { RevealWrapper } from "next-reveal";

interface IAdvantageCard {
  icon?: string;
  title: string;
  description: string;
}

export const Advantages: FC = () => {
  const [rootMarginValue, setRootMarginValue] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRootMarginValue("500px 0px 0px 0px"); 
      } else {
        setRootMarginValue("0px"); 
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = useMemo<IAdvantageCard[]>(() => {
    return [
      {
        title: language.advantages.advantage1.title,
        description: language.advantages.advantage1.description,
      },
      {
        title: language.advantages.advantage2.title,
        description: language.advantages.advantage2.description,
      },
      {
        title: language.advantages.advantage3.title,
        description: language.advantages.advantage3.description,
      },
    ];
  }, []);

  return (
    <Container id="about">
      <TitleGradient />

      <RevealWrapper reset>
        <div className="cards">
          {cards.map((card, index) => {
            return (
              <div className="card" key={`advantage-card-${index}`}>
                <Image
                  width={100}
                  height={100}
                  src={`/images/icons/advantage-${index + 1}.svg`}
                  alt="logo"
                />

                <h2>{card.title}</h2>

                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </RevealWrapper>

      <RevealWrapper reset>
        <div className="actions-content">
          <button>
            <span>Como podemos ajudar seu negócio?</span>
          </button>
        </div>
      </RevealWrapper>

      <div className="details">
        <RevealWrapper reset>
          <h1>{language.advantages.details.title1}</h1>

          <h2>{language.advantages.details.title2}</h2>
        </RevealWrapper>

        <RevealWrapper reset>
          <p style={{ marginBottom: 20 }}>
            {language.advantages.details.description1}
          </p>

          <p>{language.advantages.details.description1}</p>
        </RevealWrapper>
      </div>

      <div className="divisor">
        <RevealWrapper reset>
          <Image
            width={100}
            height={100}
            src="/images/icons/advantage-divisor.svg"
            alt="logo"
          />
        </RevealWrapper>
      </div>
    </Container>
  );
};
