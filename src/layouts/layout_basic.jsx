import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
 const { Footer, Content } = Layout;
 return (
  <Layout>
   <Layout>
    <Content>{props.children}</Content>
    <Footer>Estamos en footer ....</Footer>
   </Layout>
  </Layout>
 );
}
