export class calcAtributos {
  static calcularForca(inputs: Record<string, number>): number {
    const força = inputs.força || 0;
    const esportes = inputs.esportes || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = força + Math.floor(esportes / 2);
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularDestreza(inputs: Record<string, number>): number {
    const destreza = inputs.destreza || 0;
    const esportes = inputs.esportes || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = destreza + Math.floor(esportes / 2);
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularVigor(inputs: Record<string, number>): number {
    const vigor = inputs.vigor || 0;
    const esportes = inputs.esportes || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = vigor + Math.floor(esportes / 2);
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularCarisma(inputs: Record<string, number>): number {
    const expressao = inputs.expressao || 0;
    const carisma = inputs.carisma || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(expressao / 2) + carisma;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularManipulacao(inputs: Record<string, number>): number {
    const labia = inputs.labia || 0;
    const manipulacao = inputs.manipulacao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(labia / 2) + manipulacao;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularPercepcao(inputs: Record<string, number>): number {
    const percepcao = inputs.percepcao || 0;
    const prontidao = inputs.prontidao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = percepcao + Math.floor(prontidao / 2);
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularInteligencia(inputs: Record<string, number>): number {
    const inteligencia = inputs.inteligencia || 0;
    const academicos = inputs.academicos || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = inteligencia + Math.floor(academicos / 2);
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularRaciocinio(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const prontidao = inputs.prontidao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = raciocinio + Math.floor(prontidao / 2);
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }
}