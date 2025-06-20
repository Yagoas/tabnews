import { Box, DefaultLayout, Heading, Viewer } from '@/TabNewsUI';

export default function Page() {
  const body = `Ao utilizar o TabNews você está de acordo com os seguintes termos:

  ## TabNews

  1. O TabNews tem como objetivo principal servir como plataforma para **conteúdos de valor concreto** para quem trabalha com **Programação** e **Tecnologia**.
  2. Consideramos conteúdos de valor concreto: notícias, artigos, tutoriais, indicações, curiosidades, perguntas bem formuladas ou qualquer outro tipo de conteúdo que poderá fazer alguma diferença na vida de quem trabalha em áreas diretamente ou indiretamente relacionadas ao **desenvolvimento de software**.
  3. Daremos preferência à **qualidade** sobre **quantidade**; neste ponto, especificamente, nosso objetivo é atingir um estágio onde **tudo o que você ler dentro do TabNews terá valido a pena**, de alguma forma.
  4. O TabNews é um **novo pedaço de internet** que **nunca** aplicará práticas malignas de engajamento, marketing, anúncios e **sempre protegerá o usuário** para que ele tenha a **clareza mental de que está navegando em um espaço livre de ameaças**.
  5. O TabNews **nunca venderá** os dados de seus usuários e **nunca compartilhará** informações com terceiros.
  6. O TabNews somente coletará dados que são fundamentalmente necessários para o **funcionamento** e **proteção** do serviço. Nosso princípio neste ponto é: quanto menos dados sobre o usuário coletarmos, menos dados sensíveis teremos em nossa base, logo, melhor estaremos posicionados no quesito proteção do serviço e usuários.

  ## Usuário

  1. O usuário do TabNews é uma pessoa brutalmente exata e empática, **simultaneamente**, onde o **termômetro** para entender se isso está sendo aplicado é simples: as pessoas estão se **afastando** ou se **aproximando** dentro de uma discussão?
  2. Qualquer usuário que através de suas publicações esteja propositalmente afastando outros usuários, que contenha posturas negativas aplicadas de forma genérica ou generalizada, que contenha sarcasmo gratuito, que esteja atacando ou sendo agressivo, poderá ter sua conta **permanentemente bloqueada**, junto com a invalidação de todas as suas publicações e ativos gerados por elas.
  3. O usuário se compromete a não manipular ou movimentar de forma artificial a qualificação das publicações e entende que, para um **ecossistema saudável**, isso precisa acontecer de forma espontânea. Qualquer manipulação, de qualquer natureza, poderá resultar no banimento permanente da conta do usuário.
  4. Da mesma forma, estão **estritamente proibidos** atos discriminatórios de qualquer tipo, como homofobia, transfobia, xenofobia, capacitismo, discriminação pelo sexo, idade, raça, cor, classe social ou qualquer outra forma de segregação.
  5. O usuário se compromete em não realizar publicações com foco **exclusivamente** comercial e se compromete em não utilizar técnicas passivas de _tracking_, como _tracking pixel_ ou qualquer outro tipo de identificação que não necessite da interação dos outros usuários do site. Apesar disto, será muito bem vindo o usuário realizar um \`Pitch\` sobre projetos em que esteja **diretamente envolvido** e que conseguirá devolver para comunidade conhecimentos sobre como o projeto foi executado, principalmente sobre a parte técnica.
  6. Caso o usuário descubra ou esbarre com alguma brecha de segurança do serviço e encontre **informações sensíveis** (por exemplo, dados privados de outros usuários, dados sensíveis do sistema ou acesso não autorizado), se compromete a reportar este caso de forma **privada** através do email \`contato@tabnews.com.br\`. Após o fechamento da falha, o TabNews se compromete em criar um **Postmortem público** com os detalhes do que aconteceu. Não temos interesse algum em esconder estes acontecimentos e queremos compartilhar todos os conhecimentos adquiridos e estratégia adotadas, mantendo em mente que protegeremos ao máximo dados sensíveis dos usuários. Falhas que não possuam informações sensíveis e não prejudicarão outros usuários poderão ser livremente reportadas no [repositório do projeto](https://github.com/filipedeschamps/tabnews.com.br).

  ## Direitos autorais e propriedade intelectual

  1. O usuário possui os direitos autorais sobre os conteúdos que publicou na plataforma e se responsabiliza integralmente por eles, declarando possuir os direitos de uso do que for publicado ou que o conteúdo está enquadrado dentro do "Fair Use" ("Limitação aos direitos de Autor" encontrado na \`LDA\`).
  2. A marca \`TabNews\`, junto ao serviço e o domínio \`tabnews.com.br\` são propriedades intelectuais pertencentes à \`Filipe Deschamps Tech Inc.\`, uma empresa localizada no Canadá.
  3. O sistema que utilizamos para o serviço do TabNews é um [projeto de código aberto](https://github.com/filipedeschamps/tabnews.com.br) e construído por esforços conjuntos e espontâneos da comunidade Open Source dentro da licença \`GPL-3.0\`.


  ## Garantias

  1. O TabNews é um projeto de natureza Open Source, com esforços feitos de forma espontânea e não oferecemos nenhuma garantia para a disponibilidade do serviço ou suporte. Apesar disto, a comunidade se esforça para entregar o melhor serviço e atenção possível.
  2. As moedas digitais \`TabCoins\` e \`TabCash\` possuem validade apenas dentro do ecossistema criado pelo próprio TabNews e não possuem vínculo ou lastro com ativos financeiros encontrados na economia real. Apesar de nossos esforços e de todas as regras estarem disponíveis em forma de código aberto, também não podemos nos responsabilizar por imprecisões neste serviço.

  ## Alterações nos Termos de Uso

  1. Os termos naturalmente poderão ser alterados quando necessário e estas alterações serão acompanhadas de publicações dentro do próprio TabNews. Iremos sempre destacar com linguajar simples e com total clareza quais alterações foram realizadas.

  ## Histórico de alterações

  * 2022-09-11 - Criação do documento através do PR [#728](https://github.com/filipedeschamps/tabnews.com.br/issues/728).
  `;

  return (
    <DefaultLayout metadata={{ title: 'Termos de Uso' }}>
      <Box>
        <Heading as="h1">Termos de Uso</Heading>
        <Viewer areLinksTrusted value={body} clobberPrefix="" />
      </Box>
    </DefaultLayout>
  );
}
