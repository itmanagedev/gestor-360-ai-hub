import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, MessageSquare, FileBarChart } from "lucide-react";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    content: (
      <div className="bg-surface rounded-xl p-6 md:p-8 border">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Conversas Ativas", value: "24", color: "border-primary" },
            { label: "Resolvidas", value: "189", color: "border-secondary" },
            { label: "Mensagens", value: "393", color: "border-accent" },
          ].map((c) => (
            <div key={c.label} className={`bg-card rounded-lg p-4 border-l-4 ${c.color}`}>
              <p className="text-xs text-muted-foreground">{c.label}</p>
              <p className="text-2xl font-bold text-foreground mt-1">{c.value}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg p-4 border">
            <p className="text-sm font-semibold text-foreground mb-3">Mensagens por dia</p>
            <div className="flex items-end gap-2 h-32">
              {[40, 55, 35, 70, 85, 60, 45].map((h, i) => (
                <div key={i} className="flex-1 flex gap-0.5">
                  <div className="flex-1 bg-primary/70 rounded-t" style={{ height: `${h}%` }} />
                  <div className="flex-1 bg-secondary/70 rounded-t" style={{ height: `${h * 0.7}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-4 border flex flex-col items-center justify-center">
            <p className="text-sm font-semibold text-foreground mb-4">Entrada vs Respostas</p>
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" className="stroke-primary" strokeWidth="3.8" strokeDasharray="60, 100" />
                <circle cx="18" cy="18" r="15.9" fill="none" className="stroke-secondary" strokeWidth="3.8" strokeDasharray="40, 100" strokeDashoffset="-60" />
              </svg>
            </div>
            <div className="flex gap-4 mt-3 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" /> Entrada</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary" /> Respostas</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "conversas",
    label: "Conversas",
    icon: MessageSquare,
    content: (
      <div className="bg-surface rounded-xl border overflow-hidden">
        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="border-r p-4 space-y-3">
            {[
              { name: "João Silva", msg: "Preciso de uma proposta comercial...", time: "2m" },
              { name: "Maria Santos", msg: "O boleto já foi enviado?", time: "5m" },
              { name: "Carlos Lima", msg: "Gostaria de agendar uma demo", time: "12m" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                  {c.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.msg}</p>
                </div>
                <span className="text-xs text-muted-foreground">{c.time}</span>
              </div>
            ))}
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">J</div>
              <div>
                <p className="font-semibold text-foreground">João Silva</p>
                <p className="text-xs text-muted-foreground">Agente: Alice (Comercial)</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-muted rounded-lg p-3 max-w-xs text-sm">Olá, preciso de uma proposta comercial para minha empresa.</div>
              <div className="bg-primary/10 rounded-lg p-3 max-w-xs ml-auto text-sm">Claro! Vou preparar uma proposta personalizada. Qual o segmento da sua empresa? 😊</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "relatorios",
    label: "Relatórios",
    icon: FileBarChart,
    content: (
      <div className="bg-surface rounded-xl p-6 md:p-8 border">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Conversas", value: "3" },
            { label: "Tempo médio", value: "5m18s" },
            { label: "Msg recebidas", value: "184" },
            { label: "Satisfação", value: "5.0/5" },
            { label: "Leads", value: "1" },
          ].map((m) => (
            <div key={m.label} className="bg-card rounded-lg p-4 border text-center">
              <p className="text-xs text-muted-foreground">{m.label}</p>
              <p className="text-xl font-bold text-foreground mt-1">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <div className="bg-card rounded-lg px-4 py-2 border text-sm text-muted-foreground">Últimos 7 dias</div>
          <div className="bg-primary/10 rounded-lg px-4 py-2 border border-primary/30 text-sm text-primary font-medium">Últimos 30 dias</div>
          <div className="bg-card rounded-lg px-4 py-2 border text-sm text-muted-foreground">Personalizado</div>
        </div>
      </div>
    ),
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
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {tabs.find((t) => t.id === active)?.content}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Dados reais. Interface limpa. Decisões mais rápidas.
        </p>
      </div>
    </section>
  );
};

export default ProductPreview;
