import { calcAtributos } from "./calculadoras/calcAtributos";
import { calcHabTalentos } from "./calculadoras/calcHabTalentos";
import { calcHabConhecimentos } from "./calculadoras/calcHabConhecimentos";
import { calcHabEspecializadas } from "./calculadoras/calcHabEspecializadas";
import { calcHabPericias } from "./calculadoras/calcHabPericias";

function generateEquations(calculatorClass: any) {
  const methods = Object.getOwnPropertyNames(calculatorClass).filter(
    (method) => typeof calculatorClass[method] === "function"
  );

  return methods.reduce((acc, method) => {
    acc[method] = {
      calculate: calculatorClass[method],
      fields: getFieldsForMethod(method),
      label: getLabelForMethod(method), // Adicionar o label amigável
    };
    return acc;
  }, {} as Record<string, { calculate: (inputs: Record<string, number>) => number; fields: string[]; label: string }>);
}

function getFieldsForMethod(method: string): string[] {
  // Defina os campos necessários para cada método aqui
  const fieldsMap: Record<string, string[]> = {
    calcularForca: ["força", "esportes", "x", "y", "z"],
    calcularDestreza: ["destreza", "esportes", "x", "y", "z"],
    calcularVigor: ["vigor", "esportes", "x", "y", "z"],
    calcularCarisma: ["expressao", "carisma", "x", "y", "z"],
    calcularManipulacao: ["labia", "manipulacao", "x", "y", "z"],
    calcularPercepcao: ["percepcao", "prontidao", "x", "y", "z"],
    calcularInteligencia: ["inteligencia", "academicos", "x", "y", "z"],
    calcularRaciocinio: ["raciocinio", "prontidao", "x", "y", "z"],
    calcularProntidao: ["raciocinio", "prontidao", "x", "y", "z"],
    calcularEsportes: ["destreza", "esportes", "x", "y", "z"],
    calcularEmpatia: ["carisma", "empatia", "x", "y", "z"],
    calcularEsquiva: ["destreza", "esquiva", "x", "y", "z"],
    calcularExpressao: ["carisma", "expressao", "x", "y", "z"],
    calcularIntimidacao: ["carisma", "intimidacao", "x", "y", "z"],
    calcularLideranca: ["carisma", "lideranca", "x", "y", "z"],
    calcularLabia: ["carisma", "labia", "x", "y", "z"],
    calcularConGerais: ["inteligencia", "congerais", "x", "y", "z"],
    calcularNinjutsu: ["inteligencia", "ninjutsu", "x", "y", "z"],
    calcularSeloDeMaos: ["destreza", "seloDeMaos", "x", "y", "z"],
    calcularControleDeChakra: ["inteligencia", "controleDeChakra", "x", "y", "z"],
    calcularEstamina: ["vigor", "estamina", "x", "y", "z"],
    calcularEnergiaEspiritual: ["inteligencia", "energiaEspiritual", "x", "y", "z"],
    calcularDoton: ["controleDeChakra", "doton", "x", "y", "z"],
    calcularKaton: ["controleDeChakra", "katon", "x", "y", "z"],
    calcularRaiton: ["controleDeChakra", "raiton", "x", "y", "z"],
    calcularSuiton: ["controleDeChakra", "suiton", "x", "y", "z"],
    calcularFuuton: ["controleDeChakra", "fuuton", "x", "y", "z"],
    calcularTansakujutsu: ["inteligencia", "tansakujutsu", "x", "y", "z"],
    calcularOficios: ["inteligencia", "oficios", "x", "y", "z"],
    calcularMedicina: ["inteligencia", "medicina", "x", "y", "z"],
    calcularSobrevivencia: ["raciocinio", "sobrevivencia", "x", "y", "z"],
    calcularTaijutsu: ["destreza", "taijutsu", "x", "y", "z"],
    calcularFurtividade: ["destreza", "furtividade", "x", "y", "z"],
    calcularArmasBrancas: ["destreza", "armasBrancas", "x", "y", "z"],
    calcularFerramentasNinja: ["destreza", "ferramentasNinja", "x", "y", "z"],
    calcularPerformance: ["carisma", "performance", "x", "y", "z"],
    calcularMeditacao: ["inteligencia", "meditacao", "x", "y", "z"],
  }
  return fieldsMap[method] || [];
}

function getLabelForMethod(method: string): string {
  const labelMap: Record<string, string> = {
    calcularForca: "Força",
    calcularDestreza: "Destreza",
    calcularVigor: "Vigor",
    calcularCarisma: "Carisma",
    calcularManipulacao: "Manipulação",
    calcularPercepcao: "Percepção",
    calcularInteligencia: "Inteligência",
    calcularRaciocinio: "Raciocínio",
    calcularProntidao: "Prontidão",
    calcularEsportes: "Esportes",
    calcularEmpatia: "Empatia",
    calcularEsquiva: "Esquiva",
    calcularExpressao: "Expressão",
    calcularIntimidacao: "Intimidação",
    calcularLideranca: "Liderança",
    calcularLabia: "Lábia",
    calcularConGerais: "Conhecimentos Gerais",
    calcularNinjutsu: "Ninjutsu",
    calcularSeloDeMaos: "Selo de Mãos",
    calcularControleDeChakra: "Controle de Chakra",
    calcularEstamina: "Estamina",
    calcularEnergiaEspiritual: "Energia Espiritual",
    calcularDoton: "Doton",
    calcularKaton: "Katon",
    calcularRaiton: "Raiton",
    calcularSuiton: "Suiton",
    calcularFuuton: "Fuuton",
    calcularTansakujutsu: "Tansakujutsu",
    calcularOficios: "Ofícios",
    calcularMedicina: "Medicina",
    calcularSobrevivencia: "Sobrevivência",
    calcularTaijutsu: "Taijutsu",
    calcularFurtividade: "Furtividade",
    calcularArmasBrancas: "Armas Brancas",
    calcularFerramentasNinja: "Ferramentas Ninja",
    calcularPerformance: "Performance",
    calcularMeditacao: "Meditação",
  };
  return labelMap[method] || method;
}

export const equationsConfig = {
  atributos: generateEquations(calcAtributos),
  talentos: generateEquations(calcHabTalentos),
  conhecimentos: generateEquations(calcHabConhecimentos),
  especializados: generateEquations(calcHabEspecializadas),
  pericias: generateEquations(calcHabPericias),
} as const;

export type EquationsConfig = typeof equationsConfig;
export type Category = keyof EquationsConfig;