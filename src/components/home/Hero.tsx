import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineFileText, AiOutlinePicture, AiOutlineRobot } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { RiMovie2Line, RiShareBoxLine } from "react-icons/ri";
import { MdMicOff, MdOutlineTextDecrease, MdSummarize } from "react-icons/md";
import { FaBookOpen, FaEraser, FaMagic, FaMicrophoneAlt, FaPodcast, FaRobot } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { VscFileCode } from "react-icons/vsc";
import { BookAIcon } from 'lucide-react';


// === HEXAGON BACKGROUND ===
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
      const color1 = isDark ? `rgba(6,182,212,${prog})` : `rgba(255,255,255,${prog})`;
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

{/* Impornant */}
const ToolsSection: React.FC = () => {
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

  // Selected important AI tools
  const importantTools = [
    { name: "AI Writer", icon: <AiOutlineFileText />, position: { top: "15%", left: "8%" }, size: "medium" },
    { name: "Image Generator", icon: <AiOutlinePicture />, position: { top: "35%", right: "12%" }, size: "medium" },
    { name: "Code Assistant", icon: <VscFileCode />, position: { top: "15%", left: "75%" }, size: "medium" },
    { name: "Voice Cloner", icon: <FaMicrophoneAlt />, position: { top: "80%", right: "5%" }, size: "medium" },
    { name: "AI Chatbot", icon: <FaRobot />, position: { top: "40%", left: "5%" }, size: "medium" },
    { name: "Prompt Designer", icon: <GiBrain />, position: { top: "65%", right: "15%" }, size: "medium" },
    { name: "Content Summarizer", icon: <MdSummarize />, position: { top: "20%", right: "50%" }, size: "medium" },
    { name: "Video Scripts", icon: <RiMovie2Line />, position: { top: "80%", left: "8%" }, size: "medium" },
      { name: "Background remover", icon: <FaEraser />, position: { top: "65%", left: "25%" }, size: "medium" },

  ];

//   const importantTools = [
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
//   { name: "Multimedia bot builder", icon: <AiOutlineRobot />, position: { top: "52%", left: "25%" }, size: "medium" },
//   { name: "API reference", icon: <FaBookOpen />, position: { top: "38%", right: "25%" }, size: "small" }
// ];

  const getToolSize = (s: string) => ({
    large: "w-32 h-32 p-7",
    medium: "w-16 h-16 p-2 sm:w-24 sm:h-24 sm:p-3 md:w-28 md:h-28 md:p-6",
    small: "w-24 h-24 p-5"
  }[s] || "w-28 h-28 p-6");

  const getIconSize = (s: string) => ({
    large: "text-5xl",
    medium: "text-2xl sm:text-4xl",
    small: "text-3xl"
  }[s] || "text-4xl");

  return (
     <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-screen py-20 sm:py-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center"
    >
      <HexagonBackground isActive={isActive} cursor={cursor} />

      {/* Text Content - Higher z-index */}
      <div className="relative z-30 w-full max-w-4xl mx-auto text-center space-y-2 sm:space-y-4  px-4 pointer-events-none">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200 leading-tight">
          Powerful AI Tools</h2>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-tight bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            For Modern Creators
          {/* </span> */}
        </h2>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
          Access the most advanced AI tools to boost your productivity and creativity.
        </p>
      </div>

      {/* Tools Container */}
      <div className="absolute inset-0 z-20">
        {importantTools.map((tool, idx) => {
          const parallax = 0.05 + (idx % 4) * 0.02;
          const isHovered = hoveredTool === tool.name;
          return (
            <div
              key={tool.name}
              className="absolute transition-all duration-500 group"
              style={{
                ...tool.position,
                transform: `translateY(${scrollY * parallax}px) translateX(${Math.sin(scrollY * 0.01 + idx) * 10}px)`,
                zIndex: isHovered ? 25 : 20,
              }}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              onClick={() => setHoveredTool(tool.name)}
            >
              <div className={`
                ${getToolSize(tool.size)} rounded-2xl sm:rounded-3xl border shadow-lg
                transition-all duration-500 ease-out animate-float cursor-pointer
                ${isHovered
                  ? 'bg-gradient-to-br from-purple-500 to-blue-500 scale-110 sm:scale-125 shadow-xl sm:shadow-2xl dark:from-purple-600 dark:to-blue-700'
                  : 'bg-white/80 border-gray-200 hover:bg-white/90 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:bg-gray-700/90'
                }
              `} style={{ 
                animationDelay: `${idx * 0.2}s`, 
                animationDuration: `${4 + (idx % 3)}s`,
                pointerEvents: 'auto' // Ensure tools are clickable
              }}>
                {!isHovered ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className={`${getIconSize(tool.size)} text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors`}>
                      {tool.icon}
                    </div>
                    <div className="text-center mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
                      {tool.name}
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2 sm:p-4">
                    <div className={`${getIconSize(tool.size)} mb-1 sm:mb-2`}>{tool.icon}</div>
                    <div className="text-xs sm:text-sm font-bold text-center">{tool.name}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolsSection;


{/* Optionally */}
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

//       <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4">
//         <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200">
//           Powerful AI Tools<br />
//           <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//             For Modern Creators
//           </span>
//         </h2>
//         <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
//           Access the most advanced AI tools to boost your productivity and creativity.
//         </p>
//       </div>

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
