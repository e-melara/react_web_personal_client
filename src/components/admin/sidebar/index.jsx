import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./sidebar.scss";

export default function Sidebar(props) {
 const { menuCollapsed } = props;

 const { Sider } = Layout;
 return (
  <Sider className="admin-sider" collapsed={menuCollapsed}>
   <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
     <Link to={"/admin"}>
      <HomeOutlined />
      <span className="nav-text">Home</span>
     </Link>
    </Menu.Item>
    <Menu.Item key="2">
     <Link to={"/admin/welcome-admin"}>
      <MenuOutlined />
      <span className="nav-text">Menu Web</span>
     </Link>
    </Menu.Item>
   </Menu>
  </Sider>
 );
}
