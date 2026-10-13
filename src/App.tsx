import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ServicesPage from "./pages/ServicesPage";
import { privacySections, termsSections } from "./lib/legal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="privacy"
          element={
            <LegalPage
              title="Privacy Policy"
              intro="This policy describes how SPAS LLC handles information collected through this corporate website."
              sections={privacySections}
            />
          }
        />
        <Route
          path="terms"
          element={
            <LegalPage
              title="Terms of Use"
              intro="By using this website, you agree to the following terms."
              sections={termsSections}
            />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
