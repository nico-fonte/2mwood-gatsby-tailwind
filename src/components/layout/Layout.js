import React from 'react';
import Footer from './Footer';
import HeaderTwo from './HeaderTwo';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-black">
      {/* <Header /> */}
      <HeaderTwo />
      <main className="text-gray-200 mt-40">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
