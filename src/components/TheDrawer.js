import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import NavigationMenu from "./NavigationMenu";

//
// todo: remove blur on the drawer component
// refactor code

export default function TheDrawer() {
  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened);

  const list = (
    <Box style={{ position: 'relative', zIndex: 500}} sx={{ width: 250, height: '100%' }} role="presentation">
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
          justifyContent: "center"
        }}
      >
        <Button onClick={toggleDrawer}>Open</Button>
      </div>
      <React.Fragment>
        <Drawer style={{position: 'relative', zIndex: 1}} anchor="left" open={opened} onClose={toggleDrawer}>
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
