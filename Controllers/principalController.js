import { habitaciones } from "../Model/datosModel";
import { hacerCheckIn, ingresosNocturnos } from "./operacionesController";

// consultar estado de habitaciones
console.log("*** ESTADO INICIAL DE LAS HABITACIONES ***");
console.table(habitaciones);

// Check-in en una habitación ocupada (que debe ser rechazada)
console.log("=== INTENTO DE CHECK-IN EN HABITACIÓN OCUPADA ===");
hacerCheckIn("H-01");