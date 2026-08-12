import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  root: {
    fontFamily: fonts.mono,
    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
    color: (props) => (props.light ? "#f0f6ff" : colors.accent),
    margin: "0 0 1rem",
    minHeight: "1.6em",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.15rem",
  },
  prefix: {
    color: (props) =>
      props.light ? "rgba(255,255,255,0.5)" : colors.textMuted,
    marginRight: "0.35rem",
  },
  cursor: {
    display: "inline-block",
    width: 2,
    height: "1.1em",
    background: (props) => (props.light ? "#f0f6ff" : colors.accent),
    marginLeft: 2,
    animation: "$blink 1s step-end infinite",
  },
  "@keyframes blink": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0 },
  },
});

function TypingRoles({ roles, typingSpeed = 70, pauseMs = 2200, light = false }) {
  const classes = useStyles({ light });
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, deleting ? typingSpeed / 2 : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles, typingSpeed, pauseMs]);

  return (
    <p className={classes.root} aria-live="polite">
      <span className={classes.prefix}>&gt;</span>
      <span>{text}</span>
      <span className={classes.cursor} aria-hidden="true" />
    </p>
  );
}

export default TypingRoles;
