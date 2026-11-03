import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {

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
          <Button className="h-9 rounded-full bg-white px-4 text-[13.5px] font-medium text-black hover:bg-white/90">
            <a href="/register">Get Started</a>
          </Button>

          {/* Mobile menu - full screen on small devices */}
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-full sm:max-w-sm bg-black text-white border-white/10 p-0"
            >
              <SheetHeader className="px-6 pt-6">
                <SheetTitle className="text-white text-lg">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-5 px-6 text-base sm:text-lg">
                <a href="#how" className="py-2">
                  How it works
                </a>

                <div className="mt-4 flex flex-col gap-3 pb-6">
                  <Button
                    variant="outline"
                    className="h-11 w-full border-white/20 text-black text-sm sm:text-base rounded-full"
                  >
                    <a href="/login" className="w-full">
                      Log in
                    </a>
                  </Button>
                  <Button className="h-11 w-full bg-white text-black text-sm sm:text-base rounded-full">
                    <a href="/register" className="w-full">
                      Start free
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
