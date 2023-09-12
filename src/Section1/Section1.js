import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import WaveBg from "../assets/wave_bg.gif";
import Toolbar from "./components/Toolbar";
import PhoneInput from "./components/PhoneInput";

const Section1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column", zIndex: 10 }}>
        <Toolbar />
        <Stack
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 100,
          }}
          direction={"row"}
        >
          <Box
            style={{
              overflow: "hidden",
              display: "flex",
              flex: 1,
              margin: 12,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: 52,
                textAlign: "start",
                lineHeight: 1.2,
                marginBottom: 0,
              }}
            >
              <b>NX Wave.</b>
              The next-gen credit card for those who love rewards.
            </p>
            <p style={{ marginTop: 20, marginBottom: 48 }}>
              1% Cashback + 5x Rewards + Zero Forex Markup
            </p>
            <PhoneInput />
            <div
              style={{
                maxWidth: 320,
                marginTop: 12,
                flexDirection: "row",
                display: "flex",
              }}
            >
              <input type={"checkbox"} checked />
              <p style={{ fontSize: 10, textAlign: "start", paddingLeft: 8 }}>
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </p>
            </div>
          </Box>
          <img
            src={"https://www.uni.cards/images/nx-wave/nx_wave_hero.png"}
            style={{ height: 400, width: 400 }}
            alt={""}
          />
        </Stack>
      </Container>
      <img
        src={WaveBg}
        style={{ position: "absolute", height: "100%", width: "100%" }}
        alt={""}
      />
    </div>
  );
};

export default React.memo(Section1);
