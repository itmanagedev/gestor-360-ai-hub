import { motion } from "framer-motion";
import { Smartphone, UserCog, GitBranch, LayoutDashboard } from "lucide-react";

const steps = [
  { icon: Smartphone, title: "Conecte seu WhatsApp", desc: "Vincule seu número em poucos cliques" },
  { icon: UserCog, title: "Configure seus Agentes", desc: "Defina persona, área e regras de cada agente" },
  { icon: GitBranch, title: "Monte os Fluxos", desc: "Crie jornadas automatizadas para cada tipo de atendimento" },
  { icon: LayoutDashboard, title: "Gerencie pelo Dashboard", desc: "Acompanhe tudo em tempo real com relatórios e auditoria" },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Pronto para operar em minutos
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold relative">
              {i + 1}
              <s.icon size={20} className="absolute -bottom-1 -right-1 bg-card rounded-full p-1 text-primary border" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
