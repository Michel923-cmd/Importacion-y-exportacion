import Libros from "./Libros.js"
import Prestamo from "./Prestamo.js"
import Usuarios from "./Usuarios.js"


let quijote = new Libros("El Quijote","Miguel de Cervantes","Novela",1605)

let maria = new Libros("La Maria","Jorge Isaacs","Romance",1867)
quijote.verLibro()
maria.verLibro()

let alexa = new Usuarios("Alexandra","111","123")
alexa.verInfo()

let prestarQuijoteMaria = new Prestamo(alexa,"2/10/2026","5/10/2026")


prestarQuijoteMaria.registrarLibros(quijote)
prestarQuijoteMaria.registrarLibros(maria)

prestarQuijoteMaria.verLibros()