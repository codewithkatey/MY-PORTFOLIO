import React, { useState, useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import TypingRoles from "./TypingRoles";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    position: "relative",
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3.5rem 1.5rem 4rem",
    background: colors.gradient,
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: colors.dotGrid,
      backgroundSize: "22px 22px",
      opacity: 0.5,
      pointerEvents: "none",
    },
  },
  blob: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(59, 130, 246, 0.15)",
    filter: "blur(60px)",
    right: "-8%",
    top: "5%",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    maxWidth: layout.maxWidth,
    width: "100%",
    textAlign: "center",
  },
  greeting: {
    fontFamily: fonts.mono,
    fontSize: "0.8rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: colors.textOnNavyMuted,
    marginBottom: "1.25rem",
  },
  roleHeadline: {
    minHeight: "3.2rem",
    marginBottom: "0.75rem",
    "& p": {
      justifyContent: "center",
      fontSize: "clamp(1.5rem, 4.5vw, 2.75rem) !important",
      fontFamily: `${fonts.display} !important`,
      fontWeight: 600,
      color: `${colors.textOnNavy} !important`,
      margin: "0 !important",
    },
    "& span:first-of-type": {
      display: "none",
    },
  },
  name: {
    fontFamily: fonts.sans,
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    fontWeight: 500,
    color: colors.textOnNavyMuted,
    margin: "0 0 1.25rem",
  },
  nameStrong: {
    color: colors.textOnNavy,
    fontWeight: 600,
  },
  availability: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: fonts.sans,
    fontSize: "0.85rem",
    color: colors.textOnNavy,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 999,
    padding: "0.45rem 1rem",
    marginBottom: "1.5rem",
    backdropFilter: "blur(8px)",
  },
  availDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 10px rgba(74, 222, 128, 0.6)",
  },
  tagline: {
    fontFamily: fonts.sans,
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: colors.textOnNavyMuted,
    maxWidth: 520,
    margin: "0 auto 2rem",
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "2.25rem",
  },
  pill: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    color: colors.textOnNavy,
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 999,
    padding: "0.4rem 0.85rem",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.75rem",
    marginBottom: "2rem",
  },
  primaryBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.92rem",
    textTransform: "none",
    borderRadius: 999,
    padding: "0.7rem 1.6rem",
    color: colors.accentDark,
    background: colors.onAccent,
    boxShadow: colors.shadow,
    "&:hover": {
      background: "#f0f6ff",
    },
  },
  ghostBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.92rem",
    textTransform: "none",
    borderRadius: 999,
    padding: "0.7rem 1.6rem",
    color: colors.onAccent,
    border: "1.5px solid rgba(255,255,255,0.45)",
    background: "transparent",
    "&:hover": {
      background: "rgba(255,255,255,0.08)",
    },
  },
  meta: {
    fontFamily: fonts.mono,
    fontSize: "0.78rem",
    color: "rgba(255,255,255,0.55)",
    margin: 0,
  },
  metaLink: {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
});

function Header() {
  const classes = useStyles();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const highlightPills = [
    profile.location,
    `${profile.yearsExperience}+ yrs experience`,
    "Remote-ready",
  ];

  return (
    <section className={classes.root} id="header">
      <div className={classes.blob} aria-hidden="true" />
      <motion.div
        className={classes.inner}
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={classes.greeting}>Hello, I&apos;m</p>
        <div className={classes.roleHeadline}>
          <TypingRoles roles={profile.roles} light />
        </div>
        <p className={classes.name}>
          <span className={classes.nameStrong}>{profile.name}</span>
          {" · "}
          {profile.titleNote}
        </p>

        {profile.availability && (
          <div className={classes.availability}>
            <span className={classes.availDot} aria-hidden="true" />
            {profile.availability.status}
          </div>
        )}

        <p className={classes.tagline}>{profile.tagline}</p>

        <div className={classes.pills}>
          {highlightPills.map((pill) => (
            <span key={pill} className={classes.pill}>
              {pill}
            </span>
          ))}
        </div>

        <div className={classes.actions}>
          <Scroll to="projects" smooth offset={-24}>
            <Button className={classes.primaryBtn} disableElevation>
              See my work
            </Button>
          </Scroll>
          <Scroll to="contact" smooth offset={-24}>
            <Button className={classes.ghostBtn} disableElevation>
              Get in touch
            </Button>
          </Scroll>
          {profile.resumeUrl && (
            <Button
              className={classes.ghostBtn}
              disableElevation
              href={profile.resumeUrl}
              download={profile.resumeDownloadName}
              component="a"
            >
              Resume
            </Button>
          )}
        </div>

        <p className={classes.meta}>
          <a
            href={profile.emailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.metaLink}
          >
            {profile.email}
          </a>
          {profile.phone && (
            <>
              {" · "}
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className={classes.metaLink}
              >
                {profile.phone}
              </a>
            </>
          )}
        </p>
      </motion.div>
    </section>
  );
}

export default Header;
