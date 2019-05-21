import React from 'react';
import Navbar from "@/components/Navbar";

const BasicLayout: React.FC = props => {
  return (
    <div className="bg-gray-900 bg-top bg-no-repeat font-sans flex flex-col h-screen overflow-hidden">
      <Navbar/>
      {props.children}
    </div>
  );
};

export default BasicLayout;
