

class Ninja {

    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName = () => {
        console.log(this.nombre);
    }

    showStats = () => {
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
    }

    drinkSake = () => {
        this.salud += 10;
    }
}


class Sensei extends Ninja {

    constructor(nombre) {
        super();
        this.nombre = nombre;
        this.salud=200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log("La perfección es la enemiga de lo bueno");
    }

}


const leonardo = new Ninja("Leonardo", 100);
leonardo.sayName();
leonardo.showStats();
leonardo.drinkSake();
leonardo.showStats();

const splinter = new Sensei("Splinter");
splinter.sayName();
splinter.showStats();
splinter.drinkSake();
splinter.showStats();
splinter.speakWisdom();
splinter.showStats();