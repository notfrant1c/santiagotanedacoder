/*SIMULADOR DE CUOTAS 2.0 
PRE ENTREGA 2 FRIAS TANEDA SANTIAGO
Mediante prompt se selecciona un producto a comprar y devuelve precio mediante alert
Modelos y data de cuotas y tarjetas se guardan en arrays en vez de switch y variables */
let simuladorCompra = {}
const CELULARES = [
    { nombre: "Samsung S23 Ultra", ram: "12gb", precio: 520000 },
    { nombre: "Iphone 14 Pro", ram: "8gb", precio: 600000 },
    { nombre: "Pixel 7 Pro", ram: "12gb", precio: 470000 },
    { nombre: "Samsung Z Fold", ram: "12gb", precio: 700000 },
  ];
  const TARJETAS = [
    { nombre: "Visa", interes: 30,},
    { nombre: "Mastercard", interes: 35,},
    { nombre: "American Express", interes: 40,},
  ];
  const CUOTAS = [
    {cuota: 1, descuento: 15},
    {cuota: 6, descuento: 10},
    {cuota: 12, descuento: 0},
  ]
  
  
  function seleccionCelular() {
    
    let promptCelulares = "Seleccione un celular.";
    for (let i = 0; i < CELULARES.length; i++) {
      // promptCelulares += "\n" + i + " - " + CELULARES[i].nombre
      promptCelulares += `\n ${i} - ${CELULARES[i].nombre}`;
      
    }
    let numItem = prompt(promptCelulares);
    let numIndex = parseInt(numItem)
  
    if(numItem == null ){
      simuladorCompra.nombre = "cancel"
      return; 
    } 
    if (numIndex >= 4) {
      alert("Seleccione una opcion valida")
      seleccionCelular();
    } 
  
    celSelecc = CELULARES[numItem];
    if(celSelecc == undefined){
      alert("Seleccione una opcion valida")
      seleccionCelular();
    }
    alert(
      `Seleccionaste ${celSelecc.nombre} tiene ${celSelecc.ram} de RAM. \nEl precio es de $${celSelecc.precio}`
    );
    
    simuladorCompra.nombre = celSelecc.nombre;
    simuladorCompra.precio = celSelecc.precio;
    
  };
  function seleccionTarjeta() {
    let promptTarjetas ="Seleccione tarjeta.";
    for (let i = 0; i < TARJETAS.length; i++) {
      promptTarjetas += `\n ${i} - ${TARJETAS[i].nombre}.`;
    }
    let numTarjeta = prompt(promptTarjetas);
    let numIndex = parseInt(numTarjeta)
    if (numIndex >= 3){
      alert("Seleccione una opcion valida")
      seleccionTarjeta()
    }else if (numIndex == null){
      simuladorCompra.tarjeta = "cancel"
      return;

    }
    let tarjetaSelec = TARJETAS[numTarjeta];
    if (tarjetaSelec == undefined){
      alert("Seleccione una opcion valida");
      seleccionTarjeta();
    }
    alert(`Seleccionaste tarjeta: ${tarjetaSelec.nombre}.`);
    simuladorCompra.tarjeta = tarjetaSelec.nombre;
    simuladorCompra.interes = tarjetaSelec.interes;
  }
  
  function seleccionCuotas(){
    let promptCuotas ="Seleccione cuotas.";
    for (let i = 0; i < CUOTAS.length; i++) {
      promptCuotas += `\n ${i} - ${CUOTAS[i].cuota} cuota/s.`;

    }
    let numCuotas = prompt(promptCuotas)
    let numIndex = parseInt(numCuotas)
    if (numIndex >= 3){
      alert("Seleccione una opcion valida")
      seleccionCuotas()
    }else if (numIndex == null){
      simuladorCompra.cuotas = "cancel"
      return;

    }
    let cuotasSelec = CUOTAS[numCuotas]
    if (cuotasSelec == undefined){
      alert("Seleccione una opcion valida");
      seleccionCuotas();
    }
    
    simuladorCompra.cuotas = cuotasSelec.cuota;
    simuladorCompra.descuento = cuotasSelec.descuento;
  }
  
  function carrito(){
    let precioFinal = simuladorCompra.precio; 
    let precioCuotas;
    if(simuladorCompra.cuotas == 1){
      precioFinal = ((100 - simuladorCompra.descuento) * precioFinal) / 100
      simuladorCompra.interes = "Sin interés"
      alert(`Su celular es: ${simuladorCompra.nombre}
        \n- Su tarjeta es: ${simuladorCompra.tarjeta}
        \n- Cuotas seleccionadas: ${simuladorCompra.cuotas}
        \n- Su interés es: ${simuladorCompra.interes}
        \n- Su descuento es de: ${simuladorCompra.descuento}%
        \n- Precio final: $${precioFinal}`
        ) 
    } else if(simuladorCompra.cuotas != 1){
      precioFinal = ((simuladorCompra.interes * precioFinal) / 100) + simuladorCompra.precio;
      precioCuotas = (precioFinal / simuladorCompra.cuotas).toFixed(2);
      alert(`Su celular es: ${simuladorCompra.nombre}
        \n- Su tarjeta es: ${simuladorCompra.tarjeta}
        \n- Cuotas seleccionadas: ${simuladorCompra.cuotas}
        \n- Su interés es: ${simuladorCompra.interes}%
        \n- Precio final: $${precioFinal}
        \n- En ${simuladorCompra.cuotas} cuotas de $${precioCuotas}`
        )
    }  
  }
  

  
seleccionCelular ()
if (simuladorCompra.nombre != "cancel" ){
  seleccionTarjeta ();
  seleccionCuotas ();
  if(simuladorCompra.cuotas != "cancel"){
    carrito()
  }
}


