export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Upload VES data",
      desc: "Import field measurements in standard formats. No manual preprocessing required.",
    },
    {
      step: "02",
      title: "AI interpretation",
      desc: "Models generate layered resistivity models, quality metrics, and confidence intervals.",
    },
    {
      step: "03",
      title: "Groundwater insights",
      desc: "Receive aquifer assessment, thickness estimates, and recommended next steps.",
    },
  ];

  return (
    <section id="how" className="border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          From sounding to decision
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step}>
              <div className="text-sm font-medium text-white/30">
                {item.step}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
