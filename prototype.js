console.log(String);
Object.assign(String.prototype, {
    concatenarPalabras(palabra) {
        console.log(`Este es un método personalizado para strings: ${this} ${palabra}`);
    }
});

const halago = "soy alto"
const todo = halago.concatenarPalabras("programador");

console.log(todo); 
