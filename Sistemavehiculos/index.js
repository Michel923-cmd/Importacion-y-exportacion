import Vehiculo from "./Vehiculo.js"
import Cliente from "./Cliente.js"
import Alquiler from "./Alquiler.js"

let carro = new Vehiculo("ABC123","Toyota","2024","Automovil")

let moto = new Vehiculo("XYZ456","Honda","2023","Motocicleta")
carro.verVehiculo()
moto.verVehiculo()

let cliente = new Cliente("Andres","987654","3155555555")
cliente.verInfo()

let alquiler1 = new Alquiler("02/10/2026","05/10/2026",cliente,carro)

cliente.registrarAlquiler(alquiler1)

alquiler1.verAlquiler()

cliente.verAlquileres()