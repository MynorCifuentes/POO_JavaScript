class Estudiante{

    #carnet;
    #nombre;
    #apellido;
    #edad;
    
    constructor(carnet, nombre, apellido, edad){
        this.#carnet = carnet;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad; 
    }

    obtenerCarnet = () => {
        return this.#carnet;
    }

    obtenerNombre = () => {
        return this.#nombre;
    }

    obtenerApellido = () => {
        return this.#apellido;
    }

    obtenerEdad = () => {
        return this.#edad;
    }

    obtenerInformacionCompleta(){
        return `El carnet es: ${this.#carnet} El Nombre es: ${this.#nombre} El Nombre es: ${this.#nombre} El Apellido es: ${this.#apellido} La Edad es: ${this.#edad}`;
    }

}


let estudiante1 = new Estudiante(201318644, 'Mynor','Cifuentes', 30);
console.log(estudiante1.obtenerCarnet())
console.log(estudiante1.obtenerNombre())
console.log(estudiante1.obtenerApellido())
console.log(estudiante1.obtenerEdad())
console.log(estudiante1.obtenerInformacionCompleta())
