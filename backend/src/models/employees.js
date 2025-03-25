/*name
  lastName
  birthday (esto es de tipo Date o lo puden poner como String)
  email
  address
  hireDate (esto es de tipo Date o lo puden poner como String)
  password
  telephone
  dui
  isssNumber
  isVerified (esto es booleano)
*/

import { Schema, model } from "mongoose";

const employeesSchema = Schema({
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
    address:{
        type: String,
        requiere: true
    },
    hireDate: {
        type: Date,
        require: true
    },
    password:{
        type: String,
        require: true,
      
    },
    telephone:{
        type: String,
        require: true,
  
    },
    dui:{
        type: String,
        requiere: true,
 
    },
    isssNumber:{
        type: String,
        requiere: true,
 
    },
    isVerifid:{
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Employees", employeesSchema);