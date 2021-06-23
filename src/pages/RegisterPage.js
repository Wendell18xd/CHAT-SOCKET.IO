import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";

export const RegisterPage = () => {
  //
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value, //las [ ] significa que use el valor del name y no que no lo ponga como propiedad
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, nombre, password } = form;
    const ok = await register(nombre, email, password);

    if (!ok) {
      Swal.fire("Error", "Correo ya registrado", "error");
    }
  };

  const todoOK = () => {
    return form.email.length > 0 &&
      form.password.length > 5 &&
      form.nombre.length > 0
      ? true
      : false;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="login100-form validate-form flex-sb flex-w"
      autoComplete="off"
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          type="submit"
          disabled={!todoOK()}
          className="login100-form-btn"
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};
