import React from 'react'
import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'

const SampleNFT = () => {

      const setNFT = () => {
        setGlobalState('nft', nft)
        setGlobalState('showModal', 'scale-100')
      }

  return (

    <div className="bg-[#151c25] gradient-bg-artworks">
    <div className="w-4/5 py-10 mx-auto">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient"> Recently Sold </h4>


    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"
      aalt="NFT Art"
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">NFT 1</h4>
    <p className="text-gray-400 text-xs my-1">Lorem ipsum</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">5 ETH</p>
      </div>

      
    </div>
  </div>
  <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://pbs.twimg.com/media/E9fkJnCXEAUr4nr?format=jpg&name=small"
      aalt="NFT Art"
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">NFT 2</h4>
    <p className="text-gray-400 text-xs my-1">Lorem ipsum</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">5 ETH</p>
      </div>

      
    </div>
  </div>
  <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://nftevening.com/wp-content/uploads/2022/01/Doodle-559.png"
      aalt="NFT Art"
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">NFT 3</h4>
    <p className="text-gray-400 text-xs my-1">Lorem ipsum</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">5 ETH</p>
      </div>

      
    </div>
  </div>
  <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://lh3.googleusercontent.com/phybShUAAdz1w3Nj2UF1cwFBbYr4-0uaDiw8mqDDtCA6g8l4GD6OdKN6F-_lc03zYx9wOa1iQPrVydOUxNJYA_lR1WqLW2iHKe_AQw=s200"
      aalt="NFT Art"
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">NFT 4</h4>
    <p className="text-gray-400 text-xs my-1">Lorem ipsum</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">5 ETH</p>
      </div>

      
    </div>
  </div>
  </div>

  
  </div>
  </div>
  
  )
}

const Card = ({ nft }) => {
    const setNFT = () => {
      setGlobalState('nft', nft)
      setGlobalState('showModal', 'scale-100')
    }
  
    return (
      <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        <img
          src={nft.metadataURI}
          alt={nft.title}
          className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
        />
        <h4 className="text-white font-semibold">{nft.title}</h4>
        <p className="text-gray-400 text-xs my-1">{nft.description}</p>
        <div className="flex justify-between items-center mt-3 text-white">
          <div className="flex flex-col">
            <small className="text-xs">Current Price</small>
            <p className="text-sm font-semibold">{nft.cost} ETH</p>
          </div>
  
          <button
            className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
              hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
            onClick={setNFT}
          >
            View Details
          </button>
        </div>
      </div>
    )
  }

export default SampleNFT