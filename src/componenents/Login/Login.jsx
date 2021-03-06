import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, myInput} from "./../common/FormControls/FormControls";
import {required} from "./../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import styles from "../common/FormControls/FormControls.module.css";

const LoginForm = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                <Field component={myInput} type="checkbox" name="rememberMe"/>
                remember me
            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField('Symbols from image', 'captchaUrl',[required],myInput,{})}
            {error && <div className={styles.formSummaryError}>{error}</div>}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {login})(Login);
