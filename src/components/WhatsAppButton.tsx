import { MessageCircle } from "lucide-react";

// Edite o número abaixo para alterar o WhatsApp de atendimento
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre o Gestor360°.";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chamar no WhatsApp"
  >
    <MessageCircle size={28} className="text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
