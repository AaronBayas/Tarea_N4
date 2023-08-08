class Cadena{
   limpiar() {
      document.getElementById("resp").textContent = "Repuesta"
  }
  goBack() {
      window.history.back();
    }
    vocales(){
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.innerHTML=`cantidad de vocales:= ${cv} <br> cantidad de consonantes:= ${cc}`

   }
   palabrafrase(){
      let frase = document.getElementById("datos").value
      let resp = document.getElementById('resp')
     // let palabra=frase.split(/\s+/)
     frase = frase.trim();
     let cantpalabra = 0;
     let intBand = false;
   
    for (let i = 0; i < frase.length; i++) {
    let cantidadfrase = frase[i];
    if (cantidadfrase !== ' ') {
      if (!intBand) {
        cantpalabra++;
        intBand = true;
      }
    } else {
      // Si el caracter actual es un espacio en blanco, marcamos que no estamos dentro de una palabra.
      intBand = false;
    }
  }

  resp.innerHTML = `La frase "${frase}" <br> Tiene: ${cantpalabra} palabras`;
     }
     caracespeciales(){
          // "hola que tal"
          let frase = document.getElementById("datos").value
          let cp=0,c2p=0,cc=0,cpc=0
          for(let i=0;i < frase.length;i++){
              if (frase[i]== '.' ) {
                  cp+=1} 
                  if(frase[i]== ':'){
                      c2p+=1}
                      if(frase[i]==','){
                          cc+=1} 
                          if(frase[i]==';'){
                              cpc+=1}
              
          }
          let resp = document.getElementById("resp")
          resp.innerHTML=`Total de puntos tiene: ${cp} <br> Total de 2 puntos:  ${c2p} <br>Total de comas:  ${cc} <br> Total de punto y comas ${cpc} `
     }
     fraseigual(){
      let frase = document.getElementById("datos").value
      let resp = document.getElementById('resp');
      let inicio = 0;
      let fin = frase.length - 1;
      for (let i = 0; i < frase.length / 2; i++) {
        if (frase[inicio] == frase[fin]) {
         resp.textContent = `¡La frase "${frase}" es igual.!`;
      } else {
        resp.textContent = `"¡La frase ${frase}" no igual.!`;
      }
    }
    
     }
     fraseinvertida(){
      let frase = document.getElementById("datos").value.replace(/\s/g, '');
      let resp = document.getElementById('resp');
      let fraseInvertida = ""
      for(let i=frase.length- 1; i >= 0; i--) {
         fraseInvertida += frase[i];
      }
      resp.innerHTML =`La frase "${frase}" <br> Invertida "${fraseInvertida}"`
     }
     concatenarfrase(){
      let frase1 = document.getElementById("datos").value
      let frase2 = document.getElementById("dato2").value
      const resp = document.getElementById('resp');
      let fraseunida= frase1 + " " + frase2
      resp.textContent =`"${fraseunida}"`
     }
     buscarcaracter(){
      let frase = document.getElementById("datos").value
      let buscado = document.getElementById("dato2").value
      let resp = document.getElementById('resp')
      let posicion = -1;
      for (let i = 0; i < frase.length; i++) {
        if (frase[i] === buscado) {
          posicion = i;
          break;
        }
      }
      if (posicion !== -1) {
         resp.innerHTML = `La frase "${frase}" <br>El carácter "${buscado}" <br>Se encuentra en la posición ${posicion} de la frase.`;
       } else {
         resp.innerHTML = `La frase "${frase}" <br>El carácter "${buscado}" <br>No se encuentra en la frase.`;
       }
     }
     buscarsubcadena(){
      // Obtenemos la frase y la subcadena ingresadas por el usuario
      let frase = document.getElementById("datos").value
      let subcadena = document.getElementById("dato2").value
      let resp = document.getElementById("resp")
      let j
      // Variable para almacenar la posición de la subcadena
      let posicion = -1;
      // Recorremos la cadena buscando la subcadena
      for (let i = 0; i <= frase.length - subcadena.length; i++) {
          // Comparamos la subcadena con la porción actual de la frase
          for (j = 0; j < subcadena.length; j++) {
              if (frase.charAt(i + j) !== subcadena.charAt(j)) {
                  break 
              }
          }
          // Si encontramos la subcadena, almacenamos la posición y salimos del bucle
          if (j === subcadena.length) {
              posicion = i;
              break;
          }
      }
      // Mostramos el resultado
      if (posicion !== -1) {
        resp.innerHTML = `La subcadena '${subcadena}' <br> Se encuentra en la posición ${posicion} de la frase.`;
      } else {
        resp.innerHTML = `La subcadena '${subcadena}' <br> No se encuentra en la frase.`;
      }
}

     insertar() {
      // "hola que tal"
      let cadena = document.getElementById("datos").value
      let subcadena = document.getElementById("dato2").value
      let posicion = parseInt(document.getElementById("dato3").value)
      let aux=""
      if (posicion >= 0 && posicion <= cadena.length){ 
          for (let i = 0; i < posicion; i++) {
              aux=aux+cadena[i]
          }
          aux=aux+subcadena
          for (let i = posicion; i < cadena.length; i++) {
              aux = aux + cadena[i]
          }
           cadena=aux
           let resp = document.getElementById("resp")
           resp.innerHTML = `Cadena nueva: "${cadena}"`
      }
      else{
          resp.innerHTML=("la posicion no es valida")
      }

  }
     eliminarsubcadena(){
      let frase = document.getElementById("datos").value
      let eliminarfra = document.getElementById("dato2").value
      let resp = document.getElementById('resp')
      let resultado = ''
  for (let i = 0; i < frase.length; i++) {
    let coincide = true;

    for (let j = 0; j < eliminarfra.length; j++) {
      if (frase[i + j] !== eliminarfra[j]) {
        coincide = false;
        break;
      }
    }

    if (coincide) {
      i += eliminarfra.length - 1;
    } else {
      resultado += frase[i];
    }
  }

      resp.innerHTML=`Su nueva frase es: "${resultado}"`
     }
     cambio_carcter(a, b, c) {
      for (let i = 0; i < a.length; i++) {
          if (c.length > 0) {
              c += b;
          }
          c += a[i];
      }
      return c;
    }
     frasearreglo(){
      let valores = document.getElementById("datos").value;
    let caracter = document.getElementById("dato1").value;
    let numero = valores.split(";").map(valor => parseInt(valor.trim()));
    let $respuesta = document.getElementById("resp");
    let numeros = [];
    let car_reemplazo = caracter[0];
    // Reemplazamos el carácter de separación en la serie con el carácter de reemplazo
    let serie_reemplazada = this.cambio_carcter(numero, caracter, "");
    // Eliminamos los elementos que coinciden con el carácter de reemplazo
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] != car_reemplazo) {
            numeros.push(numero[i]);
        }
    }
    resp.innerHTML=`La cadena es: ${valores}<br> El Caracter es: ${car_reemplazo}<br> EL arreglo: [${serie_reemplazada}]`

     }
     sumadigitofrase(){
      let frase = document.getElementById("datos").value;
      let resp = document.getElementById("resp");
      let suma = 0
   
      for (let i = 0; i < frase.length; i++) {
   
        let char = parseInt(frase[i]);
   
        if (!isNaN (char)){
          suma = suma + char
   
         }
     
       } 
       resp.textContent = `La suma de la frase es : ${suma}`;
     }
}
let cad = new Cadena()