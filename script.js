// ============================================================
// DADOS DE PROGRESSÃO POR CLASSE E NEX
// ============================================================
const NEX_PROGRESSION = {
  combatente: {
    5:  [{type:'info', text:'Ataque Especial desbloqueado (2 PE, +5 no ataque ou dano)'}],
    10: [{type:'info', text:'Habilidade de Trilha — escolha sua trilha de combatente nas configurações.'}],
    15: [{type:'hab', classe:'Combatente', label:'Poder de Combatente'}],
    20: [{type:'atr', label:'Aumento de Atributo'}],
    25: [{type:'info', text:'Ataque Especial: agora 3 PE, +10 no ataque ou dano.'}],
    30: [{type:'hab', classe:'Combatente', label:'Poder de Combatente'}],
    35: [{type:'info', text:'Grau de Treinamento: aumente 2+Int perícias de Treinado→Veterano ou Veterano→Expert.'}],
    40: [{type:'info', text:'Habilidade de Trilha — próximo poder da sua trilha.'}],
    45: [{type:'hab', classe:'Combatente', label:'Poder de Combatente'}],
    50: [{type:'atr', label:'Aumento de Atributo'},{type:'info', text:'Versatilidade: escolha um poder extra ou primeiro poder de outra trilha.'}],
    55: [{type:'info', text:'Ataque Especial: agora 4 PE, +15 no ataque ou dano.'}],
    60: [{type:'hab', classe:'Combatente', label:'Poder de Combatente'}],
    65: [{type:'info', text:'Habilidade de Trilha — próximo poder da sua trilha.'}],
    70: [{type:'info', text:'Grau de Treinamento: aumente 2+Int perícias de Treinado→Veterano ou Veterano→Expert.'}],
    75: [{type:'hab', classe:'Combatente', label:'Poder de Combatente'}],
    80: [{type:'atr', label:'Aumento de Atributo'}],
    85: [{type:'info', text:'Ataque Especial: agora 5 PE, +20 no ataque ou dano.'}],
    90: [{type:'hab', classe:'Combatente', label:'Poder de Combatente'}],
    95: [{type:'atr', label:'Aumento de Atributo'}],
    99: [{type:'info', text:'Habilidade de Trilha — poder final da sua trilha.'}],
  },
  especialista: {
    5:  [{type:'info', text:'Eclético desbloqueado (2 PE = tratado como treinado). Perito(2 PE, +1d6) desbloqueado.'}],
    10: [{type:'info', text:'Habilidade de Trilha — escolha sua trilha de especialista.'}],
    15: [{type:'hab', classe:'Especialista', label:'Poder de Especialista'}],
    20: [{type:'atr', label:'Aumento de Atributo'}],
    25: [{type:'info', text:'Perito atualizado: 3 PE, +1d8.'}],
    30: [{type:'hab', classe:'Especialista', label:'Poder de Especialista'}],
    35: [{type:'info', text:'Grau de Treinamento: aumente 5+Int perícias treinadas.'}],
    40: [{type:'info', text:'Engenhosidade (Veterano) e Habilidade de Trilha — próximo poder.'}],
    45: [{type:'hab', classe:'Especialista', label:'Poder de Especialista'}],
    50: [{type:'atr', label:'Aumento de Atributo'},{type:'info', text:'Versatilidade: escolha poder ou primeiro poder de outra trilha.'}],
    55: [{type:'info', text:'Perito atualizado: 4 PE, +1d10.'}],
    60: [{type:'hab', classe:'Especialista', label:'Poder de Especialista'}],
    65: [{type:'info', text:'Habilidade de Trilha — próximo poder.'}],
    70: [{type:'info', text:'Grau de Treinamento: aumente 5+Int perícias treinadas.'}],
    75: [{type:'info', text:'Engenhosidade (Expert).'},{type:'hab', classe:'Especialista', label:'Poder de Especialista'}],
    80: [{type:'atr', label:'Aumento de Atributo'}],
    85: [{type:'info', text:'Perito atualizado: 5 PE, +1d12.'}],
    90: [{type:'hab', classe:'Especialista', label:'Poder de Especialista'}],
    95: [{type:'atr', label:'Aumento de Atributo'}],
    99: [{type:'info', text:'Habilidade de Trilha — poder final da sua trilha.'}],
  },
  ocultista: {
    5:  [{type:'info', text:'Magia desbloqueada (1 PE). Aprende rituais ao avançar de NEX.'},{type:'rit', label:'Aprender Ritual (NEX 5%)'}],
    10: [{type:'info', text:'Habilidade de Trilha — escolha sua trilha de ocultista.'},{type:'rit', label:'Aprender Ritual'}],
    15: [{type:'hab', classe:'Ocultista', label:'Poder de Ocultista'},{type:'rit', label:'Aprender Ritual'}],
    20: [{type:'atr', label:'Aumento de Atributo'},{type:'rit', label:'Aprender Ritual'}],
    25: [{type:'info', text:'Magia: 2 PE.'},{type:'rit', label:'Aprender Ritual'}],
    30: [{type:'hab', classe:'Ocultista', label:'Poder de Ocultista'},{type:'rit', label:'Aprender Ritual'}],
    35: [{type:'info', text:'Grau de Treinamento: aumente 4+Int perícias.'},{type:'rit', label:'Aprender Ritual'}],
    40: [{type:'info', text:'Habilidade de Trilha — próximo poder.'},{type:'rit', label:'Aprender Ritual'}],
    45: [{type:'hab', classe:'Ocultista', label:'Poder de Ocultista'},{type:'rit', label:'Aprender Ritual'}],
    50: [{type:'atr', label:'Aumento de Atributo'},{type:'rit', label:'Aprender Ritual'}],
    55: [{type:'info', text:'Magia: 3 PE.'},{type:'rit', label:'Aprender Ritual'}],
    60: [{type:'hab', classe:'Ocultista', label:'Poder de Ocultista'},{type:'rit', label:'Aprender Ritual'}],
    65: [{type:'info', text:'Habilidade de Trilha — próximo poder.'},{type:'rit', label:'Aprender Ritual'}],
    70: [{type:'info', text:'Grau de Treinamento: aumente 4+Int perícias.'},{type:'rit', label:'Aprender Ritual'}],
    75: [{type:'hab', classe:'Ocultista', label:'Poder de Ocultista'},{type:'rit', label:'Aprender Ritual'}],
    80: [{type:'atr', label:'Aumento de Atributo'},{type:'rit', label:'Aprender Ritual'}],
    85: [{type:'info', text:'Magia: 4 PE.'},{type:'rit', label:'Aprender Ritual'}],
    90: [{type:'hab', classe:'Ocultista', label:'Poder de Ocultista'},{type:'rit', label:'Aprender Ritual'}],
    95: [{type:'atr', label:'Aumento de Atributo'},{type:'rit', label:'Aprender Ritual'}],
    99: [{type:'info', text:'Habilidade de Trilha — poder final.'},{type:'rit', label:'Aprender Ritual'}],
  }
};

const CLASSES_STATS={
  combatente:{pvBase:20,pvNex:4,peBase:2,peNex:2,sanBase:12,sanNex:3},
  especialista:{pvBase:16,pvNex:3,peBase:3,peNex:3,sanBase:16,sanNex:4},
  ocultista:{pvBase:12,pvNex:2,peBase:4,peNex:4,sanBase:20,sanNex:5}
};
const PATENTES={recruta:{label:'Recruta',credito:'baixo'},operador:{label:'Operador',credito:'medio'},agente_especial:{label:'Agente Especial',credito:'medio'},oficial_operacoes:{label:'Oficial de Operações',credito:'alto'},agente_elite:{label:'Agente de Elite',credito:'ilimitado'}};
const TRILHAS_POR_CLASSE = {
  combatente: ['Aniquilador','Comandante de Campo','Guerreiro','Operações Especiais','Tropa de Choque'],
  especialista: ['Atirador de Elite','Infiltrador','Médico de Campo','Negociador','Técnico'],
  ocultista: ['Conduíte','Flagelador','Graduado','Intuitivo','Lâmina Paranormal']
};
const TRILHA_BENEFICIOS = {
  'Aniquilador': {
    10:{nome:'A Favorita',desc:'Escolha uma arma favorita. A categoria da arma é reduzida em I.'},
    40:{nome:'Técnica Secreta',desc:'Categoria da favorita reduzida em II. Ao atacar com ela, pode gastar 2 PE para: Amplo (alvo adjacente extra) e/ou Destruidor (+1 multiplicador de crítico). Efeitos adicionais custam +2 PE cada.'},
    65:{nome:'Técnica Sublime',desc:'Adiciona efeitos à Técnica Secreta: Letal (+2 margem de ameaça, pode repetir para +5) e Perfurante (ignora até 5 de resistência a dano).'},
    99:{nome:'Máquina de Matar',desc:'Categoria da favorita reduzida em III, +2 margem de ameaça e dano aumenta em um dado do mesmo tipo.'}
  },
  'Comandante de Campo': {
    10:{nome:'Inspirar Confiança',desc:'Reação + 2 PE: aliado em alcance curto pode rerrolar um teste recém realizado.'},
    40:{nome:'Estrategista',desc:'Ação padrão + 1 PE por aliado (limitado por Intelecto): aliados em alcance curto recebem ação de movimento adicional no próximo turno.'},
    65:{nome:'Brecha na Guarda',desc:'1/rodada, quando aliado causar dano em alcance curto, reação + 2 PE para você ou outro aliado fazer ataque adicional. Alcance de Inspirar Confiança e Estrategista vira médio.'},
    99:{nome:'Oficial Comandante',desc:'Ação padrão + 5 PE: todos aliados em alcance médio recebem uma ação padrão adicional no próximo turno.'}
  },
  'Guerreiro': {
    10:{nome:'Técnica Letal',desc:'+2 na margem de ameaça com todos os ataques corpo a corpo.'},
    40:{nome:'Revidar',desc:'Ao bloquear, reação + 2 PE para atacar corpo a corpo o inimigo que atacou você.'},
    65:{nome:'Força Opressora',desc:'Ao acertar ataque corpo a corpo, gaste 1 PE para derrubar/empurrar como ação livre.'},
    99:{nome:'Potência Máxima',desc:'Ataque Especial com armas corpo a corpo dobra todos os bônus numéricos.'}
  },
  'Operações Especiais': {
    10:{nome:'Iniciativa Aprimorada',desc:'+5 em Iniciativa e uma ação de movimento adicional na primeira rodada.'},
    40:{nome:'Ataque Extra',desc:'1/rodada, ao atacar, gaste 2 PE para realizar um ataque adicional.'},
    65:{nome:'Surto de Adrenalina',desc:'1/rodada, gaste 5 PE para realizar ação padrão ou movimento adicional.'},
    99:{nome:'Sempre Alerta',desc:'Recebe uma ação padrão adicional no início de cada cena de combate.'}
  },
  'Tropa de Choque': {
    10:{nome:'Casca Grossa',desc:'+1 PV para cada 5% de NEX e, ao bloquear, soma Vigor na resistência a dano recebido.'},
    40:{nome:'Cai Dentro',desc:'Quando inimigo em alcance curto atacar aliado, reação + 1 PE para forçar teste de Vontade (DT Vig) e redirecionar ataque para você.'},
    65:{nome:'Duro de Matar',desc:'Ao sofrer dano não paranormal, reação + 2 PE para reduzir dano à metade (NEX 85% também contra paranormal).'},
    99:{nome:'Inquebrável',desc:'Enquanto machucado: +5 Defesa e resistência 5. Enquanto morrendo: não fica indefeso e ainda pode agir.'}
  },
  'Atirador de Elite': {
    10:{nome:'Mira de Elite',desc:'Proficiência com armas de fogo de balas longas e soma Intelecto no dano com elas.'},
    40:{nome:'Disparo Letal',desc:'Ao mirar, gaste 1 PE para +2 na margem de ameaça do próximo ataque até o fim do próximo turno.'},
    65:{nome:'Disparo Impactante',desc:'Com arma de fogo calibre grosso, gaste 2 PE para manobras derrubar, desarmar, empurrar ou quebrar à distância.'},
    99:{nome:'Atirar para Matar',desc:'Ao acertar crítico com arma de fogo, causa dano máximo sem rolar dados.'}
  },
  'Infiltrador': {
    10:{nome:'Ataque Furtivo',desc:'1/rodada, ao acertar alvo desprevenido/flanqueado, gaste 1 PE para +1d6 dano (+2d6 no NEX 40%, +3d6 no NEX 65%, +4d6 no NEX 99%).'},
    40:{nome:'Gatuno',desc:'+5 em Atletismo e Crime. Pode se mover normalmente ao se esconder sem penalidade.'},
    65:{nome:'Assassinar',desc:'Ação de movimento + 3 PE para analisar alvo; primeiro Ataque Furtivo até fim do próximo turno dobra dados extras.'},
    99:{nome:'Sombra Fugaz',desc:'Ao fazer Furtividade após ação chamativa, gaste 3 PE para ignorar penalidade –15.'}
  },
  'Médico de Campo': {
    10:{nome:'Paramédico',desc:'Ação padrão + 2 PE para curar 2d10 PV de aliado adjacente (+1d10 nos NEX 40/65/99 com +1 PE por dado).'},
    40:{nome:'Equipe de Trauma',desc:'Ação padrão + 2 PE para remover uma condição negativa (exceto morrendo) de aliado adjacente.'},
    65:{nome:'Resgate',desc:'1/rodada, aproximação com ação livre de aliado machucado/morrendo e bônus defensivo após cura/suporte.'},
    99:{nome:'Reanimação',desc:'1/cena, ação completa + 10 PE para reviver personagem morto na mesma cena (exceto dano massivo).'}
  },
  'Negociador': {
    10:{nome:'Eloquência',desc:'Ação completa + 1 PE por alvo em alcance curto; teste social oposto à Vontade para fascinar.'},
    40:{nome:'Discurso Motivador',desc:'Ação padrão + 4 PE para bônus de perícia em alcance curto até fim da cena (em NEX 65%, 8 PE dobra o bônus).'},
    65:{nome:'Eu Conheço um Cara',desc:'1/missão, aciona rede de contatos para um favor narrativo (a critério do mestre).'},
    99:{nome:'Truque de Mestre',desc:'Gaste 5 PE para simular efeito de habilidade que aliado usou na cena.'}
  },
  'Técnico': {
    10:{nome:'Inventário Otimizado',desc:'Soma Intelecto à Força para calcular a capacidade de carga.'},
    40:{nome:'Remendão',desc:'Ação completa + 1 PE remove condição quebrado de equipamento adjacente até fim da cena; equipamentos gerais têm categoria reduzida em I para você.'},
    65:{nome:'Improvisar',desc:'Ação completa + 2 PE (+2 PE por categoria) para criar versão funcional de equipamento geral até o fim da cena.'},
    99:{nome:'Preparado para Tudo',desc:'Ação de movimento + 3 PE por categoria para sacar item “do fundo da bolsa” (exceto armas).'}
  },
  'Conduíte': {
    10:{nome:'Ampliar Ritual',desc:'Ao lançar ritual, gaste +2 PE para aumentar alcance em um passo ou dobrar área de efeito.'},
    40:{nome:'Acelerar Ritual',desc:'1/rodada, aumente custo em 4 PE para conjurar ritual como ação livre.'},
    65:{nome:'Anular Ritual',desc:'Ao ser alvo de ritual, gaste PE iguais ao custo e faça teste oposto de Ocultismo para anulá-lo.'},
    99:{nome:'Canalizar o Medo',desc:'Aprende o ritual Canalizar o Medo.'}
  },
  'Flagelador': {
    10:{nome:'Poder do Flagelo',desc:'Ao conjurar ritual, pode gastar PV no lugar de PE (2 PV por PE).'},
    40:{nome:'Abraçar a Dor',desc:'Ao sofrer dano não paranormal, reação + 2 PE para reduzir dano à metade.'},
    65:{nome:'Absorver Agonia',desc:'Ao reduzir inimigos a 0 PV com ritual, recebe PE temporários iguais ao círculo do ritual.'},
    99:{nome:'Medo Tangível',desc:'Aprende o ritual Medo Tangível.'}
  },
  'Graduado': {
    10:{nome:'Saber Ampliado',desc:'Aprende um ritual extra de 1º círculo; ao ganhar novos círculos, aprende ritual adicional do círculo.'},
    40:{nome:'Grimório Ritualístico',desc:'Cria grimório especial para armazenar rituais, com capacidade baseada em Intelecto.'},
    65:{nome:'Rituais Eficientes',desc:'+5 na DT para resistir a todos os seus rituais.'},
    99:{nome:'Conhecendo o Medo',desc:'Aprende o ritual Conhecendo o Medo.'}
  },
  'Intuitivo': {
    10:{nome:'Mente Sã',desc:'+5 em testes de resistência contra efeitos paranormais.'},
    40:{nome:'Presença Poderosa',desc:'Adiciona Presença ao limite de PE por turno para conjurar rituais.'},
    65:{nome:'Inabalável',desc:'Resistência a dano mental e paranormal 10 e melhoria em Vontade contra efeitos paranormais.'},
    99:{nome:'Presença do Medo',desc:'Aprende o ritual Presença do Medo.'}
  },
  'Lâmina Paranormal': {
    10:{nome:'Lâmina Maldita',desc:'Aprende Amaldiçoar Arma (ou reduz custo em 1 PE se já conhece) e pode usar Ocultismo para atacar com arma amaldiçoada.'},
    40:{nome:'Gladiador Paranormal',desc:'Ao acertar ataque corpo a corpo, recebe 2 PE temporários (limite por cena = limite de PE).'},
    65:{nome:'Conjuração Marcial',desc:'1/rodada, ao lançar ritual de ação padrão, gaste 2 PE para ataque corpo a corpo como ação livre.'},
    99:{nome:'Lâmina do Medo',desc:'Aprende o ritual Lâmina do Medo.'}
  }
};
const PODERES_PARANORMAIS_LIVRO = [
  {nome:'Aprender Ritual',elemento:'Universal',pre:'Nenhum',afinidade:'—',desc:'Aprende um ritual (1º círculo; 2º no NEX 45%; 3º no NEX 75%). Pode ser escolhido várias vezes, respeitando limite de rituais conhecidos.'},
  {nome:'Resistir a Conhecimento',elemento:'Conhecimento',pre:'Nenhum',afinidade:'Resistência sobe para 20.',desc:'Recebe resistência 10 contra Conhecimento.'},
  {nome:'Resistir a Energia',elemento:'Energia',pre:'Nenhum',afinidade:'Resistência sobe para 20.',desc:'Recebe resistência 10 contra Energia.'},
  {nome:'Resistir a Morte',elemento:'Morte',pre:'Nenhum',afinidade:'Resistência sobe para 20.',desc:'Recebe resistência 10 contra Morte.'},
  {nome:'Resistir a Sangue',elemento:'Sangue',pre:'Nenhum',afinidade:'Resistência sobe para 20.',desc:'Recebe resistência 10 contra Sangue.'},
  {nome:'Expansão de Conhecimento',elemento:'Conhecimento',pre:'Conhecimento 1',afinidade:'Aprende um segundo poder de classe de outra classe.',desc:'Aprende um poder de classe que não pertença à sua classe (respeitando pré-requisitos).'},
  {nome:'Percepção Paranormal',elemento:'Conhecimento',pre:'Nenhum',afinidade:'Pode rerrolar até dois dados menores que 10.',desc:'Em investigação, ao procurar pistas, pode rerrolar um dado com resultado menor que 10.'},
  {nome:'Precognição',elemento:'Conhecimento',pre:'Conhecimento 1',afinidade:'Fica imune à condição desprevenido.',desc:'+2 em Defesa e em testes de resistência.'},
  {nome:'Sensitivo',elemento:'Conhecimento',pre:'Nenhum',afinidade:'Em testes opostos dessas perícias, o oponente sofre penalidade.',desc:'+5 em Diplomacia, Intimidação e Intuição.'},
  {nome:'Visão do Oculto',elemento:'Conhecimento',pre:'Nenhum',afinidade:'Ignora camuflagem.',desc:'+5 em Percepção e enxerga no escuro.'},
  {nome:'Afortunado',elemento:'Energia',pre:'Nenhum',afinidade:'Também permite rerrolar um resultado 1 no d20, 1 vez por teste.',desc:'1 vez por rolagem, pode rerrolar resultado 1 em qualquer dado que não seja d20.'},
  {nome:'Campo Protetor',elemento:'Energia',pre:'Energia 1',afinidade:'Também recebe +5 em Reflexos e pode anular dano em sucesso de Reflexos que reduziria à metade.',desc:'Ao usar esquiva, gaste 1 PE para receber +5 em Defesa.'},
  {nome:'Causalidade Fortuita',elemento:'Energia',pre:'Nenhum',afinidade:'A DT para procurar pistas sempre diminui em –5 para você.',desc:'Em investigação, a DT para procurar pistas diminui em –5 para você até encontrar uma pista.'},
  {nome:'Golpe de Sorte',elemento:'Energia',pre:'Energia 1',afinidade:'+1 no multiplicador de crítico.',desc:'+1 na margem de ameaça em seus ataques.'},
  {nome:'Manipular Entropia',elemento:'Energia',pre:'Energia 1',afinidade:'O alvo rerrola todos os dados que você escolher.',desc:'Gaste 2 PE para forçar alvo em alcance curto a rerrolar um dado em teste de perícia.'},
  {nome:'Encarar a Morte',elemento:'Morte',pre:'Nenhum',afinidade:'Durante cenas de ação, limite de PE aumenta em +2 (total +3).',desc:'Durante cenas de ação, seu limite de gasto de PE aumenta em +1.'},
  {nome:'Escapar da Morte',elemento:'Morte',pre:'Morte 1',afinidade:'Evita completamente o dano; em dano massivo, fica com 1 PV.',desc:'1 vez por cena, ao receber dano que deixaria você com 0 PV, fica com 1 PV.'},
  {nome:'Potencial Aprimorado',elemento:'Morte',pre:'Nenhum',afinidade:'Recebe +1 PE adicional por NEX (total +2 por NEX).',desc:'Recebe +1 PE por NEX; escala automaticamente quando o NEX aumenta.'},
  {nome:'Potencial Reaproveitado',elemento:'Morte',pre:'Nenhum',afinidade:'Ganha 3 PE temporários em vez de 2.',desc:'1 vez por rodada, ao passar em teste de resistência, ganha 2 PE temporários cumulativos até fim da cena.'},
  {nome:'Surto Temporal',elemento:'Morte',pre:'Morte 2',afinidade:'Pode usar uma vez por turno (em vez de 1 vez por cena).',desc:'1 vez por cena, durante seu turno, gaste 3 PE para ação padrão adicional.'},
  {nome:'Anatomia Insana',elemento:'Sangue',pre:'Sangue 2',afinidade:'Imune a efeitos de acertos críticos e ataques furtivos.',desc:'50% de chance de ignorar dano adicional de acerto crítico ou ataque furtivo.'},
  {nome:'Arma de Sangue',elemento:'Sangue',pre:'Nenhum',afinidade:'Arma torna-se permanente e passa a causar 1d10 de dano de Sangue.',desc:'Ação de movimento + 2 PE para criar arma de sangue 1d6; 1 vez por turno pode gastar 1 PE para ataque adicional corpo a corpo.'},
  {nome:'Sangue de Ferro',elemento:'Sangue',pre:'Nenhum',afinidade:'+5 em Fortitude e imunidade a venenos e doenças.',desc:'Recebe +2 PV por NEX; escala automaticamente quando o NEX aumenta.'},
  {nome:'Sangue Fervente',elemento:'Sangue',pre:'Sangue 2',afinidade:'Bônus em Agilidade ou Força aumenta para +2.',desc:'Enquanto machucado, recebe +1 em Agilidade ou Força (à escolha).'},
  {nome:'Sangue Vivo',elemento:'Sangue',pre:'Sangue 1',afinidade:'Cura acelerada aumenta para 5.',desc:'Primeira vez que fica machucado na cena, recebe cura acelerada 2 sem passar da metade dos PV máximos.'}
];
const PERI=[
  {id:'acrobacia',nome:'Acrobacia',atr:'Agi',grupo:'Agilidade'},
  {id:'crime',nome:'Crime',atr:'Agi',grupo:'Agilidade'},
  {id:'furtividade',nome:'Furtividade',atr:'Agi',grupo:'Agilidade'},
  {id:'iniciativa',nome:'Iniciativa',atr:'Agi',grupo:'Agilidade'},
  {id:'pilotagem',nome:'Pilotagem',atr:'Agi',grupo:'Agilidade'},
  {id:'pontaria',nome:'Pontaria',atr:'Agi',grupo:'Agilidade'},
  {id:'reflexos',nome:'Reflexos',atr:'Agi',grupo:'Agilidade'},
  {id:'atletismo',nome:'Atletismo',atr:'For',grupo:'Força'},
  {id:'luta',nome:'Luta',atr:'For',grupo:'Força'},
  {id:'atualidades',nome:'Atualidades',atr:'Int',grupo:'Intelecto'},
  {id:'ciencias',nome:'Ciências',atr:'Int',grupo:'Intelecto'},
  {id:'investigacao',nome:'Investigação',atr:'Int',grupo:'Intelecto'},
  {id:'medicina',nome:'Medicina',atr:'Int',grupo:'Intelecto'},
  {id:'ocultismo',nome:'Ocultismo',atr:'Int',grupo:'Intelecto'},
  {id:'profissao',nome:'Profissão',atr:'Int',grupo:'Intelecto',prof:true},
  {id:'sobrevivencia',nome:'Sobrevivência',atr:'Int',grupo:'Intelecto'},
  {id:'tatica',nome:'Tática',atr:'Int',grupo:'Intelecto'},
  {id:'tecnologia',nome:'Tecnologia',atr:'Int',grupo:'Intelecto'},
  {id:'adestramento',nome:'Adestramento',atr:'Pre',grupo:'Presença'},
  {id:'artes',nome:'Artes',atr:'Pre',grupo:'Presença'},
  {id:'diplomacia',nome:'Diplomacia',atr:'Pre',grupo:'Presença'},
  {id:'enganacao',nome:'Enganação',atr:'Pre',grupo:'Presença'},
  {id:'intimidacao',nome:'Intimidação',atr:'Pre',grupo:'Presença'},
  {id:'intuicao',nome:'Intuição',atr:'Pre',grupo:'Presença'},
  {id:'percepcao',nome:'Percepção',atr:'Pre',grupo:'Presença'},
  {id:'religiao',nome:'Religião',atr:'Pre',grupo:'Presença'},
  {id:'vontade',nome:'Vontade',atr:'Pre',grupo:'Presença'},
  {id:'fortitude',nome:'Fortitude',atr:'Vig',grupo:'Vigor'},
];
function normTxt(v){
  return String(v||'')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}
const ORIGENS_DADOS = [
  { nome:'Acadêmico', pericias:['ciencias','investigacao'], poder:'Saber é Poder', desc:'Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.' },
  { nome:'Agente de Saúde', pericias:['intuicao','medicina'], poder:'Técnica Medicinal', desc:'Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.' },
  { nome:'Amnésico', pericias:[], poder:'Vislumbres do Passado', desc:'Uma vez por sessão, você pode fazer um teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.', periciasTexto:'Duas à escolha do mestre' },
  { nome:'Artista', pericias:['artes','enganacao'], poder:'Magnum Opus', desc:'Uma vez por missão, pode determinar que um personagem de interação o reconheça, recebendo +5 em testes de Presença e perícias baseadas em Presença contra ele.' },
  { nome:'Atleta', pericias:['acrobacia','atletismo'], poder:'110%', desc:'Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria), pode gastar 2 PE para receber +5 nesse teste.' },
  { nome:'Chef', pericias:['fortitude','profissao'], poder:'Ingrediente Secreto', desc:'Em cenas de interlúdio, ao cozinhar prato especial, você e aliados que se alimentarem recebem benefício de dois pratos (acumula se repetir).', detalheProfissao:'cozinheiro' },
  { nome:'Criminoso', pericias:['crime','furtividade'], poder:'O Crime Compensa', desc:'No final de uma missão, escolha um item encontrado. Na próxima missão, pode incluir esse item no inventário sem contar no limite por patente.' },
  { nome:'Cultista Arrependido', pericias:['ocultismo','religiao'], poder:'Traços do Outro Lado', desc:'Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.', auto:'tracosOutroLado' },
  { nome:'Desgarrado', pericias:['fortitude','sobrevivencia'], poder:'Calejado', desc:'Você recebe +1 PV para cada 5% de NEX.', auto:'calejado' },
  { nome:'Engenheiro', pericias:['profissao','tecnologia'], poder:'Ferramentas Favoritas', desc:'Um item à sua escolha (exceto armas) conta como uma categoria abaixo para você.' },
  { nome:'Executivo', pericias:['diplomacia','profissao'], poder:'Processo Otimizado', desc:'Ao fazer teste de perícia em teste estendido ou revisar documentos, pode pagar 2 PE para receber +5 no teste.' },
  { nome:'Investigador', pericias:['investigacao','percepcao'], poder:'Faro para Pistas', desc:'Uma vez por cena, ao procurar pistas, pode gastar 1 PE para receber +5 no teste.' },
  { nome:'Lutador', pericias:['luta','reflexos'], poder:'Mão Pesada', desc:'Você recebe +2 em rolagens de dano com ataques corpo a corpo.' },
  { nome:'Magnata', pericias:['diplomacia','pilotagem'], poder:'Patrocinador da Ordem', desc:'Seu limite de crédito é sempre considerado um acima do atual.' },
  { nome:'Mercenário', pericias:['iniciativa','intimidacao'], poder:'Posição de Combate', desc:'No primeiro turno de cada cena de ação, pode gastar 2 PE para receber uma ação de movimento adicional.' },
  { nome:'Militar', pericias:['pontaria','tatica'], poder:'Para Bellum', desc:'Você recebe +2 em rolagens de dano com armas de fogo.' },
  { nome:'Operário', pericias:['fortitude','profissao'], poder:'Ferramentas de Trabalho', desc:'Escolha uma arma simples ou tática ligada à sua profissão. Você sabe usá-la e recebe +1 em ataque, dano e margem de ameaça com ela.' },
  { nome:'Policial', pericias:['percepcao','pontaria'], poder:'Patrulha', desc:'Você recebe +2 em Defesa.', auto:'patrulha' },
  { nome:'Religioso', pericias:['religiao','vontade'], poder:'Acalentar', desc:'Você recebe +5 em testes de Religião para acalmar e, ao acalmar alguém, ele recupera 1d6 + Presença de Sanidade.' },
  { nome:'Servidor Público', pericias:['intuicao','vontade'], poder:'Espírito Cívico', desc:'Sempre que faz um teste para ajudar, pode gastar 1 PE para aumentar o bônus concedido em +2.' },
  { nome:'Teórico da Conspiração', pericias:['investigacao','ocultismo'], poder:'Eu Já Sabia', desc:'Você recebe resistência a dano mental igual ao seu Intelecto.', auto:'euJaSabia' },
  { nome:'T.I.', pericias:['investigacao','tecnologia'], poder:'Motor de Busca', desc:'Com acesso à internet, a critério do Mestre, pode gastar 2 PE para substituir um teste de perícia por Tecnologia.' },
  { nome:'Trabalhador Rural', pericias:['adestramento','sobrevivencia'], poder:'Desbravador', desc:'Ao fazer teste de Adestramento ou Sobrevivência, pode gastar 2 PE para receber +5; além disso, ignora penalidade por terreno difícil.' },
  { nome:'Trambiqueiro', pericias:['crime','enganacao'], poder:'Impostor', desc:'Uma vez por cena, pode gastar 2 PE para substituir um teste de perícia por Enganação.' },
  { nome:'Universitário', pericias:['atualidades','investigacao'], poder:'Dedicação', desc:'Você recebe +1 PE, +1 PE adicional a cada NEX ímpar (15%, 25%...) e +1 no limite de PE por turno.', auto:'dedicacao' },
  { nome:'Vítima', pericias:['reflexos','vontade'], poder:'Cicatrizes Psicológicas', desc:'Você recebe +1 de Sanidade para cada 5% de NEX.', auto:'cicatrizes' },
];
const ORIGEM_ALIAS = Object.fromEntries(ORIGENS_DADOS.map(o => [normTxt(o.nome), o]));
const ATRS=['Agi','For','Int','Pre','Vig'];
const GS=['','T','V','E'];
const GB={'':0,'T':5,'V':10,'E':15};
const GRUPO_CORES={'Agilidade':'#1a5a72','Força':'#8b2020','Intelecto':'#7a5c1e','Presença':'#4a2a72','Vigor':'#1e5a32'};
window._ps={};
window._psBon={};
window._psAtr={};
window._profExtras=[];

// ============================================================
// NEX MODAL — PROGRESSÃO AUTOMÁTICA
// ============================================================
let _nexModalPending = [];
let _nexModalChoices = {};

function abrirNexModal(nex, classe) {
  const gains = NEX_PROGRESSION[classe]?.[nex];
  if (!gains || gains.length === 0) return;

  _nexModalPending = gains;
  _nexModalChoices = {};

  const container = document.getElementById('nexModalContainer');
  let html = `<div class="nex-modal-ov" id="nexModal">
    <div class="nex-modal-box">
      <div class="nex-modal-header">
        <div>
          <div class="nex-modal-title">📈 NEX ${nex}% Atingido!</div>
          <div class="nex-modal-subtitle">SEUS NOVOS BENEFÍCIOS</div>
        </div>
      </div>
      <div class="nex-modal-body">`;

  gains.forEach((gain, idx) => {
    html += `<div class="nex-gain-section">`;
    if (gain.type === 'info') {
      html += `<div class="nex-gain-header">📜 ${gain.label || 'Benefício Automático'}</div>
        <div class="nex-gain-body">
          <div class="info-box">${gain.text}</div>
        </div>`;
    } else if (gain.type === 'atr') {
      const atrMap = [{id:'agilidade',nome:'AGI',cor:'#1a5a72'},{id:'forca',nome:'FOR',cor:'#8b2020'},{id:'intelecto',nome:'INT',cor:'#7a5c1e'},{id:'presenca',nome:'PRE',cor:'#4a2a72'},{id:'vigor',nome:'VIG',cor:'#1e5a32'}];
      html += `<div class="nex-gain-header">⬆ ${gain.label}</div>
        <div class="nex-gain-body">
          <div style="font-family:'Share Tech Mono';font-size:0.65em;color:var(--ink3);margin-bottom:8px;">Escolha um atributo para aumentar em +1:</div>
          <div class="atr-choice-grid">`;
      atrMap.forEach(a => {
        const cur = parseInt(document.getElementById(a.id)?.value)||0;
        html += `<button class="atr-choice-btn" id="atrchk_${idx}_${a.id}"
          style="--atr-c:${a.cor};border-color:${a.cor}20;"
          onclick="nexChooseAtr(${idx},'${a.id}')">
          <span style="color:${a.cor};font-family:'Special Elite',serif;">${a.nome}</span>
          <span class="atr-val-now">${cur}</span>
        </button>`;
      });
      html += `</div></div>`;
    } else if (gain.type === 'hab') {
      const habs = (typeof HABS_LIVRO !== 'undefined' ? HABS_LIVRO : [])
        .filter(h => h.classe === gain.classe || h.classe === 'Universal');
      html += `<div class="nex-gain-header">✦ ${gain.label} <span style="font-size:0.75em;opacity:0.7;">(${gain.classe})</span></div>
        <div class="nex-gain-body">
          <div style="font-family:'Share Tech Mono';font-size:0.65em;color:var(--ink3);margin-bottom:8px;">Escolha um poder para adicionar à ficha:</div>
          <!-- BUSCA E FILTRO PARA HABILIDADES NO NEX MODAL -->
          <div class="nex-hab-search-row">
            <input type="text" class="nex-hab-search" id="nexHabSearch_${idx}" placeholder="Buscar habilidade..." oninput="filtrarNexHab(${idx})">
          </div>
          <div class="hab-choice-list" id="nexhablist_${idx}">`;
      habs.forEach((h, hi) => {
        html += `<div class="hab-choice-item" id="habchk_${idx}_${hi}"
          data-search="${h.nome.toLowerCase()} ${h.desc.toLowerCase()} ${h.classe.toLowerCase()}"
          onclick="nexChooseHab(${idx},${hi},'${escHtml(h.nome)}','${escHtml(h.custo)}','${escHtml(h.desc)}')">
          <div class="hab-choice-header">
            <span class="hab-choice-name">${h.nome}</span>
            <span class="hab-choice-tag">${h.classe}</span>
            <span class="hab-choice-nex">NEX ${h.nex}</span>
            ${h.custo && h.custo !== '—' ? `<span class="hab-choice-cost">⚡ ${h.custo}</span>` : ''}
          </div>
          <div class="hab-choice-desc">${h.desc}</div>
        </div>`;
      });
      html += `</div></div>`;
    } else if (gain.type === 'rit') {
      const rits = typeof RITUAIS_LIVRO !== 'undefined' ? RITUAIS_LIVRO : [];
      html += `<div class="nex-gain-header" style="color:var(--purple);">🌀 ${gain.label}</div>
        <div class="nex-gain-body">
          <div style="font-family:'Share Tech Mono';font-size:0.65em;color:var(--ink3);margin-bottom:8px;">Escolha um ritual para aprender:</div>
          <div class="nex-rit-search-row">
            <input type="text" class="nex-hab-search" id="nexRitSearch_${idx}" placeholder="Buscar ritual..." oninput="filtrarNexRitBusca(${idx})">
          </div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;">
            ${['Conhecimento','Energia','Morte','Sangue','Medo'].map(e=>`<button onclick="filtrarNexRit(${idx},'${e}')" id="nexritfilt_${idx}_${e}" style="background:transparent;border:1px solid var(--border2);color:var(--ink3);font-family:'Share Tech Mono';font-size:0.55em;padding:3px 8px;cursor:pointer;" class="nrfb">${e}</button>`).join('')}
            <button onclick="filtrarNexRit(${idx},'Todos')" style="background:transparent;border:1px solid var(--border2);color:var(--ink3);font-family:'Share Tech Mono';font-size:0.55em;padding:3px 8px;cursor:pointer;">Todos</button>
          </div>
          <div class="rit-choice-list" id="nexritlist_${idx}">`;
      rits.forEach((r, ri) => {
        html += `<div class="rit-choice-item" id="ritchk_${idx}_${ri}"
          data-elem="${r.elem}"
          data-search="${r.nome.toLowerCase()} ${r.desc.toLowerCase()}"
          onclick="nexChooseRit(${idx},${ri},'${escHtml(r.nome)}','${r.elem}','${r.circ}')">
          <div class="rit-choice-name"><span style="opacity:0.6;font-size:0.8em;">[${r.elem} · ${r.circ}°]</span> ${r.nome}</div>
          <div class="rit-choice-desc">${r.desc.substring(0,120)}${r.desc.length>120?'...':''}</div>
        </div>`;
      });
      html += `</div></div>`;
    }
    html += `</div>`;
  });

  html += `</div>
      <div class="nex-modal-footer">
        <button class="nex-modal-close" onclick="fecharNexModal()">✕ Fechar (escolher depois)</button>
        <button class="nex-modal-confirm" onclick="confirmarNexModal()">✓ Confirmar Escolhas</button>
      </div>
    </div>
  </div>`;
  container.innerHTML = html;
}

function escHtml(str) {
  return (str||'').replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/\n/g,' ');
}

function filtrarNexHab(idx) {
  const q = (document.getElementById(`nexHabSearch_${idx}`)?.value||'').toLowerCase().trim();
  document.getElementById(`nexhablist_${idx}`)?.querySelectorAll('.hab-choice-item').forEach(el => {
    el.style.display = (!q || el.dataset.search.includes(q)) ? '' : 'none';
  });
}

function filtrarNexRitBusca(idx) {
  const q = (document.getElementById(`nexRitSearch_${idx}`)?.value||'').toLowerCase().trim();
  const elemFiltro = window[`_nexRitElem_${idx}`] || 'Todos';
  document.getElementById(`nexritlist_${idx}`)?.querySelectorAll('.rit-choice-item').forEach(el => {
    const elemOk = elemFiltro === 'Todos' || el.dataset.elem === elemFiltro;
    const buscaOk = !q || el.dataset.search.includes(q);
    el.style.display = (elemOk && buscaOk) ? '' : 'none';
  });
}

function nexChooseAtr(idx, atrId) {
  _nexModalChoices[idx] = {type:'atr', atrId};
  document.querySelectorAll(`[id^="atrchk_${idx}_"]`).forEach(b => b.classList.remove('selected'));
  const el = document.getElementById(`atrchk_${idx}_${atrId}`);
  if (el) el.classList.add('selected');
}
function nexChooseHab(idx, hi, nome, custo, desc) {
  _nexModalChoices[idx] = {type:'hab', nome, custo, desc};
  document.querySelectorAll(`[id^="habchk_${idx}_"]`).forEach(b => b.classList.remove('selected'));
  const el = document.getElementById(`habchk_${idx}_${hi}`);
  if (el) el.classList.add('selected');
}
function nexChooseRit(idx, ri, nome, elem, circ) {
  _nexModalChoices[idx] = {type:'rit', ri, nome, elem, circ};
  document.querySelectorAll(`[id^="ritchk_${idx}_"]`).forEach(b => b.classList.remove('selected'));
  const el = document.getElementById(`ritchk_${idx}_${ri}`);
  if (el) el.classList.add('selected');
}
function filtrarNexRit(idx, elem) {
  window[`_nexRitElem_${idx}`] = elem;
  const q = (document.getElementById(`nexRitSearch_${idx}`)?.value||'').toLowerCase().trim();
  const list = document.getElementById(`nexritlist_${idx}`);
  if (!list) return;
  list.querySelectorAll('.rit-choice-item').forEach(el => {
    const elemOk = (elem === 'Todos' || el.dataset.elem === elem);
    const buscaOk = !q || el.dataset.search.includes(q);
    el.style.display = (elemOk && buscaOk) ? '' : 'none';
  });
}

function confirmarNexModal() {
  _nexModalPending.forEach((gain, idx) => {
    const choice = _nexModalChoices[idx];
    if (!choice) return;
    if (choice.type === 'atr') {
      const el = document.getElementById(choice.atrId);
      if (el) {
        el.value = (parseInt(el.value, 10) || 0) + 1;
        calcDeriv();
      }
    } else if (choice.type === 'hab') {
      const cont = document.getElementById('habCont');
      const d = cont.appendChild(mkHab(choice.nome, 'Custo: '+choice.custo+' · '+choice.desc));
      d.classList.add('open');
    } else if (choice.type === 'rit') {
      const r = (typeof RITUAIS_LIVRO !== 'undefined' ? RITUAIS_LIVRO : [])[choice.ri];
      if (r) inserirRitual(choice.ri);
    }
  });
  fecharNexModal();
  triggerSalvar();
  const hasHabOrRit = _nexModalPending.some(g => g.type === 'hab' || g.type === 'rit');
  if (hasHabOrRit) {
    const btn = document.querySelector('.main-tab:nth-child(3)');
    if (btn) switchTab('poderes', btn);
  }
}
function fecharNexModal() {
  document.getElementById('nexModalContainer').innerHTML = '';
}

// ============================================================
// DARK MODE
// ============================================================
function toggleDark(){
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';
  const t=isDark?'light':'dark';
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('btnDark').textContent=t==='dark'?'☾':'☀';
  localStorage.setItem('op_theme',t);
}
function applyTheme(){
  const t=localStorage.getItem('op_theme')||'light';
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('btnDark').textContent=t==='dark'?'☾':'☀';
}

// TABS
function switchTab(id,btn){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.main-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
}

/** Sub-abas Poderes / Combate: uma seção por vez em telas Galaxy A51·A71 (CSS ≤431px). Em telas largas o CSS ignora o estado. */
function switchGalSubnav(ctx, secId, btn) {
  const navId = ctx === 'poderes' ? 'galSubnavPoderes' : 'galSubnavCombate';
  const tabId = ctx === 'poderes' ? 'tab-poderes' : 'tab-combate';
  const nav = document.getElementById(navId);
  const scope = document.getElementById(tabId);
  if (!nav || !scope) return;
  nav.querySelectorAll('.gal-subnav-btn').forEach(b => b.classList.toggle('active', b === btn));
  const subSel = ctx === 'poderes' ? '.gal-subsec--poderes' : '.gal-subsec--combate';
  scope.querySelectorAll(subSel).forEach(s => s.classList.toggle('active', s.id === secId));
  if (ctx === 'poderes' && secId === 'gal-p-rit') syncRitualDtHostUI();
}
function classeLabel(classeId){
  return {combatente:'Combatente',especialista:'Especialista',ocultista:'Ocultista'}[classeId]||'Especialista';
}

// COLLAPSIBLE
function collToggle(btn){
  const item = btn.closest('.coll-item');
  const wasOpen = item.classList.contains('open');
  item.classList.toggle('open');
  if(item.classList.contains('rit-item')){
    if(!wasOpen && item.classList.contains('open')) setRitDtTargetItem(item);
    syncRitualDtHostUI();
  }
}

// ATRIBUTOS (sem teto; mínimo 0)
function ajustarAtr(id,delta){
  const el=document.getElementById(id);
  let v=(parseInt(el.value,10)||0)+delta;
  v=Math.max(0,v);
  el.value=v;
  calcDeriv();
}
function atuTodosDots(){}

// STAT ADJUST
function adjStat(id, delta) {
  const el = document.getElementById(id);
  if (!el) return;
  el.value = (parseInt(el.value)||0) + delta;
  // Se ajustar máximo manualmente, marcar como manual
  if (id === 'pvMax' || id === 'peMax' || id === 'sanMax') {
    el.dataset.manual = '1';
  }
  atuBarras();
  triggerSalvar();
}

// ============================================================
// PROFICIÊNCIAS
// ============================================================
const PROFICIENCIAS = {
  combatente: [
    { id: 'prof_armas_simples', label: 'Armas Simples', always: true },
    { id: 'prof_armas_taticas', label: 'Armas Táticas', always: true },
    { id: 'prof_protecao_leve', label: 'Proteções Leves', always: true },
    { id: 'prof_protecao_pesada', label: 'Proteção Pesada', always: false, req: 'Proteção Pesada' },
  ],
  especialista: [
    { id: 'prof_armas_simples', label: 'Armas Simples', always: true },
    { id: 'prof_protecao_leve', label: 'Proteções Leves', always: true },
  ],
  ocultista: [
    { id: 'prof_armas_simples', label: 'Armas Simples', always: true },
  ],
};
window._profSel = {};

function buildProficiencias() {
  const cont = document.getElementById('profCont');
  if (!cont) return;
  const cls = document.getElementById('classe')?.value || 'especialista';
  const profs = PROFICIENCIAS[cls] || [];
  cont.innerHTML = '';
  if (profs.length === 0) { cont.innerHTML = '<span style="font-family:\'Share Tech Mono\';font-size:0.62em;color:var(--ink3);">Nenhuma proficiência disponível.</span>'; return; }

  // Verificar se tem poder "Proteção Pesada"
  const temProtPesada = checkHabExists('Proteção Pesada');

  profs.forEach(p => {
    const requiresProtPesada = (!p.always && p.req === 'Proteção Pesada');
    if (requiresProtPesada && !temProtPesada) return;
    const wasActive = document.getElementById(p.id)?.dataset.active === '1';
    const active = p.always ? true : (window._profSel[p.id] ?? wasActive);
    const item = document.createElement('button');
    item.type = 'button';
    item.id = p.id;
    item.className = 'prof-tag' + (active ? ' active' : '') + (p.always ? ' locked' : '');
    item.dataset.active = active ? '1' : '0';
    item.title = p.always ? 'Proficiência base da classe' : 'Clique para marcar/desmarcar';
    item.innerHTML = `<span class="prof-label">${p.label}</span>${p.req ? `<span class="prof-req">${p.req}</span>` : ''}`;
    item.onclick = () => {
      if (p.always) return;
      const next = item.dataset.active !== '1';
      item.dataset.active = next ? '1' : '0';
      item.classList.toggle('active', next);
      window._profSel[p.id] = next;
      triggerSalvar();
    };
    cont.appendChild(item);
  });
}

function checkHabExists(nome) {
  return Array.from(document.getElementById('habCont')?.querySelectorAll('.hab-nome') || [])
    .some(el => el.value.toLowerCase().includes(nome.toLowerCase()));
}

function getOrigemSelecionada(){
  const inEl = document.getElementById('origem');
  if(!inEl) return null;
  const key = normTxt(inEl.value);
  return ORIGEM_ALIAS[key] || null;
}
function preencherListaOrigens(){
  const dl = document.getElementById('origensList');
  if(!dl) return;
  dl.innerHTML = ORIGENS_DADOS.map(o => `<option value="${o.nome}"></option>`).join('');
}
function marcarPericiaTreinada(id){
  if(!id) return;
  const atual = window._ps[id] || '';
  if(!atual) window._ps[id] = 'T';
}
function aplicarPericiasOrigem(origem){
  if(!origem) return;
  (origem.pericias||[]).forEach(marcarPericiaTreinada);
  if(origem.detalheProfissao){
    const profNome = document.getElementById('pn_profissao');
    if(profNome && !profNome.value.trim()) profNome.value = origem.detalheProfissao;
  }
}
function removePoderOrigemAuto(){
  document.querySelectorAll('#origemCont .coll-item').forEach(item => {
    if(item.dataset.autoOrigem === '1') item.remove();
  });
}
function mkOrigemPoder(n='',d=''){
  const div=document.createElement('div');div.className='coll-item hab-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${n||'Novo Poder de Origem'}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar();onPoderesRealtimeChange()">🗑</button>
  </div>
  <div class="coll-body">
    <div class="campo" style="margin-bottom:8px;"><label class="lbl">Nome</label>
      <input type="text" class="origem-nome" value="${n}" placeholder="Nome do poder de origem" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Novo Poder de Origem'">
    </div>
    <div class="campo"><label class="lbl">Descrição</label>
      <textarea class="origem-desc" style="min-height:58px;" placeholder="Descrição do poder...">${d}</textarea>
    </div>
  </div>`;
  div.addEventListener('input',()=>{triggerSalvar();onPoderesRealtimeChange();});return div;
}
function addOrigemPoder(){const d=document.getElementById('origemCont').appendChild(mkOrigemPoder());d.classList.add('open');}
function inserirPoderOrigemAuto(origem){
  removePoderOrigemAuto();
  if(!origem) return;
  const texto = `${origem.nome} · ${origem.poder}\n${origem.desc}`;
  const d=document.getElementById('origemCont').appendChild(mkOrigemPoder(origem.poder,texto));
  d.dataset.autoOrigem='1';
  d.classList.add('open');
}
let _origemFiltroBusca='';
function abrirModalOrigemLivro(){
  let html=`<div class="modal-ov" id="modalOrigem"><div class="modal-box">
    <div class="modal-hd">
      <span class="modal-title">Poderes de Origem</span>
      <button class="modal-close" onclick="document.getElementById('modalOrigem').remove()">✕</button>
    </div>
    <div class="modal-filters-area">
      <input type="text" class="modal-search" id="origemSearch" placeholder="Buscar origem ou poder..." oninput="filtrarModalOrigem()">
    </div>
    <div class="modal-scroll"><div class="modal-list" id="origem-item-list">`;
  ORIGENS_DADOS.forEach((o,i)=>{
    const perTxt = o.periciasTexto || (o.pericias||[]).map(pid=>PERI.find(p=>p.id===pid)?.nome||pid).join(' e ');
    html += `<div class="modal-item hab" data-search="${normTxt(o.nome)} ${normTxt(o.poder)}" onclick="inserirOrigemLivro(${i})">
      <div class="modal-item-name">${o.poder} <span style="opacity:.6;font-size:.8em;">[${o.nome}]</span></div>
      <div class="modal-item-meta">Perícias: ${perTxt||'—'}</div>
      <div class="modal-item-desc">${o.desc}</div>
    </div>`;
  });
  html += `</div></div>
    <div class="modal-footer"><button class="modal-footer-close" onclick="document.getElementById('modalOrigem').remove()">✕ Fechar</button></div>
  </div></div>`;
  document.getElementById('modalContainer').innerHTML = html;
  _origemFiltroBusca='';
}
function filtrarModalOrigem(){
  const q = normTxt(document.getElementById('origemSearch')?.value || '');
  _origemFiltroBusca=q;
  document.querySelectorAll('#origem-item-list .modal-item').forEach(el=>{
    const ok = !_origemFiltroBusca || el.dataset.search.includes(_origemFiltroBusca);
    el.style.display=ok?'':'none';
  });
}
function inserirOrigemLivro(i){
  const o = ORIGENS_DADOS[i];
  if(!o) return;
  const texto = `${o.nome} · ${o.poder}\n${o.desc}`;
  const d=document.getElementById('origemCont').appendChild(mkOrigemPoder(o.poder,texto));
  d.classList.add('open');
  document.getElementById('modalOrigem')?.remove();
  triggerSalvar();
  onPoderesRealtimeChange();
}
function aplicarOrigemAutomatica(){
  const origem = getOrigemSelecionada();
  inserirPoderOrigemAuto(origem);
  if(origem){
    const origemInput = document.getElementById('origem');
    if(origemInput) origemInput.value = origem.nome;
    aplicarPericiasOrigem(origem);
    buildPeri();
  }
}
function origemTemAuto(autoId){
  const origem = getOrigemSelecionada();
  return !!(origem && origem.auto === autoId);
}
function getAllPowerNamesNormalized(){
  const out = [];
  const pushName = (v) => {
    const n = normTxt(v || '');
    if (n) out.push(n);
  };
  document.querySelectorAll('#habCont .hab-nome').forEach(el => pushName(el.value));
  document.querySelectorAll('#paranormalCont .paranormal-nome').forEach(el => pushName(el.value));
  document.querySelectorAll('#origemCont .origem-nome').forEach(el => pushName(el.value));
  return out;
}
function hasPowerNamed(powerName){
  const target = normTxt(powerName || '');
  if (!target) return false;
  return getAllPowerNamesNormalized().some(n => n.includes(target));
}
function getPericiaAutoBonus(periId){
  let bonus = 0;
  if (hasPowerNamed('Precognição') && ['reflexos','fortitude','vontade'].includes(periId)) bonus += 2;
  if (hasPowerNamed('Sensitivo') && ['diplomacia','intimidacao','intuicao'].includes(periId)) bonus += 5;
  if (hasPowerNamed('Visão do Oculto') && periId === 'percepcao') bonus += 5;
  return bonus;
}
function getGolpeDeSorteMargemBonus(){
  return hasPowerNamed('Golpe de Sorte') ? 1 : 0;
}
function onPoderesRealtimeChange(){
  calcDeriv();
}
const RES_TIPOS_LIST = ['Corte','Impacto','Balístico','Perfuração','Conhecimento','Energia','Morte','Sangue','Medo','Mental','Elétrico','Químico','Fogo','Frio'];
window._resCustom = window._resCustom || [];

function computeAutoResistencias(){
  const vals = {};
  getAllPowerNamesNormalized().forEach(n=>{
    if(n.includes(normTxt('Resistir a Conhecimento'))) vals.Conhecimento = Math.max(vals.Conhecimento||0,10);
    if(n.includes(normTxt('Resistir a Energia'))) vals.Energia = Math.max(vals.Energia||0,10);
    if(n.includes(normTxt('Resistir a Morte'))) vals.Morte = Math.max(vals.Morte||0,10);
    if(n.includes(normTxt('Resistir a Sangue'))) vals.Sangue = Math.max(vals.Sangue||0,10);
  });
  if(origemTemAuto('euJaSabia')){
    vals.Mental = parseInt(document.getElementById('intelecto')?.value)||0;
  }
  return vals;
}

function garantirPainelResistencias(){
  if(document.getElementById('resPanel')) return;
  const statusGrid = document.querySelector('#tab-identidade .grid4');
  if(!statusGrid) return;
  const panel = document.createElement('div');
  panel.id = 'resPanel';
  panel.className = 'stat-box panel-accent-ink';
  panel.innerHTML = `
    <span class="stat-lbl">Resistências</span>
    <div id="resList" class="res-list"></div>
    <div id="resAddPanel" class="res-add-panel">
      <label class="lbl">Valor</label>
      <input type="number" id="resAddVal" min="0" value="0" class="atk-bi" style="width:100%!important;">
      <label class="lbl">Tipo</label>
      <select id="resAddTipo" style="width:100%;background:var(--bg2);border:1px solid var(--border);padding:6px;">
        ${RES_TIPOS_LIST.map(t=>`<option value="${t}">${t}</option>`).join('')}
      </select>
      <div class="res-add-actions">
        <button type="button" class="btn-res-ok" onclick="confirmAddResistencia()">Incluir</button>
        <button type="button" class="btn-res-cancel" onclick="toggleResAddPanel(false)">Cancelar</button>
      </div>
    </div>
    <button type="button" class="btn-add" id="btnAddResistencia" onclick="toggleResAddPanel(true)">Adicionar resistência</button>`;
  statusGrid.appendChild(panel);
}

function toggleResAddPanel(show){
  const p=document.getElementById('resAddPanel');
  if(!p)return;
  p.classList.toggle('open',!!show);
}

function confirmAddResistencia(){
  const tipo=document.getElementById('resAddTipo')?.value||'Corte';
  const val=Math.max(0,parseInt(document.getElementById('resAddVal')?.value,10)||0);
  window._resCustom.push({tipo,val});
  toggleResAddPanel(false);
  document.getElementById('resAddVal').value='0';
  atualizarResistencias();
  triggerSalvar();
}

function removeResCustom(idx){
  window._resCustom.splice(idx,1);
  atualizarResistencias();
  triggerSalvar();
}

function atualizarResistencias(){
  const host=document.getElementById('resList');
  if(!host) return;
  const auto = computeAutoResistencias();
  let html='';
  RES_TIPOS_LIST.forEach(tipo=>{
    const a = auto[tipo]||0;
    if(a>0){
      html+=`<div class="res-row res-row-auto"><span>${tipo} <small style="opacity:.75">(poder/origem)</small></span><span class="res-row-val">${a}</span></div>`;
    }
  });
  window._resCustom.forEach((r,i)=>{
    html+=`<div class="res-row res-row-custom"><span>${r.tipo}</span><span class="res-row-val">${r.val}</span><button type="button" class="inv-del" onclick="removeResCustom(${i})" title="Remover">\u2715</button></div>`;
  });
  if(!html) html='<div style="font-family:\'Share Tech Mono\';font-size:0.62em;color:var(--ink3);padding:4px 0;">Nenhuma resistência registrada.</div>';
  host.innerHTML=html;
}

function syncTrilhaOptions() {
  const trilhaEl = document.getElementById('trilha');
  const cls = document.getElementById('classe')?.value || 'especialista';
  const nex = parseInt(document.getElementById('nexN')?.value)||5;
  if (!trilhaEl) return;
  const cur = trilhaEl.value;
  const trilhas = TRILHAS_POR_CLASSE[cls] || [];
  trilhaEl.innerHTML = `<option value="">Selecione a trilha (NEX 10%)</option>` + trilhas.map(t => `<option value="${t}">${t}</option>`).join('');
  trilhaEl.disabled = nex < 10;
  if (trilhas.includes(cur)) trilhaEl.value = cur;
  else trilhaEl.value = '';
  if (nex >= 10) trilhaEl.title = 'Escolha a trilha da sua classe';
  else trilhaEl.title = 'Disponível a partir do NEX 10%';
}

function addHabTrilhaAutomatica(trilha, nexMarco, beneficio) {
  const nome = `[Trilha ${trilha}] ${beneficio.nome}`;
  if (checkHabExists(nome)) return;
  const desc = `Trilha ${trilha} · NEX ${nexMarco}% — ${beneficio.desc}`;
  const d = document.getElementById('habCont').appendChild(mkHab(nome, desc));
  d.classList.add('open');
}

function aplicarBeneficiosTrilhaAteNex() {
  const trilha = document.getElementById('trilha')?.value || '';
  const nex = parseInt(document.getElementById('nexN')?.value)||5;
  if (!trilha || !TRILHA_BENEFICIOS[trilha]) return;
  [10,40,65,99].forEach(marco => {
    if (nex >= marco) {
      const beneficio = TRILHA_BENEFICIOS[trilha][marco];
      if (beneficio) addHabTrilhaAutomatica(trilha, marco, beneficio);
    }
  });
}

function onTrilhaChange() {
  aplicarBeneficiosTrilhaAteNex();
}

// PERÍCIAS
function buildPeri(){
  const g=document.getElementById('perGrid');g.innerHTML='';
  const hdr=document.createElement('div');hdr.className='per-header-row';
  hdr.innerHTML=`<div class="per-hcol">Grau</div><div class="per-hcol">Perícia</div><div class="per-hcol">Atr</div><div class="per-hcol">Bônus</div><div class="per-hcol">Val</div><div class="per-hcol"></div>`;
  g.appendChild(hdr);
  let lastGrupo='';
  PERI.forEach(p=>{
    if(p.grupo!==lastGrupo){
      lastGrupo=p.grupo;
      const gl=document.createElement('div');gl.className='per-group-label';
      gl.style.setProperty('--pgl-color',GRUPO_CORES[p.grupo]||'var(--border2)');
      gl.style.background=GRUPO_CORES[p.grupo]||'var(--border2)';
      gl.textContent=p.grupo;g.appendChild(gl);
    }
    if(p.prof){
      buildProfRow(g,p,'profissao',window._ps['profissao']||'',window._psBon['profissao']||0,window._psAtr['profissao']||p.atr,undefined,document.getElementById('pn_profissao')?.value||'',-1);
      window._profExtras.forEach((pe2,i)=>buildProfRow(g,p,'profissao_extra_'+i,pe2.grau||'',pe2.bon||0,pe2.atr||p.atr,undefined,pe2.nome||'',i));
      const addRow=document.createElement('div');addRow.className='per-row';addRow.style.gridColumn='1/-1';
      addRow.innerHTML=`<button class="btn-add-prof" style="grid-column:1/-1;margin:4px 0;" onclick="addProfExtra()">+ outra Profissão</button>`;
      g.appendChild(addRow);
    } else {buildPeriRow(g,p);}
  });
  refreshDefesaPainel();
}
function mkAtrSel(id,defAtr,overrideAtr){
  const cur=overrideAtr||defAtr;
  let opts=ATRS.map(a=>`<option value="${a}"${a===cur?' selected':''}>${a}</option>`).join('');
  return `<select class="per-atr-sel" id="pa_${id}" title="Atributo chave" onchange="atuPeriAtr('${id}')">${opts}</select>`;
}
function buildPeriRow(g,p){
  const gr=window._ps[p.id]||'';const bon=(window._psBon[p.id]||0);
  const atrKey=window._psAtr[p.id]||p.atr;const av=getAtr(atrKey);
  const row=document.createElement('div');row.className='per-row';
  row.innerHTML=`
    <div class="per-grau ${gr}" id="pg_${p.id}" onclick="ciclar('${p.id}')">${gr||'—'}</div>
    <span class="per-nome">${p.nome}</span>
    ${mkAtrSel(p.id,p.atr,window._psAtr[p.id])}
    <input type="number" class="per-bon" id="pb_${p.id}" value="${bon||''}" placeholder="±" oninput="atuPeriBonus('${p.id}')">
    <span class="per-val" id="pv_${p.id}">${gr||bon?'+'+(av+(gr?GB[gr]:0)+bon):'—'}</span>
    <button class="btn-pr" onclick="rolarPeri('${p.nome}','${p.id}')">🎲</button>`;
  g.appendChild(row);
}
function buildProfRow(g,p,id,gr,bon,atrKey,comBotao,nomeExtra='',idxExtra){
  const isExtra=idxExtra>=0;const av=getAtr(atrKey||p.atr);const bonGrau=gr?GB[gr]:0;
  const row=document.createElement('div');row.className='per-row';
  const nomeDisplay=isExtra
    ?`<input type="text" id="pn_${id}" placeholder="Nome..." value="${nomeExtra}" style="flex:1;border:none;border-bottom:1px dashed var(--border);background:transparent;color:var(--ink2);font-size:0.88em;padding:1px 2px;" oninput="atuProfNome('${id}',${idxExtra})">`
    :`<span class="per-nome">Prof. <input type="text" id="pn_${id}" placeholder="qual?" value="${nomeExtra}" style="width:60px;border:none;border-bottom:1px dashed var(--border2);background:transparent;color:var(--gold);font-size:0.88em;padding:0 2px;" oninput="atuProfNome('${id}',-1)"></span>`;
  row.innerHTML=`
    <div class="per-grau ${gr}" id="pg_${id}" onclick="ciclarProf('${id}',${idxExtra})">${gr||'—'}</div>
    ${nomeDisplay}
    ${mkAtrSel(id,p.atr,atrKey)}
    <input type="number" class="per-bon" id="pb_${id}" value="${bon||''}" placeholder="±" oninput="atuPeriBonus('${id}',${idxExtra})">
    <span class="per-val" id="pv_${id}">${gr||bon?'+'+(av+bonGrau+bon):'—'}</span>
    <button class="btn-pr" onclick="rolarPeriExtra('${id}',${idxExtra})">🎲</button>
    ${isExtra?`<button style="background:none;border:none;color:var(--ink3);cursor:pointer;font-size:0.75em;padding:0 2px;" onclick="removerProfExtra(${idxExtra})">✕</button>`:''}`;
  g.appendChild(row);
}
function atuPeriAtr(id){
  const sel=document.getElementById('pa_'+id);if(!sel)return;
  const v=sel.value;const idx=id.startsWith('profissao_extra_')?parseInt(id.split('_').pop()):-1;
  if(idx>=0&&window._profExtras[idx]){window._profExtras[idx].atr=v;}else{window._psAtr[id]=v;}
  if(id.startsWith('profissao'))atuPeriExtra(id,idx);else atuPeri(id);
  refreshDefesaPainel();
  triggerSalvar();
}
function atuProfNome(id,idx){const v=document.getElementById('pn_'+id)?.value||'';if(idx>=0&&window._profExtras[idx])window._profExtras[idx].nome=v;triggerSalvar();}
function addProfExtra(){window._profExtras.push({grau:'',bon:0,nome:'',atr:'Int'});buildPeri();triggerSalvar();}
function removerProfExtra(i){window._profExtras.splice(i,1);buildPeri();triggerSalvar();}
function ciclarProf(id,idx){
  const c=(idx<0?window._ps['profissao']:window._profExtras[idx]?.grau)||'';
  const n=GS[(GS.indexOf(c)+1)%GS.length];
  if(idx<0)window._ps['profissao']=n;else if(window._profExtras[idx])window._profExtras[idx].grau=n;
  const e=document.getElementById('pg_'+id);if(e){e.textContent=n||'—';e.className='per-grau '+n;}
  atuPeriExtra(id,idx);
  refreshDefesaPainel();
  triggerSalvar();
}
function atuPeriExtra(id,idx){
  const p=PERI.find(x=>x.id==='profissao');if(!p)return;
  const gr=(idx<0?window._ps['profissao']:window._profExtras[idx]?.grau)||'';
  const selAtr=document.getElementById('pa_'+id);
  const atrKey=selAtr?selAtr.value:(idx<0?window._psAtr['profissao']||p.atr:window._profExtras[idx]?.atr||p.atr);
  const bon=parseInt(document.getElementById('pb_'+id)?.value)||0;
  const b=getAtr(atrKey)+(gr?GB[gr]:0)+bon;
  const e=document.getElementById('pv_'+id);if(e)e.textContent=gr||bon?'+'+b:'—';
}
function rolarPeriExtra(id,idx){
  const p=PERI.find(x=>x.id==='profissao');if(!p)return;
  const gr=(idx<0?window._ps['profissao']:window._profExtras[idx]?.grau)||'';
  const selAtr=document.getElementById('pa_'+id);
  const atrKey=selAtr?selAtr.value:(idx<0?window._psAtr['profissao']||p.atr:window._profExtras[idx]?.atr||p.atr);
  const bon2=gr?GB[gr]:0;const bonExtra=parseInt(document.getElementById('pb_'+id)?.value)||0;
  const av=getAtr(atrKey);const d=d20s(av);const tot=d.best+bon2+bonExtra;
  const nomePr=document.getElementById('pn_'+id)?.value||'Profissão';
  showDado(nomePr+(gr?' ('+{T:'Treinado',V:'Veterano',E:'Expert'}[gr]+')':''),d.best,bon2+bonExtra,tot,av,d.all);
}
function ciclar(id){
  const c=window._ps[id]||'';const n=GS[(GS.indexOf(c)+1)%GS.length];
  window._ps[id]=n;const e=document.getElementById('pg_'+id);e.textContent=n||'—';e.className='per-grau '+n;
  atuPeri(id);
  refreshDefesaPainel();
  triggerSalvar();
}
function getAtr(a){const m={Agi:'agilidade',For:'forca',Int:'intelecto',Pre:'presenca',Vig:'vigor'};return parseInt(document.getElementById(m[a])?.value)||0;}
/** Total numérico da perícia (atributo + grau T/V/E + bônus campo). Igual ao exibido em +X na grade. */
function getPeriScore(periId){
  const p=PERI.find(x=>x.id===periId);if(!p)return 0;
  const g=window._ps[periId]||'';
  const bon=parseInt(window._psBon[periId])||0;
  const sel=document.getElementById('pa_'+periId);
  const atrKey=sel?sel.value:(window._psAtr[periId]||p.atr);
  const autoBon=getPericiaAutoBonus(periId);
  if(!g&&!bon&&!autoBon)return 0;
  return getAtr(atrKey)+(g?GB[g]:0)+bon+autoBon;
}
function atuPeri(id){
  const p=PERI.find(x=>x.id===id);if(!p)return;
  const g=window._ps[id]||'';const bon=parseInt(window._psBon[id])||0;
  const selAtr=document.getElementById('pa_'+id);
  const atrKey=selAtr?selAtr.value:window._psAtr[id]||p.atr;
  const autoBon=getPericiaAutoBonus(id);
  const b=getAtr(atrKey)+(g?GB[g]:0)+bon+autoBon;
  const e=document.getElementById('pv_'+id);if(e)e.textContent=g||bon||autoBon?'+'+b:'—';
}
function atuPeriBonus(id,idx){
  const val=parseInt(document.getElementById('pb_'+id)?.value)||0;
  if(idx!==undefined&&idx>=0){if(window._profExtras[idx])window._profExtras[idx].bon=val;atuPeriExtra(id,idx);}
  else if(id==='profissao'){window._psBon[id]=val;atuPeriExtra(id,-1);}
  else{window._psBon[id]=val;atuPeri(id);}
  refreshDefesaPainel();
  triggerSalvar();
}
function atuTodas(){
  PERI.forEach(p=>{
    if(p.id!=='profissao')atuPeri(p.id);
    else{atuPeriExtra('profissao',-1);window._profExtras.forEach((_,i)=>atuPeriExtra('profissao_extra_'+i,i));}
  });
  refreshDefesaPainel();
}

function atuBarras(){
  const pv=parseInt(document.getElementById('pvAtual').value)||0;
  const pvM=parseInt(document.getElementById('pvMax').value)||1;
  const pe=parseInt(document.getElementById('peAtual').value)||0;
  const peM=parseInt(document.getElementById('peMax').value)||1;
  const san=parseInt(document.getElementById('sanAtual').value)||0;
  const sanM=parseInt(document.getElementById('sanMax').value)||1;
  const pct=v=>Math.max(0,Math.min(100,Math.round(v/Math.max(1,sanM)*100)));
  document.getElementById('pvFill').style.width=Math.max(0,Math.min(100,Math.round(pv/Math.max(1,pvM)*100)))+'%';
  document.getElementById('peFill').style.width=Math.max(0,Math.min(100,Math.round(pe/Math.max(1,peM)*100)))+'%';
  document.getElementById('sanFill').style.width=pct(san)+'%';
}

// ============================================================
// CÁLCULO DE DERIVADOS — AJUSTE PROPORCIONAL DO MÁXIMO
// Quando o usuário altera o máximo manualmente, o novo NEX/atributo
// aplica a diferença (delta) ao valor atual do máximo.
// ============================================================
let _lastCalcStats = { pvMax: null, peMax: null, sanMax: null };

function sumInvProt(){
  return Array.from(document.querySelectorAll('#invCont .inv-it')).reduce((s,it)=>{
    if(normInvTag(it.querySelector('.inv-tag')?.value||'')!=='protecao')return s;
    const v=parseInt(it.querySelector('.inv-prot-val')?.value,10);
    const n=Number.isFinite(v)?v:0;
    return s+Math.max(0,n);
  },0);
}
function sumInvReforcada(){
  return Array.from(document.querySelectorAll('#invCont .inv-it')).reduce((s,it)=>{
    if(normInvTag(it.querySelector('.inv-tag')?.value||'')!=='protecao')return s;
    const ids=readMelhoriaIds(it);
    return s+(ids.includes('reforcada')?2:0);
  },0);
}
function refreshDefesaPainel(){
  const agi=parseInt(document.getElementById('agilidade')?.value)||0;
  const defBonus=parseInt(document.getElementById('defBonus')?.value)||0;
  const bonusOrigemPatrulha = origemTemAuto('patrulha') ? 2 : 0;
  const protSum=sumInvProt();
  const refSum=sumInvReforcada();
  const defBase=10+agi+defBonus+bonusOrigemPatrulha;
  const defTotalVal=defBase+protSum+refSum;
  const defEl=document.getElementById('defTotal');
  if(defEl)defEl.textContent=String(defTotalVal);
  const protDisp=document.getElementById('defProtSum');
  if(protDisp)protDisp.textContent=String(protSum+refSum);
  const fort=getPeriScore('fortitude');
  const refl=getPeriScore('reflexos');
  const bloqB=parseInt(document.getElementById('bloqBonus')?.value)||0;
  const esqB=parseInt(document.getElementById('esquivaBonus')?.value)||0;
  const bloqEl=document.getElementById('bloqTotal');
  const esqEl=document.getElementById('esquivaTotal');
  if(bloqEl)bloqEl.textContent=String(fort+bloqB);
  if(esqEl)esqEl.textContent=String(defTotalVal+refl+esqB);
}
function calcDeriv(){
  garantirPainelResistencias();
  refreshDefesaPainel();
  const cls=document.getElementById('classe').value||'especialista';
  const nex=parseInt(document.getElementById('nexN').value)||5;
  const s=CLASSES_STATS[cls];const niveis=Math.floor(nex/5);
  const vig=parseInt(document.getElementById('vigor').value)||0;
  const pre=parseInt(document.getElementById('presenca').value)||0;
  const bonusPvCalejado = origemTemAuto('calejado') ? niveis : 0;
  const bonusSanCicatrizes = origemTemAuto('cicatrizes') ? niveis : 0;
  const bonusPeDedicacao = origemTemAuto('dedicacao') ? (1 + Math.max(0,Math.floor((nex-5)/10))) : 0;
  const bonusPePotencialAprimorado = hasPowerNamed('Potencial Aprimorado') ? niveis : 0;
  const bonusPvSangueDeFerro = hasPowerNamed('Sangue de Ferro') ? (niveis*2) : 0;

  // Calcular valores "teóricos" baseados nos atributos e NEX
  const pvTeor = s.pvBase + vig + (niveis-1)*(s.pvNex + vig) + bonusPvCalejado + bonusPvSangueDeFerro;
  const peTeor = s.peBase + pre + (niveis-1)*(s.peNex + pre) + bonusPeDedicacao + bonusPePotencialAprimorado;
  let sanTeor = s.sanBase + (niveis-1)*s.sanNex + bonusSanCicatrizes;
  if(origemTemAuto('tracosOutroLado')) sanTeor = Math.floor(sanTeor/2);

  const pvEl = document.getElementById('pvMax');
  const peEl = document.getElementById('peMax');
  const sanEl = document.getElementById('sanMax');

  if (!pvEl.dataset.manual) {
    pvEl.value = pvTeor;
  } else {
    // Proporcional: se o teórico mudou, aplica o delta
    const prevTeor = parseInt(pvEl.dataset.prevTeor)||pvTeor;
    const delta = pvTeor - prevTeor;
    if (delta !== 0) pvEl.value = (parseInt(pvEl.value)||0) + delta;
  }
  pvEl.dataset.prevTeor = pvTeor;

  if (!peEl.dataset.manual) {
    peEl.value = peTeor;
  } else {
    const prevTeor = parseInt(peEl.dataset.prevTeor)||peTeor;
    const delta = peTeor - prevTeor;
    if (delta !== 0) peEl.value = (parseInt(peEl.value)||0) + delta;
  }
  peEl.dataset.prevTeor = peTeor;

  if (!sanEl.dataset.manual) {
    sanEl.value = sanTeor;
  } else {
    const prevTeor = parseInt(sanEl.dataset.prevTeor)||sanTeor;
    const delta = sanTeor - prevTeor;
    if (delta !== 0) sanEl.value = (parseInt(sanEl.value)||0) + delta;
  }
  sanEl.dataset.prevTeor = sanTeor;

  document.getElementById('pvFormula').textContent=`${s.pvBase}+Vig=${s.pvBase+vig} base, +${s.pvNex}+Vig=${s.pvNex+vig}/NEX${bonusPvCalejado?` + Calejado ${bonusPvCalejado}`:''}${bonusPvSangueDeFerro?` + Sangue de Ferro ${bonusPvSangueDeFerro}`:''}`;
  document.getElementById('peFormula').textContent=`${s.peBase}+Pre=${s.peBase+pre} base, +${s.peNex}+Pre=${s.peNex+pre}/NEX${bonusPeDedicacao?` + Dedicação ${bonusPeDedicacao}`:''}${bonusPePotencialAprimorado?` + Potencial Aprimorado ${bonusPePotencialAprimorado}`:''}`;
  document.getElementById('sanFormula').textContent=`${s.sanBase} base (${cls}), +${s.sanNex}/NEX${bonusSanCicatrizes?` + Cicatrizes ${bonusSanCicatrizes}`:''}${origemTemAuto('tracosOutroLado')?' · Traços: metade':''}`;

  const lim=Math.ceil(nex/5)+(origemTemAuto('dedicacao')?1:0);
  document.getElementById('peLimite').textContent=lim;

  atualizarResistencias();
  syncGolpeDeSorteAtaques();
  atuTodas();atuBarras();atuInventarioPeso();triggerSalvar();
  document.querySelectorAll('#ritCont .rit-item').forEach(el=>atuRitDtBadge(el));
  syncRitualDtHostUI();
}

let _prevNex = 5;
function ajustarNEX(d){
  let n=parseInt(document.getElementById('nexN').value)||5;
  n=Math.max(5,Math.min(99,n+d));
  document.getElementById('nexN').value=n;
  atuNEX(true);
}
function atuNEX(fromButton){
  let n=parseInt(document.getElementById('nexN').value)||5;
  n=Math.max(5,Math.min(99,n));
  document.getElementById('nexN').value=n;
  document.getElementById('nexFill').style.width=n+'%';
  document.getElementById('nexLbl').textContent='NEX '+n+'%';
  const lim=Math.ceil(n/5)+(origemTemAuto('dedicacao')?1:0);
  document.getElementById('peLimite').textContent=lim;
  document.getElementById('nexDesc').textContent='Limite de PE/turno: '+lim+' · Habilidades de NEX '+n+'% desbloqueadas';

  if(fromButton && n > _prevNex && n > 5) {
    const cls=document.getElementById('classe').value||'especialista';
    abrirNexModal(n, cls);
  }
  syncTrilhaOptions();
  aplicarBeneficiosTrilhaAteNex();
  _prevNex = n;

  calcDeriv();triggerSalvar();
}
function atuPatente(){
  const v=document.getElementById('patente').value;const p=PATENTES[v];
  if(p){document.getElementById('creditos').value=p.credito;document.getElementById('patenteDisplay').textContent=p.label.toUpperCase();}
  triggerSalvar();
}

function d20s(n){const q=Math.max(n,1);const r=[];for(let i=0;i<q;i++)r.push(Math.floor(Math.random()*20)+1);r.sort((a,b)=>b-a);return{best:r[0],all:r,rolou:q};}
function showDado(descr,dado,bon,tot,qtd,todos,opts={}){
  const critMin=opts.critMin!=null?opts.critMin:20;
  const skipCrit=!!opts.skipCrit;
  const ov=document.createElement('div');ov.className='dado-ov';
  const cs=!skipCrit&&dado>=critMin&&dado<=20;
  const cf=!skipCrit&&dado===1;
  const outrosHtml=todos&&todos.length>1?`<div class="dado-outros">Outros: ${todos.slice(1).join(' · ')}</div>`:'';
  ov.innerHTML=`<div class="dado-card ${cs?'cs':cf?'cf':''}">
    <div class="dado-hd">${descr} · ${qtd||1}d20 · bônus=${bon>=0?'+'+bon:bon}${!skipCrit&&critMin<20?` · crítico natural ≥${critMin}`:''}</div>
    <div class="dado-tot">${tot}</div>
    ${cs?'<div class="dado-crit">Sucesso Crítico!</div>':cf?'<div class="dado-crit">Falha Crítica!</div>':''}
    ${outrosHtml}<div class="dado-dis">clique para fechar</div></div>`;
  document.body.appendChild(ov);ov.addEventListener('click',()=>ov.remove());setTimeout(()=>ov.remove(),8000);
  addLog(descr,dado,bon,tot,opts.critMin);
}
function rolarAtrib(nome,id){const v=parseInt(document.getElementById(id).value)||0;const r=d20s(v);showDado('Teste de '+nome,r.best,0,r.best,r.rolou,r.all);}
function rolarPeri(nome,id){
  const p=PERI.find(x=>x.id===id);if(!p)return;
  const selAtr=document.getElementById('pa_'+id);
  const atrKey=selAtr?selAtr.value:window._psAtr[id]||p.atr;
  const av=getAtr(atrKey);const g=window._ps[id]||'';const bon=g?GB[g]:0;const bonExtra=parseInt(window._psBon[id]||0);
  const autoBon=getPericiaAutoBonus(id);
  const res=d20s(av);const tot=res.best+bon+bonExtra+autoBon;
  showDado(nome+(g?' ('+{T:'Treinado',V:'Veterano',E:'Expert'}[g]+')':''),res.best,bon+bonExtra+autoBon,tot,res.rolou,res.all);
}
function addLog(tipo,dado,bon,tot,critMin){
  const ld=document.getElementById('logDiv');if(!ld)return;
  const it=document.createElement('div');
  if(arguments.length===1){
    it.className='log-it';
    const h=new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
    it.innerHTML=`<span class="log-res">•</span><span>${tipo}</span><br><span style="color:var(--ink3);font-size:0.85em;">${h}</span>`;
    ld.insertBefore(it,ld.firstChild);while(ld.children.length>20)ld.removeChild(ld.lastChild);
    return;
  }
  const cm=critMin!=null?critMin:20;
  const cs=dado!=null&&dado>=cm&&dado<=20;
  it.className='log-it'+(cs?' cs':dado===1?' cf':'');
  const h=new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  it.innerHTML=`<span class="log-res">${tot}</span><span>${tipo}</span><br><span style="color:var(--ink3);font-size:0.85em;">d20=${dado} bônus=${bon} · ${h}</span>`;
  ld.insertBefore(it,ld.firstChild);while(ld.children.length>20)ld.removeChild(ld.lastChild);
}

// ATAQUES
function parseDiceString(spec){
  const m=String(spec||'').trim().match(/^(\d+)\s*d\s*(\d+)$/i);
  if(m) return {n:Math.max(1,parseInt(m[1],10)),f:Math.max(2,parseInt(m[2],10))};
  return {n:1,f:6};
}
function normalizeAtkPayload(a){
  if(a&&typeof a==='object'&&!Array.isArray(a)){
    let dn=a.dn, df=a.df;
    if((dn==null||df==null)&&a.d){const p=parseDiceString(a.d);dn=p.n;df=p.f;}
    return {
      n:a.n??'', habil:a.habil||'luta', ba:a.ba??0, bd:a.bd??0,
      dn:dn??1, df:df??6,
      danoAtr:a.danoAtr||'forca',
      critMin:a.critMin??(20-getGolpeDeSorteMargemBonus()), critMult:a.critMult??2,
      invW:a.invW??'', invM:a.invM??''
    };
  }
  return {n:'',habil:'luta',ba:0,bd:0,dn:1,df:6,danoAtr:'forca',critMin:20-getGolpeDeSorteMargemBonus(),critMult:2,invW:'',invM:''};
}
function getInvItemsList(){
  return [...document.querySelectorAll('#invCont .inv-it')];
}
function readMelhoriaIds(itEl){
  try{ return JSON.parse(itEl.querySelector('.inv-melh-data')?.value||'[]')||[];}catch(e){ return []; }
}
function sumMelhoriaEffects(ids){
  const M={
    certeira:{atk:2}, cruel:{dmg:2}, perigosa:{margem:2},
    alongada:{atk:2}, calibre:{calibre:1}, miraLaser:{margem:2},
    dumdum:{critMult:1}, explosiva:{explosiva:1}
  };
  let atk=0,dmg=0,margem=0,calibre=0,critMult=0,explosiva=false;
  (ids||[]).forEach(id=>{const e=M[id]; if(!e)return; atk+=e.atk||0; dmg+=e.dmg||0; margem+=e.margem||0; calibre+=e.calibre||0; critMult+=e.critMult||0; if(e.explosiva)explosiva=true;});
  return {atk,dmg,margem,calibre,critMult,explosiva};
}
function getLinkedAtkMods(box){
  const items=getInvItemsList();
  const iw=box.querySelector('.atk-inv-w')?.value;
  const im=box.querySelector('.atk-inv-m')?.value;
  const o={atk:0,dmg:0,margem:0,calibre:0,critMult:0,explosiva:false};
  const add=i=>{if(i==null||i==='')return; const el=items[+i]; if(!el)return; const s=sumMelhoriaEffects(readMelhoriaIds(el)); o.atk+=s.atk; o.dmg+=s.dmg; o.margem+=s.margem; o.calibre+=s.calibre; o.critMult+=s.critMult; if(s.explosiva)o.explosiva=true;};
  add(iw); add(im);
  return o;
}
function fillAtkInvSelects(box){
  const items=getInvItemsList();
  const curW=box.querySelector('.atk-inv-w')?.value??'';
  const curM=box.querySelector('.atk-inv-m')?.value??'';
  const opt=(tags)=>items.map((it,idx)=>{
    const tag=normInvTag(it.querySelector('.inv-tag')?.value||'');
    if(!tags.includes(tag))return '';
    const nm=(it.querySelector('.inv-ni')?.value||'Item').replace(/</g,'');
    return '<option value="'+idx+'">'+nm+'</option>';
  }).join('');
  const sw=box.querySelector('.atk-inv-w'); const sm=box.querySelector('.atk-inv-m');
  if(sw){ sw.innerHTML='<option value="">— Arma —</option>'+opt(['arma']); sw.value=[...sw.options].some(o=>o.value===curW)?curW:''; }
  if(sm){ sm.innerHTML='<option value="">— Munição —</option>'+opt(['municao']); sm.value=[...sm.options].some(o=>o.value===curM)?curM:''; }
}
function refreshAllAtkInvSelects(){
  document.querySelectorAll('#atkCont .atk-item').forEach(fillAtkInvSelects);
}
function syncGolpeDeSorteAtaques(){
  if(!hasPowerNamed('Golpe de Sorte')) return;
  document.querySelectorAll('#atkCont .atk-item').forEach(box=>{
    const inp=box.querySelector('.atk-crit-min');
    if(!inp || inp.dataset.gsApplied==='1') return;
    const cur=parseInt(inp.value,10)||20;
    inp.value=String(Math.max(1,Math.min(20,cur-1)));
    inp.dataset.gsApplied='1';
  });
}

function mkAtk(data){
  const a=normalizeAtkPayload(data);
  const div=document.createElement('div');div.className='coll-item atk-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${a.n||'Novo Ataque'}</span>
    <span class="coll-meta" style="color:var(--gold);">${a.habil==='luta'?'LUTA':'PONTARIA'}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar()">✕</button>
  </div>
  <div class="coll-body">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Nome</label><input type="text" class="atk-nome" value="${a.n}" placeholder="Ex: Pistola .38" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Novo Ataque'"></div>
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Perícia</label>
        <select class="atk-habil" onchange="atuAtkMeta(this)">
          <option value="luta"${a.habil==='luta'?' selected':''}>Luta</option>
          <option value="pontaria"${a.habil==='pontaria'?' selected':''}>Pontaria</option>
        </select>
      </div>
    </div>
    <div class="atk-inv-row">
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Item (arma)</label><select class="atk-inv-w" onchange="triggerSalvar()"></select></div>
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Munição</label><select class="atk-inv-m" onchange="triggerSalvar()"></select></div>
    </div>
    <div class="atk-grid">
      <div>
        <div class="atk-section-lbl">ATAQUE — bônus extra</div>
        <div class="atk-ctrls">
          <input type="number" class="atk-bi ba" value="${a.ba}" title="Bônus extra de ataque" placeholder="±0">
        </div>
      </div>
      <div>
        <div class="atk-section-lbl">DANO (quantidade · dado)</div>
        <div class="atk-ctrls">
          <span class="atk-dice-pair">|<input type="number" class="atk-dn" min="1" value="${a.dn}" title="Quantidade de dados">||d<input type="number" class="atk-df" min="2" value="${a.df}" title="Faces">|</span>
          <input type="number" class="atk-bi bd" value="${a.bd}" title="Bônus fixo de dano (não multiplica em crítico)" placeholder="±0">
          <select class="atk-dano-atr" title="Atributo somado ao dano">
            <option value="forca"${a.danoAtr==='forca'?' selected':''}>+Força</option>
            <option value="agilidade"${a.danoAtr==='agilidade'?' selected':''}>+Agilidade</option>
            <option value="intelecto"${a.danoAtr==='intelecto'?' selected':''}>+Intelecto</option>
            <option value="presenca"${a.danoAtr==='presenca'?' selected':''}>+Presença</option>
            <option value="vigor"${a.danoAtr==='vigor'?' selected':''}>+Vigor</option>
            <option value="nenhum"${a.danoAtr==='nenhum'?' selected':''}>Sem atributo</option>
          </select>
        </div>
      </div>
      <div class="atk-rolagem-row">
        <button type="button" class="btn-ra" onclick="rolarAtk(this)">Atacar</button>
        <span style="font-family:'Share Tech Mono';font-size:0.58em;color:var(--ink3);">Um clique: ataque + dano (dados × multiplicador em crítico)</span>
      </div>
    </div>
    <div class="atk-crit-row">
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Margem (natural mín. p/ crítico)</label>
        <input type="number" class="atk-crit-min" min="1" max="20" value="${a.critMin}" title="Padrão 20. Melhorias Perigosa/Mira laser reduzem na rolagem."></div>
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Multiplicador de crítico (dados)</label>
        <select class="atk-crit-mult">
          ${[2,3,4].map(m=>'<option value="'+m+'"'+(a.critMult===m?' selected':'')+'>×'+m+'</option>').join('')}
        </select></div>
    </div>
  </div>`;
  div.addEventListener('input',()=>triggerSalvar());
  fillAtkInvSelects(div);
  return div;
}
function atuAtkMeta(sel){
  const item=sel.closest('.coll-item');
  const meta=item.querySelector('.coll-meta');
  if(meta)meta.textContent=sel.value==='luta'?'LUTA':'PONTARIA';
  triggerSalvar();
}
function addAtk(){const d=document.getElementById('atkCont').appendChild(mkAtk({}));d.classList.add('open');}

function showAtaqueDanoCard(o){
  const outrosHtml=o.hitTodos&&o.hitTodos.length>1?`<div class="atk-result-muted">Outros d20: ${o.hitTodos.slice(1).join(' · ')}</div>`:'';
  const dmgDiceLbl=o.isCrit?`${o.ndBase}×${o.mult}d${o.df}`:`${o.ndBase}d${o.df}`;
  const critHtml=o.isCrit?'<div class="atk-result-crit-msg">Acerto crítico: apenas os dados foram multiplicados.</div>':'';
  const ov=document.createElement('div');ov.className='dado-ov';
  const cardCls=o.isCrit?'dado-card cs':'dado-card';
  ov.innerHTML=`<div class="${cardCls}">
    <div class="dado-hd">${o.nome}</div>
    <div class="atk-result-grid">
      <div class="atk-result-block">
        <div class="atk-result-label">Ataque</div>
        <div class="atk-result-main">${o.hitTot}</div>
        <div class="atk-result-meta">${o.hitQtd||1}d20 · d20=${o.hitD20} · bônus ${o.hitBonus>=0?'+'+o.hitBonus:o.hitBonus}</div>
        <div class="atk-result-meta">Crítico em ${o.critMin}+</div>
      </div>
      <div class="atk-result-block atk-result-block-dmg">
        <div class="atk-result-label">Dano</div>
        <div class="atk-result-main atk-result-dmg-main">${o.totalDmg}</div>
        <div class="atk-result-meta">${dmgDiceLbl}${o.expStr?` ${o.expStr}`:''}${o.flat?` + ${o.flat}`:''}</div>
        <div class="atk-result-meta">${o.danoAtrKey&&o.danoAtrKey!=='nenhum'?`Atributo no dano: +${o.atrDano}`:'Atributo no dano: sem bônus'}</div>
        <div class="atk-result-meta">Dados: ${o.rr.join('+')} = ${o.diceSum}</div>
      </div>
    </div>
    ${critHtml}
    ${outrosHtml}
    <div class="dado-dis">clique para fechar</div>
  </div>`;
  document.body.appendChild(ov);ov.addEventListener('click',()=>ov.remove());setTimeout(()=>ov.remove(),12000);
  addLog(`⚔ ${o.nome}: ataque ${o.hitTot}${o.isCrit?' (CRÍTICO)':''} · dano ${o.totalDmg}`);
}

function rolarAtk(btn){
  const box=btn.closest('.coll-item');
  const ba=parseInt(box.querySelector('.ba').value)||0;
  const nome=box.querySelector('.atk-nome').value||'Ataque';
  const habil=box.querySelector('.atk-habil').value;
  const gr=window._ps[habil]||'';const ps=gr?GB[gr]:0;
  const atrKey=habil==='luta'?'forca':'agilidade';
  const av=parseInt(document.getElementById(atrKey).value)||0;
  const res=d20s(av);
  const lm=getLinkedAtkMods(box);
  const baseMin=parseInt(box.querySelector('.atk-crit-min')?.value,10)||20;
  const critMin=Math.max(1,Math.min(20,baseMin-lm.margem-getGolpeDeSorteMargemBonus()));
  const hitBonus=ps+ba+lm.atk;
  const hitTot=res.best+hitBonus;
  const hitD20=res.best;
  const isCrit=hitD20>=critMin&&hitD20<=20;

  let ndBase=Math.max(1,parseInt(box.querySelector('.atk-dn')?.value,10)||1);
  const df=Math.max(2,parseInt(box.querySelector('.atk-df')?.value,10)||6);
  const bd=parseInt(box.querySelector('.bd').value)||0;
  const danoAtrKey=box.querySelector('.atk-dano-atr')?.value||'forca';
  const atrDano=(danoAtrKey&&danoAtrKey!=='nenhum')?(parseInt(document.getElementById(danoAtrKey)?.value,10)||0):0;
  ndBase+=lm.calibre||0;
  const baseM=Math.max(2,parseInt(box.querySelector('.atk-crit-mult')?.value,10)||2);
  const mult=Math.max(2,baseM+lm.critMult);
  const diceCount=isCrit?ndBase*mult:ndBase;
  const rr=[];
  let diceSum=0;
  for(let i=0;i<diceCount;i++){const r=Math.floor(Math.random()*df)+1;rr.push(r);diceSum+=r;}
  let expSum=0,expStr='';
  if(lm.explosiva){
    const e2=[];
    for(let k=0;k<2;k++){const r=Math.floor(Math.random()*6)+1;e2.push(r);expSum+=r;}
    expStr=' +2d6('+e2.join('+')+')';
  }
  const flat=bd+lm.dmg+atrDano;
  const totalDmg=diceSum+expSum+flat;
  showAtaqueDanoCard({
    nome,hitD20,hitBonus,hitTot,critMin,isCrit,
    ndBase,df,mult,diceCount,rr,diceSum,expStr,flat,totalDmg,danoAtrKey,atrDano,
    hitQtd:res.rolou,hitTodos:res.all
  });
}


// HABILIDADES
function mkHab(n='',d=''){
  const div=document.createElement('div');div.className='coll-item hab-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${n||'Nova Habilidade'}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar();buildProficiencias();onPoderesRealtimeChange()">🗑</button>
  </div>
  <div class="coll-body">
    <div class="campo" style="margin-bottom:8px;"><label class="lbl">Nome</label>
      <input type="text" class="hab-nome" value="${n}" placeholder="Nome da Habilidade" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Nova Habilidade';buildProficiencias()">
    </div>
    <div class="campo"><label class="lbl">Custo / Efeito / Pré-requisito</label>
      <textarea class="hab-desc" style="min-height:50px;" placeholder="Ex: 2 PE — Recebe +5 no teste de ataque...">${d}</textarea>
    </div>
  </div>`;
  div.addEventListener('input',()=>{triggerSalvar();onPoderesRealtimeChange();});return div;
}
function addHab(){const d=document.getElementById('habCont').appendChild(mkHab());d.classList.add('open');}

// MODAL HABILIDADES
let _habFiltro='Todos';
let _habFiltroTrilha='Todas';
function getHabLivroComTrilhas() {
  const base = (typeof HABS_LIVRO !== 'undefined') ? [...HABS_LIVRO] : [];
  Object.entries(TRILHA_BENEFICIOS).forEach(([trilha, marcos]) => {
    const classe = Object.entries(TRILHAS_POR_CLASSE).find(([,arr])=>arr.includes(trilha))?.[0] || 'especialista';
    const classeTxt = classeLabel(classe);
    [10,40,65,99].forEach(nex => {
      if (!marcos[nex]) return;
      base.push({
        classe: classeTxt,
        trilha,
        nome: `[Trilha ${trilha}] ${marcos[nex].nome}`,
        custo: '—',
        nex: `${nex}%`,
        desc: marcos[nex].desc
      });
    });
  });
  return base;
}
function abrirModalHab(){
  const cls = document.getElementById('classe')?.value || 'especialista';
  const trilhasDaClasse = TRILHAS_POR_CLASSE[cls] || [];
  const classeAtualTxt = classeLabel(cls);
  const todasHabilidades = getHabLivroComTrilhas();
  let html=`<div class="modal-ov" id="modalHab"><div class="modal-box">
    <div class="modal-hd">
      <span class="modal-title">Habilidades do Livro</span>
      <button class="modal-close" onclick="document.getElementById('modalHab').remove()">✕</button>
    </div>
    <div class="modal-filters-area">
      <input type="text" class="modal-search" id="habSearch" placeholder="Buscar habilidade..." oninput="filtrarHabModal()">
      <span class="filter-row-label">Filtrar por classe</span>
      <div class="hab-filters">
        <button class="hab-filter-btn active" onclick="setHabFiltro('Todos',this)">Todos</button>
        <button class="hab-filter-btn" onclick="setHabFiltro('Universal',this)">Universal</button>
        <button class="hab-filter-btn" onclick="setHabFiltro('Especialista',this)">Especialista</button>
        <button class="hab-filter-btn" onclick="setHabFiltro('Combatente',this)">Combatente</button>
        <button class="hab-filter-btn" onclick="setHabFiltro('Ocultista',this)">Ocultista</button>
      </div>
      <span class="filter-row-label">Trilhas da classe atual</span>
      <div class="hab-filters">
        <button class="hab-filter-btn active" onclick="setHabFiltroTrilha('Todas',this)">Todas</button>
        ${trilhasDaClasse.map(t=>`<button class="hab-filter-btn" onclick="setHabFiltroTrilha('${t.replace(/'/g, "\\'")}',this)">${t}</button>`).join('')}
      </div>
    </div>
    <div class="modal-scroll">
      <div class="modal-list" id="hab-item-list">`;
  todasHabilidades.forEach((h,i)=>{
      const trilhaTxt = h.trilha ? ` · ${h.trilha}` : '';
      html+=`<div class="modal-item hab" data-classe="${h.classe}" data-trilha="${h.trilha||''}" data-search="${h.nome.toLowerCase()} ${h.classe.toLowerCase()} ${(h.trilha||'').toLowerCase()}" onclick="inserirHab(${i})">
        <div class="modal-item-name">${h.nome} <span style="opacity:0.6;font-size:0.8em;">[${h.classe}${trilhaTxt}]</span></div>
        <div class="modal-item-meta">Custo: ${h.custo}</div>
        <div class="modal-item-desc">${h.desc}</div>
      </div>`;
  });
  html+=`</div></div>
    <div class="modal-footer">
      <button class="modal-footer-close" onclick="document.getElementById('modalHab').remove()">✕ Fechar</button>
    </div>
  </div></div>`;
  document.getElementById('modalContainer').innerHTML=html;
  _habFiltro=classeAtualTxt;
  _habFiltroTrilha='Todas';
  const classeBtn = Array.from(document.querySelectorAll('#modalHab .hab-filters:first-of-type .hab-filter-btn')).find(b=>b.textContent===classeAtualTxt);
  if (classeBtn) {
    classeBtn.parentElement.querySelectorAll('.hab-filter-btn').forEach(b=>b.classList.remove('active'));
    classeBtn.classList.add('active');
  }
  filtrarHabModal();
}
function setHabFiltro(filtro,btn){
  _habFiltro=filtro;
  btn.closest('.hab-filters')?.querySelectorAll('.hab-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');filtrarHabModal();
}
function setHabFiltroTrilha(filtro,btn){
  _habFiltroTrilha=filtro;
  btn.closest('.hab-filters')?.querySelectorAll('.hab-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');filtrarHabModal();
}
function filtrarHabModal(){
  const q=(document.getElementById('habSearch')?.value||'').toLowerCase().trim();
  document.getElementById('hab-item-list')?.querySelectorAll('.modal-item').forEach(el=>{
    const classeOk=_habFiltro==='Todos'||el.dataset.classe===_habFiltro;
    const trilhaOk=_habFiltroTrilha==='Todas'||el.dataset.trilha===_habFiltroTrilha;
    const buscaOk=!q||el.dataset.search.includes(q);
    el.style.display=(classeOk&&trilhaOk&&buscaOk)?'':'none';
  });
}
function inserirHab(i){
  const all = getHabLivroComTrilhas();
  const h=all[i];
  if(!h)return;
  const d=document.getElementById('habCont').appendChild(mkHab(h.nome,'Custo: '+h.custo+' · '+h.desc));
  d.classList.add('open');document.getElementById('modalHab')?.remove();triggerSalvar();buildProficiencias();onPoderesRealtimeChange();
}

// ELEM CLASS MAP
const ELEM_CLS={'Conhecimento':'rit-elem-conhecimento','Energia':'rit-elem-energia','Morte':'rit-elem-morte','Sangue':'rit-elem-sangue','Medo':'rit-elem-medo'};
const ELEM_CARD_CLS={'Conhecimento':'rit-card-conhecimento','Energia':'rit-card-energia','Morte':'rit-card-morte','Sangue':'rit-card-sangue','Medo':'rit-card-medo'};
const EXEC_OPTS=['livre','padrão','movimento','completo','rodada'];
const ALC_OPTS=['pessoal','toque','curto','médio','longo','extremo','ilimitado'];
const DUR_OPTS=['instantânea','cena','sustentada','permanente'];
const RIT_DT_ATR_OPTS=[
  {v:'presenca',lab:'Presença'},{v:'agilidade',lab:'Agilidade'},{v:'forca',lab:'Força'},
  {v:'intelecto',lab:'Intelecto'},{v:'vigor',lab:'Vigor'}
];
function calcRitDtNumber(atrKey,out){
  const nex=parseInt(document.getElementById('nexN')?.value)||5;
  const lim=Math.ceil(nex/5)+(origemTemAuto('dedicacao')?1:0);
  const atrVal=parseInt(document.getElementById(atrKey)?.value)||0;
  const o=parseInt(out,10)||0;
  return 10+lim+atrVal+o;
}

function atuRitDtBadge(item){
  if(!item||!item.classList.contains('rit-item'))return;
  const atrH=item.querySelector('input.rit-dt-atr');
  const outH=item.querySelector('input.rit-dt-out');
  const valEl=item.querySelector('.rit-dt-hd');
  if(!atrH||!outH||!valEl)return;
  valEl.textContent=String(calcRitDtNumber(atrH.value,outH.value));
}

function getRitDtTargetItem(){
  const cont=document.getElementById('ritCont');
  if(!cont)return null;
  let t=cont.querySelector('.rit-item.rit-dt-active');
  if(t&&cont.contains(t))return t;
  return cont.querySelector('.rit-item');
}
function setRitDtTargetItem(el){
  if(!el||!el.classList.contains('rit-item'))return;
  document.querySelectorAll('#ritCont .rit-item.rit-dt-active').forEach(x=>x.classList.remove('rit-dt-active'));
  el.classList.add('rit-dt-active');
  syncRitualDtHostUI();
}

function initRitDtHostSelect(){
  const sel=document.getElementById('ritDtAtrHost');
  if(!sel)return;
  if(sel.dataset.inited==='1')return;
  sel.innerHTML=RIT_DT_ATR_OPTS.map(o=>`<option value="${o.v}">${o.lab}</option>`).join('');
  sel.dataset.inited='1';
}

function syncRitualDtHostUI(){
  initRitDtHostSelect();
  const host=document.getElementById('ritDtHost');
  if(!host)return;
  const items=document.querySelectorAll('#ritCont .rit-item');
  if(items.length===0){
    host.classList.add('rit-dt-host--empty');
    return;
  }
  host.classList.remove('rit-dt-host--empty');
  const tgt=getRitDtTargetItem();
  const nomeEl=document.getElementById('ritDtNomeAlvo');
  if(nomeEl&&tgt){
    const nm=tgt.querySelector('.rit-nome')?.value?.trim()||tgt.querySelector('.coll-title')?.textContent?.trim()||'Ritual';
    nomeEl.textContent=nm;
  }
  if(!tgt)return;
  const atrH=tgt.querySelector('input.rit-dt-atr');
  const outH=tgt.querySelector('input.rit-dt-out');
  const atrSel=document.getElementById('ritDtAtrHost');
  const outInp=document.getElementById('ritDtOutHost');
  if(atrSel&&atrH) atrSel.value=atrH.value||'presenca';
  if(outInp&&outH) outInp.value=outH.value||'0';
  atuRitDtHostDisplay();
}

function atuRitDtHostDisplay(){
  const tgt=getRitDtTargetItem();
  const valEl=document.getElementById('ritDtValHost');
  if(!tgt||!valEl)return;
  const atrSel=document.getElementById('ritDtAtrHost');
  const outInp=document.getElementById('ritDtOutHost');
  const atrKey=atrSel?.value||'presenca';
  const out=outInp?.value??'0';
  valEl.textContent=String(calcRitDtNumber(atrKey,out));
}

function onRitDtHostChange(){
  const tgt=getRitDtTargetItem();
  if(!tgt)return;
  const atrSel=document.getElementById('ritDtAtrHost');
  const outInp=document.getElementById('ritDtOutHost');
  const atrH=tgt.querySelector('input.rit-dt-atr');
  const outH=tgt.querySelector('input.rit-dt-out');
  if(atrH&&atrSel) atrH.value=atrSel.value;
  if(outH&&outInp) outH.value=outInp.value;
  atuRitDtBadge(tgt);
  atuRitDtHostDisplay();
  triggerSalvar();
}

// RITUAIS
function mkRit(data={}){
  const{nome='',elem='Conhecimento',circ='1',resistencia='Anula',atrResistencia='For',dtAtr='presenca',dtOut=0,n_exec='padrão',n_alc='toque',n_dur='cena',n_pe=1,n_desc='',d_exec='padrão',d_alc='toque',d_dur='cena',d_pe='',d_desc='',v_exec='padrão',v_alc='toque',v_dur='cena',v_pe='',v_desc='',activeTab='normal'}=data;
  const div=document.createElement('div');
  div.className='coll-item rit-item '+(ELEM_CLS[elem]||'rit-elem-conhecimento');
  const uid=Math.random().toString(36).slice(2,7);
  const sel=(id,val,opts,extra)=>`<select id="${id}" style="background:var(--bg2);border:1px solid var(--border);color:var(--rit-color,var(--cyan));font-family:'Share Tech Mono';font-size:0.65em;padding:3px 4px;width:100%;${extra||''}">${opts.map(o=>`<option${o===val?' selected':''}>${o}</option>`).join('')}</select>`;
  const circTxt=circ+'° Círculo';
  div.innerHTML=`
  <input type="hidden" class="rit-dt-atr" value="${dtAtr}">
  <input type="hidden" class="rit-dt-out" value="${dtOut}">
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${nome||'Novo Ritual'}</span>
    <span class="coll-meta" style="color:var(--rit-color,var(--cyan));">${elem} · ${circTxt} · DT <span class="rit-dt-hd">—</span></span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();syncRitualDtHostUI();triggerSalvar()">🗑</button>
  </div>
  <div class="coll-body">
    <div style="display:grid;grid-template-columns:1fr auto auto;gap:8px;margin-bottom:10px;align-items:end;">
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Nome</label>
        <input type="text" class="rit-nome" value="${nome}" placeholder="Nome..." style="color:var(--rit-color,var(--purple))!important;" oninput="atuRitHeader(this)">
      </div>
      <select class="rit-elem" style="background:var(--bg2);border:1px solid var(--border);color:var(--ink2);font-family:'Share Tech Mono';font-size:0.65em;padding:5px 8px;height:34px;" onchange="atuRitElem(this)">
        ${['Conhecimento','Energia','Morte','Sangue','Medo'].map(e=>`<option${e===elem?' selected':''}>${e}</option>`).join('')}
      </select>
      <select class="rit-circ" style="background:var(--bg2);border:1px solid var(--rit-color,var(--purple));color:var(--rit-color,var(--purple));font-family:'Share Tech Mono';font-size:0.65em;padding:5px 8px;height:34px;" onchange="atuRitHeader(this)">
        ${[1,2,3,4].map(n=>`<option${n==circ?' selected':''}>${n}°</option>`).join('')}
      </select>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Resistência</label>
        <select class="rit-resist" style="background:var(--bg2);border:1px solid var(--border);color:var(--ink2);font-family:'Share Tech Mono';font-size:0.65em;padding:5px 8px;width:100%;">
          <option value="Anula"${resistencia==='Anula'?' selected':''}>Anula</option>
          <option value="Desacredita"${resistencia==='Desacredita'?' selected':''}>Desacredita</option>
          <option value="Parcial"${resistencia==='Parcial'?' selected':''}>Parcial</option>
          <option value="Reduz à Metade"${resistencia==='Reduz à Metade'?' selected':''}>Reduz à Metade</option>
        </select>
      </div>
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Atributo de Resistência</label>
        <select class="rit-atr-resist" style="background:var(--bg2);border:1px solid var(--border);color:var(--ink2);font-family:'Share Tech Mono';font-size:0.65em;padding:5px 8px;width:100%;">
          <option value="For"${atrResistencia==='For'?' selected':''}>For</option>
          <option value="Vig"${atrResistencia==='Vig'?' selected':''}>Vig</option>
          <option value="Agi"${atrResistencia==='Agi'?' selected':''}>Agi</option>
          <option value="Int"${atrResistencia==='Int'?' selected':''}>Int</option>
          <option value="Pre"${atrResistencia==='Pre'?' selected':''}>Pre</option>
        </select>
      </div>
    </div>
    <div style="margin-bottom:10px;">
      <button class="btn-add" style="border-color:var(--purple);color:var(--purple);" onclick="conjurarRitual(this)">⚡ Conjurar Ritual</button>
    </div>
    <div class="rit-tabs">
      <button class="rit-tab ${activeTab==='normal'?'active':''}" onclick="switchRitTab(this,'normal')">Normal</button>
      <button class="rit-tab ${activeTab==='discente'?'active':''}" onclick="switchRitTab(this,'discente')">Discente</button>
      <button class="rit-tab ${activeTab==='verdadeiro'?'active':''}" onclick="switchRitTab(this,'verdadeiro')">Verdadeiro</button>
    </div>
    <div class="rit-version ${activeTab==='normal'?'active':''}" data-tab="normal">
      <div class="rit-fields">
        <div><div class="rit-slbl">Execução</div>${sel('rn_exec_'+uid,n_exec,EXEC_OPTS)}</div>
        <div><div class="rit-slbl">Alcance</div>${sel('rn_alc_'+uid,n_alc,ALC_OPTS)}</div>
        <div><div class="rit-slbl">Duração</div>${sel('rn_dur_'+uid,n_dur,DUR_OPTS)}</div>
        <div><div class="rit-slbl">Custo PE</div><input type="number" value="${n_pe}" min="0" style="text-align:center;color:var(--rit-color,var(--cyan))!important;border:1px solid var(--border)!important;background:var(--bg2)!important;width:100%;padding:4px!important;"></div>
      </div>
      <textarea class="rit-desc-area" placeholder="Efeito normal...">${n_desc}</textarea>
    </div>
    <div class="rit-version ${activeTab==='discente'?'active':''}" data-tab="discente">
      <div class="rit-fields">
        <div><div class="rit-slbl">Execução</div>${sel('rd_exec_'+uid,d_exec,EXEC_OPTS)}</div>
        <div><div class="rit-slbl">Alcance</div>${sel('rd_alc_'+uid,d_alc,ALC_OPTS)}</div>
        <div><div class="rit-slbl">Duração</div>${sel('rd_dur_'+uid,d_dur,DUR_OPTS)}</div>
        <div><div class="rit-slbl">PE extra</div><input type="number" value="${d_pe}" min="0" placeholder="total" style="text-align:center;color:var(--rit-color,var(--purple))!important;border:1px solid var(--border)!important;background:var(--bg2)!important;width:100%;padding:4px!important;"></div>
      </div>
      <textarea class="rit-desc-area" placeholder="Efeito discente...">${d_desc}</textarea>
    </div>
    <div class="rit-version ${activeTab==='verdadeiro'?'active':''}" data-tab="verdadeiro">
      <div class="rit-fields">
        <div><div class="rit-slbl">Execução</div>${sel('rv_exec_'+uid,v_exec,EXEC_OPTS)}</div>
        <div><div class="rit-slbl">Alcance</div>${sel('rv_alc_'+uid,v_alc,ALC_OPTS)}</div>
        <div><div class="rit-slbl">Duração</div>${sel('rv_dur_'+uid,v_dur,DUR_OPTS)}</div>
        <div><div class="rit-slbl">PE extra</div><input type="number" value="${v_pe}" min="0" placeholder="total" style="text-align:center;color:var(--rit-color,var(--gold))!important;border:1px solid var(--border)!important;background:var(--bg2)!important;width:100%;padding:4px!important;"></div>
      </div>
      <textarea class="rit-desc-area" placeholder="Efeito verdadeiro...">${v_desc}</textarea>
    </div>
  </div>`;
  div.addEventListener('input',e=>{triggerSalvar();});
  const dta=div.querySelector('input.rit-dt-atr');
  if(dta&&!RIT_DT_ATR_OPTS.some(o=>o.v===dta.value))dta.value='presenca';
  atuRitDtBadge(div);
  return div;
}
function atuRitElem(sel){
  const item=sel.closest('.coll-item');const elem=sel.value;
  Object.values(ELEM_CLS).forEach(c=>item.classList.remove(c));
  item.classList.add(ELEM_CLS[elem]||'rit-elem-conhecimento');
  const meta=item.querySelector('.coll-meta');
  if(meta){const circ=item.querySelector('.rit-circ')?.value||'1';meta.textContent=elem+' · '+circ+' Círculo';}
  triggerSalvar();
}
function atuRitHeader(inp){
  const item=inp.closest('.coll-item');
  const nome=item.querySelector('.rit-nome')?.value||'Novo Ritual';
  const elem=item.querySelector('.rit-elem')?.value||'Conhecimento';
  const circ=item.querySelector('.rit-circ')?.value||'1';
  const title=item.querySelector('.coll-title');if(title)title.textContent=nome;
  const meta=item.querySelector('.coll-meta');if(meta)meta.textContent=elem+' · '+circ+' Círculo';
  triggerSalvar();
}
function switchRitTab(btn,tab){
  const item=btn.closest('.coll-item');
  item.querySelectorAll('.rit-tab').forEach(b=>b.classList.remove('active'));
  item.querySelectorAll('.rit-version').forEach(v=>v.classList.remove('active'));
  btn.classList.add('active');
  item.querySelector('.rit-version[data-tab="'+tab+'"]').classList.add('active');
}
function addRit(){const d=document.getElementById('ritCont').appendChild(mkRit());d.classList.add('open');setRitDtTargetItem(d);}
function inferParanormalElemento(nome, desc){
  const nomeN = normTxt(nome || '');
  const descN = normTxt(desc || '');
  const byName = (typeof PODERES_PARANORMAIS_LIVRO !== 'undefined' ? PODERES_PARANORMAIS_LIVRO : []).find(p => normTxt(p.nome) === nomeN);
  if (byName?.elemento) return byName.elemento;
  if (descN.includes('elemento: sangue')) return 'Sangue';
  if (descN.includes('elemento: energia')) return 'Energia';
  if (descN.includes('elemento: morte')) return 'Morte';
  if (descN.includes('elemento: conhecimento')) return 'Conhecimento';
  return '';
}
function updateParanormalItemVisual(item){
  if(!item) return;
  const nome=item.querySelector('.paranormal-nome')?.value||'';
  const desc=item.querySelector('.paranormal-desc')?.value||'';
  const elem=inferParanormalElemento(nome, desc);
  item.classList.remove('para-elem-sangue','para-elem-energia','para-elem-morte','para-elem-conhecimento');
  const map = {Sangue:'para-elem-sangue',Energia:'para-elem-energia',Morte:'para-elem-morte',Conhecimento:'para-elem-conhecimento'};
  if(map[elem]) item.classList.add(map[elem]);
  const meta=item.querySelector('.paranormal-meta');
  if(meta) meta.textContent=elem||'';
}
function mkParanormal(n='',d=''){
  const div=document.createElement('div');div.className='coll-item hab-item paranormal-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${n||'Novo Poder Paranormal'}</span>
    <span class="coll-meta paranormal-meta"></span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar();onPoderesRealtimeChange()">🗑</button>
  </div>
  <div class="coll-body">
    <div class="campo" style="margin-bottom:8px;"><label class="lbl">Nome</label>
      <input type="text" class="paranormal-nome" value="${n}" placeholder="Nome do Poder" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Novo Poder Paranormal'">
    </div>
    <div class="campo"><label class="lbl">Descrição</label>
      <textarea class="paranormal-desc" style="min-height:50px;" placeholder="Descrição do poder...">${d}</textarea>
    </div>
  </div>`;
  div.addEventListener('input',()=>{updateParanormalItemVisual(div);triggerSalvar();onPoderesRealtimeChange();});
  updateParanormalItemVisual(div);
  return div;
}
function addParanormal(){const d=document.getElementById('paranormalCont').appendChild(mkParanormal());d.classList.add('open');}
let _paranormalFiltroElem='Todos';
function abrirModalParanormal(){
  let html=`<div class="modal-ov" id="modalParanormal"><div class="modal-box">
    <div class="modal-hd">
      <span class="modal-title">Poderes Paranormais</span>
      <button class="modal-close" onclick="document.getElementById('modalParanormal').remove()">✕</button>
    </div>
    <div class="modal-filters-area">
      <input type="text" class="modal-search" id="paranormalSearch" placeholder="Buscar poder..." oninput="filtrarParanormalModal()">
      <span class="filter-row-label">Filtrar por elemento</span>
      <div class="rit-filters">
        <button class="rit-filter-btn active" onclick="setParanormalFiltro('Todos',this)">Todos</button>
        ${['Universal','Conhecimento','Energia','Morte','Sangue'].map(e=>`<button class="rit-filter-btn" onclick="setParanormalFiltro('${e}',this)">${e}</button>`).join('')}
      </div>
    </div>
    <div class="modal-scroll"><div class="modal-list" id="paranormal-item-list">`;
  PODERES_PARANORMAIS_LIVRO.forEach((p,i)=>{
    html += `<div class="modal-item hab" data-elem="${p.elemento}" data-search="${p.nome.toLowerCase()} ${p.elemento.toLowerCase()} ${p.pre.toLowerCase()}" onclick="inserirParanormalLivro(${i})">
      <div class="modal-item-name">${p.nome} <span style="opacity:.6;font-size:.8em;">[${p.elemento}]</span></div>
      <div class="modal-item-meta">Pré-requisito: ${p.pre}</div>
      <div class="modal-item-desc">${p.desc}${p.afinidade&&p.afinidade!=='—' ? ` · Afinidade: ${p.afinidade}` : ''}</div>
    </div>`;
  });
  html += `</div></div>
    <div class="modal-footer"><button class="modal-footer-close" onclick="document.getElementById('modalParanormal').remove()">✕ Fechar</button></div>
  </div></div>`;
  document.getElementById('modalContainer').innerHTML = html;
  _paranormalFiltroElem='Todos';
}
function setParanormalFiltro(elem,btn){
  _paranormalFiltroElem=elem;
  btn.closest('.rit-filters')?.querySelectorAll('.rit-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  filtrarParanormalModal();
}
function filtrarParanormalModal(){
  const q=(document.getElementById('paranormalSearch')?.value||'').toLowerCase().trim();
  document.querySelectorAll('#paranormal-item-list .modal-item').forEach(el=>{
    const okElem=_paranormalFiltroElem==='Todos'||el.dataset.elem===_paranormalFiltroElem;
    const okBusca=!q||el.dataset.search.includes(q);
    el.style.display=(okElem&&okBusca)?'':'none';
  });
}
function inserirParanormalLivro(i){
  const p=PODERES_PARANORMAIS_LIVRO[i];
  if(!p)return;
  const texto=`Elemento: ${p.elemento} · Pré-requisito: ${p.pre}\n${p.desc}${p.afinidade&&p.afinidade!=='—' ? `\nAfinidade: ${p.afinidade}` : ''}`;
  const d=document.getElementById('paranormalCont').appendChild(mkParanormal(p.nome,texto));
  d.classList.add('open');
  document.getElementById('modalParanormal')?.remove();
  triggerSalvar();
  onPoderesRealtimeChange();
}

// MODAL RITUAIS
let _ritFiltroElem='Todos';
let _ritFiltroCirc='Todos';
function abrirModalRit(){
  let html=`<div class="modal-ov" id="modalRit"><div class="modal-box">
    <div class="modal-hd">
      <span class="modal-title">Rituais do Livro</span>
      <button class="modal-close" onclick="document.getElementById('modalRit').remove()">✕</button>
    </div>
    <div class="modal-filters-area">
      <input type="text" class="modal-search" id="ritSearch" placeholder="Buscar por nome..." oninput="filtrarRitModal()">
      <span class="filter-row-label">Filtrar por elemento</span>
      <div class="rit-filters" style="margin-bottom:8px;">
        <button class="rit-filter-btn active" onclick="setRitFiltroElem('Todos',this)">Todos</button>
        ${['Conhecimento','Energia','Morte','Sangue','Medo'].map(e=>`<button class="rit-filter-btn" onclick="setRitFiltroElem('${e}',this)">${e}</button>`).join('')}
      </div>
      <span class="filter-row-label">Filtrar por círculo</span>
      <div style="display:flex;gap:5px;flex-wrap:wrap;">
        <button class="rit-circ-btn active" onclick="setRitFiltroCirc('Todos',this)">Todos</button>
        ${[1,2,3,4].map(n=>`<button class="rit-circ-btn" onclick="setRitFiltroCirc('${n}',this)">${n}° Círculo</button>`).join('')}
      </div>
    </div>
    <div class="modal-scroll">
      <div class="modal-list" id="rit-item-list">`;
  if(typeof RITUAIS_LIVRO !== 'undefined') {
    RITUAIS_LIVRO.forEach((r,i)=>{
      const cardCls=ELEM_CARD_CLS[r.elem]||'';
      html+=`<div class="modal-item rit-card ${cardCls}" data-search="${r.nome.toLowerCase()} ${r.elem.toLowerCase()}" data-elem="${r.elem}" data-circ="${r.circ}" onclick="inserirRitual(${i})">
        <div class="modal-item-name"><span class="rit-elem-chip">${r.elem}</span>${r.nome}<span style="opacity:0.6;font-size:0.75em;margin-left:6px;">${r.circ}° Círculo</span></div>
        <div class="modal-item-meta">Exec: ${r.exec} · Alc: ${r.alc} · Dur: ${r.dur} · ${r.pe} PE</div>
        <div class="modal-item-desc">${r.desc.substring(0,150)}${r.desc.length>150?'...':''}</div>
      </div>`;
    });
  }
  html+=`</div></div>
    <div class="modal-footer">
      <button class="modal-footer-close" onclick="document.getElementById('modalRit').remove()">✕ Fechar</button>
    </div>
  </div></div>`;
  document.getElementById('modalContainer').innerHTML=html;
  _ritFiltroElem='Todos';_ritFiltroCirc='Todos';
}
function setRitFiltroElem(filtro,btn){
  _ritFiltroElem=filtro;
  btn.closest('.rit-filters').querySelectorAll('.rit-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');filtrarRitModal();
}
function setRitFiltroCirc(filtro,btn){
  _ritFiltroCirc=filtro;
  btn.closest('div').querySelectorAll('.rit-circ-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');filtrarRitModal();
}
function filtrarRitModal(){
  const q=(document.getElementById('ritSearch')?.value||'').toLowerCase().trim();
  document.getElementById('rit-item-list')?.querySelectorAll('.modal-item').forEach(el=>{
    const elemOk=_ritFiltroElem==='Todos'||el.dataset.elem===_ritFiltroElem;
    const circOk=_ritFiltroCirc==='Todos'||el.dataset.circ===_ritFiltroCirc;
    const buscaOk=!q||el.dataset.search.includes(q);
    el.style.display=(elemOk&&circOk&&buscaOk)?'':'none';
  });
}
function inserirRitual(i){
  if(typeof RITUAIS_LIVRO==='undefined')return;
  const r=RITUAIS_LIVRO[i];
  let n_desc=r.desc,d_pe='',d_desc='',v_pe='',v_desc='';
  if(r.d_desc!==undefined){d_desc=r.d_desc;d_pe=r.d_pe||'';}
  if(r.v_desc!==undefined){v_desc=r.v_desc;v_pe=r.v_pe||'';}
  if(!r.d_desc){const discM=r.desc.match(/Disc\(([^)]+)\):\s*([^.]+)\./);if(discM){const m=discM[1].match(/\+(\d+)PE/);if(m)d_pe=m[1];d_desc=discM[2].trim();}}
  if(!r.v_desc){const verdM=r.desc.match(/Verd\(([^)]+)\):\s*([^.]+)\./);if(verdM){const m=verdM[1].match(/\+(\d+)PE/);if(m)v_pe=m[1];v_desc=verdM[2].trim();}}
  if(r.desc.includes('Disc(')||r.desc.includes('Verd('))
    n_desc=r.desc.replace(/Disc\([^)]+\):[^.]+\./g,'').replace(/Verd\([^)]+\):[^.]+\./g,'').trim();
  const d=document.getElementById('ritCont').appendChild(mkRit({nome:r.nome,elem:r.elem,circ:r.circ,n_exec:r.exec,n_alc:r.alc,n_dur:r.dur,n_pe:r.pe,n_desc,d_exec:r.exec,d_alc:r.alc,d_dur:r.dur,d_pe,d_desc,v_exec:r.exec,v_alc:r.alc,v_dur:r.dur,v_pe,v_desc}));
  d.classList.add('open');setRitDtTargetItem(d);document.getElementById('modalRit')?.remove();triggerSalvar();
}

// ============================================================
// INVENTÁRIO — COM DRAG & DROP
// Carga usada = soma das quantidades (podem ser negativas). Categoria e tag são só registro.
// ============================================================
const INV_CATS = ['0','I','II','III','IV'];
const INV_TAGS = ['item','amald','paranormal','arma','municao','protecao'];

const MELH_MODS_ARMA_CC = [
  {id:'certeira', nome:'Certeira', desc:'+2 em testes de ataque.'},
  {id:'cruel', nome:'Cruel', desc:'+2 em rolagens de dano.'},
  {id:'discreta_cc', nome:'Discreta', desc:'+10 em testes de ocultar e permite teste destreinado.'},
  {id:'perigosa', nome:'Perigosa', desc:'+2 em margem de ameaça.'},
  {id:'tatica_cc', nome:'Tática', desc:'Pode sacar como ação livre.'}
];
const MELH_MODS_ARMA_FOGO = [
  {id:'alongada', nome:'Alongada', desc:'+2 em testes de ataque.'},
  {id:'calibre', nome:'Calibre grosso', desc:'Aumenta o dano em mais um dado do mesmo tipo.'},
  {id:'compensador', nome:'Compensador', desc:'Anula penalidade por rajadas.'},
  {id:'discreta_fogo', nome:'Discreta', desc:'+5 em testes de ocultar e reduz o espaço em –1.'},
  {id:'ferrolho', nome:'Ferrolho automático', desc:'A arma se torna automática.'},
  {id:'miraLaser', nome:'Mira laser', desc:'+2 em margem de ameaça.'},
  {id:'miraTel', nome:'Mira telescópica', desc:'Aumenta alcance da arma e da habilidade Ataque Furtivo.'},
  {id:'silenciador', nome:'Silenciador', desc:'Reduz em –10 a penalidade em Furtividade para se esconder após atacar.'},
  {id:'tatica_fogo', nome:'Tática', desc:'Pode sacar como ação livre.'},
  {id:'visaoCalor', nome:'Visão de calor', desc:'Ignora camuflagem.'}
];
const MELH_MODS_MUN = [
  {id:'dumdum', nome:'Dum dum', desc:'+1 em multiplicador de crítico.'},
  {id:'explosiva', nome:'Explosiva', desc:'Aumenta o dano em +2d6.'}
];
const MELH_MODS_PROT = [
  {id:'antibombas', nome:'Antibombas', desc:'+5 em testes de resistência contra efeitos de área.'},
  {id:'blindada', nome:'Blindada', desc:'Aumenta RD para 5 e o espaço em +1.'},
  {id:'discreta_prot', nome:'Discreta', desc:'+5 em testes de ocultar e reduz o espaço em –1.'},
  {id:'reforcada', nome:'Reforçada', desc:'Aumenta a Defesa em +2 e o espaço em +1.'}
];
const MELH_MODS_ITEM = [
  {id:'aprimorado', nome:'Aprimorado', desc:'Aumenta um dos bônus em perícia para +5.'},
  {id:'discreto_item', nome:'Discreto', desc:'+5 em testes de ocultar e reduz o espaço em –1.'},
  {id:'funcao_adic', nome:'Função adicional', desc:'Concede +2 a uma perícia adicional.'},
  {id:'instrumental', nome:'Instrumental', desc:'O acessório funciona como um kit de perícia.'}
];

function updInvMelhChips(it){
  const chips=it.querySelector('.inv-melh-chips');
  const hid=it.querySelector('.inv-melh-data');
  if(!chips||!hid)return;
  let ids=[]; try{ids=JSON.parse(hid.value||'[]');}catch(e){}
  const all=[...MELH_MODS_ARMA_CC,...MELH_MODS_ARMA_FOGO,...MELH_MODS_MUN,...MELH_MODS_PROT,...MELH_MODS_ITEM];
  const lab=id=>all.find(m=>m.id===id)?.nome||id;
  chips.textContent=ids.length?ids.map(lab).join(' · '):'';
}
function abrirMelhoriasItem(btn){
  const it=btn.closest('.inv-it');
  const tag=normInvTag(it.querySelector('.inv-tag')?.value||'');
  let grupos=[];
  if(tag==='arma') grupos=[['Corpo a corpo e disparo',MELH_MODS_ARMA_CC],['Armas de fogo',MELH_MODS_ARMA_FOGO]];
  else if(tag==='municao') grupos=[['Munições',MELH_MODS_MUN]];
  else if(tag==='protecao') grupos=[['Proteções',MELH_MODS_PROT]];
  else if(tag==='item') grupos=[['Itens',MELH_MODS_ITEM]];
  else return;
  let ids=[]; try{ids=JSON.parse(it.querySelector('.inv-melh-data')?.value||'[]');}catch(e){}
  let html='<div class="modal-ov" id="modalMelh"><div class="modal-box" style="max-width:520px;">'+
    '<div class="modal-hd"><span class="modal-title">Melhorias</span><button type="button" class="modal-close" onclick="document.getElementById(\'modalMelh\').remove()">Fechar</button></div>'+
    '<div class="modal-scroll" style="max-height:60vh;">';
  grupos.forEach(([title,mods],gi)=>{
    if(gi) html+='<hr style="margin:12px 0;border-color:var(--border);">';
    html+='<div style="font-family:\'Special Elite\',serif;font-size:0.75em;color:var(--ink2);margin-bottom:8px;">'+title+'</div>';
    mods.forEach(m=>{
      const ck=ids.includes(m.id)?' checked':'';
      html+='<label style="display:flex;gap:8px;align-items:flex-start;margin-bottom:8px;cursor:pointer;font-size:0.88em;">'+
        '<input type="checkbox" class="melh-cb" value="'+m.id+'"'+ck+' style="margin-top:3px;">'+
        '<span><strong>'+m.nome+'</strong><br><span style="font-size:0.85em;color:var(--ink3);">'+m.desc+'</span></span></label>';
    });
  });
  html+='</div><div class="modal-footer">'+
    '<button type="button" class="modal-footer-close" onclick="document.getElementById(\'modalMelh\').remove()">Cancelar</button>'+
    '<button type="button" class="btn-hd primary" onclick="confirmMelhoriasItem(this)">Aplicar</button>'+
    '</div></div></div>';
  document.getElementById('modalContainer').innerHTML=html;
  window._melhTargetRow=it;
}
function confirmMelhoriasItem(btn){
  const modal=btn.closest('.modal-ov');
  const it=window._melhTargetRow;
  if(!it){modal?.remove();return;}
  const ids=[...modal.querySelectorAll('.melh-cb:checked')].map(c=>c.value);
  const hid=it.querySelector('.inv-melh-data');
  if(hid) hid.value=JSON.stringify(ids);
  updInvMelhChips(it);
  modal.remove();
  refreshAllAtkInvSelects();
  triggerSalvar();
}

function atuInvProtRow(sel){
  const it=sel.closest('.inv-it');
  if(!it)return;
  const row=it.querySelector('.inv-prot-row');
  const tag=normInvTag(sel.value);
  const show=tag==='protecao';
  if(row)row.style.display=show?'flex':'none';
  const showMelh=['arma','municao','protecao','item'].includes(tag);
  const mb=it.querySelector('.btn-inv-melh');
  const chips=it.querySelector('.inv-melh-chips');
  if(mb) mb.style.display=showMelh?'inline-block':'none';
  if(chips) chips.style.display=showMelh?'inline':'none';
  updInvMelhChips(it);
}

let _invTouchDrag=null;
function invTouchMove(ev){
  if(!_invTouchDrag||ev.touches.length!==1)return;
  ev.preventDefault();
  const y=ev.touches[0].clientY;
  const cont=document.getElementById('invCont');
  const src=_invTouchDrag.row;
  if(!cont||!src)return;
  const items=[...cont.querySelectorAll('.inv-it')].filter(x=>x!==src);
  const afterEl=items.find(el=>{
    const r=el.getBoundingClientRect();
    return y<r.top+r.height/2;
  });
  if(afterEl)cont.insertBefore(src,afterEl);
  else cont.appendChild(src);
}
function invTouchEnd(){
  if(_invTouchDrag){
    _invTouchDrag.row.classList.remove('inv-dragging');
    _invTouchDrag=null;
    refreshAllAtkInvSelects();
    triggerSalvar();
  }
  document.removeEventListener('touchmove',invTouchMove);
  document.removeEventListener('touchend',invTouchEnd);
  document.removeEventListener('touchcancel',invTouchEnd);
}
function invTouchStart(ev){
  if(_invTouchDrag)return;
  const h=ev.currentTarget;
  const row=h.closest('.inv-it');
  if(!row||ev.touches.length!==1)return;
  _invTouchDrag={row};
  row.classList.add('inv-dragging');
  document.addEventListener('touchmove',invTouchMove,{passive:false});
  document.addEventListener('touchend',invTouchEnd,{passive:true});
  document.addEventListener('touchcancel',invTouchEnd,{passive:true});
}

function normInvCat(cat){
  if(cat==='VI')return'IV';
  return INV_CATS.includes(cat)?cat:'I';
}
function normInvTag(tag){
  return INV_TAGS.includes(tag)?tag:'item';
}

function mkItem(n='',d='',exp=false,qtd=1,cat='I',tag='item',prot=0,melhorias){
  const div=document.createElement('div');div.className='inv-it';div.draggable=true;
  div.innerHTML=`<div class="inv-row">
    <span class="inv-drag" title="Arrastar (desktop) ou arrastar aqui no celular">⠿</span>
    <button class="inv-exp" onclick="toggleInv(this)">▸</button>
    <input type="text" class="inv-ni" placeholder="Item...">
    <input type="number" class="inv-qtd" step="1" value="1" title="Quantidade (afeta carga; pode ser negativa)" aria-label="Quantidade">
    <select class="inv-cat" title="Categoria (só registro)">
      <option value="0">0</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="IV">IV</option>
    </select>
    <select class="inv-tag" title="Tipo de item" onchange="atuInvProtRow(this);atuInventarioPeso();calcDeriv();refreshAllAtkInvSelects();triggerSalvar()">
      <option value="item">Item</option>
      <option value="amald">Item amaldiçoado</option>
      <option value="paranormal">Item paranormal</option>
      <option value="arma">Arma</option>
      <option value="municao">Munição</option>
      <option value="protecao">Proteção</option>
    </select>
    <button type="button" class="btn-inv-melh" onclick="abrirMelhoriasItem(this)" style="display:none;">Melhorias</button>
    <span class="inv-melh-chips" style="display:none;max-width:140px;overflow:hidden;text-overflow:ellipsis;"></span>
    <input type="hidden" class="inv-melh-data" value="[]">
    <button class="inv-del" onclick="this.closest('.inv-it').remove();atuInventarioPeso();calcDeriv();refreshAllAtkInvSelects();triggerSalvar()">✕</button>
  </div>
  <div class="inv-prot-row" style="display:none;">
    <label class="lbl inv-prot-lbl">Valor da proteção</label>
    <input type="number" class="inv-prot-val" min="0" value="0" title="Somado na Defesa">
  </div>
  <textarea class="inv-dt" placeholder="Detalhes, propriedades..."${exp?' style="display:block;"':''}></textarea>`;
  div.querySelector('.inv-ni').value=n;div.querySelector('.inv-dt').value=d;
  const qRaw=parseInt(qtd,10);
  div.querySelector('.inv-qtd').value=Number.isFinite(qRaw)?String(qRaw):'1';
  div.querySelector('.inv-cat').value=normInvCat(cat);
  div.querySelector('.inv-tag').value=normInvTag(tag);
  const pRaw=parseInt(prot,10);
  div.querySelector('.inv-prot-val').value=String(Number.isFinite(pRaw)?Math.max(0,pRaw):0);
  const mh=Array.isArray(melhorias)?melhorias:[];
  try{div.querySelector('.inv-melh-data').value=JSON.stringify(mh);}catch(e){div.querySelector('.inv-melh-data').value='[]';}
  atuInvProtRow(div.querySelector('.inv-tag'));
  if(exp)div.querySelector('.inv-exp').textContent='▾';
  div.addEventListener('input',()=>{
    atuInventarioPeso();
    calcDeriv();
    triggerSalvar();
  });
  div.addEventListener('dragstart', invDragStart);
  div.addEventListener('dragover', invDragOver);
  div.addEventListener('drop', invDrop);
  div.addEventListener('dragend', invDragEnd);
  const drag=div.querySelector('.inv-drag');
  if(drag)drag.addEventListener('touchstart',invTouchStart,{passive:true});
  return div;
}

let _dragSrc = null;
function invDragStart(e) {
  _dragSrc = this;
  this.classList.add('inv-dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function invDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const cont = document.getElementById('invCont');
  const items = [...cont.querySelectorAll('.inv-it:not(.inv-dragging)')];
  const afterEl = items.find(el => {
    const r = el.getBoundingClientRect();
    return e.clientY < r.top + r.height / 2;
  });
  if (afterEl) cont.insertBefore(_dragSrc, afterEl);
  else cont.appendChild(_dragSrc);
}
function invDrop(e) { e.preventDefault(); triggerSalvar(); }
function invDragEnd(e) {
  if (_dragSrc) _dragSrc.classList.remove('inv-dragging');
  _dragSrc = null;
  refreshAllAtkInvSelects();
}

function addItem(){
  document.getElementById('invCont').appendChild(mkItem());
  atuInventarioPeso();
}
function toggleInv(btn){
  const item=btn.closest('.inv-it');
  const d=item.querySelector('.inv-dt');
  const v=d.style.display==='block';
  d.style.display=v?'none':'block';
  btn.textContent=v?'▸':'▾';
}
function extI(){
  return Array.from(document.getElementById('invCont').children).map(d=>{
    const qStr=d.querySelector('.inv-qtd')?.value;
    const qtd=qStr===''||qStr===undefined?0:parseInt(qStr,10);
    return{
      n:d.querySelector('.inv-ni')?.value||'',
      d:d.querySelector('.inv-dt')?.value||'',
      exp:d.querySelector('.inv-dt')?.style.display==='block',
      qtd:Number.isFinite(qtd)?qtd:0,
      cat:normInvCat(d.querySelector('.inv-cat')?.value||'I'),
      tag:normInvTag(d.querySelector('.inv-tag')?.value||'item'),
      prot:Math.max(0,parseInt(d.querySelector('.inv-prot-val')?.value,10)||0),
      melhorias:(()=>{ try{return JSON.parse(d.querySelector('.inv-melh-data')?.value||'[]')||[];}catch(e){return[];} })()
    };
  });
}

function calcCapacidadeInventario() {
  const forca = parseInt(document.getElementById('forca')?.value)||0;
  const intelecto = parseInt(document.getElementById('intelecto')?.value)||0;
  const trilha = document.getElementById('trilha')?.value || '';
  const baseFor = (trilha === 'Técnico') ? (forca + intelecto) : forca;
  return baseFor > 0 ? baseFor * 5 : 2;
}

function calcPesoInventario() {
  return Array.from(document.querySelectorAll('#invCont .inv-it')).reduce((sum, item) => {
    const raw = item.querySelector('.inv-qtd')?.value;
    const q = raw === '' || raw === undefined ? 0 : parseInt(raw, 10);
    return sum + (Number.isFinite(q) ? q : 0);
  }, 0);
}

function atuInventarioPeso(){
  const cap = calcCapacidadeInventario();
  const usado = calcPesoInventario();
  const livre = cap - usado;
  const pct = Math.max(0, Math.min(100, Math.round((usado / Math.max(1, cap)) * 100)));
  const usoEl = document.getElementById('invUso');
  const capEl = document.getElementById('invCap');
  const livreEl = document.getElementById('invLivre');
  const barEl = document.getElementById('invPesoFill');
  const wrap = document.getElementById('invPesoWrap');
  if (usoEl) usoEl.textContent = usado;
  if (capEl) capEl.textContent = cap;
  if (livreEl) livreEl.textContent = livre;
  if (barEl) barEl.style.width = pct + '%';
  if (wrap) wrap.classList.toggle('estourado', usado > cap);
  refreshAllAtkInvSelects();
}

function editarAvatar(){
  const u=prompt('URL da imagem:',document.getElementById('avatarUrl').value||'');
  if(u!==null){document.getElementById('avatarUrl').value=u;setAv(u);triggerSalvar();}
}
function setAv(u){const i=document.getElementById('avatarImg'),p=document.getElementById('avatarPh');if(u&&u.trim()){i.src=u;i.style.display='block';p.style.display='none';}else{i.style.display='none';p.style.display='flex';}}

// ============================================================
// EXTRAÇÃO + SALVAR
// ============================================================
function extA(){
  return Array.from(document.getElementById('atkCont')?.children||[]).map(d=>{
    const dn=Math.max(1,parseInt(d.querySelector('.atk-dn')?.value,10)||1);
    const df=Math.max(2,parseInt(d.querySelector('.atk-df')?.value,10)||6);
    return{
      n:d.querySelector('.atk-nome')?.value||'',
      habil:d.querySelector('.atk-habil')?.value||'luta',
      ba:+(d.querySelector('.ba')?.value)||0,
      bd:+(d.querySelector('.bd')?.value)||0,
      dn, df,
      danoAtr:d.querySelector('.atk-dano-atr')?.value||'forca',
      d:`${dn}d${df}`,
      critMin:Math.max(1,Math.min(20,parseInt(d.querySelector('.atk-crit-min')?.value,10)||20)),
      critMult:Math.max(2,parseInt(d.querySelector('.atk-crit-mult')?.value,10)||2),
      invW:d.querySelector('.atk-inv-w')?.value||'',
      invM:d.querySelector('.atk-inv-m')?.value||''
    };
  });
}
function extH(){
  return Array.from(document.getElementById('habCont')?.children||[]).map(d=>({
    n:d.querySelector('.hab-nome')?.value||'',
    d:d.querySelector('.hab-desc')?.value||''
  }));
}
function extR(){
  return Array.from(document.getElementById('ritCont')?.children||[]).map(div=>{
    const activeTab=div.querySelector('.rit-tab.active')?.textContent?.toLowerCase().trim()||'normal';
    return{
      circ:div.querySelector('.rit-circ')?.value?.replace('°','')||'1',
      nome:div.querySelector('.rit-nome')?.value||'',
      elem:div.querySelector('.rit-elem')?.value||'Conhecimento',
      resistencia:div.querySelector('.rit-resist')?.value||'Anula',
      atrResistencia:div.querySelector('.rit-atr-resist')?.value||'For',
      dtAtr:div.querySelector('.rit-dt-atr')?.value||'presenca',
      dtOut:parseInt(div.querySelector('.rit-dt-out')?.value,10)||0,
      activeTab,
      n_exec:div.querySelector('.rit-version[data-tab="normal"] select:nth-child(1)')?.value||'padrão',
      n_alc:div.querySelector('.rit-version[data-tab="normal"] select:nth-child(2)')?.value||'toque',
      n_dur:div.querySelector('.rit-version[data-tab="normal"] select:nth-child(3)')?.value||'cena',
      n_pe:div.querySelector('.rit-version[data-tab="normal"] input[type="number"]')?.value||'1',
      n_desc:div.querySelector('.rit-version[data-tab="normal"] textarea')?.value||'',
      d_exec:div.querySelector('.rit-version[data-tab="discente"] select:nth-child(1)')?.value||'padrão',
      d_alc:div.querySelector('.rit-version[data-tab="discente"] select:nth-child(2)')?.value||'toque',
      d_dur:div.querySelector('.rit-version[data-tab="discente"] select:nth-child(3)')?.value||'cena',
      d_pe:div.querySelector('.rit-version[data-tab="discente"] input[type="number"]')?.value||'',
      d_desc:div.querySelector('.rit-version[data-tab="discente"] textarea')?.value||'',
      v_exec:div.querySelector('.rit-version[data-tab="verdadeiro"] select:nth-child(1)')?.value||'padrão',
      v_alc:div.querySelector('.rit-version[data-tab="verdadeiro"] select:nth-child(2)')?.value||'toque',
      v_dur:div.querySelector('.rit-version[data-tab="verdadeiro"] select:nth-child(3)')?.value||'cena',
      v_pe:div.querySelector('.rit-version[data-tab="verdadeiro"] input[type="number"]')?.value||'',
      v_desc:div.querySelector('.rit-version[data-tab="verdadeiro"] textarea')?.value||''
    };
  });
}
function extP(){
  return Array.from(document.getElementById('paranormalCont')?.children||[]).map(d=>({
    n:d.querySelector('.paranormal-nome')?.value||'',
    d:d.querySelector('.paranormal-desc')?.value||''
  }));
}
function extO(){
  return Array.from(document.getElementById('origemCont')?.children||[]).map(d=>({
    n:d.querySelector('.origem-nome')?.value||'',
    d:d.querySelector('.origem-desc')?.value||'',
    auto:d.dataset.autoOrigem==='1'
  }));
}
function extProfs() {
  const result = {};
  document.querySelectorAll('#profCont .prof-tag').forEach(el => {
    result[el.id] = el.dataset.active === '1';
  });
  window._profSel = {...result};
  return result;
}

const gv=id=>document.getElementById(id)?.value||'';
const sv=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v;};

function coletarFicha(){
  const psAtrSave={};
  PERI.forEach(p=>{const s=document.getElementById('pa_'+p.id);if(s)psAtrSave[p.id]=s.value;});
  window._profExtras.forEach((_,i)=>{const s=document.getElementById('pa_profissao_extra_'+i);if(s)window._profExtras[i].atr=s.value;});
  const profNomeEl = document.getElementById('pn_profissao');

  return {
    nome:gv('nome'),classe:gv('classe'),origem:gv('origem'),trilha:gv('trilha'),
    nex:parseInt(gv('nexN'))||5,deslocamento:gv('deslocamento'),
    patente:gv('patente'),creditos:gv('creditos'),avatarUrl:gv('avatarUrl'),
    agilidade:parseInt(gv('agilidade'))||0,forca:parseInt(gv('forca'))||0,
    intelecto:parseInt(gv('intelecto'))||0,presenca:parseInt(gv('presenca'))||0,
    vigor:parseInt(gv('vigor'))||0,
    pvAtual:parseInt(gv('pvAtual'))||0,pvMax:parseInt(gv('pvMax'))||0,
    pvMaxManual:document.getElementById('pvMax')?.dataset.manual||'',
    pvMaxTeor:document.getElementById('pvMax')?.dataset.prevTeor||'',
    peAtual:parseInt(gv('peAtual'))||0,peMax:parseInt(gv('peMax'))||0,
    peMaxManual:document.getElementById('peMax')?.dataset.manual||'',
    peMaxTeor:document.getElementById('peMax')?.dataset.prevTeor||'',
    sanAtual:parseInt(gv('sanAtual'))||0,sanMax:parseInt(gv('sanMax'))||0,
    sanMaxManual:document.getElementById('sanMax')?.dataset.manual||'',
    sanMaxTeor:document.getElementById('sanMax')?.dataset.prevTeor||'',
    defBonus:parseInt(gv('defBonus'))||0,
    bloqBonus:parseInt(gv('bloqBonus'))||0,
    esquivaBonus:parseInt(gv('esquivaBonus'))||0,
    pericias:JSON.stringify(window._ps||{}),
    perBonus:JSON.stringify(window._psBon||{}),
    perAtr:JSON.stringify(psAtrSave),
    profNome:profNomeEl?.value||'',
    profExtras:JSON.stringify(window._profExtras||[]),
    proficiencias:extProfs(),
    ataques:extA(),habilidades:extH(),origensPoderes:extO(),rituais:extR(),
    poderesParanormais:extP(),    inventario:extI(),
    resistenciasCustom:window._resCustom||[]
  };
}

function preencher(f){
  ['nome','origem','deslocamento'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=f[id]||'';});
  sv('classe',f.classe||'especialista');sv('nexN',f.nex||5);
  syncTrilhaOptions();
  sv('trilha',f.trilha||'');
  ['agilidade','forca','intelecto','presenca','vigor'].forEach(id=>sv(id,f[id]||0));

  const pvMaxEl = document.getElementById('pvMax');
  const peMaxEl = document.getElementById('peMax');
  const sanMaxEl = document.getElementById('sanMax');
  sv('pvAtual',f.pvAtual||0); sv('pvMax',f.pvMax||0);
  sv('peAtual',f.peAtual||0); sv('peMax',f.peMax||0);
  sv('sanAtual',f.sanAtual||0); sv('sanMax',f.sanMax||0);
  if(f.pvMaxManual) pvMaxEl.dataset.manual='1';
  if(f.pvMaxTeor) pvMaxEl.dataset.prevTeor=f.pvMaxTeor;
  if(f.peMaxManual) peMaxEl.dataset.manual='1';
  if(f.peMaxTeor) peMaxEl.dataset.prevTeor=f.peMaxTeor;
  if(f.sanMaxManual) sanMaxEl.dataset.manual='1';
  if(f.sanMaxTeor) sanMaxEl.dataset.prevTeor=f.sanMaxTeor;

  sv('defBonus',f.defBonus||0);
  sv('bloqBonus',f.bloqBonus||0);
  sv('esquivaBonus',f.esquivaBonus||0);
  sv('patente',f.patente||'recruta');sv('creditos',f.creditos||'baixo');
  const pt=PATENTES[f.patente||'recruta'];if(pt)document.getElementById('patenteDisplay').textContent=pt.label.toUpperCase();
  document.getElementById('avatarUrl').value=f.avatarUrl||'';setAv(f.avatarUrl||'');
  window._ps=f.pericias?JSON.parse(f.pericias):{};
  window._psBon=f.perBonus?JSON.parse(f.perBonus):{};
  window._psAtr=f.perAtr?JSON.parse(f.perAtr):{};
  window._profExtras=f.profExtras?JSON.parse(f.profExtras):[];
  buildPeri();
  if(f.profNome){const el=document.getElementById('pn_profissao');if(el)el.value=f.profNome;}
  document.getElementById('atkCont').innerHTML='';
  (f.ataques||[]).forEach(a=>document.getElementById('atkCont').appendChild(mkAtk(a)));
  document.getElementById('habCont').innerHTML='';
  (f.habilidades||[]).forEach(h=>document.getElementById('habCont').appendChild(mkHab(h.n,h.d)));
  document.getElementById('origemCont').innerHTML='';
  (f.origensPoderes||[]).forEach(o=>{
    const item = document.getElementById('origemCont').appendChild(mkOrigemPoder(o.n,o.d));
    if(o.auto) item.dataset.autoOrigem='1';
  });
  document.getElementById('ritCont').innerHTML='';
  (f.rituais||[]).forEach(r=>document.getElementById('ritCont').appendChild(mkRit(r)));
  const rit0=document.querySelector('#ritCont .rit-item');
  if(rit0&&!document.querySelector('#ritCont .rit-item.rit-dt-active')) rit0.classList.add('rit-dt-active');
  syncRitualDtHostUI();
  document.getElementById('paranormalCont').innerHTML='';
  (f.poderesParanormais||[]).forEach(p=>document.getElementById('paranormalCont').appendChild(mkParanormal(p.n,p.d)));
  document.getElementById('invCont').innerHTML='';
  (f.inventario||[]).forEach(i=>document.getElementById('invCont').appendChild(mkItem(i.n,i.d,i.exp,i.qtd,i.cat,i.tag||'item',i.prot||0,i.melhorias||[])));
  window._resCustom=Array.isArray(f.resistenciasCustom)?f.resistenciasCustom.map(r=>({tipo:r.tipo||'Corte',val:Math.max(0,parseInt(r.val,10)||0)})):[];
  atualizarResistencias();
  // Restaurar proficiências
  window._profSel = f.proficiencias || {};
  buildProficiencias();
  if(f.proficiencias) {
    Object.entries(f.proficiencias).forEach(([id, checked]) => {
      const el = document.getElementById(id);
      if (el && !el.classList.contains('locked')) {
        el.dataset.active = checked ? '1' : '0';
        el.classList.toggle('active', !!checked);
        window._profSel[id] = !!checked;
      }
    });
  }
  _prevNex = parseInt(f.nex)||5;
  aplicarOrigemAutomatica();
  atuTodosDots();calcDeriv();atuNEX(false);atuBarras();atuInventarioPeso();
}

function limpar(){
  ['nome','origem'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  sv('classe','especialista');sv('nexN',5);sv('deslocamento','9m');
  syncTrilhaOptions();sv('trilha','');
  ['agilidade','forca','intelecto','presenca','vigor'].forEach(id=>sv(id,0));
  const pvMaxEl=document.getElementById('pvMax');
  const peMaxEl=document.getElementById('peMax');
  const sanMaxEl=document.getElementById('sanMax');
  sv('pvAtual',0);sv('pvMax',0);delete pvMaxEl.dataset.manual; delete pvMaxEl.dataset.prevTeor;
  sv('peAtual',0);sv('peMax',0);delete peMaxEl.dataset.manual; delete peMaxEl.dataset.prevTeor;
  sv('sanAtual',0);sv('sanMax',0);delete sanMaxEl.dataset.manual; delete sanMaxEl.dataset.prevTeor;
  sv('defBonus',0);sv('bloqBonus',0);sv('esquivaBonus',0);sv('patente','recruta');sv('creditos','baixo');
  document.getElementById('patenteDisplay').textContent='RECRUTA';
  setAv('');document.getElementById('avatarUrl').value='';
  window._ps={};window._psBon={};window._psAtr={};window._profExtras=[];
  ['atkCont','habCont','origemCont','ritCont','paranormalCont','invCont'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.innerHTML='';
  });
  window._profSel = {};
  window._resCustom=[];
  _prevNex=5;buildPeri();atuTodosDots();calcDeriv();atuNEX(false);atuBarras();buildProficiencias();atuInventarioPeso();
}

function salvarFicha(){
  setSave('saving');
  try {
    const dados = coletarFicha();
    const json = JSON.stringify(dados);
    localStorage.setItem('op_ficha', json);
    setSave('saved');
  } catch(e) {
    console.error('Erro ao salvar:', e);
    setSave('error');
  }
}

function carregarFicha(){
  try {
    const raw=localStorage.getItem('op_ficha');
    if(raw) preencher(JSON.parse(raw));
  } catch(e) {
    console.error('Erro ao carregar:', e);
  }
}

function novaFicha(){
  if(!confirm('Criar nova ficha? Os dados não salvos serão perdidos.'))return;
  localStorage.removeItem('op_ficha');limpar();
}
function exportarJSON(){
  const dados=coletarFicha();const nome=dados.nome||'agente';
  const blob=new Blob([JSON.stringify(dados,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`ficha-${nome.toLowerCase().replace(/\s+/g,'-')}.json`;a.click();
}
function importarJSON(){
  const inp=document.createElement('input');inp.type='file';inp.accept='.json';
  inp.onchange=e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=ev=>{try{preencher(JSON.parse(ev.target.result));salvarFicha();}catch(err){alert('Arquivo inválido.');}};
    r.readAsText(f);
  };inp.click();
}

let saveTm;
function triggerSalvar(){clearTimeout(saveTm);setSave('saving');saveTm=setTimeout(salvarFicha,1500);}
function setSave(s){
  const e=document.getElementById('saveIndicator');if(!e)return;
  e.className='save-ind '+s;
  e.textContent=s==='saving'?'Salvando...':s==='saved'?'✓ Salvo':'✗ Erro';
  if(s==='saved')setTimeout(()=>e.className='save-ind idle',3000);
}

// ============================================================
// CONJURAR RITUAL — COM INDICAÇÃO DE RESULTADO
// ============================================================
function conjurarRitual(btn){
  const item=btn.closest('.coll-item');
  const nome=item.querySelector('.rit-nome')?.value||'Ritual';
  const activeTab=item.querySelector('.rit-tab.active')?.textContent?.toLowerCase().trim()||'normal';
  const peInput=item.querySelector('.rit-version[data-tab="'+activeTab+'"] input[type="number"]');
  const custoPE=parseInt(peInput?.value)||0;
  if(custoPE<=0)return alert('Ritual sem custo de PE.');
  const peAtualEl=document.getElementById('peAtual');
  let peAtual=parseInt(peAtualEl.value)||0;
  peAtual-=custoPE;peAtualEl.value=peAtual;atuBarras();
  const ocultismo=window._ps['ocultismo']||'';
  const av=getAtr('Int')+(ocultismo?GB[ocultismo]:0)+parseInt(window._psBon['ocultismo']||0);
  const dificuldade=20+custoPE;const res=d20s(av);const tot=res.best+(ocultismo?GB[ocultismo]:0)+parseInt(window._psBon['ocultismo']||0);
  const sucesso=tot>=dificuldade;const margemFalha=dificuldade-tot;
  const falhaGrave = margemFalha >= 5;

  // Mostrar dado especial com resultado da conjuração
  const ov=document.createElement('div');ov.className='dado-ov';
  let resultClass = sucesso ? 'conj-sucesso' : falhaGrave ? 'conj-falha-grave' : 'conj-falha';
  let resultLabel = sucesso ? '✓ CONJURAÇÃO BEM-SUCEDIDA' : falhaGrave ? '✗ FALHA GRAVE (≥5)' : '✗ FALHA';
  let resultColor = sucesso ? 'var(--green)' : falhaGrave ? 'var(--red)' : 'var(--gold)';
  let resultInfo = sucesso
    ? 'O ritual foi conjurado com sucesso!'
    : falhaGrave
      ? `Falha por ${margemFalha} — Sanidade atual e máxima reduzidas!`
      : `Falha por ${margemFalha} — Perde ${custoPE} de Sanidade atual.`;

  ov.innerHTML=`<div class="dado-card ${sucesso?'cs':falhaGrave?'cf':''}">
    <div class="dado-hd">${nome} · Ocultismo · DT ${dificuldade} (20+${custoPE}PE)</div>
    <div class="dado-tot" style="color:${resultColor}">${tot}</div>
    <div class="conj-result-badge" style="background:${resultColor}20;border:1px solid ${resultColor};color:${resultColor};font-family:'Special Elite',serif;font-size:0.78em;letter-spacing:2px;padding:6px 16px;margin:8px auto;display:inline-block;">${resultLabel}</div>
    <div style="font-family:'Share Tech Mono';font-size:0.62em;color:var(--ink3);margin-top:6px;">${resultInfo}</div>
    <div style="font-family:'Share Tech Mono';font-size:0.58em;color:var(--ink3);margin-top:4px;">d20=${res.best} · bônus ocultismo=${(ocultismo?GB[ocultismo]:0)+parseInt(window._psBon['ocultismo']||0)} · −${custoPE} PE</div>
    <div class="dado-dis">clique para fechar</div>
  </div>`;
  document.body.appendChild(ov);ov.addEventListener('click',()=>ov.remove());setTimeout(()=>ov.remove(),10000);

  if(!sucesso){
    const sanAtualEl=document.getElementById('sanAtual');const sanMaxEl=document.getElementById('sanMax');
    let sanAtual=parseInt(sanAtualEl.value)||0;
    sanAtual-=custoPE;
    sanAtualEl.value=sanAtual;
    if(falhaGrave){
      let sanMax=parseInt(sanMaxEl.value)||0;
      sanMax-=1;sanMaxEl.value=sanMax;
      sanMaxEl.dataset.manual='1';
    }
    atuBarras();
    addLog('Falha em Conjuração: '+nome+' — SAN −'+custoPE+(falhaGrave?' (Máx −1)':''));
  } else {
    addLog('Sucesso em Conjuração: '+nome+' (tot='+tot+', DT='+dificuldade+')');
  }
}

// INIT
window.addEventListener('load',()=>{
  applyTheme();
  window._ps={};window._psBon={};window._psAtr={};window._profExtras=[];
  preencherListaOrigens();
  garantirPainelResistencias();
  buildPeri();

  // listener para marcar edição manual nos max
  ['pvMax','peMax','sanMax'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',()=>{el.dataset.manual='1';atuBarras();triggerSalvar();});
  });
  ['pvAtual','peAtual','sanAtual'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',()=>atuBarras());
  });

  // listener para classe — rebuildar proficiências
  const classeEl = document.getElementById('classe');
  if(classeEl) classeEl.addEventListener('change', () => {
    syncTrilhaOptions();
    buildProficiencias();
    aplicarBeneficiosTrilhaAteNex();
    calcDeriv();
    triggerSalvar();
  });
  const origemEl = document.getElementById('origem');
  if(origemEl) origemEl.addEventListener('change', () => {
    aplicarOrigemAutomatica();
    calcDeriv();
    triggerSalvar();
  });

  syncTrilhaOptions();
  calcDeriv();atuNEX(false);atuBarras();atuTodosDots();atuInventarioPeso();
  buildProficiencias();
  carregarFicha();

  document.addEventListener('change',e=>{
    if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName))triggerSalvar();
  });
});
