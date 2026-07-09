import { createFileRoute, Link } from "@tanstack/react-router";
import NSBELogo from "../assets/NSBE.png";
import SHPELogo from "../assets/SHPE.png";
import RPILogo from "../assets/RPI.svg";
import TicketmasterLogo from "../assets/ticketM.png";
import MathWorksLogo from "../assets/MW.png";
import CadenceLogo from "../assets/Cadence.png";
import EYLogo from "../assets/EY1.png";
import TraneLogo from "../assets/Trane.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_12%,rgb(0_255_102_/_8%),transparent_26rem),radial-gradient(circle_at_84%_18%,rgb(227_29_56_/_11%),transparent_28rem),linear-gradient(180deg,rgb(5_7_7_/_0%),rgb(5_7_7_/_42%)_42rem,rgb(5_7_7_/_18%))]">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-visible px-8 py-14 md:px-20 md:py-20 lg:px-32">
        <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-[104rem] flex-col justify-center">
          <div className="max-w-[76rem]">
            <h1 className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[clamp(3.75rem,9vw,9.5rem)] font-black leading-[0.88] tracking-[-0.07em] text-foreground md:gap-x-7">
              <span>NSH</span>
              <span className="tracking-[-0.16em]">@</span>
              <span className="text-rpi">RPI</span>
              <span className="home-hero-cursor" aria-hidden="true" />
            </h1>

            <p className="mt-8 text-[clamp(2rem,3.8vw,4rem)] font-black leading-none tracking-[-0.04em] text-foreground">
              <span className="text-rpi">&gt;</span> BUILD WHAT MATTERS.
            </p>
          </div>

          <div className="terminal-window mt-14 overflow-hidden rounded-[22px] border-primary/45 bg-background/80 shadow-[0_32px_110px_rgb(0_0_0_/_55%),0_0_34px_rgb(0_255_102_/_10%),0_0_38px_rgb(227_29_56_/_10%)]">
            <div className="flex items-center gap-2 border-b border-border bg-background/70 px-5 py-4 text-sm font-bold text-muted-foreground">
              <span className="size-3.5 rounded-full bg-rpi" />
              <span className="size-3.5 rounded-full bg-amber" />
              <span className="size-3.5 rounded-full bg-primary" />
              <span className="ml-4">~/nsh@rpi/launch_2027.sh</span>
            </div>

            <div className="p-7 md:p-12">
              <div className="space-y-3 text-base text-muted-foreground md:text-xl">
                <p>
                  <span className="text-primary">user@rpi</span>
                  <span>:</span>
                  <span className="text-cyan">~/2027</span>
                  <span>$ ./launch_hackathon.sh</span>
                </p>
                <p>
                  &gt; booting mainframe...
                  <span className="text-primary"> [ OK ]</span>
                </p>
                <p>
                  &gt; hosted by NSBE and SHPE at Rensselaer Polytechnic
                  Institute
                </p>
              </div>

              <pre className="mt-8 overflow-x-auto text-sm leading-7 md:text-lg">
                <code>
                  <span className="text-rpi">event</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-foreground">{"{"}</span>
                  {"\n    "}
                  <span className="text-cyan">"date"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber">"January 30-31st 2027"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n    "}
                  <span className="text-cyan">"location"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">{"{"}</span>
                  {"\n        "}
                  <span className="text-cyan">"building"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber">"Darrin Comm. Center"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n        "}
                  <span className="text-cyan">"campus"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber">"RPI Campus"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n        "}
                  <span className="text-cyan">"city"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber">"Troy, NY"</span>
                  {"\n    "}
                  <span className="text-foreground">{"}"}</span>
                  {"\n"}
                  <span className="text-foreground">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>

          <p className="mt-7 text-center text-xl font-black text-[#52d7ff] md:text-3xl">
            Registration opens in October 2026
          </p>
        </div>
      </section>

      {/* EVENT INFO */}
      <section
        id="event-info"
        className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan/20 bg-background/45 p-6 shadow-[0_0_28px_rgb(82_215_255_/_5%)]">
            <p className="font-mono text-sm text-cyan mb-3">
              &gt; who_we_are.txt
            </p>
            <h2 className="text-2xl font-bold">Who is NSH @ RPI?</h2>
            <p className="mt-4 text-muted-foreground">
              NSH @ RPI is a student-led weekend hackathon hosted by the NSBE
              and SHPE chapters at Rensselaer Polytechnic Institute. We bring
              builders together to learn, create, and solve real problems with
              support from mentors, workshops, and sponsors.
            </p>
          </div>

          <div className="rounded-2xl border border-amber/20 bg-background/45 p-6 shadow-[0_0_28px_rgb(246_196_69_/_5%)]">
            <p className="font-mono text-sm text-amber mb-3">
              &gt; hackathon_101.md
            </p>
            <h2 className="text-2xl font-bold">What is a hackathon?</h2>
            <p className="mt-4 text-muted-foreground">
              A hackathon is a collaborative build event where students form
              teams, choose a problem, and create a project in a short amount of
              time. You do not need to be an expert to join. Hackathons are
              about learning fast, trying ideas, and building something you can
              demo.
            </p>
          </div>
        </div>
      </section>

      {/* THEME REVEAL */}
      {/* <ThemeReveal /> */}

      {/* SCHEDULE */}
      <section id="schedule" className="h-0 scroll-mt-24 overflow-hidden">
      
      </section>

      {/* SPONSORS */}
      <section
        id="sponsors"
        className="max-w-7xl mx-auto px-6 pt-10 pb-20 scroll-mt-24"
      >
        {/*
          Uncomment this block once sponsors are confirmed, then remove or comment
          out the outreach block below.

          <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-3">
            Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Sponsors
          </h2>

          <div className="space-y-12">
            <SponsorTier
              title="Platinum Sponsors"
              sizeClass="w-64 h-32"
              count={2}
            />

            <SponsorTier
              title="Gold Sponsors"
              sizeClass="w-48 h-24"
              count={3}
            />
          </div>
        */}

        <div className="rounded-[24px] bg-[radial-gradient(circle_at_18%_0%,rgb(227_29_56_/_13%),transparent_26rem),radial-gradient(circle_at_80%_100%,rgb(0_255_102_/_8%),transparent_28rem),linear-gradient(180deg,rgb(5_7_7_/_52%),rgb(5_7_7_/_78%))] p-8 md:p-12">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-black leading-none tracking-[-0.04em] md:text-6xl">
              <span className="text-rpi">$</span>{" "}
              <span>sponsor</span>{" "}
              <span className="text-cyan">--nsh2027</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg font-bold leading-8 text-muted-foreground md:text-xl">
              Your support helps make NSH possible — from meals and prizes to
              workshops, mentorship, and the resources students need to bring
              their ideas to life.
            </p>

            <PastSponsorMarquee />

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:nshrpi.director@gmail.com?subject=NSBE%20x%20SHPE%20Hackathon%20Sponsorship"
                className="rounded-2xl bg-rpi px-8 py-4 font-black uppercase tracking-[0.22em] text-white transition hover:translate-y-[-1px] hover:brightness-110"
                style={{ boxShadow: "0 0 28px rgb(227 29 56 / 24%)" }}
              >
                Get In Touch →
              </a>

              <a
                href="/sponsorship-packet-2027.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-cyan/40 bg-background/25 px-8 py-4 font-black uppercase tracking-[0.22em] text-foreground transition hover:border-cyan hover:text-cyan"
              >
                View Sponsorship Packet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgb(0_255_102_/_8%),transparent_24rem),radial-gradient(circle_at_82%_18%,rgb(227_29_56_/_9%),transparent_24rem),linear-gradient(180deg,rgb(5_7_7_/_40%),rgb(5_7_7_/_74%))] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FAQGroup
              title="General"
              accent="text-cyan"
              questions={[
                {
                  question: "Still have questions?",
                  answer: (
                    <>
                      Please reach out to us at{" "}
                      <a
                        href="mailto:nshrpi.director@gmail.com"
                        className="text-amber underline underline-offset-4 hover:text-foreground transition"
                      >
                        nshrpi.director@gmail.com
                      </a>
                      . We are happy to help.
                    </>
                  ),
                },
                {
                  question: "Can I start my project before the hackathon?",
                  answer:
                    "You cannot work on a project you started before the hackathon. Ideation before the hackathon is allowed, but all implementation must happen during the hackathon.",
                },
                {
                  question: "How many people can be on a single team?",
                  answer: "Up to 4 people can be part of a single team.",
                },
                {
                  question: "What should I bring?",
                  answer:
                    "Bring your laptop, chargers, and any hardware you plan to use. We will provide WiFi, food, workspace, and event programming.",
                },
                {
                  question: "What if I am a beginner?",
                  answer:
                    "Beginners are welcome. We will have workshops, mentors, and space to learn while building.",
                },
              ]}
            />

            <FAQGroup
              title="Registration"
              accent="text-amber"
              questions={[
                {
                  question: "Who can apply?",
                  answer:
                    "NSH @ RPI is open to undergraduate and graduate students, students at nearby colleges in New York's Capital Region, and anyone who graduated within the past year after Fall 2025.",
                },
                {
                  question: "How do I apply?",
                  answer:
                    "Applications will open in October 2026. When applications go live, we will share the Devpost link.",
                },
                {
                  question: "Is there a cost to participate?",
                  answer:
                    "No. The event is free for accepted participants, including meals, workshops, and swag.",
                },
                {
                  question: "Do I need to be part of NSBE or SHPE?",
                  answer:
                    "No. You do not need to be a member of NSBE or SHPE to participate.",
                },
                {
                  question: "If I graduated, can I be a mentor or judge?",
                  answer:
                    "Yes. Mentor and judge applications will be shared later through a separate link.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ScheduleItem({ day, time, title }) {
  return (
    <div className="grid gap-3 border border-border bg-background/55 p-4 md:grid-cols-[5rem_7rem_1fr] md:items-center">
      <span className="text-xs uppercase tracking-widest text-accent">
        {day}
      </span>

      <span className="text-sm font-bold text-primary">{time}</span>

      <span className="text-card-foreground">{title}</span>
    </div>
  );
}

/*
function SponsorTier({ title, sizeClass, count }) {
  return (
    <div>

      <h3 className="text-2xl font-semibold text-center mb-6 text-muted-foreground">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">

        {Array.from({ length: count }, (_, index) => (

          <div
            key={`${title}-${index}`}
            className={`${sizeClass} border border-border bg-card/80 flex items-center justify-center text-muted-foreground`}
          >
            Sponsor Logo
          </div>
        ))}
      </div>
    </div>
  );
}
*/

const pastSponsorLogos = [
  { name: "Ticketmaster", logo: TicketmasterLogo, className: "max-h-9" },
  { name: "MathWorks", logo: MathWorksLogo, className: "max-h-10" },
  { name: "Cadence", logo: CadenceLogo, className: "max-h-10" },
  { name: "EY", logo: EYLogo, className: "max-h-12" },
  { name: "Trane Technologies", logo: TraneLogo, className: "max-h-12" },
];

function PastSponsorMarquee() {
  const marqueeLogos = [...pastSponsorLogos, ...pastSponsorLogos];

  return (
    <div className="mt-8 overflow-hidden border-y border-border py-5">
      <div className="flex w-max items-center gap-10 home-sponsor-marquee">
        {marqueeLogos.map((sponsor, index) => (
          <img
            key={`${sponsor.name}-${index}`}
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`w-40 object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 ${sponsor.className}`}
          />
        ))}
      </div>
    </div>
  );
}

function FAQGroup({ title, accent, questions }) {
  return (
    <div className="rounded-2xl border border-border bg-card/55 p-5 shadow-[0_24px_80px_rgb(0_0_0_/_22%)] backdrop-blur-xl md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="size-2.5 rounded-full bg-current text-primary" />
        <h3 className={`font-mono text-2xl font-bold ${accent}`}>{title}</h3>
      </div>

      <div className="space-y-3">
        {questions.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <details className="group rounded-xl border border-border bg-background/45 p-4 transition open:border-cyan/35 open:bg-background/70">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
        <span className="text-lg font-bold text-foreground">{question}</span>

        <span className="font-mono text-2xl leading-none text-amber transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-3 leading-6 text-muted-foreground">{answer}</p>
    </details>
  );
}

function TrophyIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 6H5.5A1.5 1.5 0 0 0 4 7.5V8a4 4 0 0 0 4 4m8-6h2.5A1.5 1.5 0 0 1 20 7.5V8a4 4 0 0 1-4 4m-4 .5V17m-3 3h6m-7 0h8"
      />
    </svg>
  );
}

export default Index;
