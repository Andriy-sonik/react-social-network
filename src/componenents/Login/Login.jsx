import React from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "./../common/FormControls/FormControls";
import { required } from "./../../utils/validators/validators";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="login"
          component={myInput}
          type="text"
          name="login"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          component={myInput}
          type="text"
          name="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field component={myInput} type="checkbox" name="rememberMe" />
        remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: `login`,
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log("formData", formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
