import React, { useState, useEffect } from "react";
import {Container, Form, Button } from "react-bootstrap";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../components/Toast/Toast";

import { validate } from "../components/Validate/validate";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    setErrors(validate(data))
  }, [data, touched])

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const tochedHandler = (e) => {
    setTouched({...touched, [e.target.name]: true })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(!Object.keys(errors).length){
        notify("You signed in successfully", "success")
    }else{
        notify("Invalid data", "error")
        setTouched({
            username:true,
            email:true,
            password:true,
            confirmPassword:true,
        })
    }
  }

  return (
    <Container className="d-flex justify-content-center py-5 px-4">
      <section className="col-md-6 bg-dark p-5 rounded shadow">
        <Form onSubmit={submitHandler} >
          <h3 className="text-white fs-4">Create your account by filling out the information below</h3>
          <Form.Group>
            <Form.Label className="text-white mt-4">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={data.username}
              onChange={changeHandler}
              onFocus={tochedHandler}
              className={errors.username && touched.username ? "is-invalid" :""}
            />
            {errors.username && touched.username && (
              <span className={errors.username && touched.username && "invalid-feedback"}>{errors.username}</span>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-white mt-4">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={tochedHandler}
              className={errors.email && touched.email ? "is-invalid" : ""}
            />
            {errors.email && touched.email && <span className={errors.email && touched.email && "invalid-feedback"}>{errors.email}</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-white mt-4">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={tochedHandler}
              className={errors.password && touched.password ? "is-invalid" : ""}
            />
            {errors.password && touched.password && (
              <span className={errors.password && touched.password && "invalid-feedback"}>{errors.password}</span>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-white mt-4" >Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={tochedHandler}
              className={errors.confirmPassword && touched.confirmPassword ? "is-invalid" : ""}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span className={errors.confirmPassword && touched.confirmPassword && "invalid-feedback"}>{errors.confirmPassword}</span>
            )}
          </Form.Group>

          <Form.Group className="mt-4">
            <Button className="w-100 my-4" type="submit">Sign up</Button>
            <p className="text-white text-center">
              Already have an account? Login <a href="/">here</a>
            </p>
          </Form.Group>
          <ToastContainer />
        </Form>
      </section>
    </Container>
  );
};

export default SignUp;
