import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";

const PrivateRouter = () => {
    const isAuth = localStorage.getItem("token") ? true : false;

    return(
        isAuth ? <Outlet /> : <Navigate to= {ROUTES.LOGIN} />
    );

}

export default PrivateRouter;