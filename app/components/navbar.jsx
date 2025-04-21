"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInStagger, navItemFade, wipeDown } from "@/utils/animations";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    ["ABOUT", "/#about"],
    ["SKILLS", "/#skills"],
    ["SERVICES", "/#services"],
    //["EXPERIENCE", "/#experience"],
    ["PROJECTS", "/#projects"],
    ["EDUCATION", "/#education"],
   // ["BLOGS", "/blog"],
    
  ];

  return (
    <nav className="bg-transparent w-full z-50 relative">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        {/* Profile Image */}
        <motion.div
          className="flex items-center"
          variants={wipeDown}
          initial="hidden"
          animate="visible"
        >
          <Link href="/">
            <Image
              src={personalData.cover}
              width={160}
              height={160}
              alt="VASANTH"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          variants={fadeInStagger}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-x-1 lg:gap-x-2 xl:gap-x-3"
        >
          {menuItems.map(([label, href], i) => (
            <motion.li key={href} variants={navItemFade} custom={i}>
              <Link
                href={href}
                className="block px-4 py-2 rounded-full border border-transparent hover:border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-violet-600 hover:text-white transition-all duration-300 hover:scale-105 text-sm text-white font-bold"
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 rounded-md transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-600"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 px-4 py-4 bg-[#0d0d0d] md:hidden"
          >
            {menuItems.map(([label, href], i) => (
              <motion.li
                key={href}
                variants={navItemFade}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-150 rounded-full border border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-violet-600 text-white hover:text-white text-sm px-4 py-2 transition-all duration-300 hover:scale-105"
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
