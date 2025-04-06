import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Routers from "../../router/Routers";
import OwnerHeader from "../Header/OwnerHeader";
import AdminHeader from "../Header/AdminHeader";
import OwnerRouters from "../../router/OwnerRouter";
import AdminRouters from "../../router/AdminRouter";
import UnkoqnRouters from "../../router/UnknownRouter";
import UnknownHeader from "../Header/UnknownHeader";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path.startsWith("/admin")) {
    return <><AdminHeader /><AdminRouters /></>;
  } else if (path.startsWith("/owner")) {
    return <><OwnerHeader/><OwnerRouters /></>;
  } else if(path.startsWith("/unknow")){
    return <>< UnknownHeader/>< UnkoqnRouters/></>;
  }
  else {
    return <><Header />
      <Routers /></>;
  }
};

export default Layout;
