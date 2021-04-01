import React from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "./../common/FormControls/FormControls";
import { required } from "./../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter email"
          component={myInput}
          type="text"
          name="email"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Enter password"
          component={myInput}
          type="password"
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);
