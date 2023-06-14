// Intento de calculadora de plazo fijo, no logro entender que es lo que no funciona
// definitivamente no mi mejor esfuerzo 

let btnCalcular = document.getElementById("btn-calcular");
let result = document.getElementById("result");
let calcular = () => {
  let p = Number(document.getElementById("plata").value);
  let r = Number(document.getElementById("rendimiento").value);
  let duracion = document.getElementById("duracion").value;
  console.log(p, r, t, duracion);
  let rendimiento = ""
  let plataGanada = ""
  if(duracion = "month"){
    rendimiento = p / (r / 12)
    plataGanada = rendimiento - p
  } else if(duracion ="year"){
    rendimiento = 100 / (p * r)
    plataGanada = rendimiento - p
  }
  result.innerHTML=`<div>Total Ingresado: <span>${p.toFixed(2)}</span></div>
  <div>Interes Total: <span>${plataGanada.toFixed(2)}</span></div>
  <div>Neto Total: <span>${Total.toFixed(2)}</span></div>`
  
  

};
btnCalcular.addEventListener("click", calcular)
window.addEventListener("load", calcular)
  
