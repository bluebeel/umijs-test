import React from 'react';
import Link from 'umi/link';

const Navbar: React.FC = () => {
  return (
    <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 lg:max-w-2lg xl:max-w-3xl">
      <header className="py-8 text-center sm:pt-16 sm:pb-12 sm:flex sm:items-end sm:justify-between">
        <Link to="/"
           className="inline-flex items-baseline text-white no-underline text-2xl antialiased">
          <div className="text-beige mr-0.5">Saïkou</div>
          <div className="font-bold text-yellow-500">Barry</div>
        </Link>
        <nav className="font-medium antialiased mt-4 sm:mt-0">
          <Link className="text-white no-underline" to="/">Home</Link>
          <Link className="text-white no-underline ml-4 md:ml-8" to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
