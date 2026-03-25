import { motion } from "framer-motion";
import { Users, BarChart3, FileText, Shield, Workflow, Bot } from "lucide-react";

const features = [
  {
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Multi-Atendentes no WhatsApp",
    desc: "Vários agentes simultâneos em 1 número, sem conflito. Cada conversa com histórico completo.",
  },
  {
    icon: BarChart3,
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Dashboard Inteligente",
    desc: "Acompanhe Conversas Ativas, Resolvidas, Mensagens por dia e Entrada vs Respostas em tempo real.",
  },
  {
    icon: FileText,
    color: "text-accent",
    bg: "bg-accent/10",
    title: "Relatórios com Indicadores",
    desc: "Tempo médio de resposta, leads capturados, satisfação média e muito mais. Exporte quando quiser.",
  },
  {
    icon: Shield,
    color: "text-purple",
    bg: "bg-purple/10",
    title: "Auditoria de Atendimentos",
    desc: "Cada conversa registrada, buscável e rastreável. Total controle sobre o que foi dito.",
  },
  {
    icon: Workflow,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Automação com Fluxos",
    desc: "Crie fluxos personalizados para cada jornada. Seu agente trabalha 24/7 sem intervenção humana.",
  },
  {
    icon: Bot,
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Agentes Configuráveis",
    desc: "Comercial, Atendimento, Financeiro e outros. Cada agente com personalidade e regras próprias.",
  },
];

const FeaturesSection = () => (
  <section id="funcionalidades" className="py-20">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Uma plataforma. Controle total.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Do primeiro contato à resolução — tudo centralizado e auditado.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={`w-12 h-12 rounded-lg ${f.bg} flex items-center justify-center mb-4`}>
              <f.icon size={24} className={f.color} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
