import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import NavigationMenu from "./NavigationMenu";

export default function TheDrawer() {
  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened);
  const [zIndex, setZindex] = useState(0);

  const list = (
    <Box
      style={{
        position: "relative",
        zIndex: zIndex + 1,
        width: "fit-content",
        height: "100%",
      }}
      role="presentation"
    >
      <NavigationMenu />
    </Box>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={toggleDrawer}>Open</Button>
      </div>
      <Drawer
        style={{
          boxShadow: "none",
          position: "relative",
          zIndex: zIndex,
        }}
        open={opened}
        onClose={toggleDrawer}
        hideBackdrop={true}
      >
        {list}
        <button>Help</button>
      </Drawer>
    </div>
  );
}
