'use client'

import { theme } from "@/shared/styles/theme";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../StyledComponentsRegistry";
import { GlobalStyle } from "@/shared/styles/global";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
