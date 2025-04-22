export class calcHabTalentos {
  static calcularProntidao(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const prontidao = inputs.prontidao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(raciocinio / 2) + prontidao;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularEsportes(inputs: Record<string, number>): number {
    const destreza = inputs.destreza || 0;
    const esportes = inputs.esportes || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(destreza / 2) + esportes;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularEmpatia(inputs: Record<string, number>): number {
    const percepcao = inputs.percepcao || 0;
    const empatia = inputs.empatia || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(percepcao / 2) + empatia;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularEsquiva(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const esquiva = inputs.esquiva || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(raciocinio / 2) + esquiva;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularExpressao(inputs: Record<string, number>): number {
    const carisma = inputs.carisma || 0;
    const expressao = inputs.expressao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(carisma / 2) + expressao;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularIntimidacao(inputs: Record<string, number>): number {
    const manipulacao = inputs.manipulacao || 0;
    const intimidacao = inputs.intimidacao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(manipulacao / 2) + intimidacao;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularLideranca(inputs: Record<string, number>): number {
    const carisma = inputs.carisma || 0;
    const lideranca = inputs.lideranca || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(carisma / 2) + lideranca;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularLabia(inputs: Record<string, number>): number {
    const manipulacao = inputs.manipulacao || 0;
    const labia = inputs.labia || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(manipulacao / 2) + labia;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }
}