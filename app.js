/* function sumarValores(valorA,valorB) {
    resultado = valorA + valorB;
    return resultado;
}

console.log(sumarValores(2,4)); */

/* function promedioNotas(nA,nB,nC,nD) {
    promedio = (nA + nB + nC + nD) / promedioNotas.length ;
    return promedio;
};

console.log(promedioNotas(4,4,4,4)); */

/* function areaRectangulo(base, altura) {
    area = base * altura;
    return area;
};

console.log(areaRectangulo(2,4)); */

/* function areaTriangulo(base , altura) {
    area = (base * altura) / 2;
    return area;
};
console.log(areaTriangulo(2,4)); */

/* let radio;
radio = Number(prompt('para el area de una circunferencia debes poner el radio:'));

const areaCircu = function(radio) {
    let area = Math.pow(radio,2) * Math.PI;
    return area;
}
alert(areaCircu(radio)); */

/* const horasTrabajo = Number(prompt('Ingrese las horas trabajadas en el dia'));
const pagoXhora = Number(prompt('Ingrese el pago por hora'));
const semana = 7;

const sueldoSemanal = function(horasTrabajo , pagoXhora) {
    let sueldoTotal;
    sueldoTotal = (horasTrabajo * pagoXhora)* semana;
    return `el sueldoTotal es ${sueldoTotal}`;

}

alert(sueldoSemanal(horasTrabajo, pagoXhora)); */

/* const cantMetros = Number(prompt('Ingrese de la cantidad de tela en metros'));
const pulgadas = 39.37;
const convertirPulgada = function(cantMetros){
    let cantPulgadas
    cantPulgadas = cantMetros * pulgadas;
    return `La cantidad que tiene que pedir en pulgadas es: ${cantPulgadas} pulgadas` ;
}
alert(convertirPulgada(cantMetros)); */

/* const cantPeru = Number(prompt('Ingrese de la cantidad soles que quiere convertir'));
const dolares = 0.26;
const convertirDolares = function(cantPeru){
    let cantDorales;
    cantDorales = cantPeru * dolares;
    return `La cantidad que tiene en dolare es: $ ${cantDorales}` ;
}
alert(convertirDolares(cantPeru));  */

/* const anioNac = Number(prompt('Ingrese el año en que nacio'));
const anioActual = 2021;

const edadPersona = function(anioNac){
    let edad;
    edad = anioActual - anioNac;
    return `La edad que tiene es: ${edad}` ;
}
alert(edadPersona(anioNac));  */

/* const nombreA = prompt('Ingrese el nombre de la primera persona');
const edadA = Number(prompt('Ingrese la edad de la primera persona'));
const nombreB = prompt('Ingrese el nombre de la segunda persona');
const edadB = Number(prompt('Ingrese la edad de la segunda persona'));
const nombreC = prompt('Ingrese el nombre de la tercera persona');
const edadC = Number(prompt('Ingrese la edad de la tercera persona'));


const compararEdad = function(edadA,edadB,edadC){
    
    if((edadA < edadB) && (edadA < edadC)){
        return `${nombreA} con ${edadA} es el menor`;
    }else if((edadB < edadA) && (edadB < edadC)){
        return `${nombreB} con ${edadB} es el menor`;
    }else{
        return `${nombreC} con ${edadC} es el menor`;
    }
    
}
alert(compararEdad(edadA,edadB,edadC)); */ 

/* 
const aniosTrabajados = Number(prompt('Ingrese los años trabajados en la empresa'));
const bono = 100;

const bonoRecibido = function(aniosTrabajados){
    if(aniosTrabajados == 1){
        return `Bono recibido sera de ${bono} soles`;
    }else if(aniosTrabajados == 2){
        bono = bono * 2;
        return `Bono recibido sera de ${bono} soles`;
    }else if(aniosTrabajados == 3){
        bono = bono * 3;
        return `Bono recibido sera de ${bono} soles`;
    }else if(aniosTrabajados == 4){
        bono = bono * 4;
        return `Bono recibido sera de ${bono} soles`;
    }else if(aniosTrabajados == 5){
        bono = bono * 5;
        return `Bono recibido sera de ${bono} soles`;
    }else{
        return `Bono recibido sera de ${bono*10} soles`;
    }
    
}
alert(bonoRecibido(aniosTrabajados)); */

/* const salarioInicial = 1500;
const incrementoAnual = 0.1;
const salarioFinal = function(salarioInicial){
    let porcentajeAnual;
    let i = 0 ;
    let salarioAnual = 0;
    
    while(i < 6){
        porcentajeAnual = (salarioInicial * incrementoAnual);

        salarioAnual= salarioInicial + porcentajeAnual;

        salarioInicial = salarioAnual; 

        i++

        console.log(`Despues de ${i} año recibe el aumento de ${porcentajeAnual} soles ,y el salario es ${salarioAnual}`) ;


    }
    console.log(`El salario al cabo de 6 años es ${salarioAnual}`)
}
salarioFinal(salarioInicial); */

/* const cantidadNotas = prompt('Ingresa el numero de notas');

const conteoNota = function(cantidadNotas){
    
    let i = 0 ; 
    let aprobado = 0;
    let reprobado = 0;
    
    while(i < cantidadNotas){
        
        let nota = prompt(`Ingresa la nota ${i+1}`);
        if(nota > 10 && nota < 21){
            aprobado++;
        }else{
            reprobado++;
        }
        i++;
    }
    console.log(`La cantidad de aprobados es ${aprobado} , y la de reprobados es ${reprobado}`);
}
conteoNota(cantidadNotas); */

/* const cantidadFocos = prompt('Ingresa el numero de de focos');

const conteoFoco = function(cantidadFocos){
    
    let i = 0 ; 
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    
    while(i < cantidadFocos){
        
        let foco = prompt(`Ingrese el color del foco ${i+1}`);
        if(foco == 'verde'){
            verde++;
        }else if(foco == 'blanco') {
            blanco++;
        }else if(foco == 'rojo'){
            rojo++;
        }else{
            console.log('ingrese unos de estos colores (verde , rojo , blanco)');
        }
        i++;
    }
    console.log(`La cantidad de focos Verde es ${verde} ,  la de foco Blanco es ${blanco} y la de foco Rojo es ${rojo}`);
}
conteoFoco(cantidadFocos); */

const personaEdad = Number(prompt('Ingrese su edad'));

const verificacionVoto = function(personaEdad){
    if(personaEdad > 17){
        console.log(`Usted tiene ${personaEdad} puede votar`);
    }
    else if(personaEdad >= 70){
        console.log(`Usted tiene ${personaEdad} tiene la opcion votar o no`);
    }else{
        console.log(`Usted tiene ${personaEdad} no puede votar, por ser menor de edad`);
    }
}

verificacionVoto(personaEdad);
