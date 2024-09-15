"use client";

import { FC, useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { Container } from "./styles";
import { language } from "@/shared/language";
import { RevealWrapper } from "next-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@/shared/utils/useMediaQuery";

export const Customers: FC = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === language.customers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [language.customers.length]);

  return (
    <Container id="customers">
      <RevealWrapper reset>
        <h1>
          O que os{" "}
          <span style={{ fontWeight: "bold", color: "#b058f6" }}>clientes</span>{" "}
          têm a dizer?
        </h1>
      </RevealWrapper>

      <RevealWrapper reset>
        <div className="testimonials" id="testimonials">
          {language.customers.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className={`testimonial`}
              style={{
                display: 'block',
                flexDirection: "column",
                ...(index === activeIndex && {
                  background:
                    "linear-gradient(#313131, #313131) padding-box, linear-gradient(80deg, #fff, #8107e3) border-box",
                  border: "1px solid transparent",
                  boxShadow: "0px 0px 28px -3px #8107E3",
                }),
                ...(isMobile && index !== activeIndex  && {
                    display: "none",
                })
              }}
            >
              <p style={{ flex: 1 }}>{testimonial.description}</p>
              <div className="customer-info">
                <div>
                  <Image
                    width={49}
                    height={49}
                    src="/images/customer-picture.svg"
                    alt="customer picture"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 10,
                    flex: 1,
                  }}
                >
                  <span className="customer-name">
                    {testimonial.customer.name}
                  </span>
                  <span className="customer-position">
                    {testimonial.customer.companyPosition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>

      <RevealWrapper reset>
        <div
          className="testimonial-gradient"
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: 16,
            marginTop: 30,
          }}
        >
          <Image
            width={1200}
            height={130}
            src="/images/testimonial-gradient.svg"
            alt="logo"
          />
        </div>
      </RevealWrapper>
    </Container>
  );
};
