import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 393, suffix: "+", label: "Mensagens processadas/semana" },
  { value: 5.0, suffix: "/5", label: "Satisfação média", decimals: 1 },
  { value: 1, suffix: "s", label: "Tempo de primeira resposta" },
  { value: 24, suffix: "/7", label: "Operação contínua" },
];

const AnimatedNumber = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * value;
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const MetricsBar = () => (
  <section className="bg-primary py-12">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <AnimatedNumber value={m.value} suffix={m.suffix} decimals={m.decimals} />
            <p className="mt-2 text-sm text-primary-foreground/80">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsBar;
