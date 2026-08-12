import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bg,
  },
  track: {
    display: "flex",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 2rem",
    gap: 0,
    position: "relative",
    "@media (max-width: 800px)": {
      flexDirection: "column",
      gap: "1.5rem",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 28,
      left: "2rem",
      right: "2rem",
      height: 2,
      background: colors.border,
      zIndex: 0,
      "@media (max-width: 800px)": {
        display: "none",
      },
    },
  },
  step: {
    flex: 1,
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "0 0.5rem",
  },
  bubble: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: colors.bgCard,
    border: `2px solid ${colors.accent}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1rem",
    fontFamily: fonts.mono,
    fontSize: "0.8rem",
    fontWeight: 600,
    color: colors.accentDark,
    boxShadow: colors.shadow,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: "1rem",
    fontWeight: 600,
    color: colors.accentDark,
    margin: "0 0 0.5rem",
  },
  desc: {
    fontFamily: fonts.sans,
    fontSize: "0.85rem",
    lineHeight: 1.6,
    color: colors.textMuted,
    margin: 0,
  },
});

function DevWorkflow() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root} id="workflow">
      <SectionHeading
        number="02"
        eyebrow="Process"
        title="How I approach development"
        subtitle="How I usually work, from understanding the task to shipping something stable."
      />
      <div className={classes.track}>
        {profile.devWorkflow.map((item, index) => (
          <FadeIn key={item.step} delay={index * 0.1} className={classes.step}>
            <div className={classes.bubble}>{item.step}</div>
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.desc}>{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

export default DevWorkflow;
