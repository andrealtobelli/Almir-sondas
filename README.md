# Almir Sondas

Landing page em React + Tailwind CSS + Vite.

## Executar

`npm install` e `npm run dev`. Produção: `npm run build`, saída em `dist`.

## Dados a confirmar antes da publicação

Edite **src/company.js**:
- `whatsapp`: telefone internacional, somente dígitos (55 + DDD + número). Enquanto vazio, os botões exibem um aviso acessível e não abrem um link inválido.
- `needs`: catálogo por necessidade com título, descrição, botão e mensagem específica. Os seis atendimentos estão com `confirmed: false` e sinalização visível de disponibilidade a confirmar. Confirme com a empresa antes de mudar para `true`; use `visible: false` para ocultar qualquer cartão. O antigo `services` vazio permanece reservado para serviços efetivamente confirmados.
- `regions`: cidades e regiões realmente atendidas.
- `location`: endereço ou localização comercial confirmada.
- `businessInfo`: informações comerciais confirmadas (por exemplo, razão social/CNPJ, se desejado).

Revise também o texto institucional em src/main.jsx com a empresa. Não foram incluídos números, depoimentos, garantias ou certificações.

A foto do destaque foi fornecida por link pelo usuário (Potavell) e é servida localmente em public/poco-artesiano.png; fontes DM Sans e Manrope vêm do Google Fonts e têm alternativas locais. A interface usa CSS responsivo e respeita movimento reduzido.

Telefone e localização comercial (Estado de São Paulo) já foram informados. A abrangência de atendimento por cidade ainda deve ser confirmada.
