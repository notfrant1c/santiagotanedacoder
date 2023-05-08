
/* SIMULADOR INTERACTIVO 
PRE ENTREGA 1 FRIAS TANEDA SANTIAGO 
Mediante prompt se selecciona un producto a comprar, se devuelve precio mediante console. 
Se selecciona cuotas a pagar y tarjeta y devuelve el total a pagar y el total a  pagar de las cuotas */

(function compra(){ 
    alert("Bienvenido al simulador de cuotas de FTech")
    let opciones = prompt("Seleccione el dispositivo a comprar \n1-Samsung S23 ULTRA \n2-Iphone 14  PRO \n3-Pixel 7 PRO \nPresione N para salir")
    let pago;
    let precio;
    let tarjeta; 
    let total;
    let cuotas;
    while(opciones != "n" && opciones !="N"){
        switch(opciones){
            case "1":
                precio = 520000
                console.log("Ha seleccionado SAMSUNG S23 ULTRA. \nEl precio es: $" + precio);
                break;
            case "2":
                precio = 687000
                console.log("Ha seleccionado IPHONE 14 PRO \nEl precio es $" + precio);
                break;
            case "3":
                precio = 700000
                console.log("Ha seleccionado PIXEL 7 PRO \nEl precio es $" + precio); 
                break;      
            default:
                alert("Por favor seleccione una opción válida.");
                compra();
            }
            if(opciones == "1"){
                opciones = "SAMSUNG S23 ULTRA";
            } else if(opciones == "2"){
                opciones = "IPHONE 14 PRO";
            } else if(opciones == "3"){
                opciones = "PIXEL 7 PRO";
            }
            pago = prompt("Seleccione la cantidad de cuotas a pagar \n1- 1 cuota \n2- 3 cuotas \n3- 6 cuotas \n4- 12 cuotas")
            if(pago == ""){
                alert("Opción no válida.")
                compra()
            }
            tarjeta = prompt("Seleccione su tipo de tarjeta \n1- Visa \n2- Mastercard")
            switch(tarjeta){
                case "1":
                    if (pago == "1" || pago == "2"){
                        total = precio * 0.9
                        console.log("Tenés descuento, tu nuevo precio es: $" + total)
                    } else if (pago == "3"){
                        total = precio * 1.30
                        console.log("Tenés un interés del 30% tu nuevo precio es: $" + total)
                    } else if(pago == "4"){
                        total = precio * 1.40
                        console.log("Tenés un interés del 40% tu nuevo precio es: $" + total)
                    }else{
                        console.log("Ingrese una opción válida.")
                    }break;
                case "2":
                    if (pago == "1" || pago == "2"){
                        total = precio * 0.85;
                        console.log("Tenés descuento del 15%, tu nuevo precio es: $" + total);
                    } else if (pago == "3"){
                        total = precio * 1.25;
                        console.log("Tenés un interés del 25% tu nuevo precio es: $" + total);
                    } else if(pago == "4"){
                        total = precio * 1.35;
                        console.log("Tenés un interés del 35% tu nuevo precio es: $" + total);
                    }else{
                        console.log("Ingrese una opción válida.")
                    }break;
                case "":
                    console.log("ingrese opción válida");
                    compra();
                    
                default:
                    console.log("Ingrese una opción válida.");
                    compra()
                    break;
                    
            }  
            if(pago == "1"){
                pago = "1 cuota."
                cuotas = ""
            } else if(pago == "2"){
                pago = "3 cuotas."
                cuotas = Math.round(total / 3) 
            }else if(pago == "3"){
                pago ="6 cuotas."
                cuotas = Math.round(total / 6)
            }else if(pago == "4"){
                pago == "12 cuotas."
                cuotas = Math.round(total / 12)

            }
                alert("Su total para " + opciones + " es $" + total + " en " + pago + " de $" + cuotas )  
                break;


    } alert("Vuelva pronto!")
}) ()
