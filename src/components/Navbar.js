import logo from "../logo_3.png";
import fullLogo from "../full_logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Navbar() {
  

  return (
    <div className="">
      <nav className="w-screen">
        <ul className="flex items-end justify-between py-3 bg-transparent text-white pr-5">
          <li className="flex items-end ml-5 pb-2">
            <Link to="/">
              <img
                src={fullLogo}
                alt=""
                width={120}
                height={120}
                className="inline-block -mt-2"
              />
              <div className="inline-block font-bold text-xl ml-2">
                NFT Marketplace
              </div>
            </Link>
          </li>
          <li className="w-2/6">
            <ul className="lg:flex justify-between font-bold mr-10 text-lg">
              {location.pathname === "/" ? (
                <li className="hover:pb-0 p-2  bg-black rounded-3xl px-3 bg-opacity-40">
                  <Link to="/">Marketplace</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:border-green-500 hover:pb-0 p-2">
                  <Link to="/">Marketplace</Link>
                </li>
              )}
              {location.pathname === "/sellNFT" ? (
                <li className="hover:pb-0 p-2  bg-black rounded-3xl px-3 bg-opacity-40">
                  <Link to="/sellNFT">Mint</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:border-green-500 hover:pb-0 p-2">
                  <Link to="/sellNFT">Mint</Link>
                </li>
              )}
              {location.pathname === "/profile" ? (
                <li className=" hover:pb-0 p-2  bg-black rounded-3xl px-3 bg-opacity-40  ">
                  <Link to="/profile">Profile</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:border-green-500 hover:pb-0 p-2">
                  <Link to="/profile">Profile</Link>
                </li>
              )}
              <li>
                {connected ? (
                  <button
                    className="rounded-full enableEthereumButton bg-green-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm"
                    onClick={connectWebsite}
                  >
                    Connected
                  </button>
                ) : (
                  <button
                    className=" rounded-full enableEthereumButton bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
                    onClick={connectWebsite}
                  >
                    Connect Wallet
                  </button>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
