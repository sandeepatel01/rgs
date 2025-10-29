"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/public/assets/rgs.png";

const MotionImage = motion(Image);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [dgOpen, setDgOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solarServices = [
    { name: "Off-Grid Solar", path: "/solar/off-grid" },
    { name: "On-Grid Solar", path: "/solar/on-grid" },
    { name: "Hybrid Solar", path: "/solar/hybrid" },
  ];

  const dgServices = [
    { name: "DG Installation", path: "/dg/installation" },
    { name: "Sell & Purchase", path: "/dg/sell-purchase" },
    { name: "Repairing & Maintenance", path: "/dg/maintenance" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <MotionImage
                src={logo}
                alt="RG Solars"
                className="h-16 w-auto"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSolarOpen(true)}
              onMouseLeave={() => setSolarOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Solar Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {solarOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    {solarServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDgOpen(true)}
              onMouseLeave={() => setDgOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                DG Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {dgOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    {dgServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/why-solar"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/why-solar") ? "text-primary" : "text-foreground"
              }`}
            >
              Why Choose Solar
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="font-semibold">
              <a href="tel:+917880784204" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </motion.div>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div>
                  <button
                    onClick={() => setSolarOpen(!solarOpen)}
                    className="flex items-center gap-1 text-sm font-medium w-full"
                  >
                    Solar Services <ChevronDown className="w-4 h-4" />
                  </button>
                  {solarOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {solarServices.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="block text-sm text-muted-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setDgOpen(!dgOpen)}
                    className="flex items-center gap-1 text-sm font-medium w-full"
                  >
                    DG Solutions <ChevronDown className="w-4 h-4" />
                  </button>
                  {dgOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {dgServices.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="block text-sm text-muted-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/why-solar"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Why Choose Solar
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Button asChild className="w-full" size="lg">
                  <a href="tel:+917880784204" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
