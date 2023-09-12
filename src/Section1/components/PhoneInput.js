import React from "react";
import { Button, Input, InputBase, Typography } from "@mui/material";

const PhoneInput = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        border: "none",
        borderRadius: 10,
        width: 320,
        marginRight: 12,
        display: "flex",
      }}
    >
      <InputBase
        placeholder={"Enter Phone Number"}
        style={{
          paddingLeft: 12,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          flexGrow: 1,
        }}
      />
      <div
        style={{
          backgroundColor: "#FDEF78",
          border: "none",
          borderRadius: 10,
          marginTop: 4,
          marginBottom: 4,
          marginRight: 8,
          flexGrow: 1,
          flexShrink: 0,
          display: "flex",
        }}
      >
        <p
          style={{
            color: "black",
            margin: 0,
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: 14,
            alignSelf: "center",
          }}
        >
          Apply Now
        </p>
      </div>
    </div>
  );
};

export default React.memo(PhoneInput);
