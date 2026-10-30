import { habitaciones } from "../Model/datosModel.js";

export function hacerCheckIn(id) {
    const habitacion = habitaciones.find(h => h.id === id);

    if (!habitacion) {
        console.log(`Error: la habitación con el id ${id} no existe.`);
        return false;
    }

    else if (habitacion.estado === "Ocupada") {
        console.log(`Error: la habitación ${id} ya está ocupada. Check-in rechazado.`);
        return false;
    }
    else{
        habitacion.estado = "Ocupada";
        console.log(`Check-in exitoso: la habitación ${id} fue asignada.`);
        return true;
    }
}

export function ingresosNocturnos () {
    let total = 0

    habitaciones.forEach(habitacion => {
        if (habitacion.estado === "Ocupada") {
            total += habitacion.precio_noche;
        }
    });

    return total;
}