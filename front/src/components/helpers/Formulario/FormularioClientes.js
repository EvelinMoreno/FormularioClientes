const FormularioClientes = () =>{
    return(
    <section className= "formulario p-3">
   <form className= "registro row col-12 d-flex">
    <h1 class= "tformulario">Formulario de registro</h1>
   <section class="col-md-6">
    <label for="validationDefault04" class="form-label">Tipo de identificación</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">-Seleccione tipo de identificación-</option>
      <option>Cédula de ciudadania</option>
      <option>Cédula extranjería</option>
      <option>Pasaporte</option>
    </select>
  </section>
    <section class="col-md-6">
    <label for="validationDefault01" class="form-label">Número de identificación</label>
    <input type="text" class="form-control" id="validationDefault01" value="##########" required/>
  </section>
  <section class="col-md-6">
    <label for="validationDefault02" class="form-label">Nombres</label>
    <input type="text" class="form-control" id="validationDefault02" value="Nombres" required/>
  </section>
  <section class="col-md-6">
    <label for="validationDefault03" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="validationDefault03" value="Apellidos" required/>
  </section>
  <section class="col-md-6">
    <label for="validationDefault03" class="form-label">Fecha de nacimiento</label>
    <input type="date" class="form-control" id="validationDefault03"  required/>
  </section>
  <section class="col-md-6">
    <label for="validationDefault03" class="form-label">Dirección</label>
    <input type="text" class="form-control" id="validationDefault03" value="Dirección" required/>
  </section>
  <section class="col-md-6">
    <label for="validationDefault04" class="form-label">País</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">-Seleccione país-</option>
      <option>Colombia</option>
      <option>Venezuela</option>
      <option>Estados Unidos</option>
    </select>
  </section>
  <section class="col-md-6">
    <label for="validationDefault04" class="form-label">Ciudad</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">-Seleccione ciudad-</option>
      <option>Medellín</option>
      <option>Calí</option>
      <option>Bogota</option>
      <option>Caracas</option>
      <option>Maracaibo</option>
      <option>Nueva york</option>
      <option>Chicago</option>
    </select>
  </section>
  <section class="col-md-6">
    <label for="validationDefault04" class="form-label">Departamento</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">-Seleccione departamento-</option>
      <option>Antioquia</option>
      <option>Valle del cauca</option>
      <option>Cundinamarca</option>
      <option>Bolívar</option>
      <option>Zulia</option>
      <option>Manhattan</option>
    </select>
  </section>
  <section class="col-md-6">
    <label for="validationDefault04" class="form-label">Marca</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">-Seleccione marca-</option>
      <option>Americanino</option>
      <option>American Eagle</option>
      <option>Chevignon</option>
      <option>Esprit</option>
      <option>Naf Naf</option>
      <option>Rifle</option>
    </select>
  </section>
  <section class="col-12 text-center mt-3">
    <button class="btn btn-dark" type="submit">Guardar registro</button>
  </section>
   </form>
   </section>
    )
}
export default FormularioClientes;