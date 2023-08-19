import React from "react";
import millify from "millify";

import { Loader } from "./index";
import { Link } from "react-router-dom";
import {
  useGetCryptoExchangeQuery,
  useGetCryptoMarketQuery,
} from "../services/cryptoExchangesApi";


const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery();
  const { data: marketData } = useGetCryptoMarketQuery();

  const exchangesList = data;
  const marketList = marketData;

  if (isFetching) return <Loader />;

  if (!exchangesList.value || !marketList.value) return <Loader />;

  console.log(exchangesList);
  console.log(marketList);

  return (
    <div className="flex flex-col lg:flex-row gap-16 bg-black text-white p-4 rounded w-[85vw] justify-center text-center ">
      <div className="flex items-center gap-2 lg:flex-col p-2">
        <h1 className="font-bold w-full text-xl">Exchanges</h1>
        {exchangesList.map((exchange) => (
          <div className="flex items-center gap-4">
            <img
              src={exchange.image}
              alt={exchange.name}
              className="w-12 h-12 rounded-full p-2"
            />
            <h2 className="flex-col">
              {exchange.name} ({exchange.symbol})
            </h2>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 lg:flex-col p-2">
        <h1 className="font-bold w-full text-xl">24h Vol.</h1>
        {marketList.map((market) => (
          <h2 className="text-xl mt-2 h-12">
            ${millify(market.trade_volume_24h_btc)}
          </h2>
        ))}
      </div>
      <div className="flex items-center gap-2 lg:flex-col p-2">
        <h1 className="font-bold w-full text-xl">Markets</h1>
        {marketList.map((market) => (
          <div className="flex items-center gap-4">
            <img
              src={market.image}
              alt={market.name}
              className="w-12 h-12 rounded-full p-2"
            />
            <Link to={`${market.url}`}>
              <h2 className="cursor-pointer">{market.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 lg:flex-col p-2">
        <h1 className="font-bold mb-4 text-xl">%Change</h1>
        {exchangesList.map((exchange) => (
          <h2
            className="text-xl h-14"
            style={{
              color: currency.change < 0 ? "tomato" : "limegreen",
            }}
          >
            {millify(exchange.price_change_percentage_24h)}%
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
