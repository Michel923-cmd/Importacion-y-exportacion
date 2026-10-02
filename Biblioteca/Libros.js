class Libros{
nombre
editorial
autor
constructor(nombre,editorial,autor){
    this.nombre=nombre
    this.editorial=editorial
    this.autor=autor
}
registrarNombre(nuevoNombre){
    this.nombre=nuevoNombre
}
registrarEditorial(nuevoEditorial){
    this.nombre=nuevoEditorial
}
registrarAutor(nuevoAutor){
    this.nombre=nuevoAutor
}
verLibro(){
    console.log("Nombre "+this.nombre+" Editorial:"+this.editorial+" Autor:"+this.autor)
}
}
export default Libros