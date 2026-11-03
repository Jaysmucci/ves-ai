import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[15px] font-semibold tracking-tight">
            Ves-AI
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden text-[13.5px] text-white/80 hover:text-white sm:inline"
          >
            Log in
          </a>
          <Button
            className="h-9 rounded-full bg-white px-4 text-[13.5px] font-medium text-black hover:bg-white/90"
          >
            <a href="/register">Get Started</a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
            <span className="font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-6 px-6 py-10 text-lg">
            <a href="#features" onClick={() => setMobileOpen(false)}>
              Features
            </a>
            <a href="#how" onClick={() => setMobileOpen(false)}>
              How it works
            </a>
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline" className="border-white/20 text-black">
                <a href="/login">Log in</a>
              </Button>
              <Button className="bg-white text-black">
                <a href="/register">Start free</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
