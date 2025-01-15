import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }} className="min-h-screen my-[80px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
