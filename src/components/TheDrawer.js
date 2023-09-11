import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import NavigationMenu from "./NavigationMenu";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import "../css/drawer.css";

export default function TheDrawer() {
  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened((prev) => !prev);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          backgroundColor: "gray",
          padding: "5px",
        }}
      >
        <DensityMediumIcon id="densityMediumIcon" onClick={toggleDrawer} />
      </nav>

      <Drawer
        style={{
          position: "relative",
          zIndex: index,
        }}
        open={opened}
        hideBackdrop={true}
      >
        <Box
          style={{
            position: "relative",
            zIndex: index + 1,
            width: "fit-content",
            height: "100%",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-between",
          }}
          role="presentation"
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "80px",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <h1>View Comparison Tool</h1>
              <CloseIcon id="closeIcon" onClick={toggleDrawer} />
            </div>
            <hr></hr>
            <NavigationMenu />
          </div>
          <div>
            <hr></hr>
            <div style={{padding: '10px'}}>

            <p>© 2023 eTax, Inc.</p>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
