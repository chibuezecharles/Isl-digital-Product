import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./landing-page/Home";
import { Toaster } from "@/components/ui/toaster";
import DeviceSelectionPage from "./pages/DeviceSelectionPage";
import Layout from "./components/layout/Layout";
import GetStartedPage from "./pages/GetStartedPage";
import PrequalificationPage from "./pages/PrequalificationPage";
import ValidateOtpPage from "./pages/ValidateOtpPage";
import LivenessCheckPage from "./pages/LivenessCheckPage";
import BundleSelection from "./components/bundle-selection/BundleSelection";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Layout />}>
          <Route path="" element={<GetStartedPage />} />
          <Route path="select-device" element={<DeviceSelectionPage />} />
          <Route path="prequalification" element={<PrequalificationPage />} />
          <Route path="validate-otp" element={<ValidateOtpPage />} />
          <Route path="liveness-check" element={<LivenessCheckPage />} />
          <Route path="select-bundle" element={<BundleSelection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
