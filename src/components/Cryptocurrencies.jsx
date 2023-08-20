import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { Card, Col, Input, Row, Typography } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Loader } from "./index";

const { Text, Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            placeholder="Search Cryptocurrency"
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-cointainer">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                hoverable
                style={{
                  backgroundColor: "black",
                  boxShadow: " 0 3px 5px #bd8b00",
                }}
              >
                <div className="news-image-container">
                  <Title
                    style={{ color: "white" }}
                    level={4}
                  >{`${currency.rank}. ${currency.name}`}</Title>
                  <img className="crypto-image" src={currency.iconUrl} />
                </div>
                <p style={{ color: "white" }}>
                  Price: {millify(currency.price)}
                </p>
                <p style={{ color: "white" }}>
                  Market Cap: {millify(currency.marketCap)}
                </p>

                <div className="news-image-container">
                  <p style={{ color: "white" }}>Daily Change:</p>
                  <span
                    style={{
                      color: currency.change < 0 ? "tomato" : "limegreen",
                    }}
                  >
                    {currency.change}%
                  </span>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
