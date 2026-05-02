"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Programs() {
  const programs = [
    {
      title: "Beginner Flow",
      image: "/images/story-transform.png",
      position: "object-[42%_center]",
      copy: "Find your foundation. Gentle movements and basic postures to start your journey.",
    },
    {
      title: "Power Yoga",
      image: "/images/story-balance.png",
      position: "object-center",
      copy: "Build steady strength with focused breath, controlled transitions, and energizing holds.",
    },
    {
      title: "Meditation",
      image: "/images/story-breathe.png",
      position: "object-[58%_center]",
      copy: "Reset your mind through calm guidance, breathwork, and mindful stillness.",
    },
    {
      title: "Weight Loss",
      image: "/images/story-breathe.png",
      position: "object-[68%_center]",
      copy: "Active metabolism. High-intensity flows to burn calories and tone muscles.",
    },
  ];

  return (
    <section id="programs" className="fade-up bg-[#0d1728] px-4 py-8 text-white md:px-9 md:py-9">
      <div className="mb-24 text-center">
        <h2 className="font-serif text-6xl leading-none md:text-[82px]">
          Our Programs
        </h2>
        <div className="mx-auto mt-8 h-1 w-30 rounded-full bg-[#8b5cf6]" />
      </div>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative h-[555px] overflow-hidden rounded-[20px]"
          >
            <Image
              src={program.image}
              alt={`${program.title} yoga program`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className={`object-cover transition duration-700 group-hover:scale-105 ${program.position}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5" />
            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

            <div className="absolute inset-x-0 bottom-0 translate-y-[116px] p-10 text-left transition duration-500 group-hover:translate-y-0">
              <h3 className="font-serif text-[31px] leading-none">
                {program.title}
              </h3>

              <div className="my-8 h-px w-full bg-white/20 opacity-0 transition duration-500 group-hover:opacity-100" />
              <p className="max-w-[330px] text-xl font-medium leading-7 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                {program.copy}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
