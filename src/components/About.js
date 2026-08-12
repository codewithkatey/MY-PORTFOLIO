import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bg,
  },
  layout: {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "grid",
    gridTemplateColumns: "160px 1fr",
    gap: "1.75rem",
    alignItems: "start",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      gap: "1.25rem",
      justifyItems: "center",
      textAlign: "center",
    },
  },
  main: {
    minWidth: 0,
    "@media (max-width: 800px)": {
      order: 1,
    },
  },
  aside: {
    "@media (max-width: 800px)": {
      order: 0,
    },
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts.display,
    fontSize: "2.25rem",
    fontWeight: 600,
    color: colors.onAccent,
    background: colors.gradient,
    boxShadow: colors.shadowHover,
    margin: "0 auto",
  },
  avatarImg: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: colors.shadowHover,
  },
  body: {
    fontFamily: fonts.sans,
    fontSize: "1rem",
    lineHeight: 1.7,
    color: colors.textMuted,
    margin: "0 0 1.25rem",
  },
  honors: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.45rem",
    marginBottom: "1.25rem",
    "@media (max-width: 800px)": {
      justifyContent: "center",
    },
  },
  honorChip: {
    fontFamily: fonts.sans,
    fontSize: "0.8rem",
    fontWeight: 500,
    color: colors.accentDark,
    background: colors.accentSoft,
    borderRadius: 999,
    padding: "0.4rem 0.9rem",
  },
  eduBlock: {
    marginBottom: "1rem",
  },
  eduLabel: {
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: colors.accent,
    marginBottom: "0.4rem",
  },
  eduDegree: {
    fontFamily: fonts.display,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: colors.accentDark,
    margin: "0 0 0.25rem",
  },
  eduSchool: {
    fontFamily: fonts.sans,
    fontSize: "0.92rem",
    color: colors.textMuted,
    margin: 0,
  },
  cvBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    textTransform: "none",
    borderRadius: 999,
    padding: "0.65rem 1.5rem",
    color: colors.onAccent,
    background: colors.accentDark,
    "&:hover": { background: colors.accent },
  },
});

function About() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root} id="about">
      <SectionHeading
        number="01"
        eyebrow="About"
        title={profile.aboutHeading}
        subtitle={profile.aboutSubtitle}
      />
      <FadeIn>
        <div className={classes.layout}>
          <aside className={classes.aside}>
            {profile.photoUrl ? (
              <img
                className={classes.avatarImg}
                src={profile.photoUrl}
                alt={profile.name}
              />
            ) : (
              <div className={classes.avatar} aria-label={profile.name}>
                {profile.initials}
              </div>
            )}
          </aside>
          <div className={classes.main}>
            <p className={classes.body}>{profile.about}</p>
            {profile.education.honors && (
              <div className={classes.honors}>
                {profile.education.honors.map((honor) => (
                  <span key={honor} className={classes.honorChip}>
                    {honor}
                  </span>
                ))}
              </div>
            )}
            <div className={classes.eduBlock}>
              <div className={classes.eduLabel}>Education</div>
              <p className={classes.eduDegree}>{profile.education.degree}</p>
              <p className={classes.eduSchool}>
                {profile.education.school} · {profile.education.years}
              </p>
            </div>
            {profile.education.secondary && (
              <div className={classes.eduBlock}>
                <div className={classes.eduLabel}>Secondary</div>
                <p className={classes.eduDegree}>
                  {profile.education.secondary.degree}
                </p>
                <p className={classes.eduSchool}>
                  {profile.education.secondary.school} ·{" "}
                  {profile.education.secondary.years}
                </p>
              </div>
            )}
            {profile.resumeUrl && (
              <Button
                className={classes.cvBtn}
                href={profile.resumeUrl}
                download={profile.resumeDownloadName}
                component="a"
                disableElevation
              >
                Download resume
              </Button>
            )}
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

export default About;
