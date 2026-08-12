import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { colors } from "../theme";

const useStyles = makeStyles({
  track: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    zIndex: 1400,
    background: colors.bgMuted,
  },
  bar: {
    height: "100%",
    background: `linear-gradient(90deg, ${colors.accentDark}, ${colors.accent})`,
    transition: "width 0.08s linear",
    boxShadow: `0 0 8px ${colors.accentGlow}`,
  },
});

function ScrollProgressBar() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={classes.track} aria-hidden="true">
      <div className={classes.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ScrollProgressBar;
