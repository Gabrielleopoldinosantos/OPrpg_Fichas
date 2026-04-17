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
          <div style="font-family:'Share Tech Mono';font-size:0.65em;color:var(--ink3);margin-bottom:8px;">Escolha um atributo para aumentar em +1 (máximo 5):</div>
          <div class="atr-choice-grid">`;
      atrMap.forEach(a => {
        const cur = parseInt(document.getElementById(a.id)?.value)||0;
        const disabled = cur >= 5;
        html += `<button class="atr-choice-btn" id="atrchk_${idx}_${a.id}"
          style="--atr-c:${a.cor};border-color:${a.cor}20;opacity:${disabled?0.4:1};"
          onclick="${disabled?'':`nexChooseAtr(${idx},'${a.id}')`}"
          ${disabled?'disabled':''}>
          <span style="color:${a.cor};font-family:'Special Elite',serif;">${a.nome}</span>
          <span class="atr-val-now">${cur}/5</span>
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
        let v = parseInt(el.value)||0;
        if (v < 5) { el.value = v + 1; atuDots(choice.atrId); calcDeriv(); }
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
function classeLabel(classeId){
  return {combatente:'Combatente',especialista:'Especialista',ocultista:'Ocultista'}[classeId]||'Especialista';
}

// COLLAPSIBLE
function collToggle(btn){btn.closest('.coll-item').classList.toggle('open');}

// ATRIBUTOS
function ajustarAtr(id,delta){
  const el=document.getElementById(id);
  let v=(parseInt(el.value)||0)+delta;v=Math.max(0,Math.min(5,v));
  el.value=v;atuDots(id);calcDeriv();
}
function setAtr(id,v){
  const el=document.getElementById(id);if(!el)return;
  const cur=parseInt(el.value)||0;
  el.value=cur===v?v-1:v;
  el.value=Math.max(0,Math.min(5,parseInt(el.value)||0));
  atuDots(id);calcDeriv();
}
function atuDots(id){
  const v=parseInt(document.getElementById(id)?.value)||0;
  const dotsId='dots-'+id;
  const cont=document.getElementById(dotsId);if(!cont)return;
  cont.querySelectorAll('.atr-dot').forEach((d,i)=>d.classList.toggle('filled',i<v));
}
function atuTodosDots(){['agilidade','forca','intelecto','presenca','vigor'].forEach(atuDots);}

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
  if(id.startsWith('profissao'))atuPeriExtra(id,idx);else atuPeri(id);triggerSalvar();
}
function atuProfNome(id,idx){const v=document.getElementById('pn_'+id)?.value||'';if(idx>=0&&window._profExtras[idx])window._profExtras[idx].nome=v;triggerSalvar();}
function addProfExtra(){window._profExtras.push({grau:'',bon:0,nome:'',atr:'Int'});buildPeri();triggerSalvar();}
function removerProfExtra(i){window._profExtras.splice(i,1);buildPeri();triggerSalvar();}
function ciclarProf(id,idx){
  const c=(idx<0?window._ps['profissao']:window._profExtras[idx]?.grau)||'';
  const n=GS[(GS.indexOf(c)+1)%GS.length];
  if(idx<0)window._ps['profissao']=n;else if(window._profExtras[idx])window._profExtras[idx].grau=n;
  const e=document.getElementById('pg_'+id);if(e){e.textContent=n||'—';e.className='per-grau '+n;}
  atuPeriExtra(id,idx);triggerSalvar();
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
  atuPeri(id);triggerSalvar();
}
function getAtr(a){const m={Agi:'agilidade',For:'forca',Int:'intelecto',Pre:'presenca',Vig:'vigor'};return parseInt(document.getElementById(m[a])?.value)||0;}
function atuPeri(id){
  const p=PERI.find(x=>x.id===id);if(!p)return;
  const g=window._ps[id]||'';const bon=parseInt(window._psBon[id])||0;
  const selAtr=document.getElementById('pa_'+id);
  const atrKey=selAtr?selAtr.value:window._psAtr[id]||p.atr;
  const b=getAtr(atrKey)+(g?GB[g]:0)+bon;
  const e=document.getElementById('pv_'+id);if(e)e.textContent=g||bon?'+'+b:'—';
}
function atuPeriBonus(id,idx){
  const val=parseInt(document.getElementById('pb_'+id)?.value)||0;
  if(idx!==undefined&&idx>=0){if(window._profExtras[idx])window._profExtras[idx].bon=val;atuPeriExtra(id,idx);}
  else if(id==='profissao'){window._psBon[id]=val;atuPeriExtra(id,-1);}
  else{window._psBon[id]=val;atuPeri(id);}
  triggerSalvar();
}
function atuTodas(){
  PERI.forEach(p=>{
    if(p.id!=='profissao')atuPeri(p.id);
    else{atuPeriExtra('profissao',-1);window._profExtras.forEach((_,i)=>atuPeriExtra('profissao_extra_'+i,i));}
  });
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

function calcDeriv(){
  const agi=parseInt(document.getElementById('agilidade').value)||0;
  document.getElementById('defTotal').textContent=10+agi+(parseInt(document.getElementById('defBonus').value)||0);
  const cls=document.getElementById('classe').value||'especialista';
  const nex=parseInt(document.getElementById('nexN').value)||5;
  const s=CLASSES_STATS[cls];const niveis=Math.floor(nex/5);
  const vig=parseInt(document.getElementById('vigor').value)||0;
  const pre=parseInt(document.getElementById('presenca').value)||0;

  // Calcular valores "teóricos" baseados nos atributos e NEX
  const pvTeor = s.pvBase + vig + (niveis-1)*(s.pvNex + vig);
  const peTeor = s.peBase + pre + (niveis-1)*(s.peNex + pre);
  const sanTeor = s.sanBase + (niveis-1)*s.sanNex;

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

  document.getElementById('pvFormula').textContent=`${s.pvBase}+Vig=${s.pvBase+vig} base, +${s.pvNex}+Vig=${s.pvNex+vig}/NEX`;
  document.getElementById('peFormula').textContent=`${s.peBase}+Pre=${s.peBase+pre} base, +${s.peNex}+Pre=${s.peNex+pre}/NEX`;
  document.getElementById('sanFormula').textContent=`${s.sanBase} base (${cls}), +${s.sanNex}/NEX`;

  const lim=Math.ceil(nex/5);
  document.getElementById('peLimite').textContent=lim;

  atuTodas();atuBarras();atuInventarioPeso();triggerSalvar();
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
  const lim=Math.ceil(n/5);
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
function showDado(descr,dado,bon,tot,qtd,todos){
  const ov=document.createElement('div');ov.className='dado-ov';
  const cs=dado===20,cf=dado===1;
  const outrosHtml=todos&&todos.length>1?`<div class="dado-outros">Outros: ${todos.slice(1).join(' · ')}</div>`:'';
  ov.innerHTML=`<div class="dado-card ${cs?'cs':cf?'cf':''}">
    <div class="dado-hd">${descr} · ${qtd||1}d20 · bônus=${bon>=0?'+'+bon:bon}</div>
    <div class="dado-tot">${tot}</div>
    ${cs?'<div class="dado-crit">Sucesso Crítico!</div>':cf?'<div class="dado-crit">Falha Crítica!</div>':''}
    ${outrosHtml}<div class="dado-dis">clique para fechar</div></div>`;
  document.body.appendChild(ov);ov.addEventListener('click',()=>ov.remove());setTimeout(()=>ov.remove(),8000);
  addLog(descr,dado,bon,tot);
}
function rolarAtrib(nome,id){const v=parseInt(document.getElementById(id).value)||0;const r=d20s(v);showDado('Teste de '+nome,r.best,0,r.best,r.rolou,r.all);}
function rolarPeri(nome,id){
  const p=PERI.find(x=>x.id===id);if(!p)return;
  const selAtr=document.getElementById('pa_'+id);
  const atrKey=selAtr?selAtr.value:window._psAtr[id]||p.atr;
  const av=getAtr(atrKey);const g=window._ps[id]||'';const bon=g?GB[g]:0;const bonExtra=parseInt(window._psBon[id]||0);
  const res=d20s(av);const tot=res.best+bon+bonExtra;
  showDado(nome+(g?' ('+{T:'Treinado',V:'Veterano',E:'Expert'}[g]+')':''),res.best,bon+bonExtra,tot,res.rolou,res.all);
}
function addLog(tipo,dado,bon,tot){
  const ld=document.getElementById('logDiv');const it=document.createElement('div');
  it.className='log-it'+(dado===20?' cs':dado===1?' cf':'');
  const h=new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  it.innerHTML=`<span class="log-res">${tot}</span><span>${tipo}</span><br><span style="color:var(--ink3);font-size:0.85em;">d20=${dado} bônus=${bon} · ${h}</span>`;
  ld.insertBefore(it,ld.firstChild);while(ld.children.length>20)ld.removeChild(ld.lastChild);
}

// ATAQUES
function mkAtk(n='',habil='luta',ba=0,d='1d6',bd=0){
  const div=document.createElement('div');div.className='coll-item atk-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${n||'Novo Ataque'}</span>
    <span class="coll-meta" style="color:var(--gold);">${habil==='luta'?'LUTA':'PONTARIA'}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar()">🗑</button>
  </div>
  <div class="coll-body">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Nome</label><input type="text" class="atk-nome" value="${n}" placeholder="Ex: Pistola .38" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Novo Ataque'"></div>
      <div class="campo" style="margin-bottom:0;"><label class="lbl">Perícia</label>
        <select class="atk-habil" onchange="atuAtkMeta(this)">
          <option value="luta"${habil==='luta'?' selected':''}>Luta</option>
          <option value="pontaria"${habil==='pontaria'?' selected':''}>Pontaria</option>
        </select>
      </div>
    </div>
    <div class="atk-grid">
      <div>
        <div class="atk-section-lbl">ATAQUE — bônus extra</div>
        <div class="atk-ctrls">
          <input type="number" class="atk-bi ba" value="${ba}" title="Bônus extra de ataque" placeholder="±0">
          <button class="btn-ra" onclick="rolarA(this)">🎲 Atacar</button>
        </div>
      </div>
      <div>
        <div class="atk-section-lbl">DANO</div>
        <div class="atk-ctrls">
          <select class="atk-ds">${['1d4','1d6','1d8','1d10','1d12','2d6','2d8','3d6'].map(x=>`<option${x===d?' selected':''}>${x}</option>`).join('')}</select>
          <input type="number" class="atk-bi bd" value="${bd}" title="Bônus de dano" placeholder="±0">
          <button class="btn-rd" onclick="rolarD(this)">🎲 Dano</button>
        </div>
      </div>
    </div>
  </div>`;
  div.addEventListener('input',()=>triggerSalvar());return div;
}
function atuAtkMeta(sel){
  const item=sel.closest('.coll-item');
  const meta=item.querySelector('.coll-meta');
  if(meta)meta.textContent=sel.value==='luta'?'LUTA':'PONTARIA';
  triggerSalvar();
}
function addAtk(){const d=document.getElementById('atkCont').appendChild(mkAtk());d.classList.add('open');}
function rolarA(btn){
  const box=btn.closest('.coll-item');const ba=parseInt(box.querySelector('.ba').value)||0;
  const nome=box.querySelector('.atk-nome').value||'Ataque';
  const habil=box.querySelector('.atk-habil').value;
  const gr=window._ps[habil]||'';const ps=gr?GB[gr]:0;
  const atrKey=habil==='luta'?'forca':'agilidade';
  const av=parseInt(document.getElementById(atrKey).value)||0;
  const res=d20s(av);
  showDado('Ataque: '+nome,res.best,ps+ba,res.best+ps+ba,res.rolou,res.all);
}
function rolarD(btn){
  const box=btn.closest('.coll-item');const sel=box.querySelector('.atk-ds').value;
  const bd=parseInt(box.querySelector('.bd').value)||0;const nome=box.querySelector('.atk-nome').value||'Ataque';
  const[nd,df]=sel.split('d').map(Number);let tot=0,rr=[];
  for(let i=0;i<nd;i++){const r=Math.floor(Math.random()*df)+1;rr.push(r);tot+=r;}
  showDado('Dano: '+nome+' ('+rr.join('+')+')'+( bd?'+'+bd:''),rr[0],bd,tot+bd);
}

// HABILIDADES
function mkHab(n='',d=''){
  const div=document.createElement('div');div.className='coll-item hab-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${n||'Nova Habilidade'}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar();buildProficiencias()">🗑</button>
  </div>
  <div class="coll-body">
    <div class="campo" style="margin-bottom:8px;"><label class="lbl">Nome</label>
      <input type="text" class="hab-nome" value="${n}" placeholder="Nome da Habilidade" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Nova Habilidade';buildProficiencias()">
    </div>
    <div class="campo"><label class="lbl">Custo / Efeito / Pré-requisito</label>
      <textarea class="hab-desc" style="min-height:50px;" placeholder="Ex: 2 PE — Recebe +5 no teste de ataque...">${d}</textarea>
    </div>
  </div>`;
  div.addEventListener('input',()=>triggerSalvar());return div;
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
  d.classList.add('open');document.getElementById('modalHab')?.remove();triggerSalvar();buildProficiencias();
}

// ELEM CLASS MAP
const ELEM_CLS={'Conhecimento':'rit-elem-conhecimento','Energia':'rit-elem-energia','Morte':'rit-elem-morte','Sangue':'rit-elem-sangue','Medo':'rit-elem-medo'};
const ELEM_CARD_CLS={'Conhecimento':'rit-card-conhecimento','Energia':'rit-card-energia','Morte':'rit-card-morte','Sangue':'rit-card-sangue','Medo':'rit-card-medo'};
const EXEC_OPTS=['livre','padrão','movimento','completo','rodada'];
const ALC_OPTS=['pessoal','toque','curto','médio','longo','extremo','ilimitado'];
const DUR_OPTS=['instantânea','cena','sustentada','permanente'];

// RITUAIS
function mkRit(data={}){
  const{nome='',elem='Conhecimento',circ='1',resistencia='Anula',atrResistencia='For',n_exec='padrão',n_alc='toque',n_dur='cena',n_pe=1,n_desc='',d_exec='padrão',d_alc='toque',d_dur='cena',d_pe='',d_desc='',v_exec='padrão',v_alc='toque',v_dur='cena',v_pe='',v_desc='',activeTab='normal'}=data;
  const div=document.createElement('div');
  div.className='coll-item rit-item '+(ELEM_CLS[elem]||'rit-elem-conhecimento');
  const uid=Math.random().toString(36).slice(2,7);
  const sel=(id,val,opts,extra)=>`<select id="${id}" style="background:var(--bg2);border:1px solid var(--border);color:var(--rit-color,var(--cyan));font-family:'Share Tech Mono';font-size:0.65em;padding:3px 4px;width:100%;${extra||''}">${opts.map(o=>`<option${o===val?' selected':''}>${o}</option>`).join('')}</select>`;
  const circTxt=circ+'° Círculo';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${nome||'Novo Ritual'}</span>
    <span class="coll-meta" style="color:var(--rit-color,var(--cyan));">${elem} · ${circTxt}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar()">🗑</button>
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
  div.addEventListener('input',()=>triggerSalvar());return div;
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
function addRit(){const d=document.getElementById('ritCont').appendChild(mkRit());d.classList.add('open');}
function mkParanormal(n='',d=''){
  const div=document.createElement('div');div.className='coll-item hab-item';
  div.innerHTML=`
  <div class="coll-header" onclick="collToggle(this)">
    <span class="coll-arrow">▶</span>
    <span class="coll-title">${n||'Novo Poder Paranormal'}</span>
    <button class="btn-del" onclick="event.stopPropagation();this.closest('.coll-item').remove();triggerSalvar()">🗑</button>
  </div>
  <div class="coll-body">
    <div class="campo" style="margin-bottom:8px;"><label class="lbl">Nome</label>
      <input type="text" class="paranormal-nome" value="${n}" placeholder="Nome do Poder" oninput="this.closest('.coll-item').querySelector('.coll-title').textContent=this.value||'Novo Poder Paranormal'">
    </div>
    <div class="campo"><label class="lbl">Descrição</label>
      <textarea class="paranormal-desc" style="min-height:50px;" placeholder="Descrição do poder...">${d}</textarea>
    </div>
  </div>`;
  div.addEventListener('input',()=>triggerSalvar());return div;
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
  d.classList.add('open');document.getElementById('modalRit')?.remove();triggerSalvar();
}

// ============================================================
// INVENTÁRIO — COM DRAG & DROP
// ============================================================
const INV_CAT_PESO = { I: 1, II: 2, III: 3, VI: 6 };

function mkItem(n='',d='',exp=false,qtd=1,cat='I',pesoAj=0){
  const div=document.createElement('div');div.className='inv-it';div.draggable=true;
  div.innerHTML=`<div class="inv-row">
    <span class="inv-drag" title="Arrastar para reordenar">⠿</span>
    <button class="inv-exp" onclick="toggleInv(this)">▸</button>
    <input type="text" class="inv-ni" placeholder="Item...">
    <input type="number" class="inv-qtd" min="1" value="1" title="Quantidade" aria-label="Quantidade">
    <select class="inv-cat" title="Categoria">
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="VI">VI</option>
    </select>
    <button class="inv-del" onclick="this.closest('.inv-it').remove();atuInventarioPeso();triggerSalvar()">✕</button>
  </div>
  <textarea class="inv-dt" placeholder="Detalhes, propriedades..."${exp?' style="display:block;"':''}></textarea>
  <div class="inv-extra"${exp?' style="display:block;"':''}>
    <label>Ajuste de Peso <span>(pode ser negativo)</span></label>
    <input type="number" class="inv-peso-aj" value="0" placeholder="0">
  </div>`;
  div.querySelector('.inv-ni').value=n;div.querySelector('.inv-dt').value=d;
  div.querySelector('.inv-qtd').value = Math.max(1, parseInt(qtd)||1);
  div.querySelector('.inv-cat').value = INV_CAT_PESO[cat] ? cat : 'I';
  div.querySelector('.inv-peso-aj').value = parseInt(pesoAj)||0;
  if(exp)div.querySelector('.inv-exp').textContent='▾';
  div.addEventListener('input',()=>{
    atuInventarioPeso();
    triggerSalvar();
  });
  // Drag and drop events
  div.addEventListener('dragstart', invDragStart);
  div.addEventListener('dragover', invDragOver);
  div.addEventListener('drop', invDrop);
  div.addEventListener('dragend', invDragEnd);
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
}

function addItem(){
  document.getElementById('invCont').appendChild(mkItem());
  atuInventarioPeso();
}
function toggleInv(btn){
  const item=btn.closest('.inv-it');
  const d=item.querySelector('.inv-dt');
  const extra=item.querySelector('.inv-extra');
  const v=d.style.display==='block';
  d.style.display=v?'none':'block';
  if (extra) extra.style.display=v?'none':'block';
  btn.textContent=v?'▸':'▾';
}
function extI(){
  return Array.from(document.getElementById('invCont').children).map(d=>({
    n:d.querySelector('.inv-ni')?.value||'',
    d:d.querySelector('.inv-dt')?.value||'',
    exp:d.querySelector('.inv-dt')?.style.display==='block',
    qtd:parseInt(d.querySelector('.inv-qtd')?.value)||1,
    cat:d.querySelector('.inv-cat')?.value||'I',
    pesoAj:parseInt(d.querySelector('.inv-peso-aj')?.value)||0
  }));
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
    const qtd = Math.max(1, parseInt(item.querySelector('.inv-qtd')?.value)||1);
    const cat = item.querySelector('.inv-cat')?.value || 'I';
    const pesoBase = INV_CAT_PESO[cat] || 0;
    const ajuste = parseInt(item.querySelector('.inv-peso-aj')?.value)||0;
    return sum + (qtd * pesoBase) + ajuste;
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
  return Array.from(document.getElementById('atkCont')?.children||[]).map(d=>({
    n:d.querySelector('.atk-nome')?.value||'',
    habil:d.querySelector('.atk-habil')?.value||'luta',
    ba:+(d.querySelector('.ba')?.value)||0,
    d:d.querySelector('.atk-ds')?.value||'1d6',
    bd:+(d.querySelector('.bd')?.value)||0
  }));
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
    pericias:JSON.stringify(window._ps||{}),
    perBonus:JSON.stringify(window._psBon||{}),
    perAtr:JSON.stringify(psAtrSave),
    profNome:profNomeEl?.value||'',
    profExtras:JSON.stringify(window._profExtras||[]),
    proficiencias:extProfs(),
    ataques:extA(),habilidades:extH(),rituais:extR(),
    poderesParanormais:extP(),inventario:extI()
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
  (f.ataques||[]).forEach(a=>document.getElementById('atkCont').appendChild(mkAtk(a.n,a.habil||'luta',a.ba,a.d,a.bd)));
  document.getElementById('habCont').innerHTML='';
  (f.habilidades||[]).forEach(h=>document.getElementById('habCont').appendChild(mkHab(h.n,h.d)));
  document.getElementById('ritCont').innerHTML='';
  (f.rituais||[]).forEach(r=>document.getElementById('ritCont').appendChild(mkRit(r)));
  document.getElementById('paranormalCont').innerHTML='';
  (f.poderesParanormais||[]).forEach(p=>document.getElementById('paranormalCont').appendChild(mkParanormal(p.n,p.d)));
  document.getElementById('invCont').innerHTML='';
  (f.inventario||[]).forEach(i=>document.getElementById('invCont').appendChild(mkItem(i.n,i.d,i.exp,i.qtd,i.cat,i.pesoAj)));
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
  sv('defBonus',0);sv('patente','recruta');sv('creditos','baixo');
  document.getElementById('patenteDisplay').textContent='RECRUTA';
  setAv('');document.getElementById('avatarUrl').value='';
  window._ps={};window._psBon={};window._psAtr={};window._profExtras=[];
  ['atkCont','habCont','ritCont','paranormalCont','invCont'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.innerHTML='';
  });
  window._profSel = {};
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

  syncTrilhaOptions();
  calcDeriv();atuNEX(false);atuBarras();atuTodosDots();atuInventarioPeso();
  buildProficiencias();
  carregarFicha();

  document.addEventListener('change',e=>{
    if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName))triggerSalvar();
  });
});
