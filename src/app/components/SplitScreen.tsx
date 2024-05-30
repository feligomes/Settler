"use client";

import React from "react";
import { Row, Col, Grid } from "antd";
import Title from "antd/es/typography/Title";
import PartyA from "./PartyA";
import PartyB from "./PartyB";

const { useBreakpoint } = Grid;

const SplitScreen = () => {
  const screens = useBreakpoint();
  const isLargeScreen = screens.md;

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    minHeight: "800px",
  };

  return (
    <Row
      style={{ height: "100vh", overflow: isLargeScreen ? "hidden" : "auto" }}
    >
      <Col
        xs={24}
        md={12}
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <Title style={{ margin: "10px" }} level={4}>
          Party A View
        </Title>
        <div style={divStyle}>
          <PartyA />
        </div>
      </Col>
      <Col
        xs={24}
        md={12}
        style={{
          backgroundColor: "#e0e0e0",
        }}
      >
        <Title style={{ margin: "10px" }} level={4}>
          Party B View
        </Title>
        <div style={divStyle}>
          <PartyB />
        </div>
      </Col>
    </Row>
  );
};

export default SplitScreen;
