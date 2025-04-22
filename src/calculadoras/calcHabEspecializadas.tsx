export class calcHabEspecializadas {
  static calcularNinjutsu(inputs: Record<string, number>): number {
    const inteligencia = inputs.inteligencia || 0;
    const ninjutsu = inputs.ninjutsu || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(inteligencia / 2) + ninjutsu;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularSeloDeMaos(inputs: Record<string, number>): number {
    const destreza = inputs.destreza || 0;
    const seloDeMaos = inputs.seloDeMaos || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(destreza / 2) + seloDeMaos;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularControleDeChakra(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const controleDeChakra = inputs.controleDeChakra || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(raciocinio / 2) + controleDeChakra;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularEstamina(inputs: Record<string, number>): number {
    const vigor = inputs.vigor || 0;
    const estamina = inputs.estamina || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(vigor / 2) + estamina;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularEnergiaEspiritual(inputs: Record<string, number>): number {
    const inteligencia = inputs.inteligencia || 0;
    const energiaEspiritual = inputs.energiaEspiritual || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(inteligencia / 2) + energiaEspiritual;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularDoton(inputs: Record<string, number>): number {
    const controleChakra = inputs.controleChakra || 0;
    const doton = inputs.doton || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(controleChakra / 2) + doton;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularKaton(inputs: Record<string, number>): number {
    const controleChakra = inputs.controleChakra || 0;
    const katon = inputs.katon || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(controleChakra / 2) + katon;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularRaiton(inputs: Record<string, number>): number {
    const controleChakra = inputs.controleChakra || 0;
    const raiton = inputs.raiton || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(controleChakra / 2) + raiton;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularSuiton(inputs: Record<string, number>): number {
    const controleChakra = inputs.controleChakra || 0;
    const suiton = inputs.suiton || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(controleChakra / 2) + suiton;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularFuuton(inputs: Record<string, number>): number {
    const controleChakra = inputs.controleChakra || 0;
    const fuuton = inputs.fuuton || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(controleChakra / 2) + fuuton;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }

  static calcularTansakujutsu(inputs: Record<string, number>): number {
    const raciocinio = inputs.raciocinio || 0;
    const tansakujutsu = inputs.tansakujutsu || 0;
    const x = inputs.x || 0;
    const y = inputs.y || 0;
    const z = inputs.z || 1;

    const base = Math.floor(raciocinio / 2) + tansakujutsu;
    const percentual = base * (x / 100);
    const resultado = (base + percentual + y) * z;

    return parseFloat(resultado.toFixed(2));
  }
}