//Una biblioteca necesita desarrollar un sistema basico que permita el
//prestamo de los libros a quien se le prestaron
//y que libros a prestado
//sustantivos=> quien necesita interctua
//hstorias de usuario
//libros, Usuarios, Prestamo

import Libros from "./Libros.js";
import Prestamo from "./Prestamo.js";
import Usuarios from "./Usuarios.js";
//instancias
let quijote=new Libros("El Quijote","Norma","Miguel de Cervantes")
let maria=new Libros("La Maria","Norma","Jorge Isaacs")
quijote.verLibro()
maria.verLibro()


let alexa=new Usuarios("Alexandra", "Muñoz", "111", "123")
alexa.verInfo()

let prestarQuijoteMaria=new Prestamo(alexa,"2/10/2026","5/10/2026")
prestarQuijoteMaria.registrarLibros(quijote)
prestarQuijoteMaria.registrarLibros(maria)
prestarQuijoteMaria.verLibros()

