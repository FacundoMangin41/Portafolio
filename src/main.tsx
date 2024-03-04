import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      <CssBaseline />
      <SnackbarProvider>
        <AppRouter />
      </SnackbarProvider>
    </BrowserRouter>
  </RecoilRoot>
</React.StrictMode>
)
