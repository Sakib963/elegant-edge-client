import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./providers/ThemeContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
