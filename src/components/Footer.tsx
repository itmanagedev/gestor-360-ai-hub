import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-lg">Gestor360°</span>
          </div>
          <p className="text-sm text-background/60">
            Plataforma de agentes de IA para transformar o atendimento da sua empresa.
          </p>
        </div>

        {[
          {
            title: "Produto",
            links: ["Dashboard", "Agentes", "Fluxos", "Relatórios"],
          },
          {
            title: "Recursos",
            links: ["Blog", "Central de Ajuda", "API Docs", "Status"],
          },
          {
            title: "Empresa",
            links: ["Sobre nós", "Carreiras", "Parceiros", "Contato"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-background/50">
          © 2025 Gestor360°. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          {[Instagram, Linkedin, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="text-background/50 hover:text-background transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
