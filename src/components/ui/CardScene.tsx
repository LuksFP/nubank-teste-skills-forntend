"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Notification {
  id: number;
  icon: string;
  label: string;
  value: string;
  color: string;
  x: string;
  y: string;
  delay: number;
}

const notifications: Notification[] = [
  { id: 1, icon: "↑",  label: "Pix recebido",    value: "+R$ 500",   color: "#22c55e", x: "-30%", y: "10%",  delay: 0    },
  { id: 2, icon: "★",  label: "Cashback",         value: "+R$ 12,80", color: "#A855F7", x: "108%", y: "25%",  delay: 800  },
  { id: 3, icon: "✓",  label: "Compra aprovada",  value: "R$ 89,90",  color: "#D4B4FF", x: "105%", y: "65%",  delay: 1600 },
  { id: 4, icon: "📈", label: "Rendimento",       value: "+R$ 2,80",  color: "#34d399", x: "-28%", y: "72%",  delay: 2400 },
];

export default function CardScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [hovered, setHovered] = useState(false);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });
  const [visibleNotes, setVisibleNotes] = useState<number[]>([]);

  // Show notifications one by one
  useEffect(() => {
    const timers = notifications.map((n) =>
      setTimeout(() => setVisibleNotes((prev) => [...prev, n.id]), n.delay + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // 3D tilt on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !cardRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    const rotX = -dy * 18;
    const rotY = dx * 18;

    // Sheen position follows cursor
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setSheenPos({ x: px, y: py });

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.04,1.04,1.04)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setSheenPos({ x: 50, y: 50 });
    cancelAnimationFrame(rafRef.current);
    if (cardRef.current) {
      cardRef.current.style.transition =
        "transform 0.7s cubic-bezier(0.34,1.56,0.64,1)";
      cardRef.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.12s ease-out";
    }
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center"
      style={{ height: "420px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at ${sheenPos.x}% ${sheenPos.y}%, rgba(130,10,209,0.45), transparent 70%)`,
          transition: hovered ? "none" : "all 0.6s ease",
          filter: "blur(30px)",
        }}
      />

      {/* Back card — static offset */}
      <div
        className="absolute rounded-[22px]"
        style={{
          width: "300px",
          height: "185px",
          background: "linear-gradient(135deg, #3B0066 0%, #5F0A9A 100%)",
          top: "calc(50% - 85px)",
          left: "calc(50% - 158px)",
          transform: "rotate(-6deg) translateX(-8px) translateY(10px)",
          opacity: 0.55,
          boxShadow: "0 20px 50px rgba(63,0,102,0.4)",
        }}
      />

      {/* Ultra card — peeking */}
      <div
        className="absolute rounded-[22px]"
        style={{
          width: "300px",
          height: "185px",
          background: "linear-gradient(135deg, #1C0032 0%, #3B0066 40%, #5F0A9A 100%)",
          top: "calc(50% - 95px)",
          left: "calc(50% - 145px)",
          transform: "rotate(-2.5deg) translateX(6px) translateY(5px)",
          opacity: 0.7,
          boxShadow: "0 20px 50px rgba(28,0,50,0.4)",
        }}
      >
        <div className="absolute top-4 right-5 text-[10px] font-bold tracking-widest"
          style={{ color: "#D4B4FF" }}>ULTRAVIOLETA</div>
      </div>

      {/* MAIN CARD */}
      <div
        ref={cardRef}
        className="relative rounded-[22px] overflow-hidden cursor-pointer"
        style={{
          width: "300px",
          height: "185px",
          background: "linear-gradient(135deg, #1C0032 0%, #3B0066 45%, #5F0A9A 100%)",
          boxShadow: hovered
            ? "0 35px 70px rgba(130,10,209,0.65), 0 0 0 1px rgba(212,180,255,0.2)"
            : "0 25px 55px rgba(130,10,209,0.45)",
          transformStyle: "preserve-3d",
          transition: "box-shadow 0.3s ease",
          zIndex: 10,
        }}
      >
        {/* Holographic sheen — follows mouse */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at ${sheenPos.x}% ${sheenPos.y}%, rgba(255,255,255,0.12), transparent 70%)`,
            transition: hovered ? "none" : "all 0.6s ease",
            mixBlendMode: "screen",
          }}
        />

        {/* Animated shimmer sweep */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 60%, transparent 80%)",
            animation: "shimmer-card 3.5s linear infinite",
          }}
        />

        {/* Card content */}
        <div className="relative p-5 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-black text-[13px] tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.65)" }}>
              nubank
            </span>
            <svg width="44" height="26" viewBox="0 0 44 26">
              <circle cx="16" cy="13" r="12" fill="rgba(220,0,80,0.55)" />
              <circle cx="28" cy="13" r="12" fill="rgba(255,140,0,0.55)" />
            </svg>
          </div>

          {/* Chip */}
          <div
            className="w-9 h-7 rounded-md"
            style={{ background: "linear-gradient(135deg, #b8900a, #FFD700)", opacity: 0.88 }}
          />

          <div>
            <div className="font-mono text-[13px] tracking-[0.22em] mb-3"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              •••• •••• •••• 1234
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Titular</div>
                <div className="text-white text-xs font-semibold mt-0.5">SEU NOME AQUI</div>
              </div>
              <div className="text-right">
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Validade</div>
                <div className="text-white text-xs font-semibold mt-0.5">12/30</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification chips */}
      {notifications.map((n) => {
        const isLeft = n.x.startsWith("-");
        const topMap: Record<string, string> = {
          "10%": "18%", "25%": "28%", "65%": "62%", "68%": "62%", "72%": "70%",
        };
        const topPos = topMap[n.y] ?? n.y;
        return (
          <div
            key={n.id}
            className="absolute rounded-2xl px-3 py-2.5 flex items-center gap-2.5 shadow-xl"
            style={{
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(14px)",
              [isLeft ? "left" : "right"]: "calc(50% + 136px)",
              top: topPos,
              opacity: visibleNotes.includes(n.id) ? 1 : 0,
              transform: visibleNotes.includes(n.id) ? "scale(1) translateY(0)" : "scale(0.75) translateY(8px)",
              transition: "opacity 0.55s cubic-bezier(0.34,1.56,0.64,1), transform 0.55s cubic-bezier(0.34,1.56,0.64,1)",
              zIndex: 20,
              minWidth: "152px",
              pointerEvents: "none",
            }}
          >
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold"
              style={{ background: `${n.color}20`, color: n.color }}
            >
              {n.icon}
            </div>
            <div>
              <div className="text-[10px] text-gray-400 leading-none mb-0.5 font-medium">{n.label}</div>
              <div className="text-xs font-black leading-none" style={{ color: n.color }}>{n.value}</div>
            </div>
          </div>
        );
      })}

      {/* Sparkle particles */}
      {hovered && [
        { x: "22%", y: "18%", size: 5, delay: 0 },
        { x: "78%", y: "22%", size: 4, delay: 150 },
        { x: "15%", y: "80%", size: 6, delay: 300 },
        { x: "82%", y: "75%", size: 4, delay: 80 },
        { x: "50%", y: "8%",  size: 5, delay: 220 },
        { x: "55%", y: "88%", size: 3, delay: 400 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: "#D4B4FF",
            boxShadow: `0 0 ${p.size * 2}px #820AD1`,
            animation: `sparkle 1.2s ${p.delay}ms ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
