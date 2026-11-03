"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { GoogleComponent } from "@/components/shared/GoogleComponent";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<"google" | "email" | null>(null);

 const showDevToast = () => {
   toast("AI engine still in development", {
     description: "Authentication is not available yet. Check back soon.",
     duration: 4000,
   });
 };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading("email");
    setTimeout(() => {
      setLoading(null);
      showDevToast();
    }, 600);
  };

  const handleGoogle = () => {
    setLoading("google");
    setTimeout(() => {
      setLoading(null);
      showDevToast();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-white/60">
            Sign in to your VES-AI workspace.
          </p>
        </div>

        <div className="mt-10">
          <GoogleComponent
            onClick={handleGoogle}
            loading={loading === "google"}
          />

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-3 text-white/40">
                or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <label htmlFor="email" className="text-sm text-white/60">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-zinc-900 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-white/20"
            />
            <Button
              type="submit"
              disabled={loading === "email"}
              className="w-full h-12 bg-white text-black hover:bg-white/90"
            >
              {loading === "email" ? "Please wait..." : "Continue with email"}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-white/50">
            New to VES-AI?{" "}
            <a
              href="/register"
              className="text-white hover:underline font-medium"
            >
              Get started
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
