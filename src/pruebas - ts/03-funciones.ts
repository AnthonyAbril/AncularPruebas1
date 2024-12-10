function suma(a:number,b:number):number{
    return a+b;
}
const result = suma(1,2);

console.log("Resultado1");
console.log({result});

const sumaNumerosFlecha = (a:number,b:number):string=>{
    return (a+b).toString();
    //return `${a+b}`;
}

const result2 = sumaNumerosFlecha(1,2);
console.log("Resultado2");
console.log({result2});

function multiplica (primero:number, segundo?:number, base:number = 2){
    return primero * base;
}

const result3:number = multiplica(5,undefined,3);
console.log("Resultado3");
console.log({result3});

// Imaginemos que vamos a declarar una funcion pagoNomina en la qe recibe 
interface EmpleadoPago {
    nombre:string;
    saldo: number;
    muestraSaldo: () => void; //El metodo solo se define, no se implementa
}

const pagoNomina = (empleado: EmpleadoPago, importe:number):void =>{
    empleado.saldo += importe;
}

const empleado2: EmpleadoPago = {
    nombre: 'Javier',
    saldo: 100,
    muestraSaldo(){
        console.log(`Saldo del empleado2 ${this.saldo}`)
    }
}

empleado2.muestraSaldo();
pagoNomina(empleado2, 50);
empleado2.muestraSaldo();
