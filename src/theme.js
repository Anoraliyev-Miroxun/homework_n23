import { createTheme } from "@mui/material";

const theme=createTheme({
    palette:{
        primary:{main:"#3F7C65"}
        ,secondary:{main:"#E53935"},
        background:{default:"#f8f9fa"}
    },
    typography:{
        fontFamily:"'Inter',sans-serif"
    }
})

export default theme;