class Usuarios {
    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
    }

    verInfo() {
        console.log("Usuario: " + this.nombre +" Documento: " + this.documento +" Telefono: " + this.telefono)
    }
}

export default Usuarios