function CuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
}
const prototypeCuentaBancaria = {
    depositar(monto){
        if(monto <= 0){
            console.log("Fondos insuficientes");
            return;
        }
        console.log(`Se depositaron $${monto}. Nuevo saldo: $${this.saldoInicial += monto}`);
    }
    ,
    extraer(monto){
        console.log(`Se extrajeron $${monto}. Nuevo saldo: $${this.saldoInicial -= monto}`);
    }
    ,
    consultarSaldo(){
        console.log(`Hola Emilio, tu saldo actual es de: $${this.saldoInicial}`);
    }
}

Object.assign(CuentaBancaria.prototype, prototypeCuentaBancaria);

const cuenta = new CuentaBancaria("Emilio",1000); 
cuenta.consultarSaldo();
cuenta.depositar(500);
cuenta.extraer(200);      


// punto 2

class CuentaBancaria_2 {
    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    get saldo() {
        return this.#saldo;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("El saldo no puede ser negativo.");
        } else {
            this.#saldo = nuevoSaldo;
        }
    }

    depositar(monto){
        if(monto <= 0){
            console.log("Fondos insuficientes");
            return;
        }
        this.#saldo += monto;
        console.log(`Se depositaron $${monto} en tu cuenta privada. Nuevo saldo: $${this.#saldo}`);
    }
    
    consultarSaldo(){
        console.log(`Tu saldo privado es de $${this.#saldo}`)
    }


}
const cuenta2 = new CuentaBancaria_2("Emilio", 1000);

cuenta2.depositar(500)
cuenta2.saldo = 2000; 
cuenta2.consultarSaldo()  