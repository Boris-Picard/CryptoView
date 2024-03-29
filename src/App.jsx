import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detailed from "./pages/Detailed.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Sidebar from "./components/Sidebar";
import { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<UserCircle size={20} />}
            text="Portfolio"
            to="/Portfolio"
          />
          <SidebarItem
            to="/"
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            alert
          />
          <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
          <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
          <SidebarItem icon={<Package size={20} />} text="Orders" />
          <SidebarItem icon={<Receipt size={20} />} text="Billings" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/:id" element={<Detailed />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
