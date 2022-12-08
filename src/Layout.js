import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
