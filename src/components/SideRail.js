import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link as Scroll } from "react-scroll";
import { colors } from "../theme";

const navItems = [
  { label: "Home", to: "header", icon: HomeOutlinedIcon },
  { label: "About", to: "about", icon: PersonOutlineIcon },
  { label: "Process", to: "workflow", icon: CodeOutlinedIcon },
  { label: "Skills", to: "skills", icon: WorkOutlineIcon },
  { label: "Work", to: "projects", icon: FolderOutlinedIcon },
  { label: "Contact", to: "contact", icon: MailOutlineIcon },
];

const useStyles = makeStyles({
  rail: {
    position: "fixed",
    top: "50%",
    left: 20,
    transform: "translateY(-50%)",
    zIndex: 1200,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: 10,
    background: colors.bgCard,
    borderRadius: 999,
    border: `1px solid ${colors.border}`,
    boxShadow: colors.shadow,
    "@media (max-width: 900px)": {
      top: "auto",
      bottom: 16,
      left: "50%",
      transform: "translateX(-50%)",
      flexDirection: "row",
      borderRadius: 999,
      padding: "8px 12px",
      gap: 4,
      maxWidth: "calc(100vw - 2rem)",
      overflowX: "auto",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: "50%",
    cursor: "pointer",
    color: colors.textMuted,
    transition: "all 0.2s ease",
    flexShrink: 0,
    "&:hover": {
      color: colors.accent,
      background: colors.accentSoft,
    },
    "@media (max-width: 900px)": {
      width: 40,
      height: 40,
    },
  },
  itemActive: {
    color: colors.onAccent,
    background: colors.accentDark,
    boxShadow: `0 4px 14px ${colors.accentGlow}`,
    "&:hover": {
      color: colors.onAccent,
      background: colors.accent,
    },
  },
  tooltip: {
    display: "none",
  },
  brand: {
    display: "none",
  },
});

function SideRail() {
  const classes = useStyles();
  const [active, setActive] = useState("header");

  return (
    <nav className={classes.rail} aria-label="Page sections">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.to;
        return (
          <Scroll
            key={item.to}
            to={item.to}
            smooth
            offset={-24}
            spy
            duration={500}
            onSetActive={() => setActive(item.to)}
            className={`${classes.item} ${isActive ? classes.itemActive : ""}`}
            title={item.label}
          >
            <Icon style={{ fontSize: 20 }} aria-hidden />
            <span className="sr-only">{item.label}</span>
          </Scroll>
        );
      })}
    </nav>
  );
}

export default SideRail;
