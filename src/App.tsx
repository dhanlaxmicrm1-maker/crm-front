import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

// Pages
import Dashboard from "./pages/Dashboard";

import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";

import AddClient from "./pages/AddClient";

import VehicleInsurance from "./pages/VehicleInsurance";
import InsuranceClients from "./pages/InsuranceClients";
import MutualFundClients from "./pages/MutualFundClients";

// ✅ Add Pages (IMPORTANT)
import AddInsuranceClient from "./pages/AddInsuranceClient";
import AddMutualFundClient from "./pages/AddMutualFundClient";

import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen flex">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-72">
          
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="pt-[72px] p-4 min-h-screen">
            <Routes>

              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Leads */}
              <Route path="/leads" element={<Leads />} />
              <Route path="/add-lead" element={<AddLead />} />

              {/* Clients */}
              <Route path="/add-client" element={<AddClient />} />

              {/* Insurance */}
              <Route path="/vehicle-insurance" element={<VehicleInsurance />} />

              <Route
                path="/insurance-clients"
                element={<InsuranceClients />}
              />

              {/* ✅ Add Insurance Client Page */}
              <Route
                path="/add-insurance-client"
                element={<AddInsuranceClient />}
              />

              {/* Mutual Fund */}
              <Route
                path="/mutualfund-clients"
                element={<MutualFundClients />}
              />

              {/* ✅ Add Mutual Fund Client Page */}
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
