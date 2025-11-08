import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Doctor from "@/pages/Doctor";
import DOCTOR2 from "@/pages/DOCTOR2";
import Hamza from "@/pages/Hamza";
import Team from "@/pages/TEAM";
import Amna from "@/pages/amna";
import Kinza from "@/pages/kinza";
import NotFound from "@/pages/not-found";

// Router component for handling all application routes
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/doctor" component={Doctor} />
      <Route path="/doctor2" component={DOCTOR2} />
      <Route path="/it-director" component={Hamza} />
      <Route path="/teams" component={Team} />
      <Route path="/amna" component={Amna} />
      <Route path="/kinza" component={Kinza} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;