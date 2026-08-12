import React from "react";
import { makeStyles } from "@material-ui/core";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    background: colors.bgElevated,
    borderTop: `1px solid ${colors.border}`,
    borderBottom: `1px solid ${colors.border}`,
    padding: "0.75rem 0",
  },
  track: {
    display: "flex",
    width: "max-content",
    animation: "$scroll 36s linear infinite",
    "&:hover": { animationPlayState: "paused" },
  },
  item: {
    fontFamily: fonts.mono,
    fontSize: "0.76rem",
    letterSpacing: "0.05em",
    color: colors.textMuted,
    padding: "0 1.5rem",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    "&::before": {
      content: '"●"',
      color: colors.accent,
      fontSize: "0.5rem",
    },
  },
  "@keyframes scroll": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
});

function TechMarquee({ items }) {
  const classes = useStyles();
  const doubled = [...items, ...items];

  return (
    <div className={classes.root} aria-hidden="true">
      <div className={classes.track}>
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className={classes.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
