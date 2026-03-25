import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, MessageSquare, FileBarChart } from "lucide-react";
import telaDashboard from "@/assets/tela-dashboard.png";
import telaConversas from "@/assets/tela-conversas.png";
import telaRelatorios from "@/assets/tela-relatorios.png";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    image: telaDashboard,
    alt: "Dashboard do Gestor360° com métricas de atendimento, gráficos de mensagens e status do sistema",
  },
  {
    id: "conversas",
    label: "Conversas",
    icon: MessageSquare,
    image: telaConversas,
    alt: "Tela de conversas do WhatsApp com agente Alice respondendo automaticamente",
  },
  {
    id: "relatorios",
    label: "Relatórios",
    icon: FileBarChart,
    image: telaRelatorios,
    alt: "Relatórios com visão geral de conversas, tempo médio, satisfação e leads capturados",
  },
];

const ProductPreview = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <section id="produto" className="py-20 bg-surface">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Interface pensada para quem precisa de agilidade
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border"
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tabs.map(
            (t) =>
              t.id === active && (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden shadow-2xl border bg-card"
                >
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-full h-auto"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Dados reais. Interface limpa. Decisões mais rápidas.
        </p>
      </div>
    </section>
  );
};

export default ProductPreview;
