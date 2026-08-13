import { useState } from "react";
import "./Navbar.css";

const links = ["Features", "Workflow", "Pricing", "Testimonials"];

export default function Navbar({ onOpenLogin }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__logo">JBS</span>
          <span>JBS GYM</span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn-ghost"
            aria-label="Sign in"
            onClick={onOpenLogin}
          >
            Sign In
          </button>
          <a
            className="btn btn-primary"
            href="https://api.whatsapp.com/send/?phone=918150933624&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            Book a Free Class
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
