/*
Campos: 
  name
  lastName
  birthday
  email
  password
  telephone
  dui
  isVerified
*/

import { Schema, model } from "mongoose";

const clientsSchema = Schema({
    name: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    birthday:{
        type: Date,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    telephone:{
        type: String,
        require: true
    },
    dui:{
        type: String,
        requiere: true
    },
    isVerifid:{
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Clients", clientsSchema);