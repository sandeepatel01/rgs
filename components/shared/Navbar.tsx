"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  ChevronDown,
  Sun,
  Battery,
  Zap,
  Settings,
  ShoppingCart,
  Wrench,
  Lightbulb,
  Factory,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const solarServices = [
    {
      name: "Off-Grid Solar",
      href: "/off-grid-solar",
      icon: <Battery className="w-4 h-4" />,
    },
    {
      name: "On-Grid Solar",
      href: "/on-grid-solar",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "Hybrid Solar",
      href: "/hybrid-solar",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const dgSolutions = [
    {
      name: "DG Installation",
      href: "/dg-installation",
      icon: <Factory className="w-4 h-4" />,
    },
    {
      name: "Sell & Purchase",
      href: "/sell-purchase",
      icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
      name: "Repairing & Maintenance",
      href: "/repair-maintenance",
      icon: <Wrench className="w-4 h-4" />,
    },
  ];

  const mobileSolarServices = [
    {
      name: "Off-Grid Solar",
      href: "/off-grid-solar",
      icon: <Battery className="w-4 h-4" />,
    },
    {
      name: "On-Grid Solar",
      href: "/on-grid-solar",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "Hybrid Solar",
      href: "/hybrid-solar",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const mobileDgSolutions = [
    {
      name: "DG Installation",
      href: "/dg-installation",
      icon: <Factory className="w-4 h-4" />,
    },
    {
      name: "Sell & Purchase",
      href: "/sell-purchase",
      icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
      name: "Repairing & Maintenance",
      href: "/repair-maintenance",
      icon: <Wrench className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-linear-to-r from-[#1E3A8A] via-[#2E7D32] to-[#FDBE34] text-white shadow-lg animate-gradient-slow bg-size-[200%_200%]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/rgs.png"
              alt="RG Solar"
              width={75}
              height={60}
              className="object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-extrabold tracking-wide drop-shadow-md">
                <span className="text-yellow-300">RG</span>{" "}
                <span className="text-yellow-400">Solars</span>
              </h1>
              <p className="text-[13px] font-medium text-yellow-100 -mt-0.5">
                Since 2005
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {[
              {
                label: "Solar Services",
                links: solarServices,
              },
              {
                label: "DG Solutions",
                links: dgSolutions,
              },
            ].map((menu) => (
              <div key={menu.label} className="relative group">
                <button className="flex items-center gap-1 font-medium text-white hover:text-yellow-300 transition-all duration-200">
                  {menu.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full mt-3 w-64 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 border border-yellow-200/30">
                  {menu.links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-gray-800 font-medium hover:bg-yellow-50 hover:text-[#FF8C00] transition-colors"
                    >
                      <span className="text-blue-600">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/why-choose-solar"
              className="flex items-center gap-1 text-white hover:text-yellow-300 font-medium transition-all"
            >
              Why Choose Solar
            </Link>

            <Link
              href="/about-us"
              className="text-white hover:text-yellow-300 font-medium transition-all"
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              className="text-white hover:text-yellow-300 font-medium transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-[#1E3A8A] font-semibold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg hover:bg-yellow-300/10 transition-colors p-3"
                >
                  <Menu className="h-10 w-10 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-sm p-0 bg-white border-l border-gray-200 shadow-xl"
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-linear-to-r from-[#1E3A8A] to-[#2E7D32] text-white">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/assets/rgs.png"
                      alt="RGS"
                      width={45}
                      height={45}
                      className="object-cover rounded-lg"
                    />
                    <div>
                      <div className="text-lg font-bold text-yellow-200">
                        RG SOLAR
                      </div>
                      <div className="text-xs text-yellow-100 font-medium">
                        SINCE 2005
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto py-4 px-4">
                  <div className="space-y-6">
                    {[
                      {
                        title: "Solar Services",
                        links: mobileSolarServices,
                        icon: <Sun className="w-5 h-5" />,
                      },
                      {
                        title: "DG Solutions",
                        links: mobileDgSolutions,
                        icon: <Zap className="w-5 h-5" />,
                      },
                    ].map((section) => (
                      <div
                        key={section.title}
                        className="border-b border-gray-100 pb-4"
                      >
                        <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-3 text-lg">
                          {section.icon}
                          {section.title}
                        </h3>
                        <div className="space-y-2">
                          {section.links.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                              <span className="text-blue-500">{link.icon}</span>
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="space-y-2 pt-2">
                      <Link
                        href="/why-choose-solar"
                        className="flex items-center gap-2 py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <Lightbulb className="w-5 h-5" /> Why Choose Solar
                      </Link>

                      <Link
                        href="/about-us"
                        className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>

                      <Link
                        href="/contact-us"
                        className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <Button className="w-full bg-linear-to-r from-[#1E3A8A] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1E3A8A] text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
                      <Phone className="w-5 h-5 mr-2" /> Call Now
                    </Button>
                    <p className="text-center text-gray-500 text-sm mt-2">
                      Get a free consultation
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
