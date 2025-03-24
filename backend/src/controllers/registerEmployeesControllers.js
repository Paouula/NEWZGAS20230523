import employeesModel from "../models/employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) => {
    const {name, lastname, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;

    try {
        //Verificamos si el empleado ya existe
        const exisEmployees = await employeesModel.findOne({email})
        if(exisEmployees) {
            return res.json ({message: "Empleado ya existente"})
        }
           
        //Encriptar la contraseña
        const passwordHash = await bcryptjs.hash(password, 10)

        //Guardemos al empleado nuevo
        const newEmployees = new employeesModel({name, 
            lastname, 
            birthday, 
            email, 
            address, 
            hireDate, 
            password: passwordHash, 
            telephone, 
            dui, 
            isssNumber, 
            isVerified})

            await newEmployees.save();

            //Token
            jsonwebtoken.sign(
                //1.Que voy a guardar
                {id: newEmployee._id},
                //2.Secreto
                config.JWT.secret,
                //3.Cuando expira
                {expiresIn: config.JWT.expiresIn},
                //4.Funcion flecha
                (error, token) => {
                    if(error) console.log(error)
                        res.cookie("authToken", token)
                }
            )
    
    } catch (error) {
        console.log(error)
    }
}

export default registerEmployeesController;