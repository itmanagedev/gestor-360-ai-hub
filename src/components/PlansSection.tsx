import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    borderClass: "border-border",
    badge: null,
    features: [
      "1 Agente de IA",
      "500 mensagens/mês",
      "Dashboard básico",
      "Suporte por email",
      "1 número WhatsApp",
    ],
  },
  {
    name: "Business",
    price: "R$ 497",
    period: "/mês",
    borderClass: "border-primary",
    badge: "Mais Popular",
    features: [
      "5 Agentes de IA",
      "5.000 mensagens/mês",
      "Dashboard completo",
      "Relatórios avançados",
      "Auditoria completa",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    borderClass: "border-secondary",
    badge: null,
    features: [
      "Agentes ilimitados",
      "Mensagens ilimitadas",
      "API dedicada",
      "Integrações customizadas",
      "Gerente de conta",
      "SLA garantido",
    ],
  },
];

const PlansSection = () => (
  <section id="planos" className="py-20 bg-surface">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Escolha o plano ideal para sua operação
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            className={`bg-card rounded-xl border-2 ${p.borderClass} p-6 flex flex-col relative ${
              p.badge ? "shadow-lg scale-105" : "shadow-sm"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {p.badge && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                {p.badge}
              </Badge>
            )}
            <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
              <span className="text-muted-foreground">{p.period}</span>
            </div>
            <ul className="space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full" asChild>
              <a href="#contato">Começar Agora</a>
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Sem fidelidade · Cancele quando quiser · Suporte incluso
      </p>
    </div>
  </section>
);

export default PlansSection;
