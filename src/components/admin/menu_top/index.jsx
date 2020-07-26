import React from "react";
import { Button } from "antd";
import {
 MenuOutlined,
 MenuFoldOutlined,
 PoweroffOutlined,
} from "@ant-design/icons";

import "./menu_top.scss";
import { logout } from "../../../api/auth";
import logo from "../../../assets/imgs/logo.png";

export default function MenuTop(props) {
 const { menuCollapsed, setMenuCollapsed } = props;

 const logoutClick = () => {
  logout();
  window.location.reload();
 };

 return (
  <div className="menu-top ">
   <div className="menu-top__left">
    <img className="menu-top__left-logo" src={logo} alt="Edwin Melara" />
    <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
     {menuCollapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
    </Button>
   </div>
   <div className="menu-top__right">
    <Button type="link" onClick={logoutClick}>
     <PoweroffOutlined />
    </Button>
   </div>
  </div>
 );
}
