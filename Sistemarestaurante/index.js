import Plato from "./Plato.js"
import Cliente from "./Cliente.js"
import Pedido from "./Pedido.js"

let hamburguesa = new Plato("Hamburguesa","Comida rapida",18000,true)

let pizza = new Plato("Pizza","Comida rapida",25000,true)
hamburguesa.verPlato()
pizza.verPlato()

let cliente = new Cliente("Laura","123456","3105555555")
cliente.verInfo()

let pedido = new Pedido("02/10/2026",1001,cliente)

pedido.registrarPlato(hamburguesa)
pedido.registrarPlato(pizza)

cliente.registrarPedido(pedido)

pedido.verPedido()

cliente.verPedidos()