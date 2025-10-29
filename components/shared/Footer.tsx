"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/public/assets/rgs.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src={logo} alt="RG Solars" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Powering India with clean and reliable energy solutions since
              2005.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Solar Panel Installation
              </li>
              <li className="text-muted-foreground">DG Solutions</li>
              <li className="text-muted-foreground">Maintenance & Support</li>
              <li className="text-muted-foreground">Energy Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm">
                  123 Solar Street, Energy Park, New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-sm">info@rgsolars.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} RG Solars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
