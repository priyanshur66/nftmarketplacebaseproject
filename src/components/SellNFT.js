import Navbar from "./Navbar";
import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import Marketplace from "../Marketplace.json";
import { useLocation } from "react-router";

export default function SellNFT() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-10" id="nftForm">
        <form className="bg-white shadow-md rounded-2xl px-8 pt-4 pb-8 mb-4">
          <h3 className="text-center font-bold text-purple-500 mb-8">
            Mint your NFT
          </h3>
          <div className="mb-4">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              NFT Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              onChange={(e) =>
                updateFormParams({ ...formParams, name: e.target.value })
              }
              value={formParams.name}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="description"
            >
              NFT Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="5"
              id="description"
              type="text"
              value={formParams.description}
              onChange={(e) =>
                updateFormParams({ ...formParams, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price (in Matic)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Min 0.01 Matic"
              step="0.01"
              value={formParams.price}
              onChange={(e) =>
                updateFormParams({ ...formParams, price: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Upload Image (&lt;500 KB)
            </label>
            <input type={"file"} onChange={OnChangeFile}></input>
          </div>
          <br></br>
          <div className="text-red-500 text-center">{message}</div>
          <button
            onClick={listNFT}
            className="font-bold mt-10 w-full bg-purple-500 text-white rounded p-2 shadow-lg"
            id="list-button"
          >
            List for sale
          </button>
        </form>
      </div>
    </div>
  );
}
