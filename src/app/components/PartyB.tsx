"use client";

import { Button, Card, Flex } from "antd";
import React from "react";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "@/app/hooks/store";
import { setOffer } from "@/app/store/slices/offersSlice";
import offerStatus from "@/app/constants/offerStatus";
import testImage from "../../../public/testImage.webp";
import Image from "next/image";

const { Text } = Typography;

const PartyB: React.FC = () => {
  const { offer } = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const handleDisagree = () => {
    dispatch(
      setOffer({
        value: offer?.value,
        status: offerStatus.DISAGREED,
      })
    );
  };

  const handleAgree = () => {
    dispatch(
      setOffer({
        value: offer?.value,
        status: offerStatus.AGREED,
      })
    );
  };

  let status = "";
  switch (offer?.status) {
    case offerStatus.UNANSWERED:
      status = "Received an offer from Party A of";
      break;
    case offerStatus.DISAGREED:
      status = "Disagreed to the offer of Party A of";
      break;
    case offerStatus.AGREED:
      status = "Agreed to the offer of Party A of";
      break;
    default:
      break;
  }

  const statusMessage = status + " " + offer?.value + "$";

  return (
    <Card
      style={{ width: 380 }}
      cover={<Image alt="example" src={testImage} layout="responsive" />}
    >
      <Flex gap={"large"} vertical>
        {!offer ? (
          <Text>No offers received</Text>
        ) : (
          <Text>{statusMessage}</Text>
        )}
        {offer?.status !== offerStatus.AGREED && (
          <Flex gap={"small"}>
            <Button
              onClick={handleAgree}
              type="primary"
              style={{ width: "100%" }}
            >
              Agree
            </Button>
            <Button
              danger
              onClick={handleDisagree}
              type="primary"
              style={{ width: "100%" }}
            >
              Disagree
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
};

export default PartyB;
