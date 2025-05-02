import React from "react";
import { ClonesSection } from "./ClonesSection";

interface AdicionaisSectionProps {
  calculator: string; // Nome da calculadora (atributos, talentos, etc.)
}

export const AdicionaisSection: React.FC<AdicionaisSectionProps> = ({ calculator }) => {
  return (
    <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
      <h3 style={{ marginBottom: "10px" }}>Adicionais</h3>
      <ClonesSection calculator={calculator} />
    </div>
  );
};