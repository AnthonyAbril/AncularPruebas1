import { NumberSymbol } from "@angular/common";

interface ReproductorAudio{
    volumen:number;
    duracion:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    anyo:number;
}

const reproductorAudio:ReproductorAudio = {
    volumen:90,
    duracion: 36,
    cancion: "Titulo Cancion",
    detalles: {
        autor: "Pablo Lopez",
        anyo: 2003
    }
}

console.log('cancion:',reproductorAudio.cancion);
console.log('duracion:',reproductorAudio.duracion);
console.log('autor:',reproductorAudio.detalles.autor);

//desestructuracion
const { cancion } = reproductorAudio;
const { cancion:otraCancion } = reproductorAudio;
const { cancion:primeraCancion, duracion:primeraDuracion, detalles } = reproductorAudio;
const {autor} = detalles;

const {
    cancion:segundaCancion,
    duracion:otraDuracion,
    detalles: {anyo},
} = reproductorAudio;
console.log('Año: ',anyo);

const asignaturas:string[] = ['DWEC','DIW','DWES'];
console.log('La tercera asignatura es: ',asignaturas[2]);

//desestructuracion arrays
const [,, a3]:string[] = ['DWEC','DIW','DWES'];

const asignatura = asignaturas[3] || 'NO EXISTE';
const [, , , a4 = 'No Existe']:string[] = ['DWEC','DIW','DWES'];