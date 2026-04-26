import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
 return (
  <div>
   <Navbar></Navbar>
   {children}
  </div>
 );
};

export default AuthLayout;