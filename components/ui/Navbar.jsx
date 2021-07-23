import { useRouter } from "next/router";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import styles from "../../styles/ui/navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = ({ light = false, cta = false, navCenter = false }) => {
  const router = useRouter();

  const [isOpen, setOpen] = useState(false);

  const routes = [
    { name: "home", route: "/" },
    { name: "about", route: "/about" },
    { name: "projects", route: "/projects" },
    { name: "contact", route: "/contact" },
    { name: "login", route: "/login" },
  ];

  return (
    <header className="absolute top-0 w-screen py-4">
      <nav
        className={`flex items-center ${
          navCenter ? "justify-center" : "justify-end"
        } max-w-screen-xl mx-auto px-10`}
      >
        <div className="md:hidden absolute right-4 top-4 z-40">
          <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? '#fff' : '#FF5C00'}/>
        </div>
        <ul
          className={`md:flex hidden items-center space-x-4 ${
            light ? "text-white" : "text-black"
          }`}
        >
          {routes.map(({ name, route }, index) => (
            <li key={`${name}-${index}}`}>
              <Link href={route}>
                <a
                
                  className={`${
                    styles.navLink
                  } relative text-lg cursor-pointer capitalize font-secondary ${
                    router.pathname === route ? styles.active : ""
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}

          {cta && (
            <li>
              <button className="text-sm bg-primary rounded-full font-semibold px-6 py-2 text-white font-secondary">
                Enroll
              </button>
            </li>
          )}
        </ul>
        <ul
          className={`${isOpen ? 'max-h-screen' : 'max-h-0'} transition-all duration-300 overflow-hidden flex md:hidden flex-col absolute top-0 right-0 w-screen bg-primary items-center text-white z-30 space-y-6 justify-center  h-screen`}
        >
          {routes.map(({ name, route }, index) => (
            <li key={`${name}-${index}}`}>
              <Link href={route}>
                <a
                onClick={() => setOpen(false)}
                  className={`${
                    styles.navLinkMobile
                  } relative text-lg cursor-pointer capitalize font-secondary ${
                    router.pathname === route ? styles.active : ""
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}

          {cta && (
            <li>
              <button className="text-sm bg-white rounded-full font-semibold px-6 py-2 text-primary font-secondary">
                Enroll
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
