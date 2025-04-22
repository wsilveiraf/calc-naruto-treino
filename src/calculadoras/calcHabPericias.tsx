export class calcHabPericias {
  static calcularOficios(inputs: Record<string, number>): number {
    const inteligencia = inputs.inteligencia || 0;
    const oficios = inputs.oficios || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(inteligencia / 2) + oficios;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularMedicina(inputs: Record<string, number>): number {
    const inteligencia = inputs.inteligencia || 0;
    const medicina = inputs.medicina || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(inteligencia / 2) + medicina;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularSobrevivencia(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const sobrevivencia = inputs.sobrevivencia || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(raciocinio / 2) + sobrevivencia;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularTaijutsu(inputs: Record<string, number>): number {
    const destreza = inputs.destreza || 0;
    const taijutsu = inputs.taijutsu || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(destreza / 2) + taijutsu;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularFurtividade(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const furtividade = inputs.furtividade || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(raciocinio / 2) + furtividade;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularArmasBrancas(inputs: Record<string, number>): number {
    const destreza = inputs.destreza || 0;
    const armasBrancas = inputs.armasBrancas || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(destreza / 2) + armasBrancas;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularFerramentasNinja(inputs: Record<string, number>): number {
    const destreza = inputs.destreza || 0;
    const ferramentasNinja = inputs.ferramentasNinja || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(destreza / 2) + ferramentasNinja;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularPerformance(inputs: Record<string, number>): number {
    const manipulacao = inputs.manipulacao || 0;
    const performance = inputs.performance || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(manipulacao / 2) + performance;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularMeditacao(inputs: Record<string, number>): number {
    const inteligencia = inputs.inteligencia || 0;
    const meditacao = inputs.meditacao || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(inteligencia / 2) + meditacao;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }
}