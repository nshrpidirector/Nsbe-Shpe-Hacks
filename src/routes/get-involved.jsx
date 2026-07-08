import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedPage,
  head: () => ({
    meta: [
      { title: "Get Involved - NSH @ RPI 2027" },
      {
        name: "description",
        content:
          "Join the planning team for NSH @ RPI 2027 through sponsorship outreach, marketing, logistics, or general planning.",
      },
    ],
  }),
});

const interestFormUrl = "https://forms.gle/tD8F3U8B9mbB396DA";

const involvementOptions = [
  {
    title: "Join Sponsorship Outreach",
    command: "sponsor_outreach.sh",
    color: "text-cyan",
    border: "hover:border-cyan/50",
    description:
      "Help build sponsor lists, draft outreach, follow up with companies, and support sponsor relationship tracking.",
  },
  {
    title: "Join Marketing & PR",
    command: "marketing_pr.sh",
    color: "text-amber",
    border: "hover:border-amber/50",
    description:
      "Support social media, graphics, announcements, campus outreach, and storytelling around NSH @ RPI.",
  },
  {
    title: "Apply for Logistics Lead",
    command: "logistics_lead.sh",
    color: "text-rpi",
    border: "hover:border-rpi/50",
    description:
      "Help coordinate rooms, food, check-in, day-of operations, volunteers, and the event run of show.",
  },
  {
    title: "General Planning Interest",
    command: "general_interest.sh",
    color: "text-primary",
    border: "hover:border-primary/50",
    description:
      "Want to help but not sure where you fit yet? Tell us what you are interested in and we will follow up.",
  },
];

function GetInvolvedPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-cyan mb-3">
        &gt; get_involved.exe
      </p>

      <div className="terminal-window p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get Involved with NSH @ RPI 2027
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          We are building the planning team for NSH @ RPI 2027. If you are
          interested in helping with sponsorship outreach, marketing/PR,
          logistics, or general planning, fill out the form below and we will
          follow up with next steps.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {involvementOptions.map((option) => (
          <a
            key={option.title}
            href={interestFormUrl}
            className={`group rounded-xl border border-border bg-card/70 p-5 transition ${option.border}`}
          >
            <p className={`font-mono text-xs ${option.color}`}>
              &gt; ./{option.command}
            </p>

            <h2 className="mt-3 text-xl font-bold text-foreground">
              {option.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {option.description}
            </p>

            <div className="mt-5 inline-flex rounded-md border border-border px-3 py-2 font-mono text-xs text-foreground transition group-hover:border-current">
              Interest Form
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
