import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./LoginForm.scss";
import userApi from "../../../api/users";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

export default function LoginForm() {
 const [inputs, setInputs] = useState({
  email: "",
  password: ""
 });

 const changeForm = e => {
  setInputs({
   ...inputs,
   [e.target.name]: e.target.value
  });
 };

 const login = async e => {
  e.preventDefault();
  const json = await userApi.signIn(inputs);
  if (json.ok) {
   const { accessToken, refreshToken } = json.result;
   window.localStorage.setItem(ACCESS_TOKEN, accessToken);
   window.localStorage.setItem(REFRESH_TOKEN, refreshToken);

   window.location.href = "/admin";
   notification["success"]({
    message: "Login correctamente"
   });
  } else {
   notification["error"]({
    message: json.message
   });
  }
 };

 return (
  <Form
   onChange={changeForm}
   onSubmitCapture={login}
   className="login-form"
   autoComplete="off"
  >
   <Form.Item>
    <Input
     prefix={<UserOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
     type="email"
     name="email"
     required
     placeholder="Correo electronico"
     className="login-form__input"
    />
   </Form.Item>
   <Form.Item>
    <Input
     prefix={<LockOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
     type="password"
     name="password"
     required
     placeholder="Contraseña"
     className="login-form__input"
    />
   </Form.Item>
   <Form.Item>
    <Button htmlType="submit" className="login-form__button">
     Entrar
    </Button>
   </Form.Item>
  </Form>
 );
}
