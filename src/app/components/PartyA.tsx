"use client";

import { Button, Card, Flex, Grid, InputNumber, Modal, Typography } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/store";
import { setOffer } from "@/app/store/slices/offersSlice";
import offerStatus from "@/app/constants/offerStatus";
import testImage from "../../../public/testImage.webp";
import Image from "next/image";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const PartyA: React.FC = () => {
  const screens = useBreakpoint();
  const isLargeScreen = screens.md;
  const [amount, setAmount] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const { offer } = useAppSelector((state) => state.offers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialOfferStatusRef = useRef<offerStatus | undefined>(undefined);
  const statusRef = useRef<string>("");

  useEffect(() => {
    if (initialOfferStatusRef.current === undefined && offer) {
      initialOfferStatusRef.current = offer.status;
      statusRef.current = getStatusMessage(offer.status);
    }
  }, [offer]);

  const getStatusMessage = (status: offerStatus | undefined) => {
    const statusMessages = {
      [offerStatus.UNANSWERED]: "Waiting for response to the offer of",
      [offerStatus.AGREED]: "Party B agreed to the offer of",
      [offerStatus.DISAGREED]: "Party B did not agree to the offer of",
    };
    return status ? statusMessages[status] : "";
  };

  const handleSubmit = () => {
    if (initialOfferStatusRef.current !== offer?.status) {
      showModal();
    } else {
      statusRef.current = "Waiting for response to the offer of";
      initialOfferStatusRef.current = offerStatus.UNANSWERED;
      dispatch(
        setOffer({
          value: amount,
          status: offerStatus.UNANSWERED,
        })
      );
    }
  };

  const statusMessage = `${statusRef.current} ${offer?.value || 0}$`;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (offer) {
      initialOfferStatusRef.current = offer.status;
      statusRef.current = getStatusMessage(offer.status);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        style={{ width: isLargeScreen ? 400 : "75%" }}
        cover={<Image alt="example" src={testImage} layout="responsive" />}
      >
        <Flex gap="large" vertical>
          {initialOfferStatusRef.current !== offerStatus.AGREED && (
            <>
              <InputNumber
                addonBefore={"Offer for image:"}
                addonAfter="$"
                aria-label="Offer Amount"
                value={amount || 0}
                min={0}
                onChange={setAmount}
              />
              <Button onClick={handleSubmit} type="primary">
                Offer
              </Button>
            </>
          )}
          {offer && <Text>{statusMessage}</Text>}
        </Flex>
      </Card>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Refresh"
      >
        There was an update from Party B since your last refresh
      </Modal>
    </>
  );
};

export default PartyA;
