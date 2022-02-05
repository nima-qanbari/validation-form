import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

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
    <div>
      <Form onSubmit={submitHandler}>
        <h2>Create your account by filling out the information below</h2>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={changeHandler}
            onFocus={tochedHandler}
          />
          {errors.username && touched.username && <span>{errors.username}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={tochedHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={tochedHandler}
          />
          {errors.password && touched.password && <span>{errors.password}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={tochedHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        </Form.Group>

        <Form.Group>
          <Button type="submit">Sign up</Button>
          <p>
            Already have an account? Login <a href="/">here</a>
          </p>
        </Form.Group>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default SignUp;
