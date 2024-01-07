import React from "react";
import Header from "./Header";
import Container from "./Container";

function Layout() {
  return (
    <>
      <div className="container mx-auto flex gap-4 flex-col bg-salte-50 overflow-y-auto">
        <Header />
        <Container />
      </div>
    </>
  );
}

export default Layout;
