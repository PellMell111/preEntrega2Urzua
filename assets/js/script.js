//Array que almacena historial de las últimas cinco figuras calculadas.
let figureLogArray = [];

//Constructor de objeto que será la seleción ingresada de los tipos de figura y unidad de medida. 
class Selection {
    constructor(figureName, unitName) {
        this.figureName = figureName;
        this.unitName = unitName;
    }
}

//Array que almacena opciones de figuras para calcular.
const figureSelectArray = ["Rectángulo", "Círculo", "Triángulo"];

//Primer prompt para selección de figura a calcular.
let figureSelect = prompt(`Seleccione una opción ingresando el número correspondiente.(Sin corchetes)\n[1] = ${figureSelectArray[0]}.\n[2] = ${figureSelectArray[1]}.\n[3] = ${figureSelectArray[2]}.`) - 1;

//Array que almacena opciones de unidades de medida.
const unitSelectArray = ["cm", "m", "in"];

//Segundo prompt para selección de unidad de medida.
let unitSelect = prompt(`Seleccione una opción ingresando el número correspondiente.(Sin corchetes)\n[1] = (${unitSelectArray[0]}).\n[2] = (${unitSelectArray[1]}).\n[3] = (${unitSelectArray[2]}).`) - 1;

//Selección activa de tipo de figura y unidad de medida.
const actSelection = new Selection(figureSelectArray[figureSelect], unitSelectArray[unitSelect]);

//Constructor objetos
if (actSelection.figureName == figureSelectArray[0]){
    class Rectangulo {
        constructor(alto, ancho) {
            this.alto = alto;
            this.ancho = ancho;
        }

        calcularPerimetro() {
            return (this.alto) * 2 + (this.ancho * 2);
        }
        calcularArea() {
            return this.alto * this.ancho;
        }
    }

    let alto = prompt(`Ingrese el alto del rectángulo. (${actSelection.unitName})`);
    if (alto <= 0) {
        let alto = prompt(`No ingresó el valor. Ingrese el alto del rectángulo. (${actSelection.unitName})`);
    }

    let ancho = prompt(`Ingrese el ancho del rectángulo. (${actSelection.unitName})`);

    let actRectangulo = new Rectangulo(alto, ancho);

    alert(`Perímetro: ${actRectangulo.calcularPerimetro()} ${actSelection.unitName}.\nArea: ${actRectangulo.calcularArea()} ${actSelection.unitName}².`);

}else if (actSelection.figureName == figureSelectArray[1]){
    class Circulo {
        constructor(radio) {
            this.radio = radio;
        }

        calcularPerimetro() {
            return Math.PI * 2 * this.radio;
        }
        calcularArea() {
            return Math.PI * Math.pow(this.radio, 2);
        }
    }

    const radio = prompt(`Ingrese el radio del círculo.`);

    const actCirculo = new Circulo(radio);

    alert(`Perímetro: ${actCirculo.calcularPerimetro()} ${actSelection.unitName}.\nArea: ${actCirculo.calcularArea()} ${actSelection.unitName}².`);

}else if (actSelection.figureName == figureSelectArray[2]){
    class Triangulo {
        constructor(alto, base) {
            this.alto = alto;
            this.base = base;
        }

        calcularArea() {
            return (this.alto * this.base) / 2;
        }
    }

    const alto = prompt(`Ingrese el alto del triángulo.`);
    const base = prompt(`Ingrese la base del triángulo.`);

    const actTriangulo = new Triangulo(alto, base);
    
    alert(`Area: ${actTriangulo.calcularArea()} ${actSelection.unitName}².`);
}