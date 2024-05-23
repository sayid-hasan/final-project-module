import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CiCalendar, CiMenuBurger } from "react-icons/ci";
import { FaAd, FaHome, FaShoppingCart } from "react-icons/fa";
import {
  MdBookOnline,
  MdContactMail,
  MdOutlinePayment,
  MdShoppingBag,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const drawerWidth = 270;
const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="bg-[#D1A054] min-h-svh font-Cinzel p-5">
      <Toolbar>
        <Typography
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { xs: "block", sm: "block" },
            textAlign: "left",
          }}
        >
          <span className="uppercase font-Cinzel">
            {" "}
            <span className=" text-lg leading-[31px] md:text-2xl  font-black">
              bistroBoss
            </span>{" "}
            <br />
            <span className="text-base mt-[3px] font-bold tracking-[7px] leading-[24px]">
              Restuarent
            </span>
          </span>
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {/* userHome */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <FaHome></FaHome>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                User Home
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
        {/* reservation */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <CiCalendar></CiCalendar>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                reservation
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
        {/* payment history */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <MdOutlinePayment></MdOutlinePayment>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                Payment
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>

        {/* my cart */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/dashboard/cart"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <FaShoppingCart></FaShoppingCart>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                my cart
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
        {/* add review */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <FaAd></FaAd>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                add review
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
        {/* my booking */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <MdBookOnline></MdBookOnline>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                my booking
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* Home */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <FaHome></FaHome>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                Home
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
        {/* menu */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <CiMenuBurger></CiMenuBurger>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                menu
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
        {/* shop */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <MdShoppingBag></MdShoppingBag>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                shop
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>

        {/* contact */}
        <ListItem>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "white" } : {};
            }}
            to="/dashboard/cart"
          >
            <ListItemButton
              sx={{ display: "flex", gap: "15px", textDecoration: "uppercase" }}
            >
              <span className="text-2xl">
                <MdContactMail></MdContactMail>
              </span>
              <span className="font-Cinzel  text-base font-bold leading-[22px]">
                contact
              </span>
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex", bgcolor: "#F6F6F6", paddingBottom: "20px" }}>
      <CssBaseline />

      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, position: "absolute", top: "10px", left: "10px" }}
        >
          <CiMenuBurger />
        </IconButton>
      </Toolbar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Dashboard;
