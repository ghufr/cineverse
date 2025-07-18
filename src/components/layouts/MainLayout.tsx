import { Header } from "@/components/elements/Header";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
