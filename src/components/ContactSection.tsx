import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form) as Record<string, string>;
    const newErrors: Record<string, string> = {};

    if (!data.nome?.trim()) newErrors.nome = "Nome é obrigatório";
    if (!data.empresa?.trim()) newErrors.empresa = "Empresa é obrigatória";
    if (!data.whatsapp?.trim()) newErrors.whatsapp = "WhatsApp é obrigatório";
    if (!data.segmento?.trim()) newErrors.segmento = "Segmento é obrigatório";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20">
      <div className="container max-w-xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-10 text-primary-foreground mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Configure seus agentes hoje e veja o impacto em 24 horas.
            </p>
          </div>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Solicitação enviada!</h3>
            <p className="text-muted-foreground mt-2">Entraremos em contato em breve.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { name: "nome", label: "Nome", placeholder: "Seu nome completo" },
              { name: "empresa", label: "Empresa", placeholder: "Nome da empresa" },
              { name: "whatsapp", label: "WhatsApp", placeholder: "(11) 99999-9999" },
              { name: "segmento", label: "Segmento", placeholder: "Ex: Tecnologia, Varejo..." },
            ].map((f) => (
              <div key={f.name}>
                <Label htmlFor={f.name} className="text-foreground">{f.label}</Label>
                <Input
                  id={f.name}
                  name={f.name}
                  placeholder={f.placeholder}
                  className={`mt-1 ${errors[f.name] ? "border-destructive" : ""}`}
                />
                {errors[f.name] && <p className="text-xs text-destructive mt-1">{errors[f.name]}</p>}
              </div>
            ))}
            <Button type="submit" size="lg" className="w-full">
              Solicitar Demo Gratuita
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
