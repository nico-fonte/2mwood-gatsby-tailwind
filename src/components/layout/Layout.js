import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div id="top" className="bg-black">
      <Header />
      <main className="text-gray-200">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
