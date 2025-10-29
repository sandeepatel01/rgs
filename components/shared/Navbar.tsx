"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/rajput-logo1.png"
              alt="Rajput Gensets and Solar"
              width={75}
              height={60}
              className="object-cover"
            />
            <div className="leading-tight">
              <div className="text-lg font-extrabold text-[#1E3A8A] tracking-wide">
                RAJPUT <span className="text-[#FDBE34]">GENSETS & SOLAR</span>
              </div>
              <div className="text-[13px] font-medium text-gray-600 -mt-0.5">
                Since 2005
              </div>
            </div>
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {[
              {
                label: "Our Offerings",
                links: [
                  { name: "Off-Grid Solar", href: "/off-grid-solar" },
                  { name: "On-Grid Solar", href: "/on-grid-solar" },
                ],
              },
              {
                label: "Solar Solutions",
                links: [
                  { name: "Home", href: "/home" },
                  { name: "Commercial", href: "/commercial" },
                  { name: "Housing Societies", href: "/housing-societies" },
                ],
              },
              {
                label: "Our Products",
                links: [
                  { name: "Solar Panels", href: "/solar-panels" },
                  { name: "Generators", href: "/generators" },
                  {
                    name: "Solar Panels Product",
                    href: "/solar-panels-product",
                  },
                  { name: "Generators Product", href: "/generators-product" },
                ],
              },
            ].map((menu) => (
              <div key={menu.label} className="relative group">
                <Button
                  variant="ghost"
                  className="text-[#1E3A8A] hover:text-[#FDBE34] font-medium flex items-center gap-1 transition-all duration-200"
                >
                  {menu.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </Button>
                <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 py-2 z-10">
                  {menu.links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#FDBE34]/10 hover:text-[#FF8C00] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/about-us"
              className="text-[#1E3A8A] hover:text-[#FDBE34] font-medium transition-colors"
            >
              About us
            </Link>

            <Link
              href="/contact-us"
              className="text-[#1E3A8A] hover:text-[#FDBE34] font-medium transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Right: Call Now Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-[#FDBE34] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FDBE34] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg hover:bg-[#FDBE34]/10 transition-colors"
                >
                  <Menu className="h-6 w-6 text-[#1E3A8A]" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Header */}
                  <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                    <Image
                      src="/assets/rajput-logo1.png"
                      alt="Rajput Gensets and Solar"
                      width={50}
                      height={50}
                      className="object-cover rounded-full"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#1E3A8A]">
                        RAJPUT GENSETS & SOLAR
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        SINCE 2005
                      </div>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <div className="space-y-4">
                    {[
                      {
                        title: "Our Offerings",
                        links: [
                          { name: "Off-Grid Solar", href: "/off-grid-solar" },
                          { name: "On-Grid Solar", href: "/on-grid-solar" },
                        ],
                      },
                      {
                        title: "Solar Solutions",
                        links: [
                          { name: "Home", href: "/home" },
                          { name: "Commercial", href: "/commercial" },
                          {
                            name: "Housing Societies",
                            href: "/housing-societies",
                          },
                        ],
                      },
                      {
                        title: "Our Products",
                        links: [
                          { name: "Solar Panels", href: "/solar-panels" },
                          { name: "Generators", href: "/generators" },
                          {
                            name: "Solar Panels Product",
                            href: "/solar-panels-product",
                          },
                          {
                            name: "Generators Product",
                            href: "/generators-product",
                          },
                        ],
                      },
                    ].map((section) => (
                      <div key={section.title}>
                        <h3 className="font-semibold text-[#1E3A8A] mb-2">
                          {section.title}
                        </h3>
                        <div className="space-y-2 ml-4">
                          {section.links.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 hover:text-[#FF8C00] transition-colors py-1"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <Link
                      href="/about-us"
                      className="block font-semibold text-[#1E3A8A] hover:text-[#FDBE34] transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      About us
                    </Link>

                    <Link
                      href="/contact-us"
                      className="block font-semibold text-[#1E3A8A] hover:text-[#FDBE34] transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact us
                    </Link>
                  </div>

                  <Button className="bg-linear-to-r from-[#FDBE34] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FDBE34] text-white font-semibold w-full py-3 rounded-lg shadow-md transition-all duration-200">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
