import { motion } from "framer-motion";
import { AlertTriangle, ArrowDown } from "lucide-react";

const problems = [
  "Atendimentos bagunçados sem histórico nem rastreabilidade",
  "Um número de WhatsApp travando toda a equipe",
  "Sem visibilidade real dos indicadores de atendimento",
  "Dados espalhados sem relatório consolidado",
];

const ProblemsSection = () => (
  <section className="py-20 bg-surface">
    <div className="container max-w-3xl">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Sua operação ainda enfrenta esses desafios?
      </motion.h2>

      <div className="mt-12 space-y-4">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 bg-card rounded-lg p-5 border-l-4 border-destructive/60 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AlertTriangle size={20} className="text-destructive mt-0.5 shrink-0" />
            <p className="text-foreground">{p}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ArrowDown size={32} className="mx-auto text-primary mb-4 animate-bounce" />
        <p className="text-xl md:text-2xl font-bold text-primary">
          O Gestor360° transforma isso em operação inteligente.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemsSection;
