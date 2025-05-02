import React from "react";
import { useClonesContext } from "../context/ClonesContext";

interface ClonesSectionProps {
  calculator: string;
}

export const ClonesSection: React.FC<ClonesSectionProps> = ({ calculator }) => {
  const { calculators, toggleChecked, setCloneCount } = useClonesContext();
  const { isChecked, cloneCount } = calculators[calculator];

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleChecked(calculator)}
        />
        Clones
      </label>
      {isChecked && (
        <div style={{ marginTop: "10px" }}>
          <label>
            Número de Clones:
            <input
              type="number"
              value={cloneCount}
              onChange={(e) => setCloneCount(calculator, parseInt(e.target.value, 10) || 0)}
              min="0"
              step="1"
              style={{ marginLeft: "10px", width: "80px" }}
            />
          </label>
        </div>
      )}
    </div>
  );
};