import { useState } from "react";

const navLinks = [
  { href: "/about", label: "./ABOUT" },
  { href: "/sponsors", label: "./SPONSOR" },
  { href: "/#faq", label: "./FAQ" },
];

const eventLinks = [
  { href: "/#event-info", label: "Event Info" },
  { href: "/schedule", label: "Schedule" },
  { href: "/prizes", label: "Prizes" },
];

const nshx26Links = [
  { href: "/NSHx26/winners", label: "Winners" },
  { href: "/NSHx26/winners#pictures", label: "Pictures" },
];

function Dropdown({ label, links, accent = "cyan" }) {
  const hoverClass = accent === "amber" ? "hover:text-amber" : "hover:text-cyan";

  return (
    <div className="nav-dropdown relative">
      <button
        type="button"
        className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-[0.26em] text-muted-foreground transition hover:text-foreground"
      >
        {label}
      </button>

      <div className="nav-dropdown-panel absolute left-0 top-full z-[9999] min-w-48 pt-2">
        <div className="rounded-lg border border-border bg-background/98 p-2 shadow-2xl backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary ${hoverClass}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[999] overflow-visible bg-transparent">
      <div className="mx-auto flex h-20 max-w-[118rem] items-center justify-between px-7 md:px-14">
        <a
          href="/"
          className="nsh-logo-mark text-xl font-bold tracking-normal text-foreground transition hover:text-cyan"
          aria-label="NSH at RPI home"
        >
          NSH @<span className="text-rpi">RPI</span>
          <span className="text-primary">_</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="px-3 py-2 text-sm font-bold uppercase tracking-[0.26em] text-muted-foreground transition hover:text-foreground">
            ./HOME
          </a>

          <Dropdown label="./EVENTS" links={eventLinks} />
          <Dropdown label="./NSHX26" links={nshx26Links} accent="amber" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bold uppercase tracking-[0.26em] text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* <a
          href="/#register"
          className="hidden rounded-2xl border border-border/70 px-6 py-3 text-sm font-black uppercase tracking-[0.28em] text-foreground transition hover:border-primary/70 hover:text-primary md:block"
        >
          Register &gt;_
        </a> */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md border border-border px-3 py-2 text-foreground"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/96 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            <MobileLink href="/" label="./HOME" onClick={() => setOpen(false)} />
            <MobileGroup title="./EVENTS" links={eventLinks} onClick={() => setOpen(false)} />
            <MobileGroup title="./NSHX26" links={nshx26Links} onClick={() => setOpen(false)} />
            {navLinks.map((link) => (
              <MobileLink key={link.href} {...link} onClick={() => setOpen(false)} />
            ))}
            <a
              href="/#register"
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center font-semibold text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <a href={href} className="py-2 text-muted-foreground hover:text-foreground" onClick={onClick}>
      {label}
    </a>
  );
}

function MobileGroup({ title, links, onClick }) {
  return (
    <div className="border-y border-border/70 py-2">
      <div className="mb-1 text-xs uppercase tracking-normal text-cyan">{title}</div>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="block py-2 pl-3 text-muted-foreground hover:text-foreground"
          onClick={onClick}
        >
          <span className="text-primary">&gt;</span> {link.label}
        </a>
      ))}
    </div>
  );
}
