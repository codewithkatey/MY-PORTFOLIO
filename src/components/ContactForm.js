import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CopyButton from "./CopyButton";
import SectionHeading from "./SectionHeading";
import { profile } from "../static/profile";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: "3rem 1.5rem",
    background: colors.gradient,
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: colors.dotGrid,
      backgroundSize: "22px 22px",
      opacity: 0.35,
      pointerEvents: "none",
    },
  },
  card: {
    position: "relative",
    zIndex: 1,
    maxWidth: 520,
    margin: "0 auto",
    background: colors.bgCard,
    borderRadius: colors.radius,
    padding: "1.75rem 1.5rem",
    boxShadow: colors.shadowHover,
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.85rem",
    padding: "0.9rem 1rem",
    borderRadius: colors.radiusSm,
    background: colors.bgElevated,
    border: `1px solid ${colors.border}`,
  },
  icon: {
    color: colors.accent,
    marginTop: 2,
    fontSize: "1.35rem",
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  label: {
    fontFamily: fonts.mono,
    fontSize: "0.65rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: colors.textDim,
    marginBottom: 4,
  },
  value: {
    fontFamily: fonts.sans,
    fontSize: "0.95rem",
    color: colors.accentDark,
    textDecoration: "none",
    wordBreak: "break-word",
    "&:hover": {
      color: colors.accent,
      textDecoration: "underline",
    },
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
    marginTop: "0.35rem",
  },
});

function ContactForm() {
  const classes = useStyles();

  const contactItems = [
    {
      key: "email",
      label: "Email",
      value: profile.email,
      href: profile.emailComposeUrl,
      icon: EmailIcon,
      external: true,
      copyLabel: "Email copied!",
    },
    profile.phone && {
      key: "phone",
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: PhoneIcon,
      copyLabel: "Phone copied!",
    },
    profile.linkedin && {
      key: "linkedin",
      label: "LinkedIn",
      value: profile.linkedinHandle || profile.linkedin,
      href: profile.linkedin,
      icon: LinkedInIcon,
      external: true,
    },
  ].filter(Boolean);

  return (
    <Container maxWidth={false} className={classes.root} id="contact">
      <SectionHeading
        number="05"
        eyebrow="Contact"
        title="Let's connect"
        subtitle={profile.contactPreference}
        light
      />
      <div className={classes.card}>
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.key} className={classes.item}>
              <Icon className={classes.icon} aria-hidden="true" />
              <div className={classes.body}>
                <div className={classes.label}>{item.label}</div>
                <a
                  href={item.href}
                  className={classes.value}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.value}
                </a>
                {item.copyLabel && (
                  <div className={classes.actions}>
                    <CopyButton value={item.value} label={item.copyLabel} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default ContactForm;
