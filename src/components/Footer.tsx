import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Airport Transfers", path: "/airport-transfers" },
  { label: "Beaches & Day Trips", path: "/beaches-day-trips" },
  { label: "Driving & Parking", path: "/driving-parking-guide" },
  { label: "FAQ", path: "/faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

const outboundLinks = [
  { label: "Podgorica Airport (TGD)", url: "https://montenegroairports.com/en/podgorica-airport/" },
  { label: "Tivat Airport (TIV)", url: "https://montenegroairports.com/en/tivat-airport/" },
  { label: "AMSCG Roadside Assistance", url: "https://www.amscg.org" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground" role="contentinfo">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="text-xl font-bold">
            Ulcinj Car Rental
          </Link>
          <p className="mt-3 text-sm opacity-80">
            <a href="mailto:info@ulcinj-car-rental.com" className="hover:opacity-100 transition-opacity">
              info@ulcinj-car-rental.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 opacity-90">Pages</h3>
          <div className="flex flex-col gap-1">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 opacity-90">Useful Resources</h3>
          <div className="flex flex-col gap-1">
            {outboundLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-sm opacity-60">
        <p className="mb-2">Affiliate disclosure: This site contains links to car rental partners. We may earn a commission at no extra cost to you.</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>Last updated: April 2026</p>
          <p>&copy; {new Date().getFullYear()} ulcinj-car-rental.com</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
