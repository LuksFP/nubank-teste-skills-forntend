"use client";

import { useEffect, useRef } from "react";

interface CardDef {
  id: number;
  x: number;        // vw start position
  y: number;        // vh start position
  size: number;     // width in px
  rotation: number; // initial deg
  speed: number;    // animation duration s
  direction: "right" | "left" | "up" | "diagonal-r" | "diagonal-l";
  delay: number;    // animation delay s
  opacity: number;
  variant: "standard" | "ultra" | "dark" | "ghost";
}

const cards: CardDef[] = [
  { id: 1,  x: -8,   y: 12,  size: 180, rotation: -15, speed: 22, direction: "diagonal-r", delay: 0,    opacity: 0.18, variant: "ultra"    },
  { id: 2,  x: 105,  y: 30,  size: 140, rotation: 12,  speed: 28, direction: "left",        delay: 3,    opacity: 0.12, variant: "standard" },
  { id: 3,  x: -5,   y: 55,  size: 200, rotation: -8,  speed: 35, direction: "diagonal-r", delay: 7,    opacity: 0.10, variant: "dark"     },
  { id: 4,  x: 90,   y: 70,  size: 160, rotation: 20,  speed: 25, direction: "diagonal-l", delay: 1,    opacity: 0.15, variant: "ghost"    },
  { id: 5,  x: 20,   y: -10, size: 120, rotation: -25, speed: 30, direction: "up",          delay: 5,    opacity: 0.12, variant: "ultra"    },
  { id: 6,  x: 70,   y: 5,   size: 150, rotation: 10,  speed: 20, direction: "diagonal-l", delay: 9,    opacity: 0.14, variant: "standard" },
  { id: 7,  x: -10,  y: 80,  size: 170, rotation: -5,  speed: 38, direction: "right",       delay: 14,   opacity: 0.09, variant: "dark"     },
  { id: 8,  x: 108,  y: 50,  size: 130, rotation: 18,  speed: 24, direction: "left",        delay: 6,    opacity: 0.13, variant: "ultra"    },
  { id: 9,  x: 40,   y: 110, size: 190, rotation: -12, speed: 32, direction: "up",          delay: 11,   opacity: 0.08, variant: "ghost"    },
  { id: 10, x: 55,   y: -5,  size: 145, rotation: 22,  speed: 27, direction: "diagonal-r", delay: 4,    opacity: 0.11, variant: "standard" },
  { id: 11, x: -8,   y: 40,  size: 160, rotation: -18, speed: 33, direction: "right",       delay: 16,   opacity: 0.10, variant: "ultra"    },
  { id: 12, x: 102,  y: 85,  size: 120, rotation: 8,   speed: 21, direction: "diagonal-l", delay: 2,    opacity: 0.16, variant: "dark"     },
];

const gradients = {
  standard: "linear-gradient(135deg, #1C0032 0%, #3B0066 50%, #5F0A9A 100%)",
  ultra:    "linear-gradient(135deg, #0d0020 0%, #1C0032 35%, #5F0A9A 70%, #820AD1 100%)",
  dark:     "linear-gradient(135deg, #0a0014 0%, #1C0032 100%)",
  ghost:    "linear-gradient(135deg, rgba(130,10,209,0.15) 0%, rgba(95,10,154,0.08) 100%)",
};

const borderColors = {
  standard: "rgba(212,180,255,0.15)",
  ultra:    "rgba(212,180,255,0.25)",
  dark:     "rgba(130,10,209,0.12)",
  ghost:    "rgba(212,180,255,0.3)",
};

function MiniCard({ card }: { card: CardDef }) {
  const w = card.size;
  const h = Math.round(w * 0.628); // standard card ratio

  const animName = `float-card-${card.id}`;
  const keyframes = getKeyframes(card.direction, animName);

  return (
    <>
      <style>{`
        @keyframes ${animName} { ${keyframes} }
      `}</style>
      <div
        className="absolute pointer-events-none select-none"
        style={{
          left: `${card.x}vw`,
          top: `${card.y}vh`,
          width: w,
          height: h,
          animation: `${animName} ${card.speed}s linear ${card.delay}s infinite`,
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <div
          className="w-full h-full rounded-2xl relative overflow-hidden"
          style={{
            background: gradients[card.variant],
            border: `1px solid ${borderColors[card.variant]}`,
            opacity: card.opacity,
            transform: `rotate(${card.rotation}deg)`,
            boxShadow: card.variant !== "ghost"
              ? "0 8px 32px rgba(130,10,209,0.2)"
              : "none",
          }}
        >
          {/* Holographic sheen */}
          {card.variant !== "ghost" && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.06) 50%, transparent 75%)",
                animation: `shimmer-card ${card.speed * 0.4}s linear ${card.delay}s infinite`,
              }}
            />
          )}

          {/* Card content — simplified */}
          <div className="p-3 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span
                className="font-black tracking-widest"
                style={{
                  fontSize: Math.max(8, w * 0.06),
                  color: card.variant === "ghost" ? "rgba(212,180,255,0.6)" : "rgba(255,255,255,0.5)",
                }}
              >
                nubank
              </span>
              {card.variant !== "ghost" && (
                <svg width={w * 0.18} height={w * 0.11} viewBox="0 0 36 22" aria-hidden="true">
                  <circle cx="13" cy="11" r="10" fill="rgba(220,0,80,0.4)" />
                  <circle cx="23" cy="11" r="10" fill="rgba(255,140,0,0.4)" />
                </svg>
              )}
            </div>

            {/* Chip */}
            {card.variant !== "ghost" && w > 130 && (
              <div
                style={{
                  width: w * 0.18,
                  height: w * 0.13,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, rgba(200,168,0,0.5), rgba(255,215,0,0.4))",
                }}
              />
            )}

            <div>
              {w > 140 && (
                <div
                  className="font-mono mb-1"
                  style={{
                    fontSize: Math.max(6, w * 0.05),
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.12em",
                  }}
                >
                  •••• •••• ••••
                </div>
              )}
              {card.variant === "ultra" && w > 150 && (
                <div
                  style={{
                    fontSize: Math.max(6, w * 0.045),
                    color: "rgba(212,180,255,0.5)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Ultravioleta
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getKeyframes(direction: CardDef["direction"], name: string): string {
  const travel = "120vw";
  const travelUp = "120vh";

  switch (direction) {
    case "right":
      return `
        0%   { transform: translateX(0)         translateY(0); }
        100% { transform: translateX(${travel}) translateY(0); }
      `;
    case "left":
      return `
        0%   { transform: translateX(0)          translateY(0); }
        100% { transform: translateX(-${travel}) translateY(0); }
      `;
    case "up":
      return `
        0%   { transform: translateX(0) translateY(0); }
        100% { transform: translateX(0) translateY(-${travelUp}); }
      `;
    case "diagonal-r":
      return `
        0%   { transform: translateX(0)         translateY(0); }
        100% { transform: translateX(${travel}) translateY(-60vh); }
      `;
    case "diagonal-l":
      return `
        0%   { transform: translateX(0)          translateY(0); }
        100% { transform: translateX(-${travel}) translateY(-60vh); }
      `;
    default:
      return `0% { transform: none; } 100% { transform: translateX(120vw); }`;
  }
}

interface Props {
  count?: number;
  className?: string;
}

export default function FloatingCards({ count, className = "" }: Props) {
  const subset = count ? cards.slice(0, count) : cards;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {subset.map((card) => (
        <MiniCard key={card.id} card={card} />
      ))}
    </div>
  );
}
