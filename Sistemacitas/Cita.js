class Cita {
    fecha
    hora
    motivo
    constructor(fecha, hora, motivo, paciente, medico) {
        this.fecha = fecha
        this.hora = hora
        this.motivo = motivo
        this.paciente = paciente
        this.medico = medico
    }

    verCita() {
        console.log("Fecha: " + this.fecha +" Hora: " + this.hora +" Motivo: " + this.motivo +" Paciente: " + this.paciente.nombre +" Medico: " + this.medico.nombre +" Especialidad: " + this.medico.especialidad)
    }
}

export default Cita