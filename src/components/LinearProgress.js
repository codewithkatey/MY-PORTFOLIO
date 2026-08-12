import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useInView from "../hook/useInView";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: layout.maxWidth,
    margin: "0 auto 2rem",
    padding: "0 1.5rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "0.75rem",
  },
  name: {
    fontFamily: fonts.sans,
    fontSize: "1rem",
    fontWeight: 600,
    color: colors.text,
    margin: 0,
  },
  value: {
    fontFamily: fonts.mono,
    fontSize: "0.8rem",
    color: colors.accent,
  },
  track: {
    height: 8,
    borderRadius: 2,
    background: colors.bgMuted,
    overflow: "hidden",
    marginBottom: "1rem",
  },
  bar: {
    height: "100%",
    borderRadius: 2,
    background: colors.accentDark,
    transition: "width 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  chip: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    color: colors.accentDark,
    background: colors.bgElevated,
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: "0.35rem 0.65rem",
  },
});

function SkillBlock({ tools, progressName, progressValue }) {
  const classes = useStyles();
  const [ref, inView] = useInView({ once: true, threshold: 0.35 });
  const width = inView ? progressValue : 0;

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.header}>
        <h3 className={classes.name}>{progressName}</h3>
        <span className={classes.value}>{inView ? `${progressValue}%` : "0%"}</span>
      </div>
      <div className={classes.track}>
        <div className={classes.bar} style={{ width: `${width}%` }} />
      </div>
      <div className={classes.chips}>
        {tools.map((tool) => (
          <span key={tool} className={classes.chip}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillBlock;
