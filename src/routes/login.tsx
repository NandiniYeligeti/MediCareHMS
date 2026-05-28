import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth, Role, roleHome } from "@/lib/auth";
import { Hospital, Activity, Stethoscope } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

import LoginSideImage from "../assets/login_hms.png";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { login, session } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("management");

  if (session) {
    navigate({ to: roleHome[session.role] });
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Enter username and password");
      return;
    }

    login({ username, role });

    toast.success(`Welcome, ${username}`);

    navigate({ to: roleHome[role] });
  };

  const roles: Array<{
    id: Role;
    label: string;
    icon: React.ReactNode;
    description: string;
  }> = [
    {
      id: "management",
      label: "Management",
      icon: <Hospital className="h-6 w-6" />,
      description: "Hospital Management",
    },
    {
      id: "reception",
      label: "Reception",
      icon: <Activity className="h-6 w-6" />,
      description: "Reception Desk",
    },
    {
      id: "doctor",
      label: "Doctor",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Doctor Portal",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#9093aa]" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative h-screen overflow-hidden"
        >
          <img
            src={LoginSideImage}
            alt="Login Side Visual"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Text Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold leading-tight"
            >
              
              <br />
              
              <br />
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-white/80 max-w-md"
            >
             
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT SIDE LOGIN */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center p-6"
        >
          <Card className="w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  MediCare HMS
                </h2>

                <p className="mt-2 text-slate-500">
                  Select your role and sign in
                </p>
              </div>

              <div className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold">
                    Select Role
                  </Label>

                  <div className="grid grid-cols-3 gap-3">
                    {roles.map((r) => (
                      <motion.button
                        key={r.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setRole(r.id)}
                        className={`rounded-2xl border-2 p-4 transition-all flex flex-col items-center gap-2 ${
                          role === r.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-blue-300"
                        }`}
                      >
                        <div
                          className={`${
                            role === r.id
                              ? "text-blue-600"
                              : "text-slate-600"
                          }`}
                        >
                          {r.icon}
                        </div>

                        <span className="text-xs font-semibold text-center">
                          {r.label}
                        </span>

                        <span className="text-[10px] text-slate-500 text-center">
                          {r.description}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleLogin}
                  className="space-y-4"
                >
                  <div>
                    <Label
                      htmlFor="username"
                      className="text-sm"
                    >
                      Username
                    </Label>

                    <Input
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                      className="mt-2 h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      autoFocus
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="password"
                      className="text-sm"
                    >
                      Password
                    </Label>

                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      className="mt-2 h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:opacity-90"
                  >
                    Sign In
                  </Button>
                </form>

                {/* Back Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => navigate({ to: "/" })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                >
                  Back to Landing
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}