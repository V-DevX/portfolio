// @flow strict
'use client'
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
import ContactForm from './contact-form';
import { slideUp, staggerContainer } from '@/utils/animations';

function ContactSection() {
  const iconHoverStyles = "relative group w-20 h-20 flex items-center justify-center";
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md font-semibold">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />

        <div className="lg:w-3/4 flex flex-col gap-10">
          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: <MdAlternateEmail size={15} />,
                value: personalData.email,
                isLink: true,
              href: `mailto:${personalData.email}`,
              },
              {
                icon: <IoMdCall size={15} />,
                value: personalData.phone,
                isLink: true,
              href: `tel:${personalData.phone}`,
              },
              {
                icon: <CiLocationOn size={15} />,
                value: personalData.address,
                isLink: false,
              },
            ].map(({ icon, value, isLink, href }, index) => {
              const content =(
              <div
                key={index}
                className="flex items-center bg-white/10 border border-white/10 backdrop-blur-md p-4 rounded-xl shadow-md"
              >
                <div
                
                className="text-gray-800 bg-[#8b98a5] hover:bg-[#16f2b3] p-2 rounded-full transition-all duration-300 hover:scale-110">
                  {icon}
                </div>
                <div className="mx-4 h-10 w-[2px] bg-white/30" />
                <p className="text-sm md:text-[1rem]">{value}</p>
      
              </div>
              );

              return isLink ? (
                <a
                  href={href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
              
})}
          </div>

          {/* Social Icons */}
          <motion.div
            className="my-4 flex items-center gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              {
                name: "GitHub",
                icon: <BsGithub size={30} />,
                url: personalData.github,
                bg: "bg-gray-800/40 backdrop-blur-md border border-gray-500/30",
              },
              {
                name: "LinkedIn",
                icon: <BsLinkedin size={30} />,
                url: personalData.linkedIn,
                bg: "bg-blue-600/40 backdrop-blur-md border border-blue-300/30",
              },
              {
                name: "LeetCode",
                icon: <SiLeetcode size={30} />,
                url: personalData.leetcode,
                bg: "bg-gradient-to-br from-yellow-500/40 to-black/40 backdrop-blur-md border border-yellow-400/30",
              },
              {
                name: "Twitter",
                icon: <FaTwitterSquare size={30} />,
                url: personalData.twitter,
                bg: "bg-sky-500/40 backdrop-blur-md border border-sky-400/30",
              },
            ].map(({ name, icon, url, bg }, index) => (
              <motion.div key={index} variants={slideUp} className={iconHoverStyles}>
                <Link href={url} target="_blank" className="w-full h-full flex items-center justify-center group relative">
                  {/* Glass Background */}
                  <motion.div
                    className={`absolute inset-0 ${bg} rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0 shadow-lg`}
                  />

                  {/* Icon + Label */}
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 flex flex-col items-center justify-center gap-1"
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <div className="relative overflow-hidden h-5">
                      <span className="text-sm text-white transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-medium">
                        {name}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
