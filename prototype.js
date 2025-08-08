
String.prototype.concatenarPalabra = function(palabra) {
    console.log(`Este es un método personalizado para strings: ${this} ${palabra}`);
};

const halago = "soy alto"
const todo = halago.concatenarPalabra("programador");

console.log(todo); 
