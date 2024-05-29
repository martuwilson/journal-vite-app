import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
        main: "#262254",
        },
        secondary: {
        main: "#543884",
        },
        error: {
        main: red.A400,
        },
        background: {
        default: "#f5f5f5",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
        fontSize: "2rem",
        },
        h2: {
        fontSize: "1.5rem",
        },
        h3: {
        fontSize: "1.17rem",
        },
        h4: {
        fontSize: "1rem",
        },
        h5: {
        fontSize: "0.83rem",
        },
        h6: {
        fontSize: "0.67rem",
        },
    },
});