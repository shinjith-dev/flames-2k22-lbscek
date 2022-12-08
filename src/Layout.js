import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from './componenets/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
