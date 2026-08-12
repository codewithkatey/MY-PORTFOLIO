import { TextField, withStyles } from "@material-ui/core";
import { colors } from "../theme";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: colors.accent,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colors.border,
      },
      "&:hover fieldset": {
        borderColor: colors.borderAccent,
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.accent,
      },
    },
  },
})(TextField);

export default CssTextField;
