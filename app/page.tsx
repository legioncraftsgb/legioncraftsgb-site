import Image from "next/image";

const apps = [
  { name: "Side Hustle Tracker" },
  { name: "Dinner Dice" },
  { name: "Subscription Tracker" },
];

const divisions = [
  {
    name: "3D Printing",
    blurb:
      "Custom prints, props, and small-batch designs. Product catalogue coming soon.",
  },
  {
    name: "App Design",
    blurb:
      "Simple tools, utilities, and digital projects. See below for what's in development.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-3xl flex flex-col gap-16">
        <header className="flex flex-col items-center text-center gap-4">
          <Image
            src="/logo.png"
            alt=""
            aria-hidden="true"
            width={1536}
            height={1024}
            priority
            className="h-48 w-auto sm:h-56"
          />
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            LegionCraftsGB
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl">
            The parent company for our 3D printing and app design work.
          </p>
        </header>

        <section className="text-center sm:text-left">
          <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
            LegionCraftsGB is an independent studio covering two strands of
            work: <span className="text-neutral-100">3D printing</span> —
            custom prints, props, and small-batch designs — and{" "}
            <span className="text-neutral-100">app design</span>, where we
            build simple tools, utilities, and digital projects to solve small
            everyday problems.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">
            What we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {divisions.map((d) => (
              <div
                key={d.name}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <h3 className="text-lg font-medium text-neutral-100">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">{d.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">
            Apps — coming soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {apps.map((app) => (
              <div
                key={app.name}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5"
              >
                <h3 className="text-base font-medium text-neutral-100">
                  {app.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">
                  In development
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">
            Contact
          </h2>
          <p className="text-neutral-300">
            For 3D printing enquiries, app questions, or anything else:
          </p>
          <a
            href="mailto:admin@legioncraftsgb.com"
            className="text-lg text-indigo-300 hover:text-indigo-200 underline underline-offset-4 decoration-indigo-300/40 hover:decoration-indigo-200 w-fit"
          >
            admin@legioncraftsgb.com
          </a>
        </section>

        <footer className="pt-8 mt-4 border-t border-neutral-900 text-center text-sm text-neutral-500">
          © 2026 LegionCraftsGB — 3D printing &amp; app design.
        </footer>
      </div>
    </main>
  );
}
