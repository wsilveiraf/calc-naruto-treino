export class calcHabConhecimentos {
    static calcularConGerais(inputs: Record<string, number>): number {
      const inteligencia = inputs.inteligencia || 0;
      const congerais = inputs.congerais || 0;
      const x = inputs.x || 0;
      const y = inputs.y || 0;
      const z = inputs.z || 1;
  
      const base = Math.floor(inteligencia / 2) + congerais ;
      const percentual = base * (x / 100);
      const resultado = (base + percentual + y) * z;
  
      return parseFloat(resultado.toFixed(2));
    }
  
}