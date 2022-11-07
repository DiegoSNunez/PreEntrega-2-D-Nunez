// CLASES para determinar las distintas categorías de productos y ARREGLOS
class OfertasSemanales { 
    constructor (id, name, ut, price) {
        this.id = id;
        this.name = name;
        this.ut = ut;
        this.price = price;
    };
};
const aromaterapia = [];
const aceiteEucalipto = new OfertasSemanales (1, 'Aceite Esencial de Eucalipto','Respiración libre - Higiene Bucal - Defensas', 3000);
aromaterapia.push (aceiteEucalipto);
const aceiteManzanilla = new OfertasSemanales (2, 'Aceite Esencial de Manzanilla','Descanso - Estómago - Ciclo femenino', 3500);
aromaterapia.push (aceiteManzanilla);
const aceiteLimon = new OfertasSemanales (3, 'Aceite Esencial de Limon','Inspiración y Creatividad', 4000);
aromaterapia.push (aceiteLimon);
console.log (aromaterapia);

const bienestar = [];
const oleo31 = new OfertasSemanales (4, 'Óleo 31','Cabeza - Estómago - Flexibilidad - Pre Actividad Física - Post Actividad Física y Sobreesfuerzos - Libertad de Movimientos', 6500);
bienestar.push (oleo31);
const antiStress = new OfertasSemanales (5, 'Anti-Stress', 'Relajante - Tranquilidad - Descanso', 5500);
bienestar.push (antiStress);
const sosMotivacional = new OfertasSemanales (6,'SoS Motivacional', 'Alegría - Motivación - Creatividad - Inspiración', 5000);
bienestar.push (sosMotivacional);
console.log (bienestar);

const ofertas = aromaterapia.concat (bienestar);
console.log (ofertas);

// SIMULADOR
let categorias = parseInt (prompt ('Bienvenido a PROMOCIONES JUST. Seleccione la Categoría: 1-AROMATERAPIA / 2-BIENESTAR'));
let seleccion = 0
if (categorias === 1) { seleccion = parseInt (prompt ('Seleccione su producto: 1-Aceite Esencial de Eucalipto. 2-Aceite Esencial de Manzanilla. 3-Aceite Esencial de Limon.'))}
else { seleccion = parseInt (prompt ('Seleccione su producto: 4-Óleo 31. 5-Anti-Stress. 6-SoS Motivacional'))};
let continuarPedido = true;
let decision;
let totalPedido = 0;
const carrito = [];

while (continuarPedido === true) {
    const producto = ofertas.find (producto => producto.id === seleccion);
    carrito.push (producto);
    totalPedido = totalPedido + producto.price;
    decision = parseInt (prompt('Quieres seguir comprando? 1.Si / 2.No'))
    if (decision === 1) { seleccion = parseInt (prompt ('Seleccionar más ofertas: 1-Aceite Esencial de Eucalipto. 2-Aceite Esencial de Manzanilla. 3-Aceite Esencial de Limon. 4-Óleo 31. 5-Anti-Stress. 6-SoS Motivacional'))} 
    else { continuarPedido = false; }
};
console.log(carrito);

function costoEnvio(costo) {
    let envio = 0;
    if (costo >0 && costo <= 7000) { envio = 800; }
    else { envio = 0; }

let pedidoFinal = totalPedido + envio
return pedidoFinal    
};
 
const pedidoConEnvio = costoEnvio (totalPedido);
  if  (totalPedido <= 7000 ) {alert (`El TOTAL de tu pedido es de ${pedidoConEnvio} incluyendo el costo de envío- MUCHAS GRACIAS POR TU COMPRA !!!`)}
  else {alert (`El TOTAL de tu pedido con el envío BONIFICADO es de ${pedidoConEnvio} - MUCHAS GRACIAS POR TU COMPRA !!!`)};