import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage/Error";
import Footer from "../FooterFolder/Footer";
import SignIn from "../SignInScreen/SignIn";

function Layout () {
    return(
        <>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route exact path="/" element={<SignIn/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
export default Layout;