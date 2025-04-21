'use client';

import { services } from "@/utils/data/services";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import serviceAnimation from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { motion } from "framer-motion";
import { slideLeft, staggerContainer } from "@/utils/animations";

function Services() {
  return (
    <div id="services" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Section background */}
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-semibold">
            SERVICES
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Lottie Animation */}
          <div className="flex justify-center items-start">
            <AnimationLottie animationPath={serviceAnimation} />
          </div>

          {/* Right: Service Cards with staggered slideLeft */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {services.map((svc) => (
              <motion.div key={svc.id} variants={slideLeft}>
                <GlowCard identifier={`service-${svc.id}`}>
                  <div className="p-3 relative">
                    {/* Blur background */}
                    <Image
                      src="/blur-23.svg"
                      alt="Blur background"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />

                    {/* Icon + Text */}
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {svc.title}
                        </p>
                        <p className="text-sm sm:text-base whitespace-pre-line">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
