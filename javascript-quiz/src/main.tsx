import '@fontsource/inter';
// import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './style.css';

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           // Me lo pensare
//         }
//       }
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById("app")!).render(
  // <CssVarsProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  // </CssVarsProvider>
)