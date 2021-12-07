import { createTheme, Theme } from "@mui/material/styles";

const customTheme = createTheme({
// insert here deviations to the mui default theme or define a whole new theme
// default theme: https://mui.com/customization/default-theme/
// Example: 
//  palette: {
//    primary:{
//      main: green[500]
//    },
//    secondary:{
//     main: pink[500]
//   } 
//  }
});

export const CustomTheme = {
  getTheme: () : Theme => {
    return customTheme;
  }
}