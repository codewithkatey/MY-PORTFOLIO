import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  paper: {
    borderRadius: 12,
    maxWidth: 720,
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 8,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: colors.accentDark,
  },
  note: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: colors.accent,
    background: colors.accentSoft,
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: "0.55rem 0.75rem",
    marginBottom: "1rem",
    lineHeight: 1.5,
  },
  hint: {
    fontFamily: fonts.sans,
    fontSize: "0.8rem",
    color: colors.textDim,
    margin: "0 0 0.85rem",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "0.75rem",
  },
  imageWrap: {
    position: "relative",
    display: "block",
    width: "100%",
    padding: 0,
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    overflow: "hidden",
    background: colors.bgElevated,
    cursor: "zoom-in",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: colors.shadowHover,
      "& $zoomHint": { opacity: 1 },
    },
  },
  image: {
    width: "100%",
    display: "block",
    objectFit: "cover",
    aspectRatio: "9 / 16",
  },
  zoomHint: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(30, 58, 95, 0.45)",
    color: colors.onAccent,
    opacity: 0,
    transition: "opacity 0.2s ease",
    pointerEvents: "none",
  },
  zoomBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1400,
    background: "rgba(15, 26, 42, 0.92)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  },
  zoomImage: {
    maxWidth: "min(420px, 92vw)",
    maxHeight: "88vh",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    borderRadius: 12,
    boxShadow: "0 24px 64px rgba(0, 0, 0, 0.45)",
  },
  zoomClose: {
    position: "absolute",
    top: 16,
    right: 16,
    color: colors.onAccent,
    background: "rgba(255, 255, 255, 0.12)",
    "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
  },
  zoomNav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: colors.onAccent,
    background: "rgba(255, 255, 255, 0.12)",
    "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
  },
  zoomNavLeft: { left: 16 },
  zoomNavRight: { right: 16 },
  zoomCounter: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: "0.08em",
  },
});

function ProjectGalleryDialog({ open, onClose, project }) {
  const classes = useStyles();
  const [zoomIndex, setZoomIndex] = useState(null);

  const images = project?.gallery?.images ?? [];
  const confidentialNote = project?.gallery?.confidentialNote;

  useEffect(() => {
    if (!open) setZoomIndex(null);
  }, [open]);

  useEffect(() => {
    if (zoomIndex === null) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setZoomIndex(null);
      if (e.key === "ArrowLeft") {
        setZoomIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setZoomIndex((i) => (i < images.length - 1 ? i + 1 : 0));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomIndex, images.length]);

  if (!project?.gallery) return null;

  const closeZoom = () => setZoomIndex(null);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        classes={{ paper: classes.paper }}
        aria-labelledby="project-gallery-title"
      >
        <DialogTitle disableTypography className={classes.titleRow}>
          <span className={classes.title} id="project-gallery-title">
            {project.title}
          </span>
          <IconButton onClick={onClose} aria-label="Close gallery" size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {confidentialNote && (
            <p className={classes.note}>{confidentialNote}</p>
          )}
          <p className={classes.hint}>Click any image to zoom in</p>
          <div className={classes.grid}>
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                className={classes.imageWrap}
                onClick={() => setZoomIndex(index)}
                aria-label={`Zoom preview ${index + 1} of ${images.length}`}
              >
                <img
                  className={classes.image}
                  src={src}
                  alt={`${project.title} preview ${index + 1}`}
                />
                <span className={classes.zoomHint} aria-hidden="true">
                  <ZoomInIcon />
                </span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {zoomIndex !== null && (
        <div
          className={classes.zoomBackdrop}
          onClick={closeZoom}
          role="dialog"
          aria-label="Zoomed preview"
        >
          <IconButton
            className={classes.zoomClose}
            onClick={closeZoom}
            aria-label="Close zoom"
          >
            <CloseIcon />
          </IconButton>
          {images.length > 1 && (
            <>
              <IconButton
                className={`${classes.zoomNav} ${classes.zoomNavLeft}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomIndex((i) => (i > 0 ? i - 1 : images.length - 1));
                }}
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                className={`${classes.zoomNav} ${classes.zoomNavRight}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomIndex((i) => (i < images.length - 1 ? i + 1 : 0));
                }}
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}
          <img
            className={classes.zoomImage}
            src={images[zoomIndex]}
            alt={`${project.title} zoomed preview`}
            onClick={(e) => e.stopPropagation()}
          />
          <span className={classes.zoomCounter}>
            {zoomIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}

export default ProjectGalleryDialog;
