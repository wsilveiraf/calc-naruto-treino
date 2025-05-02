import React from "react";
import { useCalculadoraContext } from "../context/CalculadoraContext";
import { useClonesContext } from "../context/ClonesContext";
import { Category } from "../equationsConfig";

interface CalculadoraLayoutProps {
  category: Category;
  equations: Record<string, any>;
}

export const CalculadoraLayout: React.FC<CalculadoraLayoutProps> = ({
  category,
  equations,
}) => {
  const {
    calculators,
    updateInput,
    updateSelectedEquation,
    calculateResult,
  } = useCalculadoraContext();

  const {
    calculators: cloneCalculators,
    setCloneCount,
    adjustResultWithClones,
  } = useClonesContext();

  const calculator = calculators[category] || {
    inputs: {},
    result: null,
    clonesEnabled: false,
    cloneCount: 0,
    selectedEquation: null,
  };

  const handleInputChange = (field: string, value: number) => {
    updateInput(category, field, value);
  };

  const handleCalculate = () => {
    if (calculator.selectedEquation) {
      const selectedEquation =
        equations[calculator.selectedEquation as keyof typeof equations];
      if (selectedEquation) {
        const baseResult = selectedEquation.calculate(calculator.inputs);
        const adjustedResult = adjustResultWithClones(category, baseResult); // Ajustar com base nos clones
        calculateResult(category, () => adjustedResult); // Atualizar o resultado no contexto
      }
    }
  };

  return (
    <div
      style={{
        flex: "1",
        margin: "0 10px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{category.toUpperCase()}</h2>
      <select
        value={calculator.selectedEquation || ""}
        onChange={(e) =>
          updateSelectedEquation(category, e.target.value)
        }
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <option value="">Selecione</option>
        {Object.entries(equations).map(([key, equation]) => (
          <option key={key} value={key}>
            {equation.label} {/* Exibir o label amigável */}
          </option>
        ))}
      </select>

      {calculator.selectedEquation &&
        equations[calculator.selectedEquation]?.fields && (
          <>
            <h3 style={{ textAlign: "center" }}>Entradas</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              {equations[calculator.selectedEquation]?.fields
                .filter((field: string) => !["x", "y", "z"].includes(field)) // Filtrar XYZ
                .map((field: string) => (
                  <div key={field} style={{ flex: "1", marginRight: "10px" }}>
                    <label
                      htmlFor={field}
                      style={{
                        display: "block",
                        marginBottom: "5px",
                        textAlign: "center",
                      }}
                    >
                      {field.toUpperCase()}
                    </label>
                    <input
                      type="number"
                      id={field}
                      name={field}
                      value={calculator.inputs[field] || 0}
                      onChange={(e) =>
                        handleInputChange(field, parseFloat(e.target.value) || 0)
                      }
                      style={{
                        width: "100%",
                        padding: "5px",
                        textAlign: "center",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>
                ))}
            </div>
          </>
        )}

      {/* Renderizar XYZ (ou %, En. Men., Bon. Sensei) */}
      <h3 style={{ textAlign: "center" }}>Adicionais</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Permitir que os blocos se ajustem ao espaço disponível
          gap: "10px", // Espaço de 10px entre os blocos
          marginBottom: "10px",
        }}
      >
        {["x", "y", "z"].map((field, index) => {
          const labels = ["%", "En. Men.", "Bon. Sensei"];
          return (
            <div
              key={field}
              style={{
                flex: "1 1 calc(33.33% - 10px)", // Garantir 3 blocos por linha
                marginBottom: "10px",
              }}
            >
              <label
                htmlFor={field}
                style={{
                  display: "block",
                  marginBottom: "5px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                {labels[index]}
              </label>
              <input
                type="number"
                id={field}
                name={field}
                value={calculator.inputs[field] || 0}
                onChange={(e) =>
                  handleInputChange(field, parseFloat(e.target.value) || 0)
                }
                style={{
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          );
        })}

        {/* Campo de Clones */}
        <div
          style={{
            flex: "1 1 calc(33.33% - 10px)", // Garantir que o campo de clones siga o mesmo layout
            marginBottom: "10px",
          }}
        >
          <label
            htmlFor="clones"
            style={{
              display: "block",
              marginBottom: "5px",
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            Clones
          </label>
          <input
            type="number"
            id="clones"
            name="clones"
            value={cloneCalculators[category]?.cloneCount || 0}
            onChange={(e) =>
              setCloneCount(category, parseInt(e.target.value, 10) || 0)
            }
            style={{
              width: "100%",
              padding: "5px",
              textAlign: "center",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calcular
      </button>

      {calculator.result !== null && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>Resultado</h2>
          <p>{calculator.result}</p>
        </div>
      )}
    </div>
  );
};