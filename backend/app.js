//Importo todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import ClientsRoutes from "./src/routes/clients.js";
import BranchesRoutes from "./src/routes/branches.js";
import EmployeesRoutes from "./src/routes/employees.js"
import ReviewRoutes from "./src/routes/review.js";
import EvaluationsRoutes from "./src/routes/evaluations.js"
import RegistrarEmployees from "./src/routes/registerEmployees.js"
import cookieParser from "cookie-parser";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
import registerClient from "./src/routes/registerClient.js";


//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());
//Que acepte cookies en postman
app.use(cookieParser());

app.use("/api/products", productsRoutes);
//exporto esta constante para usar express en todos lados 

app.use("/api/clients", ClientsRoutes);

app.use("/api/branches", BranchesRoutes);

app.use("/api/review", ReviewRoutes);

app.use("/api/employees", EmployeesRoutes);

app.use("/api/evaluations", EvaluationsRoutes);

app.use("/api/regiterEmployeess", RegistrarEmployees);

app.use("/api/login", loginRoutes);

app.use("/api/logout", logoutRoutes);

app.use("/api/registerClients", registerClient);

export default app;



