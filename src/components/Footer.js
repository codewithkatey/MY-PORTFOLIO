import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { profile } from "../static/profile";
import { colors, fonts } from "../theme";

const useStyle = makeStyles({
  root: {
    background: colors.bgElevated,
    borderTop: `1px solid ${colors.border}`,
    padding: "2rem",
    textAlign: "center",
  },
  copy: {
    fontFamily: fonts.sans,
    fontSize: "0.85rem",
    color: colors.textDim,
    margin: "0 0 0.5rem",
  },
  builtWith: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    color: colors.textDim,
    margin: "0 0 1rem",
    letterSpacing: "0.02em",
  },
  socMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  githubLink: {
    fontFamily: fonts.mono,
    fontSize: "0.8rem",
    color: colors.textMuted,
    textDecoration: "none",
    "&:hover": {
      color: colors.accent,
      textDecoration: "underline",
    },
  },
  iconBtn: {
    color: colors.textMuted,
    "&:hover": {
      color: colors.accent,
      background: colors.accentSoft,
    },
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <Container maxWidth={false} className={classes.root}>
      <p className={classes.copy}>
        © {new Date().getFullYear()} {profile.name}
      </p>
      {profile.builtWithNote && (
        <p className={classes.builtWith}>{profile.builtWithNote}</p>
      )}
      <div className={classes.socMedia}>
        <Button
          className={classes.iconBtn}
          href={profile.emailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          component="a"
          aria-label="email"
        >
          <EmailIcon />
        </Button>
        {profile.github && (
          <>
            <Button
              className={classes.iconBtn}
              target="_blank"
              rel="noopener noreferrer"
              href={profile.github}
              component="a"
              aria-label="github"
            >
              <GitHubIcon />
            </Button>
            <a
              className={classes.githubLink}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/{profile.githubHandle}
            </a>
          </>
        )}
        {profile.linkedin && (
          <Button
            className={classes.iconBtn}
            target="_blank"
            rel="noopener noreferrer"
            href={profile.linkedin}
            component="a"
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Footer;
