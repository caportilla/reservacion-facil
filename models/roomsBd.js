import  mongoose  from "mongoose";
const Schema = mongoose.Schema;

const habitacioneSchema = new Schema({
    
    /*nombre_habitacion: { type: String, required: [true, 'Campo requerido'] },
    precio: { type: Number, required: [true, 'Campo requerido'] },
    descripcion_habitacion: { type: String, required: [true, 'Campo requerido'] },
    estado: { type: Boolean, required: [true, 'Campo requerido'] },
    Tipos_Habitacion: { type: String, required: [true, 'Campo requerido'] },
    fecha: { type: Date, default: Date.now }*/

    nombre:{type: String, required:[true,'campo obligatorio']},
    precio:{type: String, required:[true,'campo obligatorio']},
    //descripcion_hab:{type: String, required:[true,'campo obligatorio']},
    fecha:{type:Date, default: Date.now},
    estado:{type: String, required:[true,'campo obligatorio']},
    tipo_hab:{type: String, required:[true,'campo obligatorio']},

});

//convertir a modelo
const roomsBd = mongoose.model('roomsBd',habitacioneSchema );
export default roomsBd;