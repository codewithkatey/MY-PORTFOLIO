import React, { useMemo, useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import ImageCard from "./ImageCard";
import projects from "../static/projects";
import { profile } from "../static/profile";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { Container } from "@material-ui/core";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bg,
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    maxWidth: layout.maxWidth,
    margin: "0 auto 2rem",
    padding: "0 2rem",
  },
  filterBtn: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    textTransform: "none",
    borderRadius: 999,
    padding: "0.4rem 0.9rem",
    color: colors.textMuted,
    border: `1px solid ${colors.border}`,
    background: colors.bgElevated,
  },
  filterActive: {
    color: colors.onAccent,
    background: colors.accentDark,
    borderColor: colors.accentDark,
  },
  list: {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  cardItem: {
    display: "flex",
    width: "100%",
  },
  empty: {
    textAlign: "center",
    color: colors.textMuted,
    padding: "2rem",
  },
});

function Projects() {
  const classes = useStyles();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const set = new Set(["All"]);
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
      p.technologies.forEach((t) => set.add(t));
    });
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(
      (p) =>
        p.category === activeFilter ||
        p.technologies.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <Container maxWidth={false} className={classes.root} id="projects">
      <SectionHeading
        number="04"
        eyebrow="Projects"
        title="Things I've built"
        subtitle={profile.projectsSubtitle}
      />
      <div className={classes.filters}>
        {filters.map((filter) => (
          <Button
            key={filter}
            className={`${classes.filterBtn} ${
              activeFilter === filter ? classes.filterActive : ""
            }`}
            onClick={() => setActiveFilter(filter)}
            disableElevation
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className={classes.list}>
        {filtered.length === 0 ? (
          <p className={classes.empty}>No projects match this filter.</p>
        ) : (
          filtered.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.06} className={classes.cardItem}>
              <ImageCard project={project} layout="horizontal" />
            </FadeIn>
          ))
        )}
      </div>
    </Container>
  );
}

export default Projects;
