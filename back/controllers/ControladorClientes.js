import Formulario from "../models/ModeloClientes.js";

const mostrarCliente = async (req, res) => {
    try{
        const clientes = await Formulario.findOne({where: {id: req.params.id}})
        res.json(clientes)
    }catch (error) {
        res.json({
          message: "Cliente No Existe: "+ error
      });
    
      }
};

const mostrarClientes = async (req, res) =>{
    try {
        const clientes = await Formulario.findAll();
        res.json(clientes);
      } catch (error) {
        res.json({
          message: error
        });
        
      }
  
};

const crearCliente = async (req, res) => {
    try {
        await Formulario.create(req.body)
        res.json({
            message:'Cliente Creado Correctamente'
        });
        
    } catch (error) {
        res.json({
            message:'No se pudo registrar el Cliente'+ error
        })
        
    }

};

export {
    mostrarCliente,
    mostrarClientes,
    crearCliente
}