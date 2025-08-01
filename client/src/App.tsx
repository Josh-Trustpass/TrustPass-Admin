import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

import EmployeeVerification from "@/pages/employee-verification";
import AdminDashboard from "@/pages/admin-dashboard";
import Login from "@/pages/login";

function Router() {
  const isAuthenticated = true; // Fake auth for now

  return (
    <Switch>
      {/* Public verification route */}
      <Route path="/verify/:employeeId" component={EmployeeVerification} />

      {/* Login route */}
      <Route path="/login" component={Login} />

      {/* Admin Dashboard (requires fake auth) */}
      <Route path="/" component={() => isAuthenticated ? <AdminDashboard /> : <Login />} />
      <Route path="/admin" component={() => isAuthenticated ? <AdminDashboard /> : <Login />} />

      {/* Catch-all route */}
      <Route component={Login} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
