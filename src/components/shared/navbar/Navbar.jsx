"use client";
 import ThemeToggle from '@/components/theme/ThemeToggle';
 import React from 'react';
 
 const Navbar = () => {
  return (
    <div>
     <div>
      <h2>This is navbar</h2>
     </div>
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
 };

export default Navbar;