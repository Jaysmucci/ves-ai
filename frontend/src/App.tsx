import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

function App(){
  return (
    <AppLayout>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </AppLayout>
  );
}

export default App;