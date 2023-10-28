"use client";

import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "./useCurrencyInfo";

const Page = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {

    setConvertedAmount(amount * currencyInfo[to]);
    // if (from === to) {
    //   setConvertedAmount(amount); // If the source and target currencies are the same, no conversion needed
    // } else {
      
    // }
  };

  return (
    <>
      <div className=" sticky top-0 text-4xl font-bold text-black text-center py-5 bg-teal-400 hover:bg-teal-300">
        Currency Converter
      </div>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage:
        //     "url(https://pixabay.com/photos/stock-trading-monitor-business-1863880/)",
        // }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-black-1000 rounded-lg p-5 bg-opacity-30 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label={from}
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => {
                    setAmount(currency);
                  }}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5 text-center">
                <button
                  type="button"
                  className="my-2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label={to}
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  onAmountChange={setConvertedAmount}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
                  

    </>
  );
};

export default Page;
