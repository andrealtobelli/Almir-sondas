// Preencha apenas informações confirmadas. Telefone: somente dígitos, país + DDD + número.
export const company = {
  name: 'Almir Sondas',
  whatsapp: '5511996959997',
  location: 'Estado de São Paulo',
  businessInfo: '',
  regions: [],
  // Objetos { title: 'Serviço confirmado', description: 'Descrição real', icon: 'droplet' }.
  // Ícones disponíveis: droplet, drill, wrench. Não adicionar serviços sem confirmação.
  services: [],
  message: 'Olá! Vim pelo site da Almir Sondas e gostaria de solicitar um orçamento.',
};
// Cada cartão descreve uma necessidade, não uma oferta confirmada.
// Marque confirmed: true somente após a empresa confirmar o atendimento.
// Para ocultar um cartão, use visible: false.
export const needs = [
  {
    "id": "necessidade-1",
    "title": "Quero perfurar meu poço",
    "description": "Está planejando um poço para sua casa, propriedade rural ou empresa? O primeiro passo é avaliar as condições do local e a necessidade de abastecimento para orientar o projeto.",
    "button": "Conversar sobre perfuração",
    "message": "Olá, equipe Almir Sondas! Vim pelo site e quero conversar sobre a perfuração de um poço. Como funciona a avaliação?",
    "icon": "drill",
    "confirmed": false,
    "visible": true
  },
  {
    "id": "necessidade-2",
    "title": "Está enfrentando problemas com acesso à água?",
    "description": "Falta de água ou abastecimento irregular atrapalham a rotina. Conte como é o abastecimento no seu imóvel para avaliarmos as possibilidades de atendimento.",
    "button": "Buscar uma solução",
    "message": "Olá, equipe Almir Sondas! Estou enfrentando problemas com acesso à água e gostaria de conversar sobre as possibilidades para meu imóvel.",
    "icon": "droplet",
    "confirmed": false,
    "visible": true
  },
  {
    "id": "necessidade-3",
    "title": "Seu poço semi-artesiano sujou?",
    "description": "Percebeu areia, água turva ou mudança de cor? Esses sinais precisam de avaliação para identificar a origem e verificar a necessidade de limpeza ou manutenção. A aparência da água, sozinha, não confirma sua qualidade.",
    "button": "Solicitar avaliação do poço",
    "message": "Olá, equipe Almir Sondas! Percebi sujeira ou alterações na água do meu poço e gostaria de solicitar uma avaliação.",
    "icon": "waves",
    "confirmed": false,
    "visible": true
  },
  {
    "id": "necessidade-4",
    "title": "Minha bomba queimou. E agora?",
    "description": "A bomba parou de funcionar? Isso pode ter diferentes causas e nem sempre significa que ela queimou. Uma avaliação do equipamento e do sistema ajuda a identificar o problema e definir os próximos passos.",
    "button": "Pedir avaliação da bomba",
    "message": "Olá, equipe Almir Sondas! A bomba do meu poço parou de funcionar e preciso de uma avaliação.",
    "icon": "wrench",
    "confirmed": false,
    "visible": true
  },
  {
    "id": "necessidade-5",
    "title": "Meu poço está saindo pouca água",
    "description": "Percebeu uma redução no volume de água? O problema pode estar relacionado ao bombeamento, a obstruções ou às condições do próprio poço. Uma avaliação ajuda a identificar a causa.",
    "button": "Avaliar a redução de água",
    "message": "Olá, equipe Almir Sondas! Meu poço está fornecendo menos água e gostaria de avaliar o que pode estar acontecendo.",
    "icon": "droplet",
    "confirmed": false,
    "visible": true
  },
  {
    "id": "necessidade-6",
    "title": "Quero cuidar do meu poço",
    "description": "Acompanhar o funcionamento do poço e do sistema de bombeamento ajuda a identificar alterações. Converse com a equipe sobre a avaliação e os cuidados indicados para seu caso.",
    "button": "Conversar sobre manutenção",
    "message": "Olá, equipe Almir Sondas! Gostaria de conversar sobre avaliação e manutenção do meu poço.",
    "icon": "check",
    "confirmed": false,
    "visible": true
  }
];
export function getWhatsappUrl(message = company.message) {
  return /^\d{12,15}$/.test(company.whatsapp)
    ? `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}` : null;
}
export const whatsappUrl = getWhatsappUrl();
