//import Schema from mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({

    firstName: { type: String, required: [true, 'Campo requerido'] },
    LastName: { type: String, required: [true, 'Campo requerido'] },
    userName: { type: String, required: [true, 'Campo requerido'] },
    userEmail: { type: String, required: [true, 'Campo requerido'] },
    userPassword: { type: String, required: [true, 'Campo requerido'] },
    status: { type: Boolean, default: true },
    create_at: { type: Date, default: Date.now }

});

//convert to model
const userModel = mongoose.model('users', userSchema);

//export model
export default userModel;