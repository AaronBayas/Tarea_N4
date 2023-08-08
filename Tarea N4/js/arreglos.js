class Arreglos{
    limpiar() {
        document.getElementById("resp").textContent = "Repuesta"
    }
    goBack() {
        window.history.back();
      }
    mayor(){
      //'23;40;4;100' 
       let valores = document.getElementById("num1").value;
      let numero = valores.split(";").map(valor => Math.abs(parseInt(valor.trim()))); // Convertir valores a positivos con Math.abs()
      let mayor = numero[0];
      let $respuesta = document.getElementById("resp");
      for (let i = 0; i < numero.length; i++) {
          if (numero[i] > mayor) {
              mayor = numero[i];
          }
      }
      resp.innerHTML = `La serie es: [ ${numero} ]<br> El mayor elemento es: ${mayor}`, $respuesta
    }
    menor(){
        //'23;40;4;100' 
         let valores = document.getElementById("num1").value;
        let numero = valores.split(";").map(valor => Math.abs(parseInt(valor.trim()))); // Convertir valores a positivos con Math.abs()
        let mayor = numero[0];
        let $respuesta = document.getElementById("resp");
        for (let i = 0; i < numero.length; i++) {
            if (numero[i] < mayor) {
                mayor = numero[i];
            }
        }
        resp.innerHTML = `La serie es: [ ${numero} ]<br> El menor elemento es: ${mayor}`, $respuesta
      }

      promedio(){
        let valor = document.getElementById('num1').value
        let numeros = valor.split(";")
        let resp = document.getElementById("resp")
        let resultado="", sum=0
        for(let i=0; i<numeros.length;i++){
            sum=sum+parseInt(numeros[i])/numeros.length
            resultado=sum
        }
        resp.innerHTML = `El arreglo [ ${' ' + numeros.join(', ') + ' '}] <br> Su promedio es: ${resultado}`
      }
      nombresalrevez(){
        let nombres = document.getElementById("num1").value;
    let datos = nombres.split(";");
    let resp = document.getElementById("resp");
    let longitud = datos.length;
    let nombresInvertidos = [];
    for (let i = 0; i < longitud; i++) {
        let nombreInvertido = '';
        for (let c = datos[i].length - 1; c >= 0; c--) {
            nombreInvertido += datos[i][c];
        }
        nombresInvertidos.push(nombreInvertido);
    }

    resp.innerHTML = `Los nombres [${' ' + datos.join(', ') + ' '}] <br> Al revés = ${' ' + nombresInvertidos.join(', ') + ' '}`;
      }
      buscaArreglo() {
        let valores = document.getElementById("num1").value;
        let buscado = document.getElementById("num2").value;
        let numero = valores.split(";").map(valor => parseInt(valor.trim())); // Convertir valores a positivos con Math.abs()
        let numero_buscado = buscado.split(",").map(valor => parseInt(valor.trim())); // Convertir valores a positivos con Math.abs()
        let enc = [];
        let i = 0;
        let resp= document.getElementById("resp");
        /* let repeticiones = 0;*/
    
        for (i = 0; i < numero.length; i++) {
            if (numero_buscado == numero[i]) {
                enc.push(i);
            }
        }
        if (enc.length > 0) {
            resp.innerHTML=`La serie es: [ ${numero} ]<br> El número buscado es ${numero_buscado} <br> EL elemento buscado se encuentra en la posición: ${enc}`, $respuesta
        } else {
            resp.innerHTML=`¡El numero buscado no se encuentra en la serie!.....`, $respuesta
        }
    }
adivinarnumero(){
    let numero = parseInt(document.getElementById("num1").value);
    let resp= document.getElementById("resp");
    let arr=[];
    // let pos=-1
    // for (let i = 0; i < 100; i++) {
    //     arr.push(Math.floor(Math.random() * 100) + 1);
    //   }
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === numero) {
    //         pos = i;
    //         resp.innerHTML=`¡Adivinaste! El número ${numero} <br> Arreglo: [${' ' + arr.join(', ') + ' '}]   se encuentra en la posición ${pos}.`;
    //     } else{
    //       resp.innerHTML=`Error, no adivinaste. El número ${numero} no está en el arreglo. <br> Arreglo: [${' ' + arr.join(', ') + ' '}] `;
    //     }
    //   }
  for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 1000) + 1);
      }
      let encontrado = false;
      let pos = -1;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
          encontrado = true;
          pos = i; // Actualizamos pos con la posición en la que se encontró el número.
          break;
        }
      }
      let arregloTexto = "Arreglo: [ " + arr.join(", ") + " ]";
      if (encontrado) {
        resp.innerHTML = `${arregloTexto}<br> ¡Adivinaste! El número ${numero} se encuentra en la posición ${pos}.`;
      } else {
        resp.innerHTML = `Error, no adivinaste. El número ${numero} no está en el arreglo.<br>${arregloTexto}`;
      }
        
    }

    inserta_elemento() {
      let valores = document.getElementById("num1").value;
      let buscado = document.getElementById("num2").value;
      let posicion = parseInt(document.getElementById("pos").value); 
      let numero = valores.split(";").map(valor => parseInt(valor.trim()));
      let numero_insertado = parseInt(Math.abs(buscado.trim()));
      let resp= document.getElementById("resp");
      let i = 0;
      while (i < numero.length && numero[i] < numero_insertado) {
          i += 1;
      }
      numero.splice(posicion, 0, numero_insertado);
      if (posicion < numero.length){
        resp.innerHTML =`La serie es: [ ${valores} ]<br> El elemento a insertar es: ${buscado}<br> Su posicion: ${posicion} <br> La serie con el numero insertado es: [ ${numero} ]`;
      }else{
        resp.innerHTML ='¡Error! La posicion se encuentra fuera de rango';
      }
  }
  
  elimina_elemento() {
    let valores = document.getElementById("num1").value;
    let buscado = document.getElementById("num2").value;
    let numero = valores.split(";").map(valor => parseInt(valor.trim())); // Convertir valores a positivos con Math.abs()
    let numero_buscado = buscado.split(";").map(valor => parseInt(valor.trim())); // Convertir valores a positivos con Math.abs()
    let elimina_elemento = [];
    let elementos_soloElemento = [];
    let i = 0;
    let resp = document.getElementById("resp");
    for (i = 0; i < numero.length; i++) {
        if (numero_buscado != numero[i]) {
            elementos_soloElemento.push(numero[i]);
        } else {
            elimina_elemento.push(numero[i]);
        }
    }
    if (elimina_elemento.length > 0) {
      resp.innerHTML =`La serie es: [ ${numero} ]<br> El elemento a eliminar es: ${numero_buscado}<br> La serie con el numero eliminado es: [ ${elementos_soloElemento} ]`;
    } else {
      resp.innerHTML =`¡El elemento buscado no se encuentra en la serie para eliminarlo!.....`;
    }
}
isExponente(base, exp) {
  let res = 1
  for (let i = 1; i <= exp; i++) {
      res *= base
  }
  return res
}
isDigitos(numero, base) {
  let digitos = []
  while (numero > 0) {
      digitos.push(numero % base)
      numero = parseInt(numero / base)
  }
  return digitos
}
base2_10() {
  let $input = document.getElementById("num1")
  let resp=document.getElementById("resp")
  let numero = parseInt($input.value)
  let arreglo = this.isDigitos(numero, 10)
  let base10 = 0,
      limite = arreglo.length - 1
  for (let i = arreglo.length - 1; i >= 0; i--) {
      base10 = base10 + arreglo[i] * this.isExponente(2, limite)
      limite = limite - 1
  }
  resp.innerHTML = `Base 2 = ${numero} <br>Base 10 = ${base10}`
  return base10
}
base10_2() {
  let $input = document.getElementById("num1")
  let resp=document.getElementById("resp")
  let numero = parseInt($input.value)
  let arreglo = this.isDigitos(numero, 2)
  let base2 = ""
  for (let i = arreglo.length - 1; i >= 0; i--) {
      base2 = base2 + arreglo[i].toString()
  }
  resp.innerHTML = `Base 10 = ${numero} <br> Base 2 = ${base2}`
}
promedio_sueldo(){
  let valores = document.getElementById("num1").value;
  let simbolo=  /"([^"]+)",\s*vh:\s*(\d+),\s*nh:\s*(\d+)/g;
  let empleados=[]
  let resp = document.getElementById("resp");
  let match;
  let sumatotal = 0, vh=0, nh=0
  while ((match = simbolo.exec(valores)) !== null) {
    let nombre = match[1];
     vh = parseInt(match[2]);
     nh = parseInt(match[3]);
    empleados.push({ nombre, vh, nh });
  }
  if (empleados.length === 0) {
    resp.innerHTML ="¡Error! Ingresa un arreglo válido de los empleados.";
    return;
  }
  for (let i = 0; i < empleados.length; i++) {
    let sueldo = empleados[i].vh * empleados[i].nh;
    sumatotal += sueldo;
  }

  let promedio = sumatotal / empleados.length; //"ana", vh: 5, nh: 40 ; "ana",vh: 10, nh:40 ; "ana",  vh:2,  nh:40 
  resp.innerHTML = `Los empleados: [ ${valores} ]<br>Promedio de sueldos: ${promedio.toFixed(2)}`;
}
acuDivisores(num){
  let acu=0
  for(let c=1;c<num;c++){
     if (num%c==0){
         acu=acu+c
     }
  }
  return acu //1+3=4
}
sumaDivisores(){
  //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
  let datos= document.getElementById("num1").value
  let numeros = datos.split(";") //["4","6","9","10"]
  let acu,num=0,resultado=""
  // recorre cada elemento del arreglo
  for(let i=0;i < numeros.length;i++){
      // proceso de suma de divisores
      num=parseInt(numeros[i])
      acu=this.acuDivisores(num)
      resultado=resultado+acu+", "    //""+"3"="3"+"|"+"6"="3|6"
  }
  resultado = resultado.slice(0, -2);
  let resp = document.getElementById("resp")
  resp.innerHTML =`El arreglo [ ${' ' + numeros.join(', ') + ' '}] <br> La suma de los divisores del arreglo son: ${resultado}`
  
}
perfectos(){
  //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
  let datos= document.getElementById("num1").value
  let numeros = datos.split(";") //["4","6","9","10"]
  let acu,num=0,resultado=""
  // recorre cada elemento del arreglo
  for(let i=0;i < numeros.length;i++){
      // proceso de suma de divisores
      num=parseInt(numeros[i])
      acu=this.acuDivisores(num)
      if (acu==num){
         resultado=resultado+num+", "    //""+"3"="3"+"|"+"6"="3|6"
      }
   }
   resultado = resultado.slice(0, -2);
  let resp = document.getElementById("resp")
  resp.innerHTML =`El arreglo [ ${' ' + numeros.join(', ') + ' '}] <br> Los numeros perfecto del son: ${resultado}`
}

isPrimo(num){
  let acu=0,divisor=2,band=1
  while(divisor < num && band == 1){
      if (num % divisor == 0){
          // romper ciclo es cambiar el valor de la bandera
          band=0
      }else{
          divisor=divisor+1
      }
  }
  return band
}
primo(){
  let datos = document.getElementById("num1").value;
  let numeros = datos.split(";").map(valor => parseInt(valor.trim()));
  let resp = document.getElementById("resp");
  let acu, num = 0, resultado = "";
  for (let i = 0; i < numeros.length; i++) {
    num = parseInt(numeros[i]);
    acu = this.isPrimo(num);
    if (acu===1) {
      resultado = resultado + num + ", ";
    }
  }
  if (resultado==="") {
    resp.innerHTML = "¡Error! No se encontro ningun numero primo.";
  } else {
    resultado = resultado.slice(0, -2);
    resp.innerHTML = `El arreglo [ ${' ' + numeros.join(', ') + ' '}] <br>  Los primos son: ${resultado}`;
  }
}
repeticionnumero(){
  let datos= document.getElementById("num1").value
  let arreglo = datos.split(";")
  let numero = document.getElementById("num2").value;
  let resp = document.getElementById("resp");
  let c=0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            c++;
        }
    }
    if(c==0){
      resp.innerHTML = "¡No hay ninguna repeticion!";
    }else{
      resp.innerHTML = `El arreglo [ ${' ' + arreglo.join(', ') + ' '}] <br>  El numero: ${numero}  <br>  Sus repeticiones: ${c}`;
    }
}

vuelto(){
    let costo = parseFloat(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let darVuelto = [100, 50, 20, 10, 5, 1];
    let cambio = [];
    let cambioTotal = costo;
    if(costo<100){
      for (let i = 0; i < darVuelto.length; i++) {
        let denominacion = darVuelto[i];
        let cantidad = Math.floor(cambioTotal / denominacion);
        if (cantidad > 0) {
            if (denominacion >= 1) {
                cambio.push(`${cantidad} Billetes de --- $${denominacion}`);
            } else {
                cambio.push(` ${cantidad * 100} centavos`);
            }
            cambioTotal -= cantidad * denominacion;
        }
    }
    
    cambio.push(`Y ${cambioTotal.toFixed(2)} centavos`);

    resp.innerHTML = `"El costo es $${costo.toFixed(2)}"<br>Tu cambio en billetes es:<br>${cambio.join('<br>')}`;
    }else{
      resp.innerHTML = `¡Error! El monto tiene que ser menor a 100`;
    }
    
}
    
  }
  const arr = new Arreglos()