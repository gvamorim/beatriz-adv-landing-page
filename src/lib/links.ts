export const WHATSAPP_NUMBER = "5531984805500";
export const WHATSAPP_DISPLAY = "+55 (31) 98480-5500";

export const LINKEDIN_URL = "https://www.linkedin.com/in/beatrizvieiracosta/";
export const INSTAGRAM_URL = "https://www.instagram.com/beatrizvc.adv";

export function wa(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WA_MESSAGES = {
  general:
    "Olá, Beatriz! Vi sua página e gostaria de saber mais sobre a assessoria para o meu RH.",
  conversarRh:
    "Olá, Beatriz! Vi sua página e gostaria de conversar sobre assessoria para o meu RH.",
  assessoria:
    "Olá, Beatriz! Tenho interesse na Assessoria Consultiva Contínua. Podemos conversar?",
  treinamentos:
    "Olá, Beatriz! Tenho interesse em treinamentos para gestões na minha empresa. Podemos conversar?",
  nr1: "Olá, Beatriz! Preciso de apoio na adequação à NR-1. Podemos conversar?",
  compliance:
    "Olá, Beatriz! Tenho interesse no programa de compliance trabalhista. Podemos conversar?",
  palestras:
    "Olá, Beatriz! Tenho interesse em uma palestra ou workshop. Podemos conversar?",
  processos:
    "Olá, Beatriz! Gostaria de revisar os processos internos da minha empresa. Podemos conversar?",
  diagnostico:
    "Olá, Beatriz! Vi sua página de serviços e gostaria de marcar um diagnóstico.",
};

export const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "fundadora", label: "Fundadora" },
  { id: "servicos", label: "Serviços" },
];
