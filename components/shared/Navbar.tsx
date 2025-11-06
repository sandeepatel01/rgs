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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [dgOpen, setDgOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <MotionImage
              src={logo}
              alt="RG Solars"
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                RG Solar
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Since 2005
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div
              className="relative group"
              onMouseEnter={() => setSolarOpen(true)}
              onMouseLeave={() => setSolarOpen(false)}
            >
              <button className="flex items-center gap-1 text-lg font-medium text-gray-800 hover:text-primary">
                Solar Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {solarOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    {solarServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setDgOpen(true)}
              onMouseLeave={() => setDgOpen(false)}
            >
              <button className="flex items-center gap-1 text-lg font-medium text-gray-800 hover:text-primary">
                DG Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {dgOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    {dgServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
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
              className={`text-lg font-medium hover:text-primary ${
                isActive("/why-solar") ? "text-primary" : "text-gray-800"
              }`}
            >
              Why Choose Solar
            </Link>

            <Link
              href="/contact"
              className={`text-lg font-medium hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-gray-800"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="font-semibold bg-green-600 hover:bg-green-700 text-white rounded-full"
            >
              <a href="tel:+919810085335" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-5 border border-gray-100"
            >
              <div className="flex flex-col gap-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-gray-800 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}

                <div>
                  <button
                    onClick={() => setSolarOpen(!solarOpen)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-800"
                  >
                    Solar Services <ChevronDown className="w-4 h-4" />
                  </button>
                  {solarOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {solarServices.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600 hover:text-primary"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setDgOpen(!dgOpen)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-800"
                  >
                    DG Solutions <ChevronDown className="w-4 h-4" />
                  </button>
                  {dgOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {dgServices.map((d) => (
                        <Link
                          key={d.path}
                          href={d.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600 hover:text-primary"
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/why-solar"
                  className="text-base font-medium text-gray-800 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Why Choose Solar
                </Link>

                <Link
                  href="/contact"
                  className="text-base font-medium text-gray-800 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Button
                  asChild
                  size="lg"
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white rounded-full"
                >
                  <a
                    href="tel:+919810085335"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
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
}
