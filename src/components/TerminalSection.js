import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import DevTerminal from "./DevTerminal";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { profile } from "../static/profile";
import { colors } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: "2.5rem 1.5rem 3rem",
    background: colors.bg,
  },
  wrap: {
    maxWidth: 640,
    margin: "0 auto",
  },
});

function TerminalSection() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root} id="terminal">
      <SectionHeading
        eyebrow="Console"
        title="A quick peek under the hood"
        subtitle="A small terminal that types out who I am and what I work on."
      />
      <FadeIn>
        <div className={classes.wrap}>
          <DevTerminal lines={profile.terminalLines} />
        </div>
      </FadeIn>
    </Container>
  );
}

export default TerminalSection;
