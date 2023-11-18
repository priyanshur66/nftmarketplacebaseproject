import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import NFTTile from "./NFTTile";
import { _fetchData } from "ethers/lib/utils";

export default function Profile() {
  

  return (
    <div className="profileClass" style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="profileClass">
        <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-white">
          <div className="ml-20">
            <h2 className="font-bold">Collection Value</h2>
            {totalPrice} ETH
          </div>
        </div>
        <div className="flex flex-col text-center items-center mt-11 text-white">
          <div className="flex justify-center flex-wrap max-w-screen-xl">
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })}
          </div>
          <div className="mt-10 text-xl">
            {data.length == 0
              ? "Oops, No NFT data to display (Are you logged in?)"
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
