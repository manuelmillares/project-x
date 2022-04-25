import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function LeftDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/invest">Invertir</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/how-it-works">Como Funciona</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about-us">Sobre Nosotros</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default LeftDrawer;