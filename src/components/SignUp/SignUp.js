import React from "react";
import Header from "../styledComponents/SignInHeader";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Yup from "yup";

function SignUp(props) {
  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short password")
      .max(50, "Too Long password!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}/,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
      )
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        username:
          localStorage.getItem("username") !== null
            ? localStorage.getItem("username")
            : "",
        password:
          localStorage.getItem("password") !== null
            ? localStorage.getItem("password")
            : "",
        remeber_me: false,
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        const getDetails = props.users.find((users) => {
          return users.name === values.username;
        });
        if (getDetails && values.remeber_me === true) {
          localStorage.setItem("username", values.username);
          localStorage.setItem("password", values.password);
        } else if (getDetails && values.remeber_me === false) {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }
        if (getDetails && getDetails.password === values.password) {
          localStorage.setItem("weatherapp_log", "true");
          props.history.push("/home");
          setSubmitting(false);
        }
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
              <div className="col-md-5 offset-md-2" style={{ marginTop: 50 }}>
                <img src="signin-image.webp" alt="sign in" />
                <br />
                <br />
                <Link to="/signin">
                  <p style={{ marginLeft: 100 }}>create an account</p>
                </Link>
              </div>
              <div className="col-md-5">
                <br />
                <Header>Sign Up</Header>
                <br />
                <div className="form-group has-search">
                  <span className="fa fa-user form-control-feedback"></span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Your Name"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
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
                <div className="form-check">
                  <input
                    type="checkbox"
                    value={values.remeber_me}
                    name="remeber_me"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-check-input"
                    id="checkbox"
                  />
                  <label className="form-check-label" htmlFor="checkbox">
                    Remeber Me
                  </label>
                </div>
                <br />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                >
                  Log in
                </button>
                <br />
                <br />
                <div className="row justify-content-start">
                  <div className="col-4">
                    <h5>Or Login with</h5>
                  </div>
                  <div className="col-1">
                    <i
                      className="fab fa-facebook-square fa-2x icon-blue"
                      style={{ color: "#3b5998" }}
                    ></i>
                  </div>
                  <div className="col-1">
                    <i
                      className="fab fa-twitter-square fa-2x"
                      style={{ color: " #00acee" }}
                    ></i>
                  </div>
                  <div className="col-1">
                    <i
                      className="fab fa-google-plus-square fa-2x"
                      style={{ color: "#db4a39" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(SignUp);
