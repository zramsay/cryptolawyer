"use client"
import React, { useState } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import AirtableModal from "@/components/AirtableModal"; // Import AirtableModal

// Import your SVG images
import bitcoinLogo from "../../public/img/brands/bitcoin.svg";
import ethereumLogo from "../../public/img/brands/ethereum.svg";
import avalancheLogo from "../../public/img/brands/avalanche.svg";
import cardanoLogo from "../../public/img/brands/cardano.svg";
import solanaLogo from "../../public/img/brands/solana.svg";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container className="flex flex-wrap justify-center items-center text-center">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              cryptolawyer.net
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Redefining Crypto-Legal Finance with Law, Tech, & Gamification
            </p>

            <div className="flex flex-col items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {/* Replace anchor link with button to toggle modal */}
              <button
                onClick={toggleModal}
                className="px-8 py-4 text-lg font-medium text-center text-black bg-yellow-500 rounded-md"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            The <span className="text-yellow-500">web3-native</span> legal finance network
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={bitcoinLogo} alt="Bitcoin Logo" width={50} height={50} />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image src={ethereumLogo} alt="Ethereum Logo" width={50} height={50} />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image src={avalancheLogo} alt="Avalanche Logo" width={50} height={50} />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <Image src={cardanoLogo} alt="Cardano Logo" width={50} height={50} />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={solanaLogo} alt="Solana Logo" width={50} height={50} />
            </div>
          </div>
        </div>
      </Container>

      {/* Render the AirtableModal and pass the showModal state */}
      {showModal && <AirtableModal isOpen={showModal} toggleModal={toggleModal} />}
    </>
  );
};
