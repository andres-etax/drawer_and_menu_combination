import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import NavigationMenu from "./NavigationMenu";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

export default function TheDrawer() {
  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened((prev) => !prev);
  const [zIndex, setZindex] = useState(0);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          backgroundColor: "gray",
        }}
      >
        <DensityMediumIcon id="densityMediumIcon" onClick={toggleDrawer} />
      </nav>

      <Drawer
        style={{
          position: "relative",
          zIndex: zIndex,
        }}
        open={opened}
        hideBackdrop={true}
      >
        <Box
          style={{
            position: "relative",
            zIndex: zIndex + 1,
            width: "fit-content",
          }}
          role="presentation"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <h1>eTaxCentral</h1>
            <CloseIcon id="closeIcon" onClick={toggleDrawer} />
          </div>
          <NavigationMenu />
        </Box>
      </Drawer>
    </div>
  );
}
