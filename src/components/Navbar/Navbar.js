import "./Navbar.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchInput from "../Searchbar/SearchInput";
import logo from "../../images/Urban_Water_cv.png";
import uwContext from "../../context/uw/uwContext";

import React, {useContext} from "react";

const Navbar = () => {
  const { frmPage, setFrmPage } = useContext(
    uwContext
  );
  
    return (
      <div>
        <nav className="sticky border-b z-50 w-full nav flex flex-wrap items-center justify-between px-4">
          <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <Link exact to="/">
              <img
                src={logo}
                className="fill-current h-14 mr-2 "
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1.5"
                clipRule="evenodd"
                viewBox="0 0 716 895"
              />
            </Link>
          </div>

          <Switch>
            <Route
              path="/"
              render={(props) =>
                props.location.pathname !== "/" && (
                  <div className="relative w-1/3 shadow-md rounded-md border border-color-gray-400">
                    <SearchInput />
                  </div>
                )
              }
            />
          </Switch>

          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            htmlFor="menu-btn"
          >
            <span className="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
            <li className="border-t md:border-none">
              <Link exact
                to="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker active"
              >
                Home
              </Link>
            </li>

            <li className="border-t md:border-none" onClick={ (event) => {
              setFrmPage(true)
              }}>
              <Link exact
                to="/flood-risk-map"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Flood Risk Map
              </Link>
            </li>

            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Services
              </a>
            </li>

            <li className="border-t md:border-none">
              <a
                href="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker "
              >
                Explore Towns
              </a>
            </li>

            <li className="border-t md:border-none">
              <a
                href="/about/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;
