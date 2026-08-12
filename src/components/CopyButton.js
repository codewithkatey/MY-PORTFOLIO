import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CheckIcon from "@material-ui/icons/Check";
import { toast } from "react-toastify";
import { colors } from "../theme";

const useStyles = makeStyles({
  btn: {
    padding: 4,
    marginLeft: 6,
    color: colors.accent,
    verticalAlign: "middle",
    "&:hover": {
      background: colors.accentSoft,
    },
  },
});

function CopyButton({ value, label = "Copied to clipboard" }) {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(label);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Try selecting the text manually.");
    }
  };

  return (
    <IconButton
      className={classes.btn}
      size="small"
      onClick={handleCopy}
      aria-label={`Copy ${value}`}
    >
      {copied ? (
        <CheckIcon style={{ fontSize: 16 }} />
      ) : (
        <FileCopyOutlinedIcon style={{ fontSize: 16 }} />
      )}
    </IconButton>
  );
}

export default CopyButton;
