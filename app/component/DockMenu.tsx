"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Home, FolderOpen, BadgeCheck, Contact ,UserSearch} from "lucide-react";

const menuItems = [
    { name: "Accueil", href: "/", icon: <Home size={24} /> },
    { name: "Compétences", href: "#competences", icon: <BadgeCheck size={24} /> },
    { name: "Projets", href: "#projets", icon: <FolderOpen size={24} /> },
    { name: "A Propo", href: "#about", icon: <UserSearch size={24} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={24} /> },
];

export default function DockMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 flex bg-[#A99886]/80 backdrop-blur-md px-4 py-2     w-fit gap-2  rounded-2xl shadow-lg">
      {menuItems.map((item, index) => (
        <motion.div
          key={item.name}
          className="relative mx-2"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            scale: hoveredIndex === index ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
           <Link href={item.href}>
            <span className="text-gray-800 cursor-pointer">{item.icon}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
