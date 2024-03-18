import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-gra">
      <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-500" : "text-gray-600"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-500" : "text-gray-600"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              
              
              <li>
                <NavLink
                  to="/contact"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-500" : "text-gray-600"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Github"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-500" : "text-gray-600"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Resume"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-500" : "text-gray-600"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
