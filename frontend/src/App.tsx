import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import LandingPageSignedIn from "./pages/LandingPageSignedIn/LandingPageSignedIn";
import RegisterPage from "./pages/RegisterPage";
import { RegisterProvider } from "./provider/RegisterProvider";
import { LoginStep } from "./pages/NewSignInPage";
import SigninPage from "./pages/SignInPage";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LandingPage />
      ),
    },
    {
      path: "/signed-in",
      element: (
        <LandingPageSignedIn />
      ),
    },
    {
      path: "/admin",
      element: (
        <AdminPage />
      ),
    },
    
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );  
}