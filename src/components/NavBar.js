import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
  Hidden,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as Scroll } from "react-scroll";
import { colors, fonts, layout } from "../theme";

const navItems = [
  { label: "About", to: "about" },
  { label: "Process", to: "workflow" },
  { label: "Experience", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const useStyles = makeStyles({
  appBar: {
    background: "rgba(255, 255, 255, 0.92)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${colors.border}`,
    boxShadow: colors.shadow,
  },
  toolbar: {
    maxWidth: layout.maxWidth,
    width: "100%",
    margin: "0 auto",
    padding: "0.5rem 1.5rem",
    minHeight: 64,
  },
  brand: {
    fontFamily: fonts.display,
    fontWeight: 600,
    fontSize: "1.15rem",
    color: colors.accentDark,
    cursor: "pointer",
    letterSpacing: "-0.02em",
    "& span": {
      color: colors.accent,
    },
  },
  navLink: {
    fontFamily: fonts.sans,
    fontSize: "0.88rem",
    fontWeight: 500,
    color: colors.textMuted,
    marginLeft: "1.5rem",
    cursor: "pointer",
    transition: "color 0.2s ease",
    "&:hover": {
      color: colors.accent,
    },
  },
  cta: {
    fontFamily: fonts.sans,
    fontSize: "0.85rem",
    fontWeight: 600,
    color: colors.onAccent,
    background: colors.accentDark,
    borderRadius: 4,
    padding: "0.45rem 1rem",
    marginLeft: "1.25rem",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      background: colors.accent,
    },
  },
  menuIcon: {
    color: colors.accentDark,
  },
});

function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Scroll to="header" smooth={true} className={classes.brand}>
          SKC<span>.</span>
        </Scroll>

        <Hidden smDown>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
              <Scroll
                key={item.to}
                to={item.to}
                smooth={true}
                offset={-72}
                className={classes.navLink}
              >
                {item.label}
              </Scroll>
            ))}
            <Scroll to="contact" smooth={true} offset={-72}>
              <Button className={classes.cta} disableElevation>
                Hire me
              </Button>
            </Scroll>
          </div>
        </Hidden>

        <Hidden mdUp>
          <IconButton
            style={{ marginLeft: "auto" }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
            aria-label="menu"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              style: {
                background: colors.bgCard,
                color: colors.text,
                border: `1px solid ${colors.border}`,
                boxShadow: colors.shadowHover,
              },
            }}
          >
            {navItems.map((item) => (
              <Scroll key={item.to} to={item.to} smooth={true} offset={-72}>
                <MenuItem onClick={() => setAnchorEl(null)}>{item.label}</MenuItem>
              </Scroll>
            ))}
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
