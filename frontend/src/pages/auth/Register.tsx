"use client";

import { useState } from "react";
import { toast } from "sonner";
import { GoogleComponent } from "@/components/shared/GoogleComponent";

export default function RegisterPage() {
  const [loading, setLoading] = useState<"google" | null>(null);

  const handleGoogle = () => {
    setLoading("google");

    setTimeout(() => {
      setLoading(null);

      toast("AI engine still in development", {
        description: "Registration is not available yet. Check back soon.",
        duration: 4000,
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-white/60">Start building with VES-AI.</p>
        </div>

        <div className="mt-10">
          <GoogleComponent
            onClick={handleGoogle}
            loading={loading === "google"}
          />

          <p className="mt-8 text-center text-sm text-white/50">
            Already have an account?{" "}
            <a href="/login" className="text-white hover:underline font-medium">
              Log in
            </a>
          </p>

          <p className="mt-6 text-center text-xs text-white/40">
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-white/60">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-white/60">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
