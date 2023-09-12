import React from "react";
import { AppBar, Toolbar as MuiToolbar, Typography } from "@mui/material";

const Toolbar = () => {
  return (
    <AppBar
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      position={"none"}
    >
      <MuiToolbar
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 8,
          marginLeft: 12,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            // display: { xs: 'none', md: 'flex' },
            fontFamily: "monospace",
            fontWeight: 1000,
            fontSize: 40,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
          }}
        >
          UNI
        </Typography>
        <button
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            border: "none",
            alginItems: "center",
            borderRadius: 10,
            width: 160,
            height: 40,
            marginRight: 12,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              // display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              fontSize: 16,
              color: "white",
              textDecoration: "none",
            }}
          >
            Uni Paycheck
          </Typography>
        </button>
      </MuiToolbar>
    </AppBar>
  );
};

export default React.memo(Toolbar);
