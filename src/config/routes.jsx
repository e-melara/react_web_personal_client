import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Contact from "../pages/contact";
import { Admin, SignIn, Users } from "../admin";

import LayoutAdmin from "../layouts/layout_admin";
import LayoutBasic from "../layouts/layout_basic";

const routes = [
 {
  Component: LayoutAdmin,
  routes: [
   {
    path: "/admin",
    component: Admin,
    exact: true,
   },
   {
    path: "/admin/login",
    component: SignIn,
    exact: true,
   },
   {
    path: "/admin/users",
    component: Users,
    exact: true,
   },
  ],
 },
 {
  Component: LayoutBasic,
  routes: [
   {
    path: "/",
    component: Home,
    exact: true,
   },
   {
    path: "/contact",
    component: Contact,
    exact: true,
   },
  ],
 },
];

export default function ApplicationRoutes() {
 return (
  <Switch>
   {routes.map((route, _) => {
    const { Component, routes } = route;
    return routes.map((item, index) => {
     return (
      <Route
       key={index}
       path={item.path}
       exact={item.exact}
       render={(props) => (
        <Component {...props}>
         <item.component />
        </Component>
       )}
      />
     );
    });
   })}
  </Switch>
 );
}
