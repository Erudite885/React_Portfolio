import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Col, Row, Statistic, Typography } from "antd";

import { Cryptocurrencies, Loader, News } from "./index";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title className="home-heading">Global Crypto Stats</Title>
      <Row
        gutter={[32, 32]}
        style={{ backgroundColor: "#ccc", borderRadius: "8px" }}
      >
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container mt-12">
        <Title level={3} className="home-title">
          Top 10 <br className="block md:hidden  " />
          <span className="bg-gradient-to-r text-transparent from-gray-400 via-yellow-200 to-yellow-600 bg-clip-text ">
            {" "}
            CryptoCurrencies
          </span>{" "}
          <br className="block md:hidden" /> in the World
        </Title>
        <Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container mt-12">
        <Title level={3} className="home-title">
          Latest{" "}
          <span className="bg-gradient-to-r text-transparent from-gray-400 via-yellow-200 to-yellow-600 bg-clip-text ">
            CryptoCurrency{" "}
          </span>{" "}
          News
        </Title>
        <Title level={4} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Home;
