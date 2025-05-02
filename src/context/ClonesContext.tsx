import React, { createContext, useContext, useState, ReactNode } from "react";

interface CalculatorState {
  isChecked: boolean;
  cloneCount: number;
}

interface ClonesContextProps {
  calculators: Record<string, CalculatorState>;
  toggleChecked: (calculator: string) => void;
  setCloneCount: (calculator: string, count: number) => void;
  adjustResultWithClones: (calculator: string, baseResult: number) => number;
}

const ClonesContext = createContext<ClonesContextProps | undefined>(undefined);

export const ClonesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [calculators, setCalculators] = useState<Record<string, CalculatorState>>({
    atributos: { isChecked: false, cloneCount: 0 },
    talentos: { isChecked: false, cloneCount: 0 },
    conhecimentos: { isChecked: false, cloneCount: 0 },
    pericias: { isChecked: false, cloneCount: 0 },
    especializados: { isChecked: false, cloneCount: 0 },
  });

  const toggleChecked = (calculator: string) => {
    setCalculators((prev) => ({
      ...prev,
      [calculator]: {
        ...prev[calculator],
        isChecked: !prev[calculator].isChecked,
      },
    }));
  };

  const setCloneCount = (calculator: string, count: number) => {
    if (count >= 0) {
      setCalculators((prev) => ({
        ...prev,
        [calculator]: {
          ...prev[calculator],
          cloneCount: count,
        },
      }));
    }
  };

  const adjustResultWithClones = (calculator: string, baseResult: number): number => {
    const { cloneCount } = calculators[calculator];
    if (cloneCount > 0) {
      return baseResult + baseResult * (0.10 * cloneCount); // Adiciona 10% por clone
    }
    return baseResult;
  };

  return (
    <ClonesContext.Provider
      value={{ calculators, toggleChecked, setCloneCount, adjustResultWithClones }}
    >
      {children}
    </ClonesContext.Provider>
  );
};

export const useClonesContext = (): ClonesContextProps => {
  const context = useContext(ClonesContext);
  if (!context) {
    throw new Error("useClonesContext must be used within a ClonesProvider");
  }
  return context;
};