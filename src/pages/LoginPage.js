import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberme: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    email && setForm((form) => ({ ...form, rememberme: true, email }));
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value, //las [ ] significa que use el valor del name y no que no lo ponga como propiedad
    });
  };

  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    form.rememberme
      ? localStorage.setItem("email", form.email)
      : localStorage.removeItem("email");

    const { email, password } = form;
    const ok = await login(email, password);
    if (!ok) {
      Swal.fire("Error", "Verifique el usuario y contraseña", "error");
    }
  };

  const todoOK = () => {
    return form.email.length > 0 && form.password.length > 5 ? true : false;
  };

  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      autoComplete="off"
      onSubmit={onsubmit}
    >
      <span className="login100-form-title mb-3">Chat - Ingreso</span>

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
        <div className="col" onClick={toggleCheck}>
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            checked={form.rememberme}
            readOnly
          />
          <label className="label-checkbox100">Recordarme</label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          type={"submit"}
          className="login100-form-btn"
          disabled={!todoOK()}
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};
