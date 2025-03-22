// import { Fingerprint } from 'lucide-react'
// import Link from 'next/link'
// import { FC } from 'react'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from './ui/navigation-menu'

// const Header: FC = () => {
//   return (
//     <header className=" container mx-auto flex gap-2">
//       <Fingerprint className="size-5" />
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/">Home</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/about">About</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/service">service</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </header>
//   )
// }

// export default Header
'use client';

import { Fingerprint, Phone } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Fingerprint className="text-3xl" />
          <Link href="/" className="text-xl font-semibold">Автосервис</Link>
        </div>

        <div className="flex items-center justify-center gap-2">
  <Phone className="text-xl lg:hidden" />
  <Link href="tel:+37494655489" className="text-lg flex items-center pl-15 justify-center gap-1 hover:text-red-500">
    <span className="hidden lg:block">Call</span>
  </Link>
</div>

        <button
          className="lg:hidden text-3xl fixed top-4 right-4 z-50"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex absolute lg:static bg-gray-800 w-full top-16 left-0 lg:w-auto lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out z-50`}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={closeMenu}>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" onClick={closeMenu}>About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/service" onClick={closeMenu}>Service</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
