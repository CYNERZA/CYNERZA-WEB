// === HEXAGON BACKGROUND ===


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Cursor { x: number; y: number; }
interface Hex { x: number; y: number; prog: number; lastTrigger: number; }
interface HexProps { isActive: boolean; cursor: Cursor; }

// const HexagonBackground: React.FC<HexProps> = ({ isActive, cursor }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const hexagonsRef = useRef<Hex[]>([]);

//   // Generate grid only once
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const baseSize = window.innerWidth < 768 ? 40 : 120;
//     const spacing = 1.1;
//     const hexSize = baseSize;
//     const hexHeight = Math.sqrt(3) * hexSize * spacing;
//     const vertDist = hexHeight;
//     const horizDist = hexSize * 1.5 * spacing;
//     const cols = Math.ceil(canvas.offsetWidth / horizDist) + 2;
//     const rows = Math.ceil(canvas.offsetHeight / vertDist) + 2;
//     const hexs: Hex[] = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const x = c * horizDist;
//         const y = r * vertDist + (c % 2 ? vertDist / 2 : 0);
//         hexs.push({ x, y, prog: 0, lastTrigger: -Infinity });
//       }
//     }
//     hexagonsRef.current = hexs;
//   }, []);

//   // Record trigger time for nearest two
//   useEffect(() => {
//     if (!isActive) return;
//     const now = performance.now();
//     const range = 100;
//     const maxActive = 2;
//     const hexs = hexagonsRef.current;
//     const dists = hexs.map(h => ({ h, d: Math.hypot(cursor.x - h.x, cursor.y - h.y) }));
//     const near = dists.filter(o => o.d < range).sort((a, b) => a.d - b.d).slice(0, maxActive);
//     near.forEach(o => (o.h.lastTrigger = now));
//   }, [cursor.x, cursor.y, isActive]);

//   // Animate hexagons
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const baseSize = window.innerWidth < 768 ? 40 : 120;
//     const spacing = 1.1;
//     const hexSize = baseSize;
//     const perimeter = 6 * hexSize;
//     const fadeDelay = 1500;

//     const drawHexagon = (h: Hex) => {
//       const { x, y, prog } = h;
//       const isDark = document.documentElement.classList.contains('dark');

//       // Light mode માં dark colors, Dark mode માં bright colors
//       const color1 = isDark 
//         ? `rgba(59,130,246,${prog})` // Dark mode - blue
//         : `rgba(30,30,30,${prog * 0.8})`; // Light mode - dark gray
//       const color2 = isDark 
//         ? `rgba(147,51,234,${prog})` // Dark mode - purple  
//         : `rgba(60,60,60,${prog * 0.6})`; // Light mode - medium gray

//       ctx.beginPath();
//       for (let i = 0; i < 6; i++) {
//         const ang = (Math.PI / 3) * i;
//         const px = x + hexSize * Math.cos(ang);
//         const py = y + hexSize * Math.sin(ang);
//         i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
//       }
//       ctx.closePath();
//       ctx.setLineDash([perimeter]);
//       ctx.lineDashOffset = perimeter * (1 - prog);

//       // Radial gradient for full coverage
//       const grad = ctx.createRadialGradient(x, y, 0, x, y, hexSize);
//       grad.addColorStop(0, color1);
//       grad.addColorStop(1, color2);

//       ctx.strokeStyle = grad;
//       ctx.lineWidth = isDark ? 2 : 1.5; // Light mode માં થોડી thin line
//       ctx.shadowColor = color1;
//       ctx.shadowBlur = isDark ? 10 * prog : 5 * prog; // Light mode માં ઓછું blur
//       ctx.stroke();
//       ctx.setLineDash([]);
//     };

//     let animId: number;
//     const animate = () => {
//       const now = performance.now();
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       hexagonsRef.current.forEach(h => {
//         const age = now - h.lastTrigger;
//         const target = age < fadeDelay ? 1 : 0;
//         h.prog += (target - h.prog) * 0.1;
//         if (h.prog > 0.01) drawHexagon(h);
//       });
//       animId = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener('resize', resize);
//     };
//   }, [isActive]);

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
// };


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
      const isDark = document.documentElement.classList.contains('dark');
      const isMobile = window.innerWidth < 768;

      // Light mode માં dark colors, Dark mode માં bright colors
      const color1 = isDark
        ? `rgba(59,130,246,${prog})` // Dark mode - blue
        : `rgba(30,30,30,${prog * 0.8})`; // Light mode - dark gray
      const color2 = isDark
        ? `rgba(147,51,234,${prog})` // Dark mode - purple  
        : `rgba(60,60,60,${prog * 0.6})`; // Light mode - medium gray

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

      // Radial gradient for full coverage
      const grad = ctx.createRadialGradient(x, y, 0, x, y, hexSize);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);

      ctx.strokeStyle = grad;

      // Mobile devices માં border width thin કરો
      if (isMobile) {
        ctx.lineWidth = isDark ? 1 : 0.8; // Mobile માં thin border
      } else {
        ctx.lineWidth = isDark ? 2 : 1.5; // Desktop માં normal border
      }

      ctx.shadowColor = color1;
      ctx.shadowBlur = isDark ? 10 * prog : 5 * prog;
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
      className="relative pb-10 sm:pb-6 pt-24 sm:py-40 overflow-hidden transition-colors duration-500">

      {/* Purple gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />

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
          <h1 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-14 leading-tight">
            <span>Driving growth with </span>
            <span >
              cutting-edge technology
            </span>
            <span>, expertise, and digital transformation</span>
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
      
      </div>
    </section>


  );
}

export default HeaderSection;
