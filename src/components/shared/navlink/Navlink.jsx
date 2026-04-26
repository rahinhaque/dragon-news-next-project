'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href , children}) => {
 const pathName = usePathname();
 const isActive = href === pathName;

 return (
  <Link href={href} className={`${isActive ? "border-b-2 border-indigo-400" : ""}`}>
  {children}
  </Link>
 );
};

export default Navlink;