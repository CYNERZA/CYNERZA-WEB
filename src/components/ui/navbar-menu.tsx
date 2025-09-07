import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";



const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    className
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    className?: string

}
) => {
    const isActive = active === item;
    return (
        <div onMouseEnter={() => setActive(item)} className={`relative ${className}`}>
            <motion.p
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="
          relative z-10 font-semibold transition-colors duration-300
          text-sm sm:text-base px-1 py-2 rounded-md text-slate-900 dark:text-slate-200 
          hover:text-white hover:bg-cynerza-purple/80 hover:shadow-md dark:hover:bg-cynerza-purple/80 dark:hover:text-white
        "
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && children && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform sm:-translate-x-1/2 
                         -translate-x-20 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-gray-950/70 dark:bg-black/70 backdrop-blur-md rounded-2xl overflow-hidden border
                 border-black/[0.2] dark:border-white/[0.2] shadow-xl "
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-black/[0.2] bg-transparent 
      backdrop-blur-md dark:border-white/[0.2] shadow-input flex justify-between items-center 
      px-4 sm:px-8 py-2 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href?: string;
    src?: string;
}) => {
    return (
        <Link to={href} className="flex space-x-2">
            {src && <img
                src={src}
                width={140}
                height={70}
                alt={title}
                className="lg:w-28 lg:h-16 xl:w-40 xl:h-24 shrink-0 rounded-md shadow-2xl"
            />}
            <div className="p-2 md:mb-0">
                <h4 className="truncate text-sm max-w-[10rem] font-bold text-white">
                    {title}
                </h4>
                <p className="truncate text-sm max-w-[10rem] text-neutral-300 ">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, to, className }: any) => {
    return (
        <NavLink
            to={to}
            className={
                ({ isActive }) => `${isActive && "  border-b-2 border-cynerza-purple"} ${className} py-1
                `}
        >
            <span className=" text-center text-neutral-200 
     cursor-pointer font-semibold transition-all duration-300
    text-sm sm:font-medium px-3 py-2  rounded-md   hover:text-white hover:bg-cynerza-purple/80 hover:shadow-md dark:hover:bg-cynerza-purple/80 dark:hover:text-white`}
">
                {children}
            </span>
            {/* {children} */}


        </NavLink>
    );
};


