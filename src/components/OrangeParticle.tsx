import React, { useEffect, useMemo, useRef } from "react";

type Props = {
  className?: string;
  speed?: number;
  blobCount?: number;
  blobRadius?: number;
  intensity?: number;
  colors?: string[];
  grain?: boolean;
  interact?: number;
  topFade?: number;
  maxFps?: number;

  /** NEW: how sharp the mesh lines are */
  meshOpacity?: number;

  /** NEW: how dense the mesh is (lower = more dense) */
  meshStep?: number;

  /** NEW: blur amount for glow */
  blurPx?: number;
};

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3 ? h.split("").map((c) => c + c).join("") : h.padEnd(6, "0").slice(0, 6);
  const num = parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

export default function AuroraMeshFooter({
  className = "",
  speed = 0.35,
  blobCount = 6,
  blobRadius = 380,
  intensity = 0.9,
  colors = ["#ff6a00", "#ffb45c", "#ffffff"],
  grain = false,
  interact = 0.65,
  topFade = 0.55,
  maxFps = 55,

  meshOpacity = 0.18,
  meshStep = 44,
  blurPx = 10,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const palette = useMemo(() => colors, [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = prefersReducedMotion();

    const state = {
      w: 0,
      h: 0,
      dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      t: 0,
      last: performance.now(),
      mouseX: 0.5,
      mouseY: 0.5,
      hasMouse: false,
    };

    const blobs: Blob[] = [];
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function initBlobs() {
      blobs.length = 0;
      for (let i = 0; i < blobCount; i++) {
        blobs.push({
          x: rand(0.05, 0.95),
          y: rand(0.15, 0.95),
          vx: rand(-0.25, 0.25),
          vy: rand(-0.22, 0.22),
          r: blobRadius * rand(0.7, 1.15),
          color: palette[i % palette.length],
        });
      }
    }

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;

      state.w = parent.clientWidth;
      state.h = parent.clientHeight;

      canvas.width = Math.floor(state.w * state.dpr);
      canvas.height = Math.floor(state.h * state.dpr);
      canvas.style.width = `${state.w}px`;
      canvas.style.height = `${state.h}px`;

      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      initBlobs();
    }

    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      state.mouseX = (e.clientX - rect.left) / rect.width;
      state.mouseY = (e.clientY - rect.top) / rect.height;
      state.hasMouse = true;
    }
    function onLeave() {
      state.hasMouse = false;
    }

    function drawMesh() {
      // A crisp “wavy grid” over the glow (this is what removes the “all blur” feeling).
      const step = clamp(meshStep, 26, 90);
      const amp = 10 + 14 * intensity;

      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.lineWidth = 1;

      // subtle alpha that grows near bottom
      for (let y = 0; y <= state.h; y += step) {
        const fade = clamp(y / state.h, 0, 1);
        ctx.globalAlpha = meshOpacity * (0.25 + 0.75 * fade);

        ctx.beginPath();
        for (let x = 0; x <= state.w; x += step) {
          const nx = x / state.w;
          const ny = y / state.h;
          const wobble =
            Math.sin((nx * 6 + state.t * 0.9) * Math.PI) +
            Math.cos((ny * 5 + state.t * 0.7) * Math.PI);

          const mx = (state.mouseX - 0.5) * 2;
          const my = (state.mouseY - 0.5) * 2;

          const pull = state.hasMouse && !reduced ? (interact * 18) : 0;
          const px = x + wobble * amp + mx * pull * (1 - fade);
          const py = y + Math.sin(nx * 8 + state.t) * (amp * 0.55) + my * pull * (1 - fade);

          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        // match your palette’s “primary”
        ctx.strokeStyle = palette[0] ?? "#ff6a00";
        ctx.stroke();
      }

      ctx.restore();
    }

    function draw(now: number) {
      const dtMs = now - state.last;
      const minFrameMs = 1000 / clamp(maxFps, 15, 120);
      if (dtMs < minFrameMs) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      state.last = now;

      const dt = reduced ? 0 : Math.min(0.05, dtMs / 1000);
      state.t += dt * speed;

      ctx.clearRect(0, 0, state.w, state.h);

      // fade mask so it blends into page
      const fade = ctx.createLinearGradient(0, 0, 0, state.h);
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(clamp(topFade, 0, 1), "rgba(0,0,0,1)");
      fade.addColorStop(1, "rgba(0,0,0,1)");

      // glow layer
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = `blur(${clamp(blurPx, 0, 24)}px)`;

      for (const b of blobs) {
        b.x += b.vx * dt * 0.22;
        b.y += b.vy * dt * 0.22;
        if (b.x < -0.1 || b.x > 1.1) b.vx *= -1;
        if (b.y < -0.1 || b.y > 1.1) b.vy *= -1;

        if (!reduced && interact > 0 && state.hasMouse) {
          const dx = state.mouseX - b.x;
          const dy = state.mouseY - b.y;
          const d2 = dx * dx + dy * dy;
          const pull = (interact * 0.14) / (0.12 + d2);
          b.vx += dx * pull * dt;
          b.vy += dy * pull * dt;
          b.vx *= 0.988;
          b.vy *= 0.988;
        }

        const px = b.x * state.w;
        const py = b.y * state.h;
        const radius = b.r * (1 + Math.sin(state.t + b.r * 0.001) * 0.05);

        const { r, g, b: bb } = hexToRgb(b.color);
        const grad = ctx.createRadialGradient(px, py, radius * 0.12, px, py, radius);
        grad.addColorStop(0, `rgba(${r},${g},${bb},${0.28 * intensity})`);
        grad.addColorStop(0.6, `rgba(${r},${g},${bb},${0.14 * intensity})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      ctx.filter = "none";

      // crisp detail layer (key)
      drawMesh();

      // apply fade mask
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, state.w, state.h);
      ctx.restore();

      if (!reduced) rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    canvas.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave, { passive: true });

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [blobCount, blobRadius, blurPx, intensity, interact, maxFps, meshOpacity, meshStep, palette, speed, topFade]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
