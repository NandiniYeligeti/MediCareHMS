import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import LandingPage from "@/components/LandingPage";
import { useAuth, roleHome } from "@/lib/auth";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { session } = useAuth();
  const navigate = useNavigate();

  // If user is already logged in, redirect to their dashboard
  useEffect(() => {
    if (session) {
      navigate({ to: roleHome[session.role] });
    }
  }, [session, navigate]);

  return <LandingPage />;
}
