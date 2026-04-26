import Header from '@/components/shared/header/Header';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
 return (
   <div>
     <Header></Header>
     <Navbar></Navbar>
     {children}
   </div>
 );
};

export default MainLayout;