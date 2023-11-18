import Navbar from "./Navbar";
import axie from "../tile.jpeg";
import { useLocation, useParams } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../utils";

export default function NFTPage(props) {


  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <div className="rounded-2xl flex flex-col m items-center justify-center w-screen py-20 drop-shadow-xl bg-black bg-opacity-10">
          <img src={data.image} alt="" className="w-3/5 rounded-lg" />
          <div className="rounded-2xl bg-white text-xl m-14 space-y-2 text-gray-500  p-5">
            <div>
              {" "}
              <strong className="pr-16">Name </strong>
              {data.name}
            </div>
            <div>
              {" "}
              <strong className="pr-3">Description</strong> {data.description}
            </div>
            <div>
              <strong className="pr-20"> Price</strong>
              <span className="">{data.price + " ETH"}</span>
            </div>
            <div>
              <strong className="pr-16">Owner</strong>
              <span className="text-sm">{data.owner}</span>
            </div>
            <div>
              <strong className="pr-16">Seller </strong>{" "}
              <span className="text-sm">{data.seller}</span>
            </div>
            <div>
              {currAddress != data.owner && currAddress != data.seller ? (
                <button
                  className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                  onClick={() => buyNFT(tokenId)}
                >
                  Buy this NFT
                </button>
              ) : (
                <div className="text-emerald-700 flex items-center justify-center m-4 mt-8">
                  <strong className="bg-green-100 p-4 rounded-xl ">
                    In your Collection 🎉
                  </strong>
                </div>
              )}

              <div className="text-green text-center mt-3">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
