import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HoverEffect } from "../ui/card-hover-effect";
import { motion } from "framer-motion"

/**
 * CloudDevOpsEngineering.tsx
 * - Requires Tailwind CSS in your project
 * - Paste into your components folder and import where needed
 */

interface CloudDevOpsSolutionType {
    id: number;
    name: string;
}

const CloudDevOpsEngineering: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const navigate = useNavigate()
    const cloudDevOpsCapabilities = [
        {
            title: "Multi-Cloud Architecture",
            description: "Design and implement scalable solutions across AWS, Azure, and Google Cloud platforms."
        },
        {
            title: "Monitoring & Observability",
            description: "Comprehensive monitoring, logging, and alerting systems for complete system visibility."
        },
        {
            title: "Disaster Recovery",
            description: "Automated backup, disaster recovery, and business continuity planning solutions."
        }
    ];
    const extendedDevOpsServices = [
        {
            title: "Microservices Design",
            description: "Scalable microservices architecture with API gateways and service mesh."
        },
        {
            title: "Auto-Scaling Solutions",
            description: "Dynamic resource scaling based on demand and performance metrics."
        },
        {
            title: "Cost Optimization",
            description: "Cloud resource optimization and cost management strategies."
        },
        {
            title: "DevSecOps Integration",
            description: "Security integrated throughout the development and deployment lifecycle."
        }
    ];

    const cloudDevOpsSolutionTypes: CloudDevOpsSolutionType[] = [
        { id: 1, name: "Cloud Architecture & Migration" },
        { id: 2, name: "DevOps Pipeline Automation" },
        { id: 3, name: "Container Orchestration & Kubernetes" },
        { id: 4, name: "Infrastructure as Code (IaC)" },
        { id: 5, name: "CI/CD Implementation" },
        { id: 6, name: "Cloud Security & Compliance" }
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        const dpr = Math.max(1, window.devicePixelRatio || 1);
        let rafId = 0;

        // Function to detect if dark mode is active
        const isDarkMode = () => {
            return document.documentElement.classList.contains('dark') ||
                window.matchMedia('(prefers-color-scheme: dark)').matches;
        };

        // animated blobs config - Updated colors for Cloud & DevOps theme
        type Blob = {
            cx: number;
            cy: number;
            rx: number; // radius x
            ry: number; // radius y
            speed: number;
            angle: number;
            hue: number;
            amp: number;
            phase: number;
        };

        const blobs: Blob[] = [
            // large sky blue -> azure blob for cloud theme
            { cx: 0, cy: 0, rx: 260, ry: 180, speed: 0.0005, angle: 0, hue: 210, amp: 80, phase: 0 },
            // medium orange -> amber blob for DevOps/automation theme
            { cx: 0, cy: 0, rx: 160, ry: 120, speed: 0.0008, angle: Math.PI, hue: 35, amp: 60, phase: 1.3 },
            // small emerald -> green highlight for infrastructure theme
            { cx: 0, cy: 0, rx: 110, ry: 80, speed: 0.0012, angle: Math.PI / 2, hue: 140, amp: 40, phase: 2.1 },
        ];

        const resize = () => {
            w = canvas.offsetWidth;
            h = canvas.offsetHeight;
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // position blobs near right side (like screenshot)
            const centerX = w * 0.78;
            const centerY = h * 0.55;
            blobs.forEach((b, i) => {
                b.cx = centerX + (i - 1) * 30;
                b.cy = centerY + (i - 1) * 10;
            });
        };

        const mouse = { x: -9999, y: -9999, active: false };

        const onMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const onLeave = () => {
            mouse.active = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        // soft gaussian blur drawing helper by layering radial gradients
        const drawBlob = (x: number, y: number, rx: number, ry: number, hue: number, alpha = 1, scale = 1) => {
            const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry) * 1.2 * scale);
            // layered color stops for rich glow
            grad.addColorStop(0, `hsla(${hue} 100% 65% / ${0.95 * alpha})`);
            grad.addColorStop(0.25, `hsla(${(hue + 30) % 360} 95% 55% / ${0.55 * alpha})`);
            grad.addColorStop(0.55, `hsla(${(hue + 120) % 360} 80% 35% / ${0.18 * alpha})`);
            grad.addColorStop(1, `hsla(${(hue + 160) % 360} 70% 25% / ${0.02 * alpha})`);

            ctx.beginPath();
            ctx.fillStyle = grad as any;
            // draw ellipse by scaling context
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(1, ry / rx); // approximate ellipse
            ctx.arc(0, 0, rx * scale, 0, Math.PI * 2);
            ctx.restore();
            ctx.fill();
        };

        const render = (t: number) => {
            // Dynamic background based on theme (keeping same background)
            const baseGrad = ctx.createLinearGradient(0, 0, w, h);

            if (isDarkMode()) {
                // Dark theme - gray-950 equivalent
                baseGrad.addColorStop(0, "#030712");
                baseGrad.addColorStop(1, "#0f1419");
            } else {
                // Light theme - white background
                baseGrad.addColorStop(0, "#ffffff");
                baseGrad.addColorStop(1, "#f8fafc");
            }

            ctx.fillStyle = baseGrad;
            ctx.fillRect(0, 0, w, h);

            // Adjust vignette based on theme
            if (isDarkMode()) {
                // subtle vignette darkening toward left to emphasize right glow
                ctx.fillStyle = "rgba(0,0,0,0.22)";
                ctx.fillRect(0, 0, w * 0.5, h);
            } else {
                // Light vignette for light theme
                ctx.fillStyle = "rgba(0,0,0,0.05)";
                ctx.fillRect(0, 0, w * 0.5, h);
            }

            // update and draw blobs
            blobs.forEach((b, i) => {
                // floating motion (orbit + wobble)
                b.angle += b.speed * (1 + Math.sin(t * 0.0002 + b.phase) * 0.6);
                const wobbleX = Math.cos(t * (0.0008 + i * 0.0001) + b.phase) * b.amp;
                const wobbleY = Math.sin(t * (0.0009 + i * 0.00015) + b.phase) * (b.amp * 0.55);

                // mouse attraction (subtle)
                let mx = 0;
                let my = 0;
                if (mouse.active) {
                    const dx = mouse.x - b.cx;
                    const dy = mouse.y - b.cy;
                    const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
                    const pull = Math.max(0, 1 - dist / Math.max(w, h));
                    mx = dx * 0.04 * pull;
                    my = dy * 0.04 * pull;
                }

                const px = b.cx + Math.cos(b.angle) * 10 + wobbleX + mx;
                const py = b.cy + Math.sin(b.angle * 0.9) * 8 + wobbleY + my;

                // draw multiple layered passes for depth
                drawBlob(px, py, b.rx * 1.05, b.ry * 1.05, b.hue, 0.9, 1.6); // outer haze
                drawBlob(px, py, b.rx * 0.85, b.ry * 0.85, b.hue, 1.0, 1.05); // mid
                drawBlob(px, py, b.rx * 0.45, b.ry * 0.45, (b.hue + 10) % 360, 1.0, 0.45); // core highlight
            });

            // Adjust rim brightness based on theme
            ctx.globalCompositeOperation = "lighter";
            const rimOpacity = isDarkMode() ? 0.02 + 0.005 * Math.sin(t * 0.003) : 0.01 + 0.003 * Math.sin(t * 0.003);
            ctx.fillStyle = `rgba(255,255,255,${rimOpacity})`;
            ctx.fillRect(w * 0.68, h * 0.2, w * 0.35, h * 0.7);
            ctx.globalCompositeOperation = "source-over";

            rafId = requestAnimationFrame(render);
        };

        const start = () => {
            resize();
            window.addEventListener("resize", resize);
            canvas.addEventListener("mousemove", onMove);
            canvas.addEventListener("mouseleave", onLeave);
            rafId = requestAnimationFrame(render);
        };

        start();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <section className="py-2 w-full flex flex-col items-center bg-white dark:bg-gray-950 transition-colors duration-300 overflow-x-hidden">
            {/* Hero Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
                    {/* Left: Text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                        <div className="max-w-full">
                            <div className="mb-6 sm:mb-8">
                                <h1
                                    className="py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight font-extralight break-words"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(245,158,11,1) 45%, rgba(34,197,94,1) 100%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Cloud & DevOps Engineering
                                </h1>
                            </div>
                            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300 leading-relaxed">
                                Advanced Cloud Infrastructure & DevOps Engineering Solutions for Modern Enterprises.
                            </p>
                        </div>
                    </div>

                    {/* Right: Animated blob / canvas */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] relative max-w-lg mx-auto lg:max-w-none">
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                                <canvas ref={canvasRef} className="w-full h-full block" />
                            </div>
                            {/* optional soft overlay to match screenshot glow edge */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute -right-10 sm:-right-16 lg:-right-20 bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-40px] w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[420px] h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[420px] rounded-full opacity-10 blur-2xl sm:blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
                        Modern Cloud & DevOps Solutions
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
                            We specialize in comprehensive cloud infrastructure design and DevOps engineering that accelerates
                            software delivery, enhances system reliability, and optimizes operational efficiency. Our expert team
                            architects scalable cloud solutions using AWS, Azure, and GCP while implementing robust DevOps
                            pipelines that automate deployment, monitoring, and infrastructure management for seamless,
                            continuous delivery and maximum system uptime.
                        </p>

                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
                            From cloud migration and containerization to CI/CD automation and infrastructure as code, we deliver
                            enterprise-grade solutions that integrate security, monitoring, and compliance at every layer. Our
                            approach includes microservices architecture, container orchestration with Kubernetes, automated
                            testing, and comprehensive observability, ensuring your applications are resilient, scalable,
                            and optimized for peak performance across multi-cloud environments.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
                        Our Cloud & DevOps Engineering Services
                    </h1>
                </div>

                {/* Services Grid - Fixed responsive grid with equal button sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center">
                    {cloudDevOpsSolutionTypes.map((service) => (
                        <div key={service.id} className="w-full max-w-sm">
                            <div className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 hover:scale-105">
                                <button
                                    onClick={() =>
                                        navigate("#")
                                    }
                                    className="group rounded-full w-full h-24 px-4 py-3 text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:bg-black dark:text-white bg-white text-black flex items-center justify-center text-center leading-tight break-words hyphens-auto"
                                    style={{
                                        minHeight: '6rem',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}
                                >
                                    <span className="block max-w-full">
                                        {service.name}
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Cloud & DevOps Features Section */}
                <div className="mt-16 sm:mt-20 lg:mt-24">
                    <div className="text-center lg:text-left mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-slate-200 font-light">
                            Advanced Cloud & DevOps Capabilities
                        </h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 1 * 0.05 }}
                        layout
                        className="rounded-lg">
                        <HoverEffect
                            items={cloudDevOpsCapabilities}
                            className=''
                        />
                    </motion.div>
                </div>

                {/* Additional Services Grid */}
                <div className="mt-16 sm:mt-20 lg:mt-24">
                    <div className="text-center lg:text-left mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-slate-900 dark:text-slate-200 mb-6 sm:mb-8 font-light">
                            Extended DevOps Services
                        </h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 1 * 0.05 }}
                        layout
                        className="rounded-lg">
                        <HoverEffect
                            items={extendedDevOpsServices}
                            className=''
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CloudDevOpsEngineering;
