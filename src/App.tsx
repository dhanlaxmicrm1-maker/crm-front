import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";

import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";

import AddClient from "./pages/AddClient";

import VehicleInsurance from "./pages/VehicleInsurance";
import InsuranceClients from "./pages/InsuranceClients";
import MutualFundClients from "./pages/MutualFundClients";

// ✅ ADD THESE IMPORTS
import AddInsuranceClient from "./pages/AddInsuranceClient";
import AddMutualFundClient from "./pages/AddMutualFundClient";

import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen">
        <Sidebar />

        <div className="ml-72">
          <Header />

          <main className="pt-[72px] min-h-screen">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Leads */}
              <Route path="/leads" element={<Leads />} />
              <Route path="/add-lead" element={<AddLead />} />

              {/* Clients */}
              <Route path="/add-client" element={<AddClient />} />

              {/* Insurance */}
              <Route
                path="/vehicle-insurance"
                element={<VehicleInsurance />}
              />

              <Route
                path="/insurance-clients"
                element={<InsuranceClients />}
              />

              {/* ✅ ADD PAGE FOR INSURANCE CLIENT */}
              <Route
                path="/add-insurance-client"
                element={<AddInsuranceClient />}
              />

              {/* Mutual Fund */}
              <Route
                path="/mutualfund-clients"
                element={<MutualFundClients />}
              />

              {/* ✅ ADD PAGE FOR MF */}
              <Route
                path="/add-mf-client"
                element={<AddMutualFundClient />}
              />

              {/* Other Pages */}
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
