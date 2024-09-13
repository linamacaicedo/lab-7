function saludar(nombre) {
    if (!nombre) {
        return "Hola, desconocido";
    } else {
        return `Hola, ${nombre}`;
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 1")
console.log("-----------------------------------")
console.log(saludar("Salome")); // "Hola, Lina"
console.log(saludar()); // "Hola, desconocido"