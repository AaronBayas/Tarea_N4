class Numeros{
    limpiar() {
        document.getElementById("resp").textContent = "Repuesta"
    }
    goBack() {
        window.history.back();
      }
    vuelto(){
       
            let precio = parseFloat(document.getElementById("precio").value);
            let cantidad = parseFloat(document.getElementById("Cantidad").value);
            let pago = parseFloat(document.getElementById("pago").value);
            let costoInput = document.getElementById("costo");
            let resp = document.getElementById("resp");
          
            let costo = precio * cantidad;
            let costoT = 0;
          
            let ivaCheckbox = document.getElementById("iva");
            let iva = 0;
          
            if (ivaCheckbox.checked) {
              iva = costo * 0.12;
              costoT = costo + iva;
            } else {
              costoT = costo;
            }
            let vuelto = pago - costoT;
            resp.textContent = "Vuelto: $ " + vuelto.toFixed(2);
            costoInput.value = "Total: $ " +costoT.toFixed(2);
    }

    multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }

    }
    Divisores(){
        let divisores=[]
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp') 
        for(let i=1; i< num; i++) {
             if(num % i ==0){
                divisores.push(i)
                resp.textContent = "Los divisores de " + num + " son: " + divisores.join(", ")
             }
        } 
    }
    
    sumaDivisores(){
        let divisor=0
        let c=0
        let num = document.getElementById('num').value 
        num = parseInt(num) 
        let resp = document.getElementById('resp')
        for (let i=1; i<num; i++){
            if(num % i ==0){
                c++
                divisor+=i //divisor=divisor+i
                resp.textContent = "La suma de los divisores de " + num + " es: " + divisor
            }
        }
        return c
    }
    cantidadDivisores(){
        let num = document.getElementById('num').value
        let c = this.sumaDivisores()
        let resp = document.getElementById("resp")
        resp.textContent = "La cantidad de divisores de "+ num + " es: " + c;
    }
   
   
    numperfecto(){
       let divisores=0
       let num= document.getElementById('num').value 
       let resp = document.getElementById('resp')
       let sumaperf=0
       for(let i=1;i<num;i=i+1){
           if(num % i == 0){
               sumaperf=sumaperf+i
           }
       }
       if(sumaperf==num){
        resp.textContent =`${num} Es Perfecto `
       }else{
        resp.textContent =`${num} No es Perfecto `
        }
    }
amigos(){
    let acu1=0
    let acu2=0
    let num1= document.getElementById('num1').value 
    num1 = parseInt(num1) 
    let num2= document.getElementById('num2').value
    num2 = parseInt(num2) 
    let resp = document.getElementById('resp') 
    for (let i=1; i<=num1; i++){
        if(num1 % i ==0){
            acu1+=i 
        }
    }
    for (let x=1; x<=num2; x++){
        if(num2 % x ==0){
            acu2+=x 
        }
    }
    if (acu1==acu2){
        resp.textContent =`${num1} y ${num2} son Amigos`    
    }else{
        resp.textContent =`${num1} y ${num2} No son Amigos`
    }
}
                 
// numprimo(){
//     let num= document.getElementById('num').value 
//     let resp = document.getElementById('resp')
//     let c=0
//    for(let i=1; i<=num; i++){
//         if(num % i == 0){
//             c=c+1
//         }
//     }
//     if(c == 2){
//         resp.textContent =`${num} Es primo `
//     }else{
//         resp.textContent =`${num} No es primo`
//        }
    
// }
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
numprimo(){
    let num= document.getElementById('num').value 
    let resp = document.getElementById('resp')
    if (this.isPrimo(num)==1){
        resp.textContent =`${num} Es primo `    
    }else{
        resp.textContent =`${num} No es primo`
    }
}
primoGemelos(){
    let num1= document.getElementById('num1').value 
    num1 = parseInt(num1) 
    let num2= document.getElementById('num2').value
    num2 = parseInt(num2) 
    let resp = document.getElementById('resp')
    let primo1=this.isPrimo(num1)
    let primo2=this.isPrimo(num2)
    if (primo1==1 && primo2==1 && Math.abs(num1-num2)==2 ){
        resp.textContent =`${num1} y ${num2} son primos gemelos`    
    }else{
        resp.textContent =`${num1} y ${num2} no son primos gemelos`
    }
}
numinvertido(){
    let c=0
    let num= document.getElementById('num').value 
    let resp = document.getElementById('resp')
    let ninvertido=0,d=0
    while (num != 0){
        d=num%10
        c++
        ninvertido=ninvertido*10+d
        num=Math.trunc(num/10)
    }
    resp.textContent =`${ninvertido} ` 
    return c
}
cantidadDig(){
    let num= document.getElementById('num').value 
    let resp = document.getElementById('resp')
    let c=this.numinvertido(num)
    resp.textContent =` La cantidad de digitos es: ${c}` 

}

factorialnum(){
    let num= document.getElementById('num').value 
    let resp = document.getElementById('resp')
    let facto=1
    for(let i=1;i<=num;i++){
        facto=facto*i
    }
    resp.textContent =`El factorial de ${num} es: `+facto
}
exponente(){
    let num= document.getElementById('num1').value 
    num = parseInt(num) 
    let ex= document.getElementById('num2').value
    ex = parseInt(ex)
    let resp = document.getElementById('resp')
    let elevado=(num**ex)
    resp.textContent =`${num} ^ ${ex} = `+elevado
    
 }
tablamult(){
    let num= document.getElementById('num').value 
    let resp = document.getElementById('resp')
    let resul= " "
    for(let i=1; i<=12; i++){
        resul+=`${num} x ${i} =  ${num * i}\n`
    }
    resp.textContent =resul
}

fibonacci(){
    let numfibonaci = [0, 1]
      let num = document.getElementById('num').value 
      num = parseInt(num) 
      let resp = document.getElementById('resp')
       for (let i = 2; i < num; i++) {
        numfibonaci[i] = numfibonaci[i - 1] + numfibonaci[i - 2]
      }

      resp.textContent = "La serie de Fibonacci para el número " + num + " es: " + numfibonaci.slice(0, num + 1).join(', ')

    
//     let num= document.getElementById('num').value 
//     let resp = document.getElementById('resp')
//     let a=0,b=1,c=1,cont=3
//     while (cont < num){
//         a=b;b=c;c = a+b
//         resp.textContent =c
//         cont=cont +1
//        }
    }

}
const numero = new Numeros();

