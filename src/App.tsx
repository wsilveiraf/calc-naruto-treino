import React, { useState } from "react";
import { equationsConfig } from "./equationsConfig";

const App = () => {
  const [selectedEquations, setSelectedEquations] = useState<Record<string, string>>({
    atributos: "",
    talentos: "",
    conhecimentos: "",
    pericias: "",
    especializados: "",
  });
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: isNaN(parseFloat(value)) ? 0 : parseFloat(value),
    }));
  };

  const handleCalculate = (category: string) => {
    const selectedEquation = selectedEquations[category];
    const equations = equationsConfig[category as keyof typeof equationsConfig];

    if (selectedEquation && equations) {
      const equation = equations[selectedEquation as keyof typeof equations] as {
        fields: string[];
        calculate: (inputs: Record<string, number>) => number;
      };

      if (equation) {
        // Preencher campos vazios com 0
        const sanitizedInputs = equation.fields.reduce((acc, field) => {
          acc[field] = inputs[field] || 0;
          return acc;
        }, {} as Record<string, number>);

        const calculation = equation.calculate(sanitizedInputs);
        setResult(calculation);
      }
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Calculadora de Atributos e Habilidades</h1>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {Object.entries(equationsConfig).map(([category, equations]) => (
          <div key={category} style={{ flex: "1", margin: "0 10px" }}>
            <h2 style={{ textAlign: "center" }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <select
              value={selectedEquations[category]}
              onChange={(e) =>
                setSelectedEquations((prev) => ({
                  ...prev,
                  [category]: e.target.value,
                }))
              }
              style={{ width: "100%", marginBottom: "10px" }}
            >
              <option value="">Selecione</option>
              {Object.keys(equations).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            {selectedEquations[category] && (
              <div>
                <h3>Entradas</h3>
                {(() => {
                  const equation = equations[selectedEquations[category] as keyof typeof equations] as {
                    fields: string[];
                    calculate: (inputs: Record<string, number>) => number;
                  };

                  if (equation && equation.fields) {
                    return (
                      <div>
                        {equation.fields.slice(0, 2).map((field: string) => (
                          <div
                            key={field}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <label
                              htmlFor={field}
                              style={{
                                marginRight: "10px",
                                width: "100px", // Largura fixa para alinhar os labels
                                textAlign: "right",
                              }}
                            >
                              {field.toUpperCase()}
                            </label>
                            <input
                              type="number"
                              id={field}
                              name={field}
                              value={inputs[field] || 0}
                              onChange={handleInputChange}
                              style={{ flex: "1" }}
                            />
                          </div>
                        ))}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                          }}
                        >
                          {["x", "y", "z"].map((field) => (
                            <div key={field} style={{ textAlign: "center", flex: "1" }}>
                              <label htmlFor={field} style={{ display: "block", marginBottom: "5px" }}>
                                {field.toUpperCase()}:
                              </label>
                              <input
                                type="number"
                                id={field}
                                name={field}
                                value={inputs[field] || 0}
                                onChange={handleInputChange}
                                style={{ width: "80%" }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })()}
                <button
                  onClick={() => handleCalculate(category)}
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Calcular
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {result !== null && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>Resultado</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;