import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Statistic, Typography } from "antd";

import { Cryptocurrencies, News } from "./index";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Title className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={"5"} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={"5"} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap:" value={"5"} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={"5"} />
        </Col>

        <Col span={12}>
          <Statistic title="Total Markets" value={"5"} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest CryptoCurrency News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News />
    </>
  );
};

export default Home;
