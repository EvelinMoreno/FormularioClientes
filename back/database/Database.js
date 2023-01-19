import {Sequelize} from "sequelize";

const dataBase= new Sequelize ('registro','root','',
{host:'localhost',
dialect:'mysql'})

export default dataBase;