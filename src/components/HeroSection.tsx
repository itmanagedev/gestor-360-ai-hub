import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Play } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const badges = [
  "Sem fidelidade",
  "Configuração em minutos",
  "Suporte incluso",
];

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
  <section id="inicio" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
    {/* Background shapes */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </div>

    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Atendimento Inteligente.{" "}
            <span className="text-primary">Gestão Completa.</span>{" "}
            Resultado 360°.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Unifique canais, automatize processos e gerencie toda a operação com
            agentes de IA — tudo em um único número de WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contato">Começar Agora</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2" onClick={() => setVideoOpen(true)}>
              <Play size={18} /> Ver Demo
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Check size={16} className="text-primary" /> {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border">
            <img
              src={dashboardMockup}
              alt="Dashboard do Gestor360° mostrando métricas de atendimento"
              width={1280}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
