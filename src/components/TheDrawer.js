import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";

import NavigationMenu from "./NavigationMenu";
// todo: remove blur on the drawer component
// refactor code

export default function TheDrawer() {
  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened);

  const list = (
    <Box
      style={{
        position: "relative",
        // zIndex: 1,
        // border: "5px solid black",
        width: "fit-content",
        height: "100%",
        backgroundColor: "pink",
      }}
      role="presentation"
    >
      {/* <List>hello</List>
      <Divider />
      <List>world</List> */}
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
      <React.Fragment>
        <Drawer
          style={{
            boxShadow: 'none',
            position: "relative",
            // zIndex: 0,
          }}
          open={opened}
          onClose={toggleDrawer}
          hideBackdrop={true}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
