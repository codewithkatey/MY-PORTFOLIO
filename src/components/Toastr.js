import { ToastContainer } from "react-toastify";
import { colors, fonts } from "../theme";

export function AppToaster() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      style={{ fontFamily: fonts.sans }}
      toastStyle={{
        background: colors.bgCard,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        boxShadow: colors.shadow,
      }}
    />
  );
}
