export default class Temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }

  converterParaFahrenheit() {
    return (this.celsius * 1,8) + 32;
  }
    
  
  converterParaKelvin() {
    return this.celsius + 273.15;
  }
}
