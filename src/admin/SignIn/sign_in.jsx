import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";

import "./sign_in.scss";
import Logo from "../../assets/imgs/logo.png";
import { getAccessTokenApi } from "../../api/auth";

import LoginForm from "../../components/admin/login_form/login_form";
import RegisterForm from "../../components/admin/register_form/register_form";

export function SignIn() {
 const { Content } = Layout;
 const { TabPane } = Tabs;

 if (getAccessTokenApi()) {
  return <Redirect to="/admin" />;
 }

 return (
  <Layout className="sign-in">
   <Content className="sign-in__content">
    <h1 className="sign-in__content-logo">
     <img src={Logo} alt="Edwin Melara Landaverde" />
    </h1>

    <div className="sign-in__content-tabs">
     <Tabs type="card">
      <TabPane tab={<span>Entrar</span>} key="1">
       <LoginForm />
      </TabPane>
      <TabPane tab={<span>Nuevo Usuario</span>} key="2">
       <RegisterForm />
      </TabPane>
     </Tabs>
    </div>
   </Content>
  </Layout>
 );
}
