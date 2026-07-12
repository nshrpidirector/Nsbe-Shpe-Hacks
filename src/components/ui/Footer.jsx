const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/prizes", label: "Prizes" },
];

const communityLinks = [
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about#team", label: "Team" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "https://www.instagram.com/rpinsbeshpe_hacks/", label: "Instagram" },
  { href: "mailto:nshrpi.director@gmail.com", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
        <div>
          <a
            href="/"
            className="font-mono text-2xl font-bold tracking-normal text-foreground transition hover:text-cyan"
          >
            NSH @<span className="text-rpi">RPI</span>
            <span className="text-primary">_</span>
          </a>

        </div>

        <FooterColumn title="Explore" links={exploreLinks} />
        <FooterColumn title="Community" links={communityLinks} />

      </div>

      <div className="mx-auto max-w-7xl border-t border-border px-6 pb-6 pt-4 text-xs text-muted-foreground">
        Built by students at RPI. © {new Date().getFullYear()} NSBE x SHPE
        Hacks.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="font-mono text-sm font-bold uppercase text-foreground">
        {title}
      </h2>

      <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="w-fit transition hover:text-cyan"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
