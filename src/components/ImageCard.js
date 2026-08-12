import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import ProjectGalleryDialog from "./ProjectGalleryDialog";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  card: {
    display: "flex",
    width: "100%",
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: colors.radius,
    overflow: "hidden",
    boxShadow: colors.shadow,
    transition: "box-shadow 0.25s ease, transform 0.25s ease",
    "&:hover": {
      boxShadow: colors.shadowHover,
    },
  },
  cardVertical: {
    flexDirection: "column",
    borderTop: `4px solid ${colors.accentDark}`,
    "&:hover": { transform: "translateY(-3px)" },
  },
  cardHorizontal: {
    flexDirection: "row",
    alignItems: "stretch",
    height: 320,
    "@media (max-width: 700px)": {
      flexDirection: "column",
      height: "auto",
    },
    "&:hover": { transform: "translateX(4px)" },
  },
  category: {
    position: "absolute",
    top: 12,
    left: 12,
    fontFamily: fonts.mono,
    fontSize: "0.65rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: colors.onAccent,
    background: colors.accentDark,
    borderRadius: 999,
    padding: "0.3rem 0.65rem",
    zIndex: 1,
  },
  mediaWrap: {
    position: "relative",
    background: colors.bgElevated,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  mediaClickable: {
    cursor: "pointer",
  },
  mediaVertical: {
    height: 160,
    borderBottom: `1px solid ${colors.border}`,
  },
  mediaHorizontal: {
    width: 300,
    height: 320,
    flexShrink: 0,
    padding: "0.5rem",
    borderRight: `1px solid ${colors.border}`,
    background: `linear-gradient(180deg, ${colors.bgElevated} 0%, #e8eef5 100%)`,
    "@media (max-width: 700px)": {
      width: "100%",
      height: 240,
      padding: "0.5rem",
      borderRight: "none",
      borderBottom: `1px solid ${colors.border}`,
    },
  },
  mediaImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center center",
    display: "block",
  },
  mediaFallback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts.display,
    fontSize: "2.5rem",
    fontWeight: 600,
    color: colors.accentDark,
    opacity: 0.3,
  },
  body: {
    padding: "1.15rem 1.35rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minWidth: 0,
    overflow: "hidden",
  },
  title: {
    fontFamily: fonts.display,
    fontSize: "1.15rem",
    fontWeight: 600,
    color: colors.accentDark,
    margin: "0 0 0.35rem",
  },
  desc: {
    fontFamily: fonts.sans,
    fontSize: "0.88rem",
    lineHeight: 1.55,
    color: colors.textMuted,
    margin: "0 0 0.65rem",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  techLabel: {
    fontFamily: fonts.mono,
    fontSize: "0.62rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: colors.accent,
    margin: "0 0 0.4rem",
    fontWeight: 600,
  },
  techWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
    marginBottom: "0.5rem",
  },
  techChip: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    fontWeight: 600,
    color: colors.accentDark,
    background: colors.accentSoft,
    borderRadius: 6,
    padding: "0.35rem 0.65rem",
    border: `1px solid ${colors.borderAccent}`,
  },
  viewBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.85rem",
    textTransform: "none",
    borderRadius: 999,
    padding: "0.5rem 1.1rem",
    color: colors.onAccent,
    background: colors.accentDark,
    alignSelf: "flex-start",
    marginTop: "0.35rem",
    "&:hover": { background: colors.accent },
  },
  academicBadge: {
    display: "inline-block",
    fontFamily: fonts.mono,
    fontSize: "0.65rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: colors.accent,
    background: colors.accentSoft,
    borderRadius: 999,
    padding: "0.25rem 0.6rem",
    marginBottom: "0.5rem",
  },
  cardSoon: {
    borderStyle: "dashed",
    opacity: 0.9,
  },
  soonBadge: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    color: colors.textMuted,
    border: `1px solid ${colors.border}`,
    borderRadius: 999,
    padding: "0.4rem 0.75rem",
    alignSelf: "flex-start",
    marginTop: "0.35rem",
  },
});

export default function ImageCard({ project, layout = "vertical" }) {
  const classes = useStyles();
  const initial = project.title.charAt(0);
  const [imgError, setImgError] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const showImage = project.imageUrl && !imgError;
  const isSoon = project.comingSoon;
  const isHorizontal = layout === "horizontal";
  const hasGallery = Boolean(project.gallery?.images?.length);
  const openGallery = () => setGalleryOpen(true);

  return (
    <>
    <article
      className={`${classes.card} ${
        isHorizontal ? classes.cardHorizontal : classes.cardVertical
      } ${isSoon ? classes.cardSoon : ""}`}
    >
      <div
        className={`${classes.mediaWrap} ${
          isHorizontal ? classes.mediaHorizontal : classes.mediaVertical
        } ${hasGallery ? classes.mediaClickable : ""}`}
        onClick={hasGallery ? openGallery : undefined}
        onKeyDown={
          hasGallery
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openGallery();
                }
              }
            : undefined
        }
        role={hasGallery ? "button" : undefined}
        tabIndex={hasGallery ? 0 : undefined}
        aria-label={hasGallery ? `View ${project.title} previews` : undefined}
      >
        {project.category && (
          <span className={classes.category}>{project.category}</span>
        )}
        {isSoon ? (
          <div className={classes.mediaFallback}>…</div>
        ) : showImage ? (
          <img
            className={classes.mediaImg}
            src={project.imageUrl}
            alt={project.title}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={classes.mediaFallback} aria-hidden>
            {initial}
          </div>
        )}
      </div>
      <div className={classes.body}>
        {project.academic && (
          <span className={classes.academicBadge}>{project.academic}</span>
        )}
        <h3 className={classes.title}>{project.title}</h3>
        <p className={classes.desc}>{project.desc}</p>
        {project.technologies?.length > 0 && (
          <div>
            <div className={classes.techLabel}>Tech stack</div>
            <div className={classes.techWrap}>
              {project.technologies.map((tech) => (
                <span key={tech} className={classes.techChip}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {isSoon ? (
          <span className={classes.soonBadge}>In progress</span>
        ) : hasGallery ? (
          <Button
            className={classes.viewBtn}
            onClick={openGallery}
            disableElevation
            endIcon={<PhotoLibraryOutlinedIcon style={{ fontSize: 16 }} />}
          >
            {project.linkLabel || "View previews"}
          </Button>
        ) : (
          project.link && (
            <Button
              className={classes.viewBtn}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              disableElevation
              endIcon={<OpenInNewIcon style={{ fontSize: 16 }} />}
            >
              {project.linkLabel || "View project"}
            </Button>
          )
        )}
      </div>
    </article>
    {hasGallery && (
      <ProjectGalleryDialog
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        project={project}
      />
    )}
    </>
  );
}
