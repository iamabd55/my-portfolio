import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Vehicles",
    links: [
      { label: "Light Trucks", href: "/products?cat=Light+Truck" },
      { label: "Vans", href: "/products?cat=Van" },
      { label: "Buses", href: "/products?cat=Bus" },
      { label: "Electric Vehicles", href: "/products?cat=EV" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Quality & Standards", href: "/quality" },
      { label: "News & Press", href: "/news" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Find a Dealer", href: "/dealers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-heading text-2xl font-bold text-foreground">
              KAMA<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs leading-relaxed">
              Authorized partner of Joylong Motors. Distributing commercial vehicles across Pakistan — light trucks, vans, buses, and electric vehicles.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-line mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Kama Automotive International (Pvt.) Ltd. All rights reserved.</p>
          <p>Authorized Joylong Motors Partner — Pakistan</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center shadow-lg transition-colors"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </footer>
  );
};

export default SiteFooter;
