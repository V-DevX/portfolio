'use client';

import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "../../../assets/lottie/study.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { motion } from "framer-motion";
import { slideUp, slideRight, staggerContainer } from "@/utils/animations";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Section background */}
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Divider line + animated title */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <motion.span
            className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-semibold"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Educations
          </motion.span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie Animation: mobile first, desktop second */}
          <div className="order-1 lg:order-2 flex justify-center items-start">
            <div className="w-3/4 h-3/4 transform -scale-x-100">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Cards: mobile second, desktop first, with staggered slideRight */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <motion.div key={education.id} variants={slideRight}>
                  <GlowCard identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      {/* Blur background */}
                      <Image
                        src="/blur-23.svg"
                        alt="Blur background"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />

                      {/* Duration */}
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>

                      {/* Icon, Title & Institution */}
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Education;
