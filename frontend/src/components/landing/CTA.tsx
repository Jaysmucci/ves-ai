import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Ready to interpret your next sounding?
        </h2>
        <p className="mt-4 text-white/50">
          Join geophysicists using VES-AI for faster, more consistent
          groundwater assessments.
        </p>
        <Button
          size="lg"
          className="mt-8 h-12 rounded-full bg-white px-8 text-black hover:bg-white/90"
        >
          <a href="/register">Start free</a>
        </Button>
      </div>
    </section>
  );
}
