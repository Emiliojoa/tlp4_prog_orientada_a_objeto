// punto 2

class CuentaBancaria_2 {
    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
        if(saldoInicial <0){
            throw new Error("El saldo inicial no puede ser negativo.");
        }
    }
    get saldo() {
        return this.#saldo;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("El saldo no puede ser negativo.");
        } 
    }


    depositar(monto){
        if(monto <= 0){
            console.log("El monto a depositar debe ser mayor a 0");
            return;
        }
        this.#saldo += monto;
        console.log(`Se depositaron $${monto} en tu cuenta privada. Nuevo saldo: $${this.#saldo}`);
    }

    extraer(monto){
        if(monto <= 0){
            console.log("El monto a extraer debe ser mayor a 0");
            return;
        }
        if(this.#saldo >= monto){
            this.#saldo -= monto;
            console.log(`Se extrajeron $${monto} de tu cuenta privada. Nuevo saldo: $${this.#saldo}`);
        } else {
            console.log("Fondos insuficientes");
        }
    }
    
    consultarSaldo(){
        console.log(`Tu saldo privado es de $${this.#saldo}`)
    }


}
const cuenta2 = new CuentaBancaria_2("Emilio", 1000);


cuenta2.consultarSaldo()             
cuenta2.depositar(500)                
cuenta2.extraer(200)                 
cuenta2.consultarSaldo()              
cuenta2.saldo = 2000;                 