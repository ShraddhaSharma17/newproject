
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  password: Yup
  .string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")  
    .required('Password Required')
    .matches(/^(?=.*[A-Z])/, "Must Contain One Uppercase")
    .matches(/^(?=.*[0-9])/, "Must Contain One Number")
    .matches(/^(?=.*[a-z])/, "Must Contain One Lowercase")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Must Contain One Special Character"),
  email: Yup.string().email("Invalid email").required("Email Required")
});

class LoginForm extends React.Component {
  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  render() {
    return (
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
              </div>
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={this.handleSubmit}
            >
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <div><br></br>
                      <div>
                        <label>
                          <Field type="email" name="email" className="name" />
                          <ErrorMessage name="email" component="div" />
                        </label>
                      </div>

                      <div className="second-input">
                        <label>

                          <Field type="password" name="password" className="name" />
                          <ErrorMessage name="password" component="div" />
                        </label>
                      </div>

                      <div className="login-button">
                        <button type="submit" disabled={isSubmitting}>
                          Submit
                        </button>
                      </div>

                      <p className="link">
                        <a href="#">Forgot password ?</a> Or<a href="#">&nbsp;Sign Up</a>
                      </p>

                    </div>
                  </Form>
                );
              }}
            </Formik>


          </div>


        </div>
      </div>
    );
  }
}

export default LoginForm;
