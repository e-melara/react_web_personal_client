import React, { useState } from "react";
import { Form, Button, Input, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./register_form.scss";
import userApi from "../../../api/users";
import { emailValidation, minLength } from "../../../utils/form_validation";

export default function RegisterForm() {
 const { Item } = Form;

 const [inputs, setInputs] = useState({
  email: false,
  password: "",
  repeatPassword: "",
  privacyPolicy: false
 });

 const onChange = e => {
  const value =
   e.target.name === "privacyPolicy" ? e.target.checked : e.target.value;

  setInputs({
   ...inputs,
   [e.target.name]: value
  });
 };

 const [formValid, setFormValid] = useState({
  email: false,
  password: false,
  repeatPassword: false,
  privacyPolicy: false
 });

 const inputValid = e => {
  const { type, name } = e.target;

  if (type === "password") {
   setFormValid({
    ...formValid,
    [name]: minLength(e.target, 6)
   });
  }

  if (type === "email") {
   setFormValid({
    ...formValid,
    [name]: emailValidation(e.target)
   });
  }

  if (name === "privacyPolicy") {
   setFormValid({
    ...formValid,
    [name]: e.target.checked
   });
  }
 };

 const submit = async e => {
  e.preventDefault();
  const { email, password, repeatPassword, privacyPolicy } = formValid;

  if (!email || !password || !repeatPassword || !privacyPolicy) {
   notification["error"]({
    message: "Todos los campos son obligatorios"
   });
  } else {
   if (password != repeatPassword) {
    notification["error"]({
     message: "Las contraseñas tiene que ser iguales"
    });
   } else {
    userApi.signUp(inputs);
   }
  }
 };

 return (
  <Form className="register-form" onSubmitCapture={submit} onChange={onChange}>
   <Item>
    <Input
     prefix={<UserOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
     autoComplete="off"
     type="email"
     name="email"
     onChange={inputValid}
     placeholder="Correo electronico"
     className="register-form__input"
    />
   </Item>

   <Item>
    <Input
     prefix={<LockOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
     type="password"
     name="password"
     onChange={inputValid}
     placeholder="Contraseña"
     className="register-form__input"
    />
   </Item>

   <Item>
    <Input
     prefix={<LockOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
     type="password"
     name="repeatPassword"
     onChange={inputValid}
     placeholder="Repetir Contraseña"
     className="register-form__input"
    />
   </Item>

   <Item>
    <Checkbox name="privacyPolicy" onChange={inputValid}>
     He leido y acepto la politica de privacidad
    </Checkbox>
   </Item>
   <Item>
    <Button htmlType="submit" className="register-form__button">
     Crear cuenta
    </Button>
   </Item>
  </Form>
 );
}
