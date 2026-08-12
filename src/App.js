import React from "react";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import SideRail from "./components/SideRail";
import Header from "./components/Header";
import TechMarquee from "./components/TechMarquee";
import TerminalSection from "./components/TerminalSection";
import About from "./components/About";
import DevWorkflow from "./components/DevWorkflow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { AppToaster } from "./components/Toastr";
import { profile } from "./static/profile";
import { colors, fonts } from "./theme";
import "react-toastify/dist/ReactToastify.css";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: colors.accentDark },
    secondary: { main: colors.accent },
    background: { default: colors.bg, paper: colors.bgCard },
    text: { primary: colors.text, secondary: colors.textMuted },
  },
  typography: {
    fontFamily: fonts.sans,
  },
});

const useStyles = makeStyles({
  shell: {
    minHeight: "100vh",
    background: colors.bg,
    paddingBottom: 100,
    "@media (min-width: 901px)": {
      paddingBottom: 0,
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.shell}>
        <CssBaseline />
        <AppToaster />
        <ScrollProgressBar />
        <SideRail />
        <Header />
        <TechMarquee items={profile.techMarquee} />
        <About />
        <TerminalSection />
        <DevWorkflow />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
