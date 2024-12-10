/**
 * Crear una clase base InstrumentoMusical con un método tocar() que debe
 * ser implementado por las clases hijas.
 */

class InstrumentoMusical{
    constructor(tipoInstrumento){
        this.tipoInstrumento = tipoInstrumento;
    }

    tocar(){
        console.log(`Se está tocando el instrumento`);
    }
}

class Violin extends InstrumentoMusical{
    constructor(tipoInstrumento, cantCuerdas){
        super(tipoInstrumento);
        this.cantCuerdas = cantCuerdas;
    }

    tocar(){
        console.log(`El violín se está tocando 🎻🎶🎵`);
    }
}

class Trompeta extends InstrumentoMusical{
    constructor(tipoInstrumento, material){
        super(tipoInstrumento);
        this.material = material;
    }

    tocar(){
        console.log(`La trompeta se está tocando 🎺🎶🎵`);
    }
}

class Tambor extends InstrumentoMusical{
    constructor(tipoInstrumento, material){
        super(tipoInstrumento);
        this.material = material;
    }

    tocar(){
        console.log(`El tambor se está tocando 🥁🎶🎵`);
    }
}

const violin = new Violin("Cuerda", 4);
violin.tocar();

const trompeta = new Trompeta("Viento", "metal");
trompeta.tocar();

const tambor = new Tambor("Percusión", "Roble");
tambor.tocar();