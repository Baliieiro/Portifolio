import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="root-layout">
        <Header />
        <section className="container">
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  );
}
