import BarraPrincipal from "../helpers/BarraPrincipal/BarraPrincipal";
import Footer from "../helpers/Footer/Footer";
import FormularioClientes from "../helpers/Formulario/FormularioClientes";

const Main = () =>{
    return(
        <main>
        <BarraPrincipal/>
        <FormularioClientes/>
        <Footer/>
        </main>
       
    )
}
export default Main;