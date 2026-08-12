import React from "react";
import { makeStyles } from "@material-ui/core";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: layout.maxWidth,
    margin: "0 auto 1.75rem",
    padding: "0 1.5rem",
    textAlign: "center",
  },
  rootCompactTop: {
    marginTop: "0.5rem",
    marginBottom: "1.25rem",
  },
  number: {
    fontFamily: fonts.display,
    fontSize: "clamp(2rem, 5vw, 2.75rem)",
    fontWeight: 600,
    lineHeight: 1,
    color: colors.accentSoft,
    marginBottom: "0.15rem",
    userSelect: "none",
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: "0.7rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: colors.accent,
    marginBottom: "0.4rem",
  },
  title: {
    fontFamily: fonts.display,
    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
    fontWeight: 600,
    color: colors.accentDark,
    margin: "0 auto 0.5rem",
    letterSpacing: "-0.02em",
    lineHeight: 1.25,
    maxWidth: 520,
  },
  rule: {
    width: 40,
    height: 3,
    background: colors.accent,
    borderRadius: 999,
    margin: "0 auto 0.65rem",
  },
  subtitle: {
    fontFamily: fonts.sans,
    fontSize: "0.98rem",
    color: colors.textMuted,
    maxWidth: 540,
    margin: "0 auto",
    lineHeight: 1.6,
  },
});

function SectionHeading({ number, eyebrow, title, subtitle, light, compactTop }) {
  const classes = useStyles();
  const lightStyle = light ? { color: colors.textOnNavy } : undefined;
  const mutedStyle = light ? { color: colors.textOnNavyMuted } : undefined;

  return (
    <header
      className={`${classes.root} ${compactTop ? classes.rootCompactTop : ""}`}
    >
      {number && (
        <div className={classes.number} aria-hidden="true">
          {number}
        </div>
      )}
      {eyebrow && <div className={classes.eyebrow}>{eyebrow}</div>}
      <h2 className={classes.title} style={lightStyle}>
        {title}
      </h2>
      <div className={classes.rule} />
      {subtitle && (
        <p className={classes.subtitle} style={mutedStyle}>
          {subtitle}
        </p>
      )}
    </header>
  );
}

export default SectionHeading;
