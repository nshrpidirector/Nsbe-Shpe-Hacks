import { createFileRoute, linkOptions } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About - NSH @ RPI" },
      {
        name: "description",
        content:
          "Learn about NSH @ RPI, the annual student-led hackathon hosted by NSBE and SHPE at Rensselaer Polytechnic Institute.",
      },
    ],
  }),
});

const organizations = [
  {
    label: "organization.nsbe",
    name: "NSBE",
    color: "text-primary",
    glow: "from-primary/12",
    accent: "bg-primary",
    logo: "/about/nsbe-main-logo.png",
    logoClass: "max-h-20 max-w-[360px] object-contain",
    description:
      "The National Society of Black Engineers (NSBE) is dedicated to increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact their communities. As one of the largest student-run organizations in the country, NSBE supports thousands of students through its collegiate, alumni, and pre-collegiate chapters nationwide.",
  },
  {
    label: "organization.shpe",
    name: "SHPE",
    color: "text-amber",
    glow: "from-amber/12",
    accent: "bg-amber",
    logo: "/about/shpeLogo.png",
    logoClass: "max-h-24 max-w-[420px] object-contain",
    description:
      "The Society of Hispanic Professional Engineers (SHPE) empowers the Hispanic community to reach its fullest potential and make an impact through STEM awareness, access, support, and development. As the largest Latino technical organization in the country, SHPE connects students and professionals through a nationwide network of chapters.",
  },
];

const committeeLeads = [
  {
    name: "Aliyah Zaizay",
    role: "Hackathon Director",
    headshot: "/team/2027/aliyahHS.jpg",
    linkedin: "https://www.linkedin.com/in/aliyah-zaizay/",
  },
  {
    name: "Lauren Caraballo",
    role: "Hackathon Co-Director",
    headshot: "/team/2027/laurenC.jpeg",
    linkedin: "https://www.linkedin.com/in/caraballo-lauren/",
  },
  {
    name: "Abigail Gutierrez",
    role: "Marketing Lead",
    headshot: "/team/2027/AbigailG.jpeg",
    linkedin: "https://www.linkedin.com/in/abigailgutierrez5/",
  },
  {
    name: "Kyle-Lamar Morgan",
    role: "Tech Lead",
    headshot: "/team/2027/KyleLamar.jpeg",
    linkedin: "https://www.linkedin.com/in/klmorgan22/",
  },
  {
    name: "Alex Clark",
    role: "Events Coordinator",
    headshot: "/team/2027/AlexC.jpeg",
    linkedin: "https://www.linkedin.com/in/alx-jam-clrk/",
  },
  {
    name: "Elizabeth Colón",
    role: "Sponsorship Lead",
    headshot: "/team/2027/lizColón.jpeg",
    linkedin: "https://www.linkedin.com/in/elizabeth-l-colon/",
  },
];

const committeeMembers = [
  {
    name: "Sienna Kargov",
    linkedin: "https://www.linkedin.com/in/siennakargov",
    committee: "Marketing / PR",
  },

  {
    name: "Isa Reynoso",
    linkedin: "https://www.linkedin.com/in/isa-reynoso-/",
    committee: "Marketing / PR",
  },
  {
    name: "Matthew Vintimilla",
    linkedin: "",
    committee: "Sponorship Outreach",
  }
];

function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <section
          className="terminal-window overflow-hidden rounded-[18px] border-cyan/35 bg-cover bg-center shadow-[0_24px_80px_rgb(0_0_0_/_45%)]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(5 7 7 / 94%) 0%, rgb(5 7 7 / 78%) 48%, rgb(5 7 7 / 42%) 100%), linear-gradient(180deg, rgb(5 7 7 / 10%), rgb(5 7 7 / 76%)), url('/about/nsh-team-hero.jpg')",
            backgroundPosition: "center 52%",
          }}
        >
          <div className="flex items-center gap-2 border-b border-border bg-background/75 px-3 py-2 text-xs text-muted-foreground">
            <span className="size-3 rounded-full bg-rpi" />
            <span className="size-3 rounded-full bg-amber" />
            <span className="size-3 rounded-full bg-primary" />
            <span className="ml-2">~/nsh-rpi/about_nsh.log</span>
          </div>

          <div className="max-w-3xl p-7 md:p-12">
            <p className="mb-4 font-mono text-sm text-cyan">
              &gt; about_nsh.load()
            </p>

            <h1 className="text-5xl font-bold leading-none md:text-7xl">
              Who We Are
              <span className="blink text-primary">_</span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              NSH Hackathon is an annual student-led hackathon designed to
              bring students together for a weekend of creativity,
              collaboration, and technical problem-solving. Participants work
              in teams to develop projects, explore new technologies, attend
              workshops, and present their ideas to judges, mentors, and peers.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Now entering its 4th year, NSH Hackathon continues to create a
              space where both first-time hackers and experienced builders can
              learn, experiment, and grow.
            </p>

            <div className="mt-8 overflow-hidden border-y border-border py-3">
              <div className="flex w-max gap-8 text-sm text-amber motion-safe:animate-[about-log_24s_linear_infinite]">
                {[
                  "build_in_teams",
                  "learn_from_workshops",
                  "demo_to_judges",
                  "connect_with_peers",
                  "build_in_teams",
                  "learn_from_workshops",
                  "demo_to_judges",
                  "connect_with_peers",
                ].map((item, index) => (
                  <span key={item + index}>&gt; {item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold md:text-5xl">
            Our Organizations
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {organizations.map((org) => (
              <article
                key={org.name}
                className="relative min-h-72 overflow-hidden rounded-2xl border border-white/45 bg-[#f7f4ee] p-7 text-slate-950 shadow-[0_24px_80px_rgb(0_0_0_/_20%)]"
              >
                <div className={"absolute inset-x-0 top-0 h-1.5 " + org.accent} />
                <div className="flex h-32 items-center justify-center rounded-xl border border-slate-200/80 bg-white/75 px-6 py-5">
                  <img
                    src={org.logo}
                    alt={org.name + " logo"}
                    className={org.logoClass}
                  />
                </div>

                <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  &gt; {org.label}
                </p>
                <h3 className={"mt-3 text-4xl font-black " + org.color}>
                  {org.name}
                </h3>
                <p className="mt-5 max-w-xl leading-7 text-slate-700">
                  {org.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="pb-10 scroll-mt-24">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-cyan">
                &gt; team_archive.open()
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Our Team
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <div className="border-l border-border pl-5">
              <div className="relative rounded-lg border border-cyan/50 bg-card px-4 py-3 font-mono font-bold">
                <span className="absolute -left-[1.72rem] top-1/2 size-3 -translate-y-1/2 rounded-full border border-cyan bg-background shadow-[0_0_16px_rgb(82_215_255_/_55%)]" />
                NSH_2027
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan">
                    Committee Leads
                  </h3>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {committeeLeads.map((member) => (
                    <TeamMember key={member.name} member={member} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-amber">
                    Committee Members
                  </h3>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {committeeMembers.length > 0 ? (
                    committeeMembers.map((member) => (
                      <CommitteeMemberRow key={member.name} member={member} />
                    ))
                  ) : (
                    <div className="px-5 py-4 font-mono text-sm text-muted-foreground">
                      roster_pending.push(member)
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


function CommitteeMemberRow({ member }) {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-border bg-card/70 px-5 py-4 transition hover:-translate-y-0.5 hover:border-cyan/45 hover:bg-background/45 hover:text-cyan"
    >
      <span className="block font-semibold">{member.name}</span>
      <span className="mt-2 block font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {member.committee}
      </span>
    </a>
  );
}

function TeamMember({ member }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="rounded-xl border border-border bg-card/80 p-5 transition hover:-translate-y-1 hover:border-cyan/40">
      <div className="mx-auto size-24 overflow-hidden rounded-full border border-border bg-[radial-gradient(circle_at_top_left,rgb(82_215_255_/_24%),transparent_55%),#111d21]">
        {member.headshot ? (
          <img
            src={member.headshot}
            alt={member.name + " headshot"}
            className="size-full object-cover"
          />
        ) : (
          <div className="grid size-full place-items-center">
            <span className="font-mono text-2xl font-bold text-cyan">
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 text-center">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-bold transition hover:text-cyan"
        >
          {member.name}
        </a>
        <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
      </div>
    </article>
  );
}
