import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@remix-run/react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    // { name: "Home", href: "/" },
    // { name: "About", href: "#about" },
    // { name: "Staff", href: "#staff" },
    // { name: "Stats", href: "#stats" },
    { name: "Events", href: "/events" },
    { name: "Leaderboards", href: "/leaderboards" },
    { name: "Announcements", href: "/announcements" },
    // { name: "Blog", href: "/blog" },
    { name: "Rules/FAQ", href: "/rules-and-faq" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-zinc-900/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          [Server Name]
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="default"
            className="bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Join Discord
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className="text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 pt-4 pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block text-zinc-300 hover:text-white text-base"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white">
              Join Discord
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
