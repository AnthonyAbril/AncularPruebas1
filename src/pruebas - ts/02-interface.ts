const profesiones:string[] = ['Programador','Analista','Consultor'];

interface Empleado{
    nombre: string;
    edad: number;
    profesiones: string[];
    localidad?:string;
}

const empleado:Empleado = {
    nombre: 'Javier',
    edad: 25,
    profesiones: ['Programador', 'Analista']
}

empleado.localidad = 'Valencia';

console.table(empleado);