import { Layout } from "antd";
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import "./layout_admin.scss";
import { SignIn } from "../admin";
import MenuTop from "../components/admin/menu_top";
import Sidebar from "../components/admin/sidebar";

export default function LayoutAdmin(props) {
 const { Header, Footer, Content } = Layout;
 const [menuCollapsed, setMenuCollapsed] = useState(false);
 const user = null;

 if (!user) {
  return (
   <>
    <Route path="/admin/login" component={SignIn} />
    <Redirect to="/admin/login" />
   </>
  );
 }

 return (
  <Layout>
   <Sidebar menuCollapsed={menuCollapsed} />
   <Layout
    className="layout-admin"
    style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
   >
    <Header className="layout-admin__header">
     <MenuTop
      menuCollapsed={menuCollapsed}
      setMenuCollapsed={setMenuCollapsed}
     />
    </Header>
    <Content className="layout-admin__content">{props.children}</Content>
    <Footer className="layout-admin__footer">Edwin Melara Landaverde</Footer>
   </Layout>
  </Layout>
 );
}
