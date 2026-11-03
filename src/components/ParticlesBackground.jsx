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

    // 1. PARTIKEL GELEMBUNG BULAT PUTIH
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

    // 2. METEOR PUTIH (3 Buah Roket)
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
      },
      {
        x: Math.random() * canvas.width * 0.7,
        y: -80,
        length: Math.random() * 50 + 30,
        speedX: Math.random() * 2.5 + 1.5,
        speedY: Math.random() * 2.5 + 1.5,
        opacity: 0.5,
        active: false,
        timer: Math.random() * 300 + 150,
      },
      {
        x: Math.random() * canvas.width * 0.3,
        y: -30,
        length: Math.random() * 70 + 40,
        speedX: Math.random() * 3.5 + 2,
        speedY: Math.random() * 3.5 + 2,
        opacity: 0.6,
        active: false,
        timer: Math.random() * 250 + 120,
      }
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cek apakah mode gelap sedang aktif
      const isDarkMode = document.documentElement.classList.contains("dark");

      step += 0.005;

      // --- 3. EFEK AURORA (Hanya muncul jika BUKAN mode gelap / isDarkMode bernilai false) ---
      if (!isDarkMode) {
        const x1 = canvas.width * 0.25 + Math.sin(step) * 140;
        const y1 = canvas.height * 0.3 + Math.cos(step * 0.8) * 90;
        const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, canvas.width * 0.5);
        grad1.addColorStop(0, "rgba(16, 185, 129, 0.15)");
        grad1.addColorStop(0.5, "rgba(6, 182, 212, 0.08)");
        grad1.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const x2 = canvas.width * 0.75 - Math.sin(step * 0.9) * 160;
        const y2 = canvas.height * 0.5 + Math.sin(step * 0.7) * 110;
        const grad2 = ctx.createRadialGradient(x2, y2, 20, x2, y2, canvas.width * 0.55);
        grad2.addColorStop(0, "rgba(5, 150, 105, 0.12)");
        grad2.addColorStop(0.6, "rgba(14, 116, 144, 0.05)");
        grad2.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // --- RENDER GELEMBUNG BULAT PUTIH ---
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

      // --- RENDER METEOR / ROKET PUTIH ---
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