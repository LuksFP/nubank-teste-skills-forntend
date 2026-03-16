"use client";

import { useState, useRef, useCallback } from "react";

interface Props {
  name?: string;
  number?: string;
  expiry?: string;
  variant?: "standard" | "ultravioleta";
}

export default function FlipCard({
  name = "SEU NOME AQUI",
  number = "1234 5678 9012 3456",
  expiry = "12/30",
  variant = "standard",
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || flipped) return;
    const rect = containerRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: -dy * 14, y: dx * 14 });
      setSheenPos({ x: px, y: py });
    });
  }, [flipped]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: 0, y: 0 });
      setSheenPos({ x: 50, y: 50 });
    });
  }, []);

  const isUltra = variant === "ultravioleta";

  const frontBg = isUltra
    ? "linear-gradient(135deg, #0d0020 0%, #1C0032 30%, #3B0066 60%, #820AD1 100%)"
    : "linear-gradient(135deg, #1C0032 0%, #3B0066 50%, #5F0A9A 100%)";

  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  return (
    <div className="flex flex-col items-center gap-4 select-none">
      {/* Container */}
      <div
        ref={containerRef}
        className="relative cursor-pointer"
        style={{
          width: 340,
          height: 214,
          perspective: "900px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label={`Cartão Nubank ${variant}. Clique para virar e ver o ${flipped ? "frente" : "verso"}.`}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      >
        {/* Inner — flips */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: flipped
              ? "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1.2)"
              : "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: flipped
              ? `perspective(900px) rotateY(180deg)`
              : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${hovered ? 1.04 : 1}, ${hovered ? 1.04 : 1}, 1)`,
          }}
        >
          {/* ══ FRONT ══ */}
          <div
            className="absolute inset-0 rounded-[22px] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: frontBg,
              boxShadow: hovered && !flipped
                ? "0 30px 60px rgba(130,10,209,0.55), 0 0 0 1px rgba(212,180,255,0.2)"
                : "0 20px 48px rgba(130,10,209,0.35)",
            }}
          >
            {/* Holographic layer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 65% 55% at ${sheenPos.x}% ${sheenPos.y}%, rgba(255,255,255,0.13), transparent 70%)`,
                mixBlendMode: "screen",
                transition: hovered ? "none" : "all 0.5s ease",
              }}
            />
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.07) 55%, transparent 80%)",
                animation: "shimmer-card 4s linear infinite",
              }}
            />

            {/* Ultra badge */}
            {isUltra && (
              <div
                className="absolute top-4 right-16 text-[9px] font-black tracking-[0.18em] uppercase"
                style={{ color: "rgba(212,180,255,0.6)" }}
              >
                Ultravioleta
              </div>
            )}

            <div className="p-5 h-full flex flex-col justify-between">
              {/* Row 1 */}
              <div className="flex justify-between items-start">
                <span className="font-black text-[13px] tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  nubank
                </span>
                <svg width="46" height="27" viewBox="0 0 46 27" aria-hidden="true">
                  <circle cx="16" cy="13" r="12" fill="rgba(220,0,80,0.55)" />
                  <circle cx="30" cy="13" r="12" fill="rgba(255,140,0,0.55)" />
                </svg>
              </div>

              {/* Chip */}
              <div
                style={{
                  width: 40,
                  height: 30,
                  borderRadius: 5,
                  background: "linear-gradient(135deg, #b8900a, #FFD700)",
                  opacity: 0.88,
                }}
              />

              {/* Row 3 */}
              <div>
                <div
                  className="font-mono mb-3"
                  style={{ fontSize: 13, letterSpacing: "0.22em", color: "rgba(255,255,255,0.6)" }}
                >
                  {maskedNumber}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.32)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Titular
                    </div>
                    <div className="text-white text-[12px] font-bold mt-0.5">{name.toUpperCase()}</div>
                  </div>
                  <div className="text-right">
                    <div style={{ color: "rgba(255,255,255,0.32)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Validade
                    </div>
                    <div className="text-white text-[12px] font-bold mt-0.5">{expiry}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══ BACK ══ */}
          <div
            className="absolute inset-0 rounded-[22px] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: isUltra
                ? "linear-gradient(135deg, #0d0020 0%, #1C0032 50%, #2a0048 100%)"
                : "linear-gradient(135deg, #1C0032 0%, #2a0048 100%)",
              boxShadow: "0 20px 48px rgba(130,10,209,0.35)",
            }}
          >
            {/* Magnetic stripe */}
            <div
              className="absolute top-10 left-0 right-0 h-10"
              style={{ background: "rgba(0,0,0,0.8)" }}
            />

            {/* Signature strip + CVV */}
            <div className="absolute" style={{ top: 80, left: 20, right: 20 }}>
              <div
                className="h-8 rounded flex items-center justify-between px-3"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {/* Signature lines */}
                <div className="flex flex-col gap-1 flex-1">
                  {[70, 85, 60, 90].map((w, i) => (
                    <div
                      key={i}
                      className="h-0.5 rounded"
                      style={{ width: `${w}%`, background: "rgba(255,255,255,0.15)" }}
                    />
                  ))}
                </div>
                {/* CVV box */}
                <div
                  className="ml-3 px-3 py-1 rounded flex items-center gap-1.5"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>CVV</span>
                  <span className="font-mono font-bold text-white text-sm">•••</span>
                </div>
              </div>
            </div>

            {/* Info text */}
            <div className="absolute" style={{ top: 128, left: 20, right: 20 }}>
              <p style={{ fontSize: 8, color: "rgba(255,255,255,0.2)", lineHeight: 1.6 }}>
                Este cartão é de propriedade do Nubank (Nu Pagamentos S.A.) e seu uso está
                sujeito ao contrato com o titular. Em caso de dúvidas ligue para o número
                no verso ou acesse o app.
              </p>
            </div>

            {/* Nubank logo back */}
            <div
              className="absolute bottom-5 left-5 flex items-center gap-2"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "#820AD1" }}
              >
                <svg width="12" height="12" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12.5c-3.03 0-5.5-2.47-5.5-5.5S5.97 3.5 9 3.5 14.5 5.97 14.5 9 12.03 14.5 9 14.5z" fill="white"/>
                  <circle cx="9" cy="9" r="3" fill="white"/>
                </svg>
              </div>
              <span className="font-black text-[11px] tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>nubank</span>
            </div>

            {/* Mastercard logo back */}
            <div className="absolute bottom-5 right-5">
              <svg width="36" height="22" viewBox="0 0 36 22" aria-hidden="true">
                <circle cx="13" cy="11" r="10" fill="rgba(220,0,80,0.4)" />
                <circle cx="23" cy="11" r="10" fill="rgba(255,140,0,0.4)" />
              </svg>
            </div>

            {isUltra && (
              <div
                className="absolute top-4 left-5 text-[9px] font-black tracking-widest uppercase"
                style={{ color: "rgba(212,180,255,0.45)" }}
              >
                Ultravioleta · Black
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hint */}
      <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
        {flipped ? "← Clique para ver a frente" : "Clique para ver o verso →"}
      </p>
    </div>
  );
}
