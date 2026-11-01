import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let step = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 1. PARTIKEL GELEMBUNG BULAT PUTIH (Selalu ada di kedua mode)
    const bubblesCount = 20;
    const bubbles = [];

    for (let i = 0; i < bubblesCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.6,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }

    // 2. METEOR PUTIH (Selalu ada di kedua mode)
    const meteors = [
      {
        x: Math.random() * canvas.width * 0.5,
        y: -50,
        length: Math.random() * 60 + 40,
        speedX: Math.random() * 3 + 2,
        speedY: Math.random() * 3 + 2,
        opacity: 0.7,
        active: false,
        timer: Math.random() * 200 + 100,
      }
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cek apakah saat ini sedang dalam Mode Terang (Light Mode)
      const isLightMode = 
        document.documentElement.classList.contains("light") || 
        document.body.classList.contains("light") ||
        document.documentElement.getAttribute("data-theme") === "light" ||
        localStorage.getItem("theme") === "light";

      // Jika Light Mode aktif -> warna-warni muncul (opacity = 1)
      // Jika Dark Mode aktif -> warna-warni dihilangkan (opacity = 0)
      const colorOpacity = isLightMode ? 1 : 0;

      step += 0.008;

      // --- 3. EFEK GELOMBANG CAHAYA WARNA (Hanya muncul jika mode terang) ---
      if (colorOpacity > 0) {
        const x1 = canvas.width * 0.25 + Math.sin(step) * 120;
        const y1 = canvas.height * 0.3 + Math.cos(step * 0.8) * 80;
        const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, canvas.width * 0.45);
        grad1.addColorStop(0, `rgba(220, 38, 38, ${0.22 * colorOpacity})`);
        grad1.addColorStop(0.5, `rgba(147, 51, 234, ${0.12 * colorOpacity})`);
        grad1.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const x2 = canvas.width * 0.7 - Math.sin(step * 0.9) * 150;
        const y2 = canvas.height * 0.4 + Math.sin(step * 0.7) * 100;
        const grad2 = ctx.createRadialGradient(x2, y2, 20, x2, y2, canvas.width * 0.5);
        grad2.addColorStop(0, `rgba(168, 85, 247, ${0.2 * colorOpacity})`);
        grad2.addColorStop(0.6, `rgba(126, 34, 206, ${0.1 * colorOpacity})`);
        grad2.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // --- RENDER GELEMBUNG BULAT PUTIH (Selalu Jalan) ---
      bubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.shadowBlur = 3;
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        ctx.fill();

        b.y += b.speedY;
        b.x += b.speedX;

        if (b.y < -5) {
          b.y = canvas.height + 5;
          b.x = Math.random() * canvas.width;
        }
        if (b.x > canvas.width) b.x = 0;
        if (b.x < 0) b.x = canvas.width;
      });

      // --- RENDER METEOR PUTIH (Selalu Jalan) ---
      meteors.forEach((m) => {
        if (!m.active) {
          m.timer--;
          if (m.timer <= 0) {
            m.active = true;
            m.x = Math.random() * (canvas.width * 0.7);
            m.y = -50;
          }
        } else {
          ctx.save();
          const gradient = ctx.createLinearGradient(m.x, m.y, m.x - m.speedX * 15, m.y - m.speedY * 15);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(255, 255, 255, 0.9)";

          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - m.speedX * 12, m.y - m.speedY * 12);
          ctx.stroke();
          ctx.restore();

          m.x += m.speedX;
          m.y += m.speedY;

          if (m.x > canvas.width + 100 || m.y > canvas.height + 100) {
            m.active = false;
            m.timer = Math.random() * 400 + 250;
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;