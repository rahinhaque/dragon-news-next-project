import BreakingNews from '@/components/shared/breakingNews/BreakingNews';
import Header from '@/components/shared/header/Header';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
 return (
   <div className="overflow-x-hidden min-h-screen bg-white dark:bg-slate-950">
     <Header></Header>
     <BreakingNews></BreakingNews>
     <Navbar></Navbar>
     <main className="pb-10">
       {children}
     </main>
   </div>
 );
};

export default MainLayout;