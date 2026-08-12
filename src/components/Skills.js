import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bgElevated,
  },
  bento: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.25rem",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 1.5rem",
    alignItems: "stretch",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      "& > *:last-child:nth-child(3n + 1)": {
        gridColumn: "auto",
      },
    },
    "& > *:last-child:nth-child(3n + 1)": {
      gridColumn: "2",
    },
  },
  bentoItem: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
  card: {
    background: colors.bgCard,
    borderRadius: colors.radiusSm,
    padding: "1.35rem 1.25rem",
    border: `1px solid ${colors.border}`,
    boxShadow: colors.shadow,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: colors.shadowHover,
    },
  },
  cardTitle: {
    fontFamily: fonts.sans,
    fontSize: "0.95rem",
    fontWeight: 700,
    color: colors.accentDark,
    margin: "0 0 0.85rem",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
    flex: 1,
    alignContent: "flex-start",
  },
  chip: {
    fontFamily: fonts.mono,
    fontSize: "0.7rem",
    color: colors.accentDark,
    background: colors.bgElevated,
    borderRadius: 999,
    padding: "0.35rem 0.7rem",
    border: `1px solid ${colors.border}`,
  },
  jobs: {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  job: {
    background: colors.bgCard,
    borderRadius: colors.radius,
    padding: "1.75rem 2rem",
    border: `1px solid ${colors.border}`,
    boxShadow: colors.shadow,
  },
  jobHeader: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "0.5rem 1rem",
    marginBottom: "1rem",
  },
  role: {
    fontFamily: fonts.display,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: colors.accentDark,
    margin: 0,
  },
  company: {
    fontFamily: fonts.sans,
    fontSize: "0.92rem",
    color: colors.textMuted,
    margin: "0.2rem 0 0",
  },
  period: {
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    color: colors.accent,
    background: colors.accentSoft,
    borderRadius: 999,
    padding: "0.35rem 0.75rem",
  },
  highlight: {
    fontFamily: fonts.sans,
    fontSize: "0.92rem",
    lineHeight: 1.65,
    color: colors.textMuted,
    margin: "0.3rem 0",
  },
  focusWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
    margin: "0.75rem 0 1rem",
  },
  focusChip: {
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: colors.onAccent,
    background: colors.accentDark,
    borderRadius: 999,
    padding: "0.3rem 0.65rem",
  },
  sectionTitle: {
    fontFamily: fonts.sans,
    fontSize: "0.82rem",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: colors.accent,
    margin: "1.25rem 0 0.5rem",
  },
  techWrap: {
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
});

function Skills() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root} id="skills">
      <SectionHeading
        number="03"
        eyebrow="Skills & experience"
        title="What I bring to a dev team"
        subtitle={profile.skillsSubtitle}
      />

      <div className={classes.bento}>
        {profile.skillCategories.map((category, index) => (
          <FadeIn
            key={category.progressName}
            delay={index * 0.05}
            className={classes.bentoItem}
          >
            <article className={classes.card}>
              <h3 className={classes.cardTitle}>{category.progressName}</h3>
              <div className={classes.chips}>
                {category.tools.map((tool) => (
                  <span key={tool} className={classes.chip}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <SectionHeading
        eyebrow="Experience"
        title="Experiences"
        subtitle={profile.experienceSubtitle}
        compactTop
      />

      <div className={classes.jobs}>
        {profile.workExperience.map((job, index) => (
          <FadeIn key={`${job.role}-${job.period}`} delay={index * 0.08}>
            <article className={classes.job}>
              <div className={classes.jobHeader}>
                <div>
                  <h3 className={classes.role}>{job.role}</h3>
                  <p className={classes.company}>{job.company}</p>
                </div>
                <span className={classes.period}>{job.period}</span>
              </div>
              {job.focus?.length > 0 && (
                <div className={classes.focusWrap}>
                  {job.focus.map((area) => (
                    <span key={area} className={classes.focusChip}>
                      {area}
                    </span>
                  ))}
                </div>
              )}
              {job.sections
                ? job.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className={classes.sectionTitle}>{section.title}</h4>
                      <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                        {section.highlights.map((item) => (
                          <li key={item} className={classes.highlight}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                : (
                  <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                    {job.highlights?.map((item) => (
                      <li key={item} className={classes.highlight}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              <div className={classes.techWrap}>
                {job.technologies.map((tech) => (
                  <span key={tech} className={classes.chip}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
