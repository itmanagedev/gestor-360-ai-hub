import { motion } from "framer-motion";
import { Briefcase, Headphones, DollarSign, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const agents = [
  { icon: Briefcase, title: "Comercial", desc: "Qualificação, follow-up e fechamento automático" },
  { icon: Headphones, title: "Atendimento", desc: "Triagem, suporte e resolução sem fila" },
  { icon: DollarSign, title: "Financeiro", desc: "Cobranças, boletos e negociações automatizadas" },
  { icon: Settings, title: "Personalizado", desc: "Qualquer processo que sua empresa precisar" },
];

const AgentsSection = () => (
  <section id="agentes" className="py-20 bg-surface">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Agentes de IA para cada área do negócio
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Flexibilidade total. Você define as regras, o nome e a personalidade.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((a, i) => (
          <motion.div
            key={a.title}
            className="bg-card rounded-xl border p-6 text-center hover:border-primary/40 hover:shadow-md transition-all cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <a.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{a.desc}</p>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
              Já disponível
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AgentsSection;
