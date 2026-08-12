import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  root: {
    background: "#0f1c2e",
    borderRadius: 6,
    overflow: "hidden",
    boxShadow: colors.shadowHover,
    border: `1px solid ${colors.accentDark}`,
    fontFamily: fonts.mono,
    fontSize: "0.78rem",
    lineHeight: 1.65,
  },
  chrome: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "0.65rem 0.85rem",
    background: "#162436",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  title: {
    marginLeft: "auto",
    fontSize: "0.68rem",
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.04em",
  },
  body: {
    padding: "1rem 1.1rem 1.15rem",
    minHeight: 220,
    color: "#c8d6e5",
  },
  line: {
    margin: "0.15rem 0",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
  prompt: {
    color: "#5dade2",
  },
  command: {
    color: "#f8f9fa",
  },
  output: {
    color: "#a8b8c8",
    paddingLeft: "0.5rem",
  },
  success: {
    color: "#6ee7b7",
  },
  accent: {
    color: "#93c5fd",
  },
  cursor: {
    display: "inline-block",
    width: 7,
    height: "1em",
    background: "#93c5fd",
    marginLeft: 2,
    verticalAlign: "text-bottom",
    animation: "$blink 1s step-end infinite",
  },
  "@keyframes blink": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0 },
  },
});

function DevTerminal({ lines, title = "kate@portfolio ~ zsh" }) {
  const classes = useStyles();
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setVisibleCount(0);
    setDone(false);
  }, [lines]);

  useEffect(() => {
    if (visibleCount >= lines.length) {
      setDone(true);
      return undefined;
    }

    const delay = lines[visibleCount].type === "output" ? 120 : 380;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, lines]);

  return (
    <div className={classes.root}>
      <div className={classes.chrome}>
        <span className={classes.dot} style={{ background: "#ff5f57" }} />
        <span className={classes.dot} style={{ background: "#febc2e" }} />
        <span className={classes.dot} style={{ background: "#28c840" }} />
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.body}>
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={`${line.text}-${i}`} className={classes.line}>
            {line.type === "command" ? (
              <>
                <span className={classes.prompt}>$ </span>
                <span className={classes.command}>{line.text}</span>
              </>
            ) : (
              <span
                className={
                  line.variant === "success"
                    ? classes.success
                    : line.variant === "accent"
                    ? classes.accent
                    : classes.output
                }
              >
                {line.text}
              </span>
            )}
          </div>
        ))}
        {done && <span className={classes.cursor} aria-hidden="true" />}
      </div>
    </div>
  );
}

export default DevTerminal;
