import dataBase from "../database/Database.js";
import { DataTypes } from "sequelize";

const Formulario = dataBase.define('formularios',{
    tipoId:{
        type:DataTypes.STRING
    },
    numeroIdentificacion:{
        type:DataTypes.STRING
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    fechaNacimiento:{
        type:DataTypes.DATE
    },
    direccion:{
        type:DataTypes.STRING
    },
    ciudad:{
        type:DataTypes.STRING
    },
    pais:{
        type:DataTypes.STRING
    },
    departamento:{
        type:DataTypes.STRING
    },
    marca:{
        type:DataTypes.STRING
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    }
})
export default Formulario;