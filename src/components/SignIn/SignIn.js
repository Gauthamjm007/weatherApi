import React from "react";
import Header from "../styledComponents/SignInHeader";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { startAddUsers } from "../../action/userAction";
import { connect } from "react-redux";
import * as Yup from "yup";

function SignIn(props) {
  const SignInSchema = Yup.object().shape({
    Name: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("Username Required"),
    Email: Yup.string().email().required("Email Required"),
    password: Yup.string()
      .min(8, "Too Short password")
      .max(50, "Too Long password!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}/,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
      )
      .required("Password Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        password: "",
        confirmPassword: "",
        terms_services: false,
      }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        const redirect = () => {
          return props.history.push("/signup");
        };
        props.dispatch(
          startAddUsers(values.Name, values.Email, values.password, redirect)
        );
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <br />
                <Header>Sign In</Header>
                <br />
                <div className="form-group has-search">
                  <span className="fa fa-user form-control-feedback"></span>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Your Name"
                    value={values.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.Name && touched.Name ? <div>{errors.Name}</div> : null}
                <br />
                <div className="form-group has-search">
                  <span className="fas fa-envelope form-control-feedback"></span>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    className="form-control"
                    placeholder="Your Email"
                    value={values.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.Email && touched.Email ? (
                  <div>{errors.Email}</div>
                ) : null}
                <br />
                <div className="form-group has-search">
                  <span className="fa fa-lock form-control-feedback"></span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <br />
                <div className="form-group has-search">
                  <span className="fas fa-lock-open form-control-feedback"></span>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Repeat Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div>{errors.confirmPassword}</div>
                ) : null}
                <br />
                <div className="form-check">
                  <input
                    type="checkbox"
                    value={values.terms_services}
                    name="terms_services"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-check-input"
                    id="checkbox"
                  />
                  <label className="form-check-label" htmlFor="checkbox">
                    I agree on statements on Terms and services
                  </label>
                </div>
                <br />
                <button
                  type="submit"
                  disabled={isSubmitting || values.terms_services === false}
                  className="btn btn-primary btn-lg"
                >
                  Register
                </button>
                <br />
                <br />
              </div>
              <div className="col-md-5 offset-md-2" style={{ marginTop: 50 }}>
                <img src="signup-image.webp" alt="Sign up" />
                <br />
                <br />
                <Link to="/signup">
                  <p style={{ marginLeft: 100 }}>I am already a member</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default connect()(SignIn);
