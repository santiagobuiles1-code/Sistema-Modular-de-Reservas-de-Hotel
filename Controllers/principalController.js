import { habitaciones } from "../Model/datosModel";
import { hacerCheckIn, ingresosNocturnos } from "./operacionesController";

// consultar estado de habitaciones
console.log("*** ESTADO INICIAL DE LAS HABITACIONES ***");
console.table(habitaciones);