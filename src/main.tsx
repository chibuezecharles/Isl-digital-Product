import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, useLocation } from "react-router-dom";
import queryClientConfig from "./config/queryClientConfig";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import axiosConfig from "./config/axiosConfig";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axiosConfig();
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <QueryClientProvider client={queryClientConfig}>
          <ScrollToTop />
          <App />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 5000 }}
          />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
