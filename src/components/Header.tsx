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
'use client'; // Директива, чтобы указать, что этот компонент работает на клиенте

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

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Иконка Fingerprint */}
          <Fingerprint className="text-3xl" />
          <Link href="/" className="text-xl font-semibold">Автосервис</Link>
        </div>

        {/* Иконка телефона */}
        <div className="hidden lg:block">
          <Link href="tel:+37494655489" className="text-lg flex items-center gap-2 hover:text-red-500">
            <Phone className="text-xl" />
            +37494655489
          </Link>
        </div>

        {/* Бургер-меню для мобильных */}
        <button
          className="lg:hidden text-3xl"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* Навигационное меню */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex absolute lg:static bg-gray-800 w-full top-16 left-0 lg:w-auto lg:bg-transparent p-4 lg:p-0`}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/service">Service</Link>
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
