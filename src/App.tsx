import { RuleSection, SubRule, RuleList } from "@/components/RuleSection";

const navItems = [
  { id: "regras-gerais", label: "Regras Gerais" },
  { id: "posters", label: "Regras para Posters" },
  { id: "usuarios", label: "Termos para Usuários" },
  { id: "bot", label: "Termos do Bot" },
  { id: "calls", label: "Regras das Calls" },
  { id: "punicoes", label: "Punições" },
  { id: "denuncias", label: "Denúncias" },
  { id: "termo-final", label: "Termo Final" },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      {/* Subtle ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 110%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <main className="mx-auto w-full max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-16 sm:mb-20 text-center">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight">extasy</h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground italic">
            a visual experience in pure ecstasy.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-foreground/70">
            Esta página reúne as regras oficiais, termos de uso do bot e diretrizes da comunidade
            extasy. Ao participar do servidor, você concorda com os termos descritos abaixo.
          </p>
        </header>

        {/* Navigation index */}
        <nav className="mb-16 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl p-6 sm:p-8">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Índice
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {navItems.map((item, i) => (
              <li key={item.id} className="flex items-baseline gap-3 text-[14.5px]">
                <span className="text-muted-foreground tabular-nums w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${item.id}`}
                  className="text-foreground/85 underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Welcome */}
        <div className="mb-16 text-center text-[15px] leading-relaxed text-foreground/70">
          <p>
            Bem-vindo(a) à <span className="text-foreground">extasy</span>, uma comunidade focada em
            estética, icons, banners, perfis, posters, automações e experiências visuais dentro do
            Discord.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <RuleSection
            id="regras-gerais"
            number="01"
            title="Regras Gerais do Servidor"
            subtitle="Diretrizes fundamentais que se aplicam a todos os membros da comunidade."
          >
            <SubRule number="1.1" title="Respeito acima de tudo">
              <p>Respeite todos os membros, posters, staffs e visitantes. Não será permitido:</p>
              <RuleList
                items={[
                  "ofensas",
                  "humilhação",
                  "racismo",
                  "homofobia",
                  "xenofobia",
                  "assédio",
                  "perseguição",
                  "ameaças",
                  "provocações excessivas",
                  "discurso de ódio",
                ]}
              />
              <p>A extasy é uma comunidade visual e social, não um espaço para toxicidade.</p>
            </SubRule>

            <SubRule number="1.2" title="Proibido conteúdo adulto ou explícito">
              <p>
                Não envie conteúdos NSFW, pornográficos, sexualizados ou explícitos. Isso inclui:
              </p>
              <RuleList
                items={[
                  "imagens +18",
                  "banners sexualizados",
                  "fotos íntimas",
                  "links adultos",
                  "piadas pesadas com teor sexual",
                  "conteúdo envolvendo menores de idade",
                ]}
              />
            </SubRule>

            <SubRule number="1.3" title="Proibido divulgação sem permissão">
              <p>
                Não divulgue servidores, lojas, perfis, bots, links ou projetos sem autorização da
                staff. Divulgação permitida apenas em canais liberados ou com autorização.
              </p>
            </SubRule>

            <SubRule number="1.4" title="Proibido spam e flood">
              <p>
                Não envie mensagens repetidas, emojis em excesso, links em massa ou marque pessoas
                sem motivo. Também é proibido:
              </p>
              <RuleList
                items={[
                  "floodar comandos",
                  "abusar do bot",
                  "enviar imagens repetidas",
                  "tentar travar canais",
                  "criar confusão proposital",
                ]}
              />
            </SubRule>

            <SubRule number="1.5" title="Proibido golpes, roubo ou links suspeitos">
              <p>
                Não envie links perigosos, falsos downloads, phishing, scams, arquivos maliciosos ou
                qualquer tentativa de enganar membros. Qualquer conteúdo suspeito pode ser removido
                imediatamente.
              </p>
            </SubRule>

            <SubRule number="1.6" title="Proibido doxxing">
              <p>Não compartilhe dados pessoais de ninguém. Isso inclui:</p>
              <RuleList
                items={[
                  "endereço",
                  "telefone",
                  "e-mail",
                  "documentos",
                  "localização",
                  "prints privados",
                  "informações pessoais sem permissão",
                ]}
              />
            </SubRule>

            <SubRule number="1.7" title="Respeite os canais">
              <p>Use cada canal para sua função correta. Exemplo:</p>
              <RuleList
                items={[
                  "pedidos em canais de pedidos",
                  "dúvidas em suporte",
                  "artes nos canais corretos",
                  "conversas nos chats gerais",
                  "uploads apenas nos espaços permitidos",
                ]}
              />
            </SubRule>

            <SubRule number="1.8" title="Sem conteúdo ilegal">
              <p>
                Não é permitido enviar, vender, divulgar ou incentivar qualquer conteúdo ilegal.
                Também não permitimos conteúdos relacionados a drogas, armas, crimes, golpes ou
                atividades perigosas.
              </p>
              <p>
                O nome <span className="text-foreground">extasy</span> é usado apenas como conceito
                estético/visual, sem relação com substâncias ou uso real.
              </p>
            </SubRule>
          </RuleSection>

          <RuleSection
            id="posters"
            number="02"
            title="Regras para Posters"
            subtitle="Posters são membros aprovados para enviar icons, PFPs, banners, wallpapers, packs e conteúdos visuais dentro da extasy."
          >
            <SubRule number="2.1" title="Seja original ou tenha permissão">
              <p>Você só pode postar conteúdos que:</p>
              <RuleList
                items={["você tem autorização para usar", "usam assets livres ou autorizados"]}
              />
              <p>É proibido postar arte roubada e fingir que é sua.</p>
            </SubRule>

            <SubRule number="2.2" title="Dê créditos quando necessário">
              <p>
                Se usar base, render, imagem, template, pack ou inspiração de outra pessoa, dê os
                créditos quando for necessário. A extasy valoriza estética, mas também valoriza
                respeito ao criador.
              </p>
            </SubRule>

            <SubRule number="2.4" title="Qualidade mínima">
              <p>O conteúdo postado deve ter um mínimo de qualidade. Evite:</p>
              <RuleList
                items={[
                  "imagens muito borradas",
                  "arquivos quebrados",
                  "prints mal cortados",
                  "spam de artes iguais",
                  "posts sem descrição",
                  "conteúdo sem relação com a proposta da extasy",
                ]}
              />
            </SubRule>

            <SubRule number="2.5" title="Use o bot corretamente">
              <p>
                O poster deve usar o sistema oficial do bot para enviar suas artes. Não tente burlar
                o sistema, duplicar postagens, manipular curtidas, forçar downloads ou usar contas
                alternativas para subir ranking.
              </p>
            </SubRule>

            <SubRule number="2.6" title="Cada poster é responsável pelo próprio conteúdo">
              <p>
                Ao enviar uma arte, você confirma que tem permissão para postar aquele conteúdo. Se
                houver denúncia de roubo, cópia ou violação de direitos, a staff pode remover a
                postagem e aplicar punições.
              </p>
            </SubRule>

            <SubRule number="2.7" title="Staff pode remover posts">
              <p>
                A staff pode remover qualquer postagem que quebre regras, prejudique a comunidade ou
                não combine com o padrão da extasy. Dependendo do caso, o poster pode receber:
              </p>
              <RuleList
                items={[
                  "aviso",
                  "remoção de post",
                  "suspensão",
                  "perda do cargo de poster",
                  "banimento",
                ]}
              />
            </SubRule>
          </RuleSection>

          <RuleSection
            id="usuarios"
            number="03"
            title="Termos para Usuários"
            subtitle="Para quem usa artes, icons, PFPs e banners da extasy."
          >
            <SubRule number="3.1" title="Uso pessoal">
              <p>
                As artes baixadas na extasy são, por padrão, para uso pessoal. Você pode usar como:
              </p>
              <RuleList
                items={[
                  "foto de perfil",
                  "banner",
                  "wallpaper",
                  "icon",
                  "perfil de Discord",
                  "estética pessoal",
                ]}
              />
            </SubRule>

            <SubRule number="3.2" title="Não reivindique autoria">
              <p>
                Você não pode baixar uma arte da extasy e dizer que foi você que criou. Também é
                proibido:
              </p>
              <RuleList
                items={[
                  "vender arte de outra pessoa",
                  "remover créditos",
                  "repostar como se fosse sua",
                  "colocar em pack próprio sem permissão",
                  "usar em servidor/loja sem autorização do criador",
                ]}
              />
            </SubRule>

            <SubRule number="3.3" title="Respeite as permissões do poster">
              <p>
                Alguns posters podem liberar download livre. Outros podem bloquear download ou
                exigir crédito. Se o bot mostrar que o download está bloqueado, respeite.
              </p>
            </SubRule>

            <SubRule number="3.4" title="Pedidos personalizados">
              <p>
                Pedidos feitos a posters devem ser respeitosos e claros. Não cobre, pressione ou
                trate posters como funcionários. Cada poster pode aceitar, recusar ou ignorar
                pedidos conforme sua disponibilidade.
              </p>
            </SubRule>
          </RuleSection>

          <RuleSection
            id="bot"
            number="04"
            title="Termos de Uso do Bot"
            subtitle="O bot da extasy automatiza funções como sistema de posters, envio de artes, curtidas, salvos, downloads, pedidos, calls temporárias, logs, aprovações, moderação e painéis interativos."
          >
            <SubRule number="4.1" title="Uso correto">
              <p>Você não deve abusar do bot. É proibido:</p>
              <RuleList
                items={[
                  "floodar botões",
                  "spammar comandos",
                  "tentar quebrar modais",
                  "usar bugs para vantagem",
                  "manipular curtidas",
                  "criar contas fake para engajamento",
                  "tentar acessar funções privadas",
                  "explorar falhas do sistema",
                ]}
              />
            </SubRule>

            <SubRule number="4.2" title="Dados que o bot pode salvar">
              <p>Para funcionar corretamente, o bot pode salvar dados como:</p>
              <RuleList
                items={[
                  "ID do usuário",
                  "nome de usuário",
                  "ID de mensagens",
                  "ID de canais",
                  "cargos",
                  "postagens enviadas",
                  "curtidas",
                  "salvos",
                  "downloads",
                  "pedidos",
                  "histórico de aprovação",
                  "logs de ações importantes",
                ]}
              />
              <p>
                Esses dados são usados apenas para funcionamento, organização, segurança e moderação
                do servidor.
              </p>
            </SubRule>

            <SubRule number="4.3" title="Logs">
              <p>Ações importantes podem ser registradas em canais de logs da staff. Exemplos:</p>
              <RuleList
                items={[
                  "aplicação para poster",
                  "aprovação ou recusa",
                  "envio de arte",
                  "download",
                  "denúncia",
                  "criação de call",
                  "exclusão de call",
                  "erro importante",
                  "ação administrativa",
                ]}
              />
            </SubRule>

            <SubRule number="4.4" title="Privacidade">
              <p>
                A extasy não deve vender, expor ou compartilhar dados dos usuários fora da
                administração do servidor. Dados internos são usados para manter o sistema
                funcionando e proteger a comunidade.
              </p>
              <p>
                Caso queira remover dados relacionados ao seu perfil de poster ou postagens, abra um
                ticket com a staff.
              </p>
            </SubRule>

            <SubRule number="4.5" title="Falhas e bugs">
              <p>
                O bot pode apresentar erros, instabilidades ou falhas temporárias. Caso encontre um
                bug, reporte à staff. Explorar bugs propositalmente pode gerar punição.
              </p>
            </SubRule>
          </RuleSection>

          <RuleSection
            id="calls"
            number="05"
            title="Regras das Calls Temporárias"
            subtitle="A extasy pode ter um sistema de calls automáticas, públicas ou privadas."
          >
            <SubRule number="5.1" title="Uso das calls">
              <p>
                As calls são criadas automaticamente para conversa, organização e socialização. Não
                use calls para:
              </p>
              <RuleList
                items={[
                  "assédio",
                  "gritaria proposital",
                  "spam sonoro",
                  "conteúdo adulto",
                  "ameaças",
                  "humilhação",
                  "divulgação sem permissão",
                  "gravação sem consentimento",
                ]}
              />
            </SubRule>

            <SubRule number="5.2" title="Calls privadas">
              <p>
                O dono da call pode abrir, fechar, convidar pessoas e gerenciar permissões,
                dependendo das funções disponíveis no bot. Mesmo sendo privada, a call ainda deve
                seguir todas as regras do servidor.
              </p>
            </SubRule>

            <SubRule number="5.3" title="Staff pode intervir">
              <p>
                A staff pode entrar, fechar, mover membros ou deletar calls se houver denúncia,
                abuso ou quebra de regras.
              </p>
            </SubRule>
          </RuleSection>

          <RuleSection
            id="punicoes"
            number="06"
            title="Sistema de Punições"
            subtitle="As punições podem variar de acordo com a gravidade."
          >
            <p>Possíveis ações:</p>
            <RuleList
              items={[
                "aviso verbal",
                "mute",
                "timeout",
                "remoção de conteúdo",
                "perda do cargo de poster",
                "suspensão de funções do bot",
                "kick",
                "ban",
              ]}
            />
            <p className="text-foreground/75">Casos graves podem resultar em banimento direto.</p>
          </RuleSection>

          <RuleSection
            id="denuncias"
            number="07"
            title="Denúncias"
            subtitle="Se ver algo errado, denuncie para a staff."
          >
            <p>Você pode denunciar:</p>
            <RuleList
              items={[
                "arte roubada",
                "comportamento tóxico",
                "assédio",
                "golpe",
                "link suspeito",
                "abuso do bot",
                "quebra de regras",
                "conteúdo proibido",
              ]}
            />
            <p className="text-foreground/75">Sempre que possível, envie prints ou provas.</p>
          </RuleSection>

          <RuleSection id="termo-final" number="08" title="Termo Final">
            <p>
              Ao permanecer na <span className="text-foreground">extasy</span>, usar nossos bots,
              baixar conteúdos, enviar artes, criar calls ou se tornar poster, você concorda com
              estas regras e termos.
            </p>
            <p>
              A staff pode atualizar as regras quando necessário para manter a comunidade segura,
              organizada e com a melhor experiência possível.
            </p>
            <p className="pt-4 italic text-muted-foreground">
              extasy — a visual experience in pure ecstasy.
            </p>
          </RuleSection>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-[var(--glass-border)] text-center">
          <div className="text-lg font-semibold tracking-tight">extasy</div>
          <p className="mt-2 text-sm italic text-muted-foreground">
            a visual experience in pure ecstasy.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} extasy. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://discord.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline hover:text-foreground"
            >
              Termos do Discord
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://discord.com/guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline hover:text-foreground"
            >
              Diretrizes da Comunidade
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
