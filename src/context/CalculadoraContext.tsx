import React, { createContext, useContext, useState, ReactNode } from "react";
import { equationsConfig, Category } from "../equationsConfig";

export interface CalculadoraState {
  inputs: Record<string, number>;
  result: number | null;
  clonesEnabled: boolean;
  cloneCount: number;
  selectedEquation: string | null;
}

interface CalculadoraContextProps {
  calculators: Record<string, CalculadoraState>;
  updateInput: (category: Category, field: string, value: number) => void;
  updateSelectedEquation: (category: Category, equation: string) => void;
  calculateResult: (category: Category, calculateFn: (inputs: Record<string, number>) => number) => void;
  toggleClones: (category: Category) => void;
  setCloneCount: (category: Category, count: number) => void;
}

const CalculadoraContext = createContext<CalculadoraContextProps | undefined>(undefined);

export const CalculadoraProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [calculators, setCalculators] = useState<Record<string, CalculadoraState>>({});

  const updateInput = (category: Category, field: string, value: number) => {
    setCalculators((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        inputs: {
          ...prev[category].inputs,
          [field]: value,
        },
      },
    }));
  };

  const updateSelectedEquation = (category: Category, equation: string) => {
    setCalculators((prev) => {
      const selectedEquation = equationsConfig[category]?.[equation];
      const fields = selectedEquation?.fields || [];

      const initializedInputs = fields.reduce((acc: Record<string, number>, field: string) => {
        acc[field] = prev[category]?.inputs[field] || 0;
        return acc;
      }, {} as Record<string, number>);

      return {
        ...prev,
        [category]: {
          ...prev[category],
          selectedEquation: equation,
          inputs: initializedInputs,
        },
      };
    });
  };

  const calculateResult = (category: Category, calculateFn: (inputs: Record<string, number>) => number) => {
    const calculator = calculators[category];
    if (calculator) {
      const baseResult = calculateFn(calculator.inputs);
      const totalResult = baseResult * (calculator.cloneCount || 1); // Multiplicar pelo número de clones
      setCalculators((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          result: parseFloat(totalResult.toFixed(2)), // Formatar o número com 2 casas decimais
        },
      }));
    }
  };

  const setCloneCount = (category: Category, count: number) => {
    setCalculators((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        cloneCount: count,
      },
    }));
  };

  return (
    <CalculadoraContext.Provider
      value={{
        calculators,
        updateInput,
        updateSelectedEquation,
        calculateResult,
        toggleClones: () => {}, // Exemplo de função
        setCloneCount,
      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
};

export const useCalculadoraContext = (): CalculadoraContextProps => {
  const context = useContext(CalculadoraContext);
  if (!context) {
    throw new Error("useCalculadoraContext must be used within a CalculadoraProvider");
  }
  return context;
};