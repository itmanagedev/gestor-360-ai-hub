import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Diretor Comercial",
    company: "TechBrasil",
    text: "Reduzimos o tempo de resposta de 15 minutos para menos de 1 segundo. A equipe comercial agora foca no que importa: fechar negócios.",
  },
  {
    name: "Camila Souza",
    role: "Gerente de Operações",
    company: "LogiMax",
    text: "Antes, era impossível auditar os atendimentos. Com o Gestor360°, temos controle total de cada conversa e cada decisão.",
  },
  {
    name: "Fernando Oliveira",
    role: "CEO",
    company: "StartUp Flow",
    text: "Configurei os agentes em 20 minutos e no mesmo dia já estávamos operando 24/7. O ROI foi imediato.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Empresas que já operam no nível 360°
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-card rounded-xl border-t-4 border-t-primary border shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
