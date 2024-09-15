"use client";

import { FC, useEffect, useState } from "react";
import { Container } from "./styles";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ScaleFade } from "@chakra-ui/transition";

export const Navbar: FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "customers", "testimonials"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Faz a transição suave
    }
  };

  return (
    <Container>
      <div className="logo-content">
        <ScaleFade in={true} delay={0.1}>
          <Image width={277} height={41} src="/images/logo.svg" alt="logo" />
        </ScaleFade>
      </div>

      <div className="nav-items">
        <div className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
          <ScaleFade in={true} delay={0.1}>
            <a
              onClick={() => handleScrollToSection("home")}
              style={{
                fontWeight: "bold",
                color: activeSection === "home" ? "#FFF" : "#CCC",
                cursor: "pointer",
              }}
            >
              Início
            </a>
          </ScaleFade>
        </div>

        <div
          className={`nav-item ${activeSection === "about" ? "active" : ""}`}
        >
          <ScaleFade in={true} delay={0.2}>
            <a
              onClick={() => handleScrollToSection("about")}
              style={{
                fontWeight: "bold",
                color: activeSection === "about" ? "#FFF" : "#CCC",
                cursor: "pointer",
              }}
            >
              Sobre
            </a>
          </ScaleFade>
        </div>

        <div
          className={`nav-item ${
            activeSection === "customers" ? "active" : ""
          }`}
        >
          <ScaleFade in={true} delay={0.3}>
            <a
              onClick={() => handleScrollToSection("customers")}
              style={{
                fontWeight: "bold",
                color: activeSection === "customers" ? "#FFF" : "#CCC",
                cursor: "pointer",
              }}
            >
              Clientes
            </a>
          </ScaleFade>
        </div>

        <div
          className={`nav-item ${
            activeSection === "testimonials" ? "active" : ""
          }`}
        >
          <ScaleFade in={true} delay={0.4}>
            <a
              onClick={() => handleScrollToSection("testimonials")}
              style={{
                fontWeight: "bold",
                color: activeSection === "testimonials" ? "#FFF" : "#CCC",
                cursor: "pointer",
              }}
            >
              Depoimentos
            </a>
          </ScaleFade>
        </div>
      </div>

      <div className="actions-content">
        <div className="customer-link-content">
          <ScaleFade in={true} delay={0.1}>
            <a
              href="https://app.sendwork.com.br"
              style={{ marginRight: 20, color: "#B058F6", fontWeight: "bold" }}
            >
              Área do Cliente
            </a>
          </ScaleFade>
        </div>

        <ScaleFade in={true} delay={0.1}>
          <button
            onClick={() => {
              window.open(
                `https://api.whatsapp.com/send/?phone=5521964982495&text=&type=phone_number&app_absent=0`
              );
            }}
          >
            <span>Testar agora</span>
            <div className="icon-content">
              <FaArrowRight color="#75e30a" />
            </div>
          </button>
        </ScaleFade>
      </div>
    </Container>
  );
};
