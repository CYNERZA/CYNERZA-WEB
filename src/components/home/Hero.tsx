// import React, { useEffect, useRef, useState } from 'react';
// import { AiOutlineFileText, AiOutlinePicture, AiOutlineRobot } from "react-icons/ai";
// import { FiCopy } from "react-icons/fi";
// import { RiMovie2Line, RiShareBoxLine } from "react-icons/ri";
// import { MdMicOff, MdOutlineTextDecrease, MdSummarize } from "react-icons/md";
// import { FaBookOpen, FaEraser, FaMagic, FaMicrophoneAlt, FaPodcast, FaRobot } from "react-icons/fa";
// import { GiBrain } from "react-icons/gi";
// import { VscFileCode } from "react-icons/vsc";
// import { BookAIcon } from 'lucide-react';
// import SmokeyBackground from '../lightswind/smokey-background';


// // === HEXAGON BACKGROUND ===
interface Cursor { x: number; y: number; }
interface Hex { x: number; y: number; prog: number; lastTrigger: number; }
interface HexProps { isActive: boolean; cursor: Cursor; }
const HexagonBackground: React.FC<HexProps> = ({ isActive, cursor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hexagonsRef = useRef<Hex[]>([]);

  // Generate grid only once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const baseSize = window.innerWidth < 768 ? 40 : 120;
    const spacing = 1.1;
    const hexSize = baseSize;
    const hexHeight = Math.sqrt(3) * hexSize * spacing;
    const vertDist = hexHeight;
    const horizDist = hexSize * 1.5 * spacing;
    const cols = Math.ceil(canvas.offsetWidth / horizDist) + 2;
    const rows = Math.ceil(canvas.offsetHeight / vertDist) + 2;
    const hexs: Hex[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * horizDist;
        const y = r * vertDist + (c % 2 ? vertDist / 2 : 0);
        hexs.push({ x, y, prog: 0, lastTrigger: -Infinity });
      }
    }
    hexagonsRef.current = hexs;
  }, []);

  // Record trigger time for nearest two
  useEffect(() => {
    if (!isActive) return;
    const now = performance.now();
    const range = 100;
    const maxActive = 2;
    const hexs = hexagonsRef.current;
    const dists = hexs.map(h => ({ h, d: Math.hypot(cursor.x - h.x, cursor.y - h.y) }));
    const near = dists.filter(o => o.d < range).sort((a, b) => a.d - b.d).slice(0, maxActive);
    near.forEach(o => (o.h.lastTrigger = now));
  }, [cursor.x, cursor.y, isActive]);

  // Animate hexagons
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const baseSize = window.innerWidth < 768 ? 40 : 120;
    const spacing = 1.1;
    const hexSize = baseSize;
    const perimeter = 6 * hexSize;
    const fadeDelay = 1500;

    const drawHexagon = (h: Hex) => {
      const { x, y, prog } = h;
      // same animation, different colors per mode
      const isDark = document.documentElement.classList.contains('dark');
      const color1 = isDark ? `rgba(59,130,246,${prog})` : `rgba(200,200,200,${prog})`;
      const color2 = isDark ? `rgba(59,130,246,${prog})` : `rgba(200,200,200,${prog})`;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const ang = (Math.PI / 3) * i;
        const px = x + hexSize * Math.cos(ang);
        const py = y + hexSize * Math.sin(ang);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.setLineDash([perimeter]);
      ctx.lineDashOffset = perimeter * (1 - prog);
      // radial gradient for full coverage
      const grad = ctx.createRadialGradient(x, y, 0, x, y, hexSize);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.shadowColor = color1;
      ctx.shadowBlur = 10 * prog;
      ctx.stroke();
      ctx.setLineDash([]);
    };

    let animId: number;
    const animate = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hexagonsRef.current.forEach(h => {
        const age = now - h.lastTrigger;
        const target = age < fadeDelay ? 1 : 0;
        h.prog += (target - h.prog) * 0.1;
        if (h.prog > 0.01) drawHexagon(h);
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isActive]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// {/* Impornant */ }
// const ToolsSection: React.FC = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [hoveredTool, setHoveredTool] = useState<string | null>(null);
//   const [isActive, setIsActive] = useState(false);
//   const [cursor, setCursor] = useState<Cursor>({ x: -Infinity, y: -Infinity });

//   useEffect(() => {
//     const onScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const handleMouseEnter = () => setIsActive(true);
//   const handleMouseLeave = () => {
//     setIsActive(false);
//     setCursor({ x: -Infinity, y: -Infinity });
//   };
// const handleMouseMove = (e: React.MouseEvent) => {
//   const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
//   setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
// };

//   // Selected important AI tools
//   const importantTools = [
//     { name: "AI Writer", icon: <AiOutlineFileText />, position: { top: "15%", left: "8%" }, size: "medium" },
//     { name: "Image Generator", icon: <AiOutlinePicture />, position: { top: "35%", right: "12%" }, size: "medium" },
//     { name: "Code Assistant", icon: <VscFileCode />, position: { top: "15%", left: "75%" }, size: "medium" },
//     { name: "Voice Cloner", icon: <FaMicrophoneAlt />, position: { top: "80%", right: "5%" }, size: "medium" },
//     { name: "AI Chatbot", icon: <FaRobot />, position: { top: "40%", left: "5%" }, size: "medium" },
//     { name: "Prompt Designer", icon: <GiBrain />, position: { top: "65%", right: "15%" }, size: "medium" },
//     { name: "Content Summarizer", icon: <MdSummarize />, position: { top: "20%", right: "50%" }, size: "medium" },
//     { name: "Video Scripts", icon: <RiMovie2Line />, position: { top: "80%", left: "8%" }, size: "medium" },
//     { name: "Background remover", icon: <FaEraser />, position: { top: "65%", left: "25%" }, size: "medium" },

//   ];

//   //   const importantTools = [
//   //   { name: "Blog writer", icon: <AiOutlineFileText />, position: { top: "12%", left: "8%" }, size: "large" },
//   //   { name: "Ad copy generator", icon: <FiCopy />, position: { top: "18%", right: "12%" }, size: "medium" },
//   //   { name: "Script creator", icon: <RiMovie2Line />, position: { top: "8%", left: "75%" }, size: "medium" },
//   //   { name: "Summariser", icon: <MdSummarize />, position: { top: "35%", left: "5%" }, size: "small" },
//   //   { name: "AI Image Generator", icon: <AiOutlinePicture />, position: { top: "45%", right: "8%" }, size: "medium" },
//   //   { name: "Background remover", icon: <FaEraser />, position: { top: "65%", left: "15%" }, size: "small" },
//   //   { name: "Image enhancer", icon: <FaMagic />, position: { top: "28%", left: "50%" }, size: "large" },
//   //   { name: "Text to speech", icon: <MdOutlineTextDecrease />, position: { top: "75%", right: "20%" }, size: "medium" },
//   //   { name: "Voice cloner", icon: <FaMicrophoneAlt />, position: { top: "82%", left: "65%" }, size: "small" },
//   //   { name: "Noise remover", icon: <MdMicOff />, position: { top: "58%", left: "70%" }, size: "medium" },
//   //   { name: "AI code generator", icon: <VscFileCode />, position: { top: "42%", left: "40%" }, size: "small" },
//   //   { name: "Chatbot creator", icon: <FaRobot />, position: { top: "78%", left: "40%" }, size: "medium" },
//   //   { name: "Prompt designer", icon: <GiBrain />, position: { top: "25%", right: "30%" }, size: "small" },
//   //   { name: "Podcast generator", icon: <FaPodcast />, position: { top: "88%", right: "35%" }, size: "small" },
//   //   { name: "Social media posts", icon: <RiShareBoxLine />, position: { top: "68%", right: "40%" }, size: "medium" },
//   //   { name: "Multimedia bot builder", icon: <AiOutlineRobot />, position: { top: "52%", left: "25%" }, size: "medium" },
//   //   { name: "API reference", icon: <FaBookOpen />, position: { top: "38%", right: "25%" }, size: "small" }
//   // ];

//   const getToolSize = (s: string) => ({
//     large: "w-32 h-32 p-7",
//     medium: "w-16 h-16 p-2 sm:w-24 sm:h-24 sm:p-3 md:w-28 md:h-28 md:p-6",
//     small: "w-24 h-24 p-5"
//   }[s] || "w-28 h-28 p-6");

//   const getIconSize = (s: string) => ({
//     large: "text-5xl",
//     medium: "text-2xl sm:text-4xl",
//     small: "text-3xl"
//   }[s] || "text-4xl");

//   return (
//   <section
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//     onMouseMove={handleMouseMove}
//     className="relative overflow-hidden min-h-screen py-20 sm:py-40 flex items-center justify-center"
//   >
//     {/* SmokeyBackground -> સૌથી પાછળ (બેચગ્રાઉન્ડ) */}
//     <div className="absolute inset-0 z-0 pointer-events-none">
//       {/* <SmokeyBackground
//         backdropBlurAmount="lg"
//         color="#2A2382"
//         className="rounded-xl w-full h-full"
//       /> */}

//       <iframe src="https://framer.com/m/UnicornStudioEmbed-wWy9.js"
//        allowFullScreen
//        >

//        </iframe>


//     </div>

//     {/* HexagonBackground -> Smokey ઉપર */}
// <div className="absolute inset-0 z-10 pointer-events-none">
//   <HexagonBackground isActive={isActive} cursor={cursor} />
// </div>

//     {/* Text Content - Perfectly Centered (સફળ સાથે મથાળું ઉપર) */}
//     <div className="absolute z-20 left-1/2 top-1/2 px-4 w-full max-w-3xl transform -translate-x-1/2 -translate-y-1/2 text-center">
//       <h2 className="text-4xl md:text-5xl font-heading mb-2 lg:text-6xl font-bold text-slate-200 leading-tight">
//         Powerful AI Tools
//       </h2>
//       <h2 className="text-4xl md:text-5xl font-bold font-heading mb-2 text-slate-900 leading-tight bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//         For Modern Creators
//       </h2>
//       <p className="text-lg sm:text-xl text-gray-300">
//         Access the most advanced AI tools to boost your productivity and creativity.
//       </p>
//     </div>

//     {/* જો તમે tools કન્ટેનર બતાવવા માંગો તો uncomment કરી શકો છો,
//         છતાં પણ તેને z-20 અથવા વધુ આપો જેથી ટેક્સ્ટ કે બેકગ્રાઉન્ડ નીચે ન જાય. */}
//   </section>

//   );
// };

// export default ToolsSection;


{/* Optionally */ }
// const ToolsSection: React.FC = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [hoveredTool, setHoveredTool] = useState<string | null>(null);
//   const [isActive, setIsActive] = useState(false);
//   const [cursor, setCursor] = useState<Cursor>({ x: -Infinity, y: -Infinity });

//   useEffect(() => {
//     const onScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

// const handleMouseEnter = () => setIsActive(true);
// const handleMouseLeave = () => {
//   setIsActive(false);
//   setCursor({ x: -Infinity, y: -Infinity });
// };
//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
//     setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   // Selected important AI tools
//   const importantTools = [
//     { name: "AI Writer", icon: <AiOutlineFileText />, position: { top: "15%", left: "5%" }, size: "medium" },
//     { name: "Image Generator", icon: <AiOutlinePicture />, position: { top: "15%", right: "5%" }, size: "medium" },
//     { name: "Code Assistant", icon: <VscFileCode />, position: { top: "35%", left: "5%" }, size: "medium" },
//     { name: "Voice Cloner", icon: <FaMicrophoneAlt />, position: { top: "35%", right: "5%" }, size: "medium" },
//     { name: "AI Chatbot", icon: <FaRobot />, position: { top: "60%", left: "5%" }, size: "medium" },
//     { name: "Prompt Designer", icon: <GiBrain />, position: { top: "60%", right: "5%" }, size: "medium" },
//     { name: "Content Summarizer", icon: <MdSummarize />, position: { top: "80%", right: "5%" }, size: "medium" },
//     { name: "Video Scripts", icon: <RiMovie2Line />, position: { top: "80%", left: "5%" }, size: "medium" },
//   ];

//   const getToolSize = (s: string) => ({
//     large: "w-32 h-32 p-7",
//     medium: "w-16 h-16 p-2 sm:w-24 sm:h-24 sm:p-3 md:w-28 md:h-28 md:p-6",
//     small: "w-24 h-24 p-5"
//   }[s] || "w-28 h-28 p-6");

//   const getIconSize = (s: string) => ({
//     large: "text-5xl",
//     medium: "text-2xl sm:text-4xl",
//     small: "text-3xl"
//   }[s] || "text-4xl");

//   return (
//     <section
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onMouseMove={handleMouseMove}
//       className="relative overflow-hidden min-h-screen py-20 sm:py-40 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center"
//     >
//       <HexagonBackground isActive={isActive} cursor={cursor} />

// <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4">
//   <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200">
//     Powerful AI Tools<br />
//     <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//       For Modern Creators
//     </span>
//   </h2>
//   <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
//     Access the most advanced AI tools to boost your productivity and creativity.
//   </p>
// </div>

//       <div className="absolute inset-0">
//         {importantTools.map((tool, idx) => {
//           const parallax = 0.05 + (idx % 4) * 0.02;
//           const isHovered = hoveredTool === tool.name;
//           return (
//             <div
//               key={tool.name}
//               className="absolute transition-all duration-500 cursor-pointer group"
//               style={{
//                 ...tool.position,
//                 transform: `translateY(${scrollY * parallax}px) translateX(${Math.sin(scrollY * 0.01 + idx) * 10}px)`,
//                 zIndex: isHovered ? 50 : 10,
//               }}
//               onMouseEnter={() => setHoveredTool(tool.name)}
//               onMouseLeave={() => setHoveredTool(null)}
//             >
//               <div className={`
//                 ${getToolSize(tool.size)} rounded-2xl sm:rounded-3xl backdrop-blur-sm border shadow-lg
//                 transition-all duration-500 ease-out animate-float
//                 ${isHovered
//                   ? 'bg-gradient-to-br from-purple-500 to-blue-500 scale-110 sm:scale-125 shadow-xl sm:shadow-2xl dark:from-purple-600 dark:to-blue-700'
//                   : 'bg-white/80 border-gray-200 hover:bg-white/90 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:bg-gray-700/90'
//                 }
//               `} style={{
//                 animationDelay: `${idx * 0.2}s`,
//                 animationDuration: `${4 + (idx % 3)}s`
//               }}>
//                 {!isHovered ? (
//                   <div className="flex flex-col items-center justify-center h-full">
//                     <div className={`${getIconSize(tool.size)} text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors`}>
//                       {tool.icon}
//                     </div>
//                     <div className="text-center mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
//                       {tool.name}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2 sm:p-4">
//                     <div className={`${getIconSize(tool.size)} mb-1 sm:mb-2`}>{tool.icon}</div>
//                     <div className="text-xs sm:text-sm font-bold text-center">{tool.name}</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ToolsSection

// const tools = [
//   { name: "Blog writer", icon: <AiOutlineFileText />, position: { top: "12%", left: "8%" }, size: "large" },
//   { name: "Ad copy generator", icon: <FiCopy />, position: { top: "18%", right: "12%" }, size: "medium" },
//   { name: "Script creator", icon: <RiMovie2Line />, position: { top: "8%", left: "75%" }, size: "medium" },
//   { name: "Summariser", icon: <MdSummarize />, position: { top: "35%", left: "5%" }, size: "small" },
//   { name: "AI Image Generator", icon: <AiOutlinePicture />, position: { top: "45%", right: "8%" }, size: "medium" },
//   { name: "Background remover", icon: <FaEraser />, position: { top: "65%", left: "15%" }, size: "small" },
//   { name: "Image enhancer", icon: <FaMagic />, position: { top: "28%", left: "50%" }, size: "large" },
//   { name: "Text to speech", icon: <MdOutlineTextDecrease />, position: { top: "75%", right: "20%" }, size: "medium" },
//   { name: "Voice cloner", icon: <FaMicrophoneAlt />, position: { top: "82%", left: "65%" }, size: "small" },
//   { name: "Noise remover", icon: <MdMicOff />, position: { top: "58%", left: "70%" }, size: "medium" },
//   { name: "AI code generator", icon: <VscFileCode />, position: { top: "42%", left: "40%" }, size: "small" },
//   { name: "Chatbot creator", icon: <FaRobot />, position: { top: "78%", left: "40%" }, size: "medium" },
//   { name: "Prompt designer", icon: <GiBrain />, position: { top: "25%", right: "30%" }, size: "small" },
//   { name: "Podcast generator", icon: <FaPodcast />, position: { top: "88%", right: "35%" }, size: "small" },
//   { name: "Social media posts", icon: <RiShareBoxLine />, position: { top: "68%", right: "40%" }, size: "medium" },
//   { name: "Brand book generator", icon: <BsBook />, position: { top: "15%", left: "25%" }, size: "small" },
//   { name: "Multimedia bot builder", icon: <AiOutlineRobot />, position: { top: "52%", left: "25%" }, size: "medium" },
//   { name: "API reference", icon: <FaBookOpen />, position: { top: "38%", right: "25%" }, size: "small" }
// ];



import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HeaderSection: React.FC = () => {

  const [scrollY, setScrollY] = useState(0);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [cursor, setCursor] = useState<Cursor>({ x: -Infinity, y: -Infinity });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => {
    setIsActive(false);
    setCursor({ x: -Infinity, y: -Infinity });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };


  return (
    // <section className="relative pb-20 py-20 sm:py-40 overflow-hidden">
    //   <img
    //     className="absolute top-0 right-0 w-52 md:w-auto"
    //     src="./star-background-header.png"
    //     alt=""
    //   />
    //   <img
    //     className="absolute top-0 right-0 mt-10 mr-10"
    //     src="./light-orange-blue-1.png"
    //     alt=""
    //   />
    //   <img
    //     className="absolute top-0 right-0 -mr-10 sm:-mr-0 mt-64 md:mt-125 lg:mt-88 xl:mt-112 h-32 md:h-60 lg:h-88 animate-moveHand"
    //     src="./robot-hand-header.png"
    //     alt=""
    //   />

    //   <div className="relative container px-4 mx-auto">
    //     <div className="max-w-xl xl:max-w-4xl">
    //       <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 mb-8 sm:mb-14">
    //         <span>  Powerful AI Tools  For Modern </span>{" "}
    //         <span className="font-serif italic ">Creators</span>
    //       </h1>
    //       <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
    //         <div className="mb-6 md:mb-0 md:mr-8 pt-3">
    //           <svg
    //             width="84"
    //             height="10"
    //             viewBox="0 0 84 10"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
    //               fill="#1E254C"
    //             ></path>
    //           </svg>
    //         </div>
    //         <div className="max-w-md">
    //           <p className="md:text-xl text-gray-900 font-semibold">
    //            Access the most advanced AI tools to boost your productivity and creativity.

    //           </p>
    //         </div>
    //       </div>
    //       <a
    //         className="relative group inline-block w-full sm:w-auto py-4 px-6 mb-24 text-white font-semibold rounded-md bg-orange-900 overflow-hidden"
    //         href="#"
    //       >
    //         <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
    //         <div className="relative flex items-center justify-center">
    //           <span className="mr-4">Meet The Expert</span>
    //           <span>
    //             <svg
    //               width="8"
    //               height="12"
    //               viewBox="0 0 8 12"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
    //                 fill="#FFF2EE"
    //               ></path>
    //             </svg>
    //           </span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="lg:flex">
    //       <div className="max-w-2xl mb-20 lg:mb-0 lg:mr-32">
    //         <span className="block mb-6 text-sm font-semibold text-gray-500">
    //           TRUSTED BY BIG COMPANIES
    //         </span>
    //         <div className="flex items-center -mx-4">
    //           <div className="w-1/3 px-4">
    //             <img
    //               className="block"
    //               src="saturn-assets/logos/brands/logo-example3.png"
    //               alt=""
    //             />
    //           </div>
    //           <div className="w-1/3 px-4">
    //             <img
    //               className="block"
    //               src="saturn-assets/logos/brands/logo-example2.png"
    //               alt=""
    //             />
    //           </div>
    //           <div className="w-1/3 px-4">
    //             <img
    //               className="block"
    //               src="saturn-assets/logos/brands/logo-example1.png"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="relative lg:-mt-20 w-full max-w-md">
    //         <img
    //           className="absolute top-0 left-0 w-full"
    //           src="saturn-assets/images/headers/bg-folder.svg"
    //           alt=""
    //         />
    //         <div className="relative flex flex-col  bg-orange-50 rounded-3xl">
    //           <div className=" py-5 z-10">
    //             <h3 className="text-xl font-semibold text-gray-900 text-center">
    //               We are building the future together
    //             </h3>
    //           </div>
    //           <div className="mt-10 px-5 xs:px-10 pb-12 pt-18">
    //             <div className="flex items-center">
    //               <div>
    //                 <span className="text-3xl xs:text-5xl font-semibold text-gray-900">
    //                   18k+
    //                 </span>
    //                 <span className="block text-sm text-gray-500">
    //                   Projects Done
    //                 </span>
    //               </div>
    //               <div className="h-12 w-px mx-auto bg-orange-200"></div>
    //               <div>
    //                 <span className="text-3xl xs:text-5xl font-semibold text-gray-900">
    //                   20+
    //                 </span>
    //                 <span className="block text-sm text-gray-500">
    //                   Awards Winning
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </section>

    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative pb-0 pt-24 sm:py-40 overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <HexagonBackground isActive={isActive} cursor={cursor} />
      </div>
      <img
        className="absolute top-0 right-0 w-52 md:w-auto z-20"
        src="./star-background-header.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0 mt-10 mr-10 z-20"
        src="./light-orange-blue-1.png"
        alt=""
      />
      <img
        className="absolute z-20 top-0 right-0 -mr-10 sm:-mr-0 mt-64 md:mt-125 lg:mt-88 xl:mt-112 h-32 md:h-60 lg:h-88 animate-moveHand"
        src="./robot-hand-header.png"
        alt=""
      />

      <div className="relative container px-4 mx-auto z-20">
        <div className="max-w-xl xl:max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-14">
            <span>Powerful AI Tools For Modern </span>{" "}
            <span className="">Creators</span>
          </h1>
          <div className="md:flex mb-8 max-w-xs sm:max-w-sm md:max-w-none">
            <div className="mb-2 md:mb-0 md:mr-8 pt-3">
              <svg
                width="84"
                height="10"
                viewBox="0 0 84 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:fill-gray-300"
              >
                <path
                  d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                  fill="#1E254C"
                  className="dark:fill-gray-300"
                ></path>
              </svg>
            </div>
            <div className="max-w-md">
              <p className="md:text-xl text-gray-900 dark:text-gray-300 font-semibold">
                Access the most advanced AI tools to boost your productivity and creativity.
              </p>
            </div>
          </div>
          <Link
            to={"https://tools.cynerza.com"}
            className="relative group inline-block w-full sm:w-auto py-4 px-6 mb-10 text-white font-semibold rounded-md bg-orange-900 overflow-hidden hover:bg-orange-800 dark:bg-orange-700 dark:hover:bg-orange-600 transition-colors duration-300"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 dark:bg-gray-700 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <div className="relative flex items-center justify-center">
              <span className="mr-4">Get Started Now</span>
              <span>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
                    fill="#FFF2EE"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:flex-row  items-center justify-center flex-col">
          {/* <div className="max-w-2xl mb-10 lg:mb-0 lg:mr-32">
            <span className="block mb-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
              TRUSTED BY BIG COMPANIES
            </span>
            <div className="flex items-center -mx-4">
              <div className="w-1/3 px-4">
                <img
                  className="block"
                  src="./logo-example3.png"
                  alt=""
                />
              </div>
              <div className="w-1/3 px-4">
                <img
                  className="block"
                  src="./logo-example2.png"
                  alt=""
                />
              </div>
              <div className="w-1/3 px-4">
                <img
                  className="block"
                  src="./logo-example1.png"
                  alt=""
                />
              </div>
            </div>
          </div> */}
          <div className="relative lg:-mt-20 w-full max-w-md">
            <div className="relative flex flex-col bg-orange-50 dark:bg-gray-800 rounded-3xl transition-colors duration-500">
              <div className="py-5 px-4 z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                  We are building the future together
                </h3>
              </div>
              <div className="mt-10 px-5 xs:px-10 pb-12 pt-18">
                <div className="flex items-center">
                  <div>
                    <span className="text-3xl xs:text-5xl font-semibold text-gray-900 dark:text-gray-100">
                      18k+
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Projects Done
                    </span>
                  </div>
                  <div className="h-12 w-px mx-auto bg-orange-200 dark:bg-orange-700"></div>
                  <div>
                    <span className="text-3xl xs:text-5xl font-semibold text-gray-900 dark:text-gray-100">
                      20+
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Awards Winning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default HeaderSection;
