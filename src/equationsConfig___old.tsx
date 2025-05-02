import { calcAtributos } from "./calculadoras/calcAtributos";
import { calcHabConhecimentos } from "./calculadoras/calcHabConhecimentos";
import { calcHabEspecializadas } from "./calculadoras/calcHabEspecializadas";
import { calcHabTalentos } from "./calculadoras/calcHabTalentos";
import { calcHabPericias } from "./calculadoras/calcHabPericias";

export const equationsConfig = {
  atributos: {
    Força: {
      calculate: calcAtributos.calcularForca,
      fields: ["força", "esportes", "x", "y", "z"],
    },
    Destreza: {
      calculate: calcAtributos.calcularDestreza,
      fields: ["destreza", "esportes", "x", "y", "z"],
    },
    Vigor: {
      calculate: calcAtributos.calcularVigor,
      fields: ["vigor", "esportes", "x", "y", "z"],
    },
    Carisma: {
      calculate: calcAtributos.calcularCarisma,
      fields: ["expressao", "carisma", "x", "y", "z"],
    },
    Manipulacao: {
      calculate: calcAtributos.calcularManipulacao,
      fields: ["labia", "manipulacao", "x", "y", "z"],
    },
    Percepcao: {
      calculate: calcAtributos.calcularPercepcao,
      fields: ["percepcao", "prontidao", "x", "y", "z"],
    },
    Inteligencia: {
      calculate: calcAtributos.calcularInteligencia,
      fields: ["inteligencia", "academicos", "x", "y", "z"],
    },
    Raciocinio: {
      calculate: calcAtributos.calcularRaciocinio,
      fields: ["raciocinio", "prontidao", "x", "y", "z"],
    },
  },
  talentos: {
    Prontidao: {
      calculate: calcHabTalentos.calcularProntidao,
      fields: ["raciocinio", "prontidao", "x", "y", "z"],
    },
    Esportes: {
      calculate: calcHabTalentos.calcularEsportes,
      fields: ["destreza", "esportes", "x", "y", "z"],
    },
    Empatia: {
      calculate: calcHabTalentos.calcularEmpatia,
      fields: ["carisma", "empatia", "x", "y", "z"],
    },
    Esquiva: {
      calculate: calcHabTalentos.calcularEsquiva,
      fields: ["destreza", "esquiva", "x", "y", "z"],
    },
    Expressao: {
      calculate: calcHabTalentos.calcularExpressao,
      fields: ["carisma", "expressao", "x", "y", "z"],
    },
    Intimidacao: {
      calculate: calcHabTalentos.calcularIntimidacao,
      fields: ["carisma", "intimidacao", "x", "y", "z"],
    },
    Lideranca: {
      calculate: calcHabTalentos.calcularLideranca,
      fields: ["carisma", "lideranca", "x", "y", "z"],
    },
    Labia: {
      calculate: calcHabTalentos.calcularLabia,
      fields: ["carisma", "labia", "x", "y", "z"],
    },
  },
  conhecimentos: {
    ConhecimentosGerais: {
      calculate: calcHabConhecimentos.calcularConGerais,
      fields: ["inteligencia", "congerais", "x", "y", "z"],
    },
  },
  especializados: {
    Ninjutsu: {
      calculate: calcHabEspecializadas.calcularNinjutsu,
      fields: ["inteligencia", "ninjutsu", "x", "y", "z"],
    },
    SeloDeMaos: {
      calculate: calcHabEspecializadas.calcularSeloDeMaos,
      fields: ["destreza", "seloDeMaos", "x", "y", "z"],
    },
    ControleDeChakra: {
      calculate: calcHabEspecializadas.calcularControleDeChakra,
      fields: ["inteligencia", "controleDeChakra", "x", "y", "z"],
    },
    Estamina: {
      calculate: calcHabEspecializadas.calcularEstamina,
      fields: ["vigor", "estamina", "x", "y", "z"],
    },
    EnergiaEspiritual: {
      calculate: calcHabEspecializadas.calcularEnergiaEspiritual,
      fields: ["vigor", "energiaEspiritual", "x", "y", "z"],
    },
    Doton: {
      calculate: calcHabEspecializadas.calcularDoton,
      fields: ["controleDeChakra", "doton", "x", "y", "z"],
    },
    Katon: {
      calculate: calcHabEspecializadas.calcularKaton,
      fields: ["controleDeChakra", "katon", "x", "y", "z"],
    },
    Raiton: {
      calculate: calcHabEspecializadas.calcularRaiton,
      fields: ["controleDeChakra", "raiton", "x", "y", "z"],
    },
    Suiton: {
      calculate: calcHabEspecializadas.calcularSuiton,
      fields: ["controleDeChakra", "suiton", "x", "y", "z"],
    },
    Fuuton: {
      calculate: calcHabEspecializadas.calcularFuuton,
      fields: ["controleDeChakra", "fuuton", "x", "y", "z"],
    },
    Tansakujutsu: {
      calculate: calcHabEspecializadas.calcularTansakujutsu,
      fields: ["inteligencia", "tansakujutsu", "x", "y", "z"],
    },
  },
  pericias: {
    Oficios: {
      calculate: calcHabPericias.calcularOficios,
      fields: ["inteligencia", "oficios", "x", "y", "z"],
    },
    Medicina: {
      calculate: calcHabPericias.calcularMedicina,
      fields: ["inteligencia", "medicina", "x", "y", "z"],
    },
    Sobrevivencia: {
      calculate: calcHabPericias.calcularSobrevivencia,
      fields: ["raciocinio", "sobrevivencia", "x", "y", "z"],
    },
    Taijutsu: {
      calculate: calcHabPericias.calcularTaijutsu,
      fields: ["destreza", "taijutsu", "x", "y", "z"],
    },
    Furtividade: {
      calculate: calcHabPericias.calcularFurtividade,
      fields: ["destreza", "furtividade", "x", "y", "z"],
    },
    ArmasBrancas: {
      calculate: calcHabPericias.calcularArmasBrancas,
      fields: ["destreza", "armasBrancas", "x", "y", "z"],
    },
    FerramentasNinja: {
      calculate: calcHabPericias.calcularFerramentasNinja,
      fields: ["destreza", "ferramentasNinja", "x", "y", "z"],
    },
    Performance: {
      calculate: calcHabPericias.calcularPerformance,
      fields: ["carisma", "performance", "x", "y", "z"],
    },
    Meditacao: {
      calculate: calcHabPericias.calcularMeditacao,
      fields: ["inteligencia", "meditacao", "x", "y", "z"],
    },
  },
};