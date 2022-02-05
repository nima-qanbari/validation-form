import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { validate } from "../components/Validate/validate";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({})

  useEffect(() => {
      console.log(errors)
    setErrors(validate(data))
  }, [data])

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <Form>
        <h2>Create your account by filling out the information below</h2>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={changeHandler}
            
          />
          
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit">Sign up</Button>
          <p>
            Already have an account? Login <a href="/">here</a>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUp;
