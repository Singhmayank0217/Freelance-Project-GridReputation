import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const ServiceList = ({ services }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10")}>
      {services.map((service, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
      {children}
    </h4>
  );
};

const CardDescription = ({ children }) => {
  return (
    <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
      {children}
    </p>
  );
};

export default ServiceList;
