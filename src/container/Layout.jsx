import React from "react";

import '../styles/App.scss';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <main className="main__container">   {children}
      </main>
    </div>
  );
};

export default Layout;
