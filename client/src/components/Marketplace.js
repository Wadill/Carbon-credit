import React, { useEffect, useState } from 'react';
import { getCarbonCreditContract } from '../contractKit';

const Marketplace = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    loadCredits();
  }, []);

  const loadCredits = async () => {
    const carbonCreditContract = getCarbonCreditContract();

    // Code to interact with smart contract
    // The logic depends on the specific functions in your smart contract
    // In this example, we assume you have a function `getAvailableCredits`

    const credits = await carbonCreditContract.methods.getAvailableCredits().call();
    setCredits(credits);
  }

  return (
    <div>
      {credits.map((credit, index) => (
        <div key={index}>
          <div>Credit ID: {credit.id}</div>
          <div>Emission Amount: {credit.emissionAmount}</div>
          <div>Owner: {credit.owner}</div>
        </div>
      ))}
    </div>
  );
};

export default Marketplace;