import React from "react";
import { equationsConfig, Category } from "./equationsConfig";
import { CalculadoraLayout } from "./components/CalculadoraLayout";
import { CalculadoraProvider } from "./context/CalculadoraContext";

const App = () => {
  return (
    <CalculadoraProvider>
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#a7a8a2", // Cor de fundo
          minHeight: "100vh", // Garantir que o fundo cubra toda a altura da página
        }}
      >
        <h1 style={{ textAlign: "center" }}>Calculadora de Atributos e Habilidades</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {Object.entries(equationsConfig).map(([category, equations]) => (
            <CalculadoraLayout
              key={category}
              category={category as Category}
              equations={equations}
            />
          ))}
        </div>
      </div>
    </CalculadoraProvider>
  );
};

export default App;