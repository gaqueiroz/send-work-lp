"use client";

import { FC } from "react";
import Image from "next/image";

import { Container } from "./styles";

export const TitleGradient: FC = () => {
  return (
    <Container>
      {/* <h1>{title}</h1> */}
      <Image width={1200} height={100} src="/images/logo-gradient.svg"  alt="logo"/>
    </Container>
  )
}
