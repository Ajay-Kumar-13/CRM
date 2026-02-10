import Navbar from "./modules/components/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Dashboard from "./modules/components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Roles from "./modules/components/Roles";

const queryClient = new QueryClient(); // 👈 IMPORTANT: outside component

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roles" element={<Roles />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;