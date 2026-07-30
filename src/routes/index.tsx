import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

// ─── Assets existentes (mapeados para os novos arquivos locais reais para evitar quebras) ───
// Usar o logo oficial local que foi adicionado
import teamLogoLocal from "@/assets/SaveClip.App_89259695_2516105025309722_2708837763372810240_n.jpg";
// Usar a foto de retrato pré-luta como portrait
import julioPortraitLocal from "@/assets/540329334_18077088689058141_4058149875278081452_n.jpg";
// Usar a foto de vitória para o flyer do podcast
import podcastFlyerLocal from "@/assets/SaveClip.App_654420244_18101765050901416_4904254564841893990_n.jpg";
// Usar a foto de corner para o retrato do luciano
import podcastLucianoLocal from "@/assets/SaveClip.App_651639706_18050465468706289_8612508485843825341_n.jpg";


// ─── Assets novos (importados diretamente via Vite) ─────────────────────────
// Feminino — 4 alunas com luvas e caneleiras sorrindo
import femininoGroup from "@/assets/539959269_18077087801058141_2062830877694884468_n.jpg";
// Atleta pré-luta com guirlanda tailandesa — autoridade máxima
import julioPreLuta from "@/assets/540329334_18077088689058141_4058149875278081452_n.jpg";
// Turma feminina sentada no tatame do CT
import feminino2 from "@/assets/540338683_18077088473058141_4457453928271995479_n.jpg";
// Grande grupo do CT — @julioo_quirino story
import ctGrupo from "@/assets/SaveClip.App_501206596_18068136359058141_4070547844598766953_n.jpg";
// Julio lutando no ringue profissional (chute — melhor foto de atleta)
import julioLuta from "@/assets/SaveClip.App_641567821_17985520151951289_6286148690323299949_n.jpg";
// Julio no corner entre rounds (preparação / bastidores)
import julioCorner from "@/assets/SaveClip.App_651639706_18050465468706289_8612508485843825341_n.jpg";
// Julio vitorioso — mão levantada no ringue
import julioVitorioso from "@/assets/SaveClip.App_654420244_18101765050901416_4904254564841893990_n.jpg";
// Chute no ringue — ação intensa
import julioChuteRingue from "@/assets/SaveClip.App_655627053_18145698022475966_6437492282515631041_n.jpg";
// Sparring no rooftop com skyline Alphaville (chute aéreo — melhor hero)
import julioRooftopChute from "@/assets/SaveClip.App_658906514_18039522299774129_6971363449405660171_n.jpg";
// Sparring boxe no rooftop — Personal Trainer outdoor
import sparringRooftop from "@/assets/SaveClip.App_660194538_2508259796238612_2987888214305824909_n.jpg";

// ─── Vídeos (5 disponíveis — usar o maior como Hero, menores como suporte) ───
// Vídeo principal para o Hero (12.5MB — mais longo, maior qualidade)
import heroVideo from "@/assets/SaveClip.App_AQNqZ118q329KyaaWLlK2-HWd-Lax-Qh4H-gGqhCJe4icOfay-wcG8KkIJ5A2bMWqO0-vsP10JhFE_Y6WH8WqELaqSIQjmUwBwd6Hgg.mp4";
// Vídeo secundário (8.1MB)
import heroVideo2 from "@/assets/SaveClip.App_AQOpR_HLXP6EbwvkEDkjlwFA6V90hcFwq9limQbqkLQsLfMPR_z47o46vdf_FdjojP0sMeJiuMxI3AbjWPY4Vu9kk5ak3ZoWlpu0Vss.mp4";

export const Route = createFileRoute("/")(
  { component: Index },
);

// ─── WhatsApp URLs ───────────────────────────────────────────────────────────
// ATENÇÃO: substitua 55XXXXXXXXXXX pelo número real antes de publicar.
// Use dois números diferentes se o Personal e o CT tiverem números distintos.
const WA_PERSONAL =
  "https://wa.me/55XXXXXXXXXXX?text=" +
  encodeURIComponent(
    "Olá! Quero saber mais sobre o Personal Trainer com o Julio Quirino em Alphaville.",
  );

const WA_CT =
  "https://wa.me/55XXXXXXXXXXX?text=" +
  encodeURIComponent(
    "Olá! Quero agendar uma aula experimental gratuita no CT Team Quirino.",
  );

const WA_GENERIC =
  "https://wa.me/55XXXXXXXXXXX?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e quero saber mais sobre o Julio Quirino e o CT Team Quirino.",
  );

// ─── Instagram ───────────────────────────────────────────────────────────────
const INSTAGRAM_CT = "https://instagram.com/teamquirino";
const INSTAGRAM_PERSONAL = "https://instagram.com/julioo_quirino";

// ─── Hook: anima seções ao entrar no viewport ────────────────────────────────
function useSectionAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Início — Team Quirino">
      <img
        src={teamLogoLocal}
        alt="Escudo Team Quirino Muay Thai"
        className="h-11 w-11 rounded-full object-cover ring-1 ring-primary/50"
        width={44}
        height={44}
      />
      <div className="leading-tight">
        <div className="text-display text-lg tracking-wide text-foreground">
          TEAM QUIRINO
        </div>
        <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
          CT · Alphaville
        </div>
      </div>
    </a>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items: [string, string][] = [
    ["#autoridade", "Coach"],
    ["#ofertas", "Ofertas"],
    ["#como-funciona", "Como Funciona"],
    ["#depoimentos", "Alunos"],
    ["#faq", "FAQ"],
  ];

  return (
    <header
      aria-label="Navegação principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Links da página" className="hidden items-center gap-8 md:flex">
          {items.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={WA_GENERIC}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Julio Quirino no WhatsApp"
          className="hidden md:inline-flex group items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-strong active:scale-95 shadow-glow"
        >
          Falar no WhatsApp
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-sm text-foreground"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span aria-hidden="true" className="text-display text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {items.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-border/40">
            <a
              href={WA_PERSONAL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Personal Trainer"
              className="rounded-sm bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground text-center"
            >
              Quero Personal
            </a>
            <a
              href={WA_CT}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp CT aula experimental"
              className="rounded-sm border border-border px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground text-center hover:border-primary hover:text-primary"
            >
              Quero aula experimental
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="top"
      className="bg-hero relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
    >
      {/* Vídeo de fundo mudo — autêntico, direto do Instagram do Julio */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        poster={julioRooftopChute}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
        <source src={heroVideo2} type="video/mp4" />
      </video>

      {/* Grid overlay decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 60 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 60 / 0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Atleta · Personal · Head Coach
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            Alphaville · SP
          </div>

          {/* H1 com word-reveal */}
          <h1
            className="word-reveal text-display text-foreground text-[clamp(2.8rem,8vw,7rem)] leading-[0.88]"
          >
            <span>Treine</span>{" "}
            <span>comigo,</span>
            <br />
            <span className="text-serif-italic text-foreground/85 text-[clamp(2.4rem,7.5vw,6.5rem)]">
              e fique
            </span>{" "}
            <span className="text-primary text-serif-italic text-[clamp(2.4rem,7.5vw,6.5rem)]">
              perigoso(a).
            </span>
          </h1>

          <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Treine com um <span className="text-foreground">atleta profissional</span>. Do
            treino particular exclusivo às turmas do CT —{" "}
            <span className="text-foreground">você escolhe o caminho</span>, o método é
            o mesmo: real, eficiente e transformador.
          </p>

          {/* Dois CTAs lado a lado desde o hero */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WA_PERSONAL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero Personal Trainer com Julio Quirino — WhatsApp"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-glow-strong active:scale-95"
            >
              Quero Personal
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
            <a
              href={WA_CT}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero conhecer o CT Team Quirino — WhatsApp"
              className="group inline-flex items-center gap-3 rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 active:scale-95"
            >
              Quero conhecer o CT
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {([
              ["10+", "Anos formando atletas"],
              ["4", "Modalidades no tatame"],
              ["100+", "Alunos ativos"],
            ] as [string, string][]).map(([k, v]) => (
              <div key={v}>
                <dt className="text-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Colagem de fotos do hero — rooftop + luta + vitória */}
        <div className="relative section-animate">
          <div className="grid grid-cols-2 gap-3">
            {/* Foto principal: sparring no rooftop com skyline de Alphaville */}
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-sm shadow-frame">
              <img
                src={julioRooftopChute}
                alt="Julio Quirino aplicando chute durante sparring no rooftop em Alphaville"
                className="h-full w-full object-cover object-center"
                loading="eager"
                width={560}
                height={350}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-primary" aria-hidden="true" />
              <div className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-primary" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" /> Alphaville · SP
              </div>
            </div>
            {/* Foto luta no ringue */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-frame">
              <img
                src={julioLuta}
                alt="Julio Quirino em luta profissional de Muay Thai no ringue"
                className="h-full w-full object-cover object-top"
                loading="eager"
                width={270}
                height={340}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-foreground/70">Atleta Profissional</div>
            </div>
            {/* Foto pré-luta com guirlanda — máxima autoridade */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-frame">
              <img
                src={julioPreLuta}
                alt="Julio Quirino pronto para luta com guirlanda tailandesa tradicional"
                className="h-full w-full object-cover object-top"
                loading="eager"
                width={270}
                height={340}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-foreground/70">Lutador Profissional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee() {
  const words = [
    "MUAY THAI",
    "BOXE",
    "MMA",
    "JIU-JITSU",
    "KIDS",
    "FEMININO",
    "DISCIPLINA",
    "MATILHA",
  ];
  const row = [...words, ...words];
  return (
    <div
      className="border-y border-border/60 bg-secondary/40 py-6 overflow-hidden"
      aria-label="Modalidades: Muay Thai, Boxe, MMA, Jiu-Jitsu, Kids, Feminino"
    >
      <div className="marquee-track flex gap-12 whitespace-nowrap" aria-hidden="true">
        {row.map((w, i) => (
          <span key={i} className="text-display text-3xl md:text-5xl text-foreground/60">
            {w}
            <span className="mx-8 text-primary">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Autoridade ───────────────────────────────────────────────────────────────
function Autoridade() {
  return (
    <section
      id="autoridade"
      aria-labelledby="autoridade-heading"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32 section-animate"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Mosaico de fotos do atleta */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            {/* Retrato principal */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-frame">
              <img
                src={julioPortraitLocal}
                alt="Retrato de Julio Quirino, Personal Fight Coach e Head Coach do CT Team Quirino"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width={280}
                height={350}
              />
            </div>
            {/* Vitória no ringue — mão levantada */}
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-sm shadow-frame">
              <img
                src={julioVitorioso}
                alt="Julio Quirino vitorioso no ringue profissional de Muay Thai"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width={280}
                height={350}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
            {/* Corner entre rounds — bastidores reais */}
            <div className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-sm shadow-frame">
              <img
                src={julioCorner}
                alt="Julio Quirino no corner entre rounds durante luta profissional de Muay Thai"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width={560}
                height={245}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.22em] text-foreground/70">Bastidores do ringue profissional</div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="lg:pt-8">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" aria-hidden="true" /> Autoridade
          </div>

          <h2
            id="autoridade-heading"
            className="text-display text-5xl leading-[0.9] md:text-7xl"
          >
            Julio Quirino.{" "}
            <span className="text-serif-italic text-primary">Atleta.</span>
            <br />
            Coach. Método{" "}
            <span className="text-serif-italic text-primary">real.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Começou no Jiu-Jitsu aos 13 anos. Depois vieram o Boxe, o Muay Thai e o
              MMA — lutas amadoras, competições profissionais e mais de uma década
              construindo atletas e alunos comuns dentro do tatame.
            </p>
            <p>
              Como Personal Trainer, entrega acompanhamento individual híbrido
              (musculação + artes marciais) sob medida para cada objetivo. Como Head
              Coach do CT Team Quirino, comanda turmas de todos os níveis — do iniciante
              que nunca calçou uma luva ao atleta em preparação para competir.
            </p>
            <p className="text-foreground/80 italic">
              "Quem treina comigo não treina só o corpo. Treina a cabeça."
            </p>
          </div>

          {/* Credenciais */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              "CREF Ativo",
              "Lutador Profissional",
              "Faixa em Jiu-Jitsu",
              "Head do CT",
            ].map((t) => (
              <div
                key={t}
                className="rounded-sm border border-border/70 bg-card/40 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Split de Ofertas — Coração do Hub ────────────────────────────────────────
function SplitOfertas() {
  return (
    <section
      id="ofertas"
      aria-labelledby="ofertas-heading"
      className="border-t border-border/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 section-animate">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" aria-hidden="true" /> Escolha seu caminho
          </div>
          <h2
            id="ofertas-heading"
            className="text-display max-w-3xl text-5xl leading-[0.9] md:text-7xl"
          >
            Um coach.{" "}
            <span className="text-serif-italic text-primary">Dois caminhos.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
            Quem atende nos dois é o mesmo Julio Quirino — atleta profissional com mais
            de uma década no tatame. A diferença está no formato da experiência.
          </p>
        </div>

        {/* Cards — grid 2 colunas desktop, 1 coluna mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* ─── Card A: Personal Trainer ─── */}
          <article
            id="personal"
            aria-label="Oferta Personal Trainer com Julio Quirino"
            className="section-animate group relative overflow-hidden rounded-sm border-2 border-primary/70 bg-card/60 p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-primary hover:shadow-glow"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-sm bg-primary/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary border border-primary/30">
              <span aria-hidden="true">◈</span> Personal Trainer
            </div>

            <h3 className="text-display text-4xl md:text-5xl text-foreground leading-[0.9]">
              Acompanhamento
              <span className="block text-serif-italic text-primary">individual.</span>
            </h3>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Atendimento 1:1 em Alphaville. Método híbrido exclusivo de musculação +
              artes marciais, 100% adaptado ao seu nível e objetivo.
            </p>

            <ul className="mt-6 space-y-3" aria-label="Benefícios do Personal Trainer">
              {[
                "Programa montado para o seu corpo e objetivo",
                "Emagrecimento acelerado com método híbrido",
                "Defesa pessoal real — nada de coreografia",
                "Fim da monotonia de academia convencional",
                "Fortalecimento mental: foco e disciplina reais",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 py-4 border-t border-primary/20">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Formato
              </div>
              <div className="mt-1 text-sm text-foreground">
                Presencial · Individual · Alphaville (Barueri / Santana de Parnaíba)
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a
                href={WA_PERSONAL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar avaliação particular com Julio Quirino — WhatsApp"
                className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-sm bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-glow-strong active:scale-95"
              >
                Agendar avaliação particular
                <span className="transition-transform group-hover/btn:translate-x-1" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          {/* ─── Card B: CT Team Quirino ─── */}
          <article
            id="ct-turmas"
            aria-label="Oferta CT Team Quirino — Turmas em grupo"
            className="section-animate group relative overflow-hidden rounded-sm border border-border/60 bg-secondary/40 p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-border hover:bg-secondary/60"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-sm bg-card/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground border border-border/60">
              <span aria-hidden="true">⬡</span> CT Team Quirino
            </div>

            <h3 className="text-display text-4xl md:text-5xl text-foreground leading-[0.9]">
              Turmas em
              <span className="block text-serif-italic text-primary">grupo.</span>
            </h3>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Entre para a matilha. Muay Thai, Boxe, MMA e Jiu-Jitsu em grupo — turmas
              para todos os níveis, incluindo Kids e Feminino.
            </p>

            <ul className="mt-6 space-y-3" aria-label="Modalidades e benefícios do CT">
              {[
                "Muay Thai · Boxe · MMA · Jiu-Jitsu",
                "Turmas Kids e Feminino exclusivas",
                "Ambiente de matilha — evolução coletiva",
                "Grade semanal manhã, tarde e noite",
                "Graduações e preparação para competir",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 py-4 border-t border-border/40">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Formato
              </div>
              <div className="mt-1 text-sm text-foreground">
                Presencial · Grupo · Planos mensal, trimestral ou semestral
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a
                href={WA_CT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar aula experimental gratuita no CT Team Quirino — WhatsApp"
                className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-sm border border-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 active:scale-95"
              >
                Agendar aula experimental grátis
                <span className="transition-transform group-hover/btn:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>

        {/* Nota de rodapé dos cards */}
        <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground/60">
          Nos dois formatos, quem comanda é o mesmo Julio Quirino — atleta profissional com mais de 10 anos no tatame.
        </p>
      </div>
    </section>
  );
}

// ─── Diferenciais (aplicam-se a ambas as ofertas) ──────────────────────────────
function Diferenciais() {
  const items: [string, string][] = [
    [
      "Metodologia híbrida e inteligente",
      "Musculação + artes marciais num método que faz sentido para o seu corpo e objetivo — não é academia genérica, não é luta solta.",
    ],
    [
      "Vivência real de atleta",
      "Julio não passou pela teoria. Passou pelo ringue, pelo tatame, pelas lutas amadoras e profissionais. O que ele ensina, ele viveu.",
    ],
    [
      "Defesa pessoal de verdade",
      "Muay Thai, Boxe, MMA e Jiu-Jitsu aplicados com intenção. Nada de coreografia ou técnica de vitrine — é autodefesa funcional.",
    ],
    [
      "Condicionamento absurdo",
      "Emagrecimento, força, resistência e explosão. Todo treino queima e todo treino ensina — você sai diferente de como entrou.",
    ],
    [
      "Cabeça blindada",
      "Foco, respeito e disciplina que atravessam o tatame e chegam na sua vida. O treino muda o corpo; o método muda quem você é.",
    ],
    [
      "Ambiente seguro e controlado",
      "Seja no treino individual ou nas turmas do CT, o ambiente é supervisionado, técnico e respeitoso — do iniciante ao atleta.",
    ],
  ];

  return (
    <section
      aria-labelledby="diferenciais-heading"
      className="border-t border-border/60 bg-secondary/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 section-animate">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" aria-hidden="true" /> Diferenciais
          </div>
          <h2
            id="diferenciais-heading"
            className="text-display text-5xl leading-[0.9] md:text-7xl"
          >
            Por que o método{" "}
            <span className="text-serif-italic text-primary">funciona.</span>
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 section-animate">
          {items.map(([t, d], i) => (
            <div key={t} className="flex gap-6 border-t border-border/60 pt-8">
              <div className="text-display text-2xl text-primary shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Como Funciona (abas Personal / CT) ───────────────────────────────────────
function ComoFunciona() {
  const [activeTab, setActiveTab] = useState<"personal" | "ct">("personal");

  const stepsPersonal = [
    {
      n: "01",
      t: "Avaliação",
      d: "Você chama no WhatsApp, conversamos sobre seus objetivos e agendamos uma avaliação presencial em Alphaville. Sem compromisso.",
    },
    {
      n: "02",
      t: "Cronograma personalizado",
      d: "Julio monta o plano de treino adaptado ao seu nível, objetivo e rotina — combinando musculação e artes marciais de forma inteligente.",
    },
    {
      n: "03",
      t: "Treino presencial",
      d: "Sessões presenciais 1:1 com acompanhamento completo. Cada detalhe técnico, cada série, cada evolução — tudo supervisionado.",
    },
    {
      n: "04",
      t: "Evolução contínua",
      d: "Ajustes periódicos no cronograma conforme você evolui. Resultados visíveis em corpo, técnica e mentalidade.",
    },
  ];

  const stepsCT = [
    {
      n: "01",
      t: "Aula experimental",
      d: "Chame no WhatsApp, agende o dia e experimente uma aula no CT — completamente gratuita e sem compromisso de matrícula.",
    },
    {
      n: "02",
      t: "Matrícula",
      d: "Escolha o plano (mensal, trimestral ou semestral) e libere acesso a todas as modalidades. Pix com desconto, cartão em até 12x ou dinheiro.",
    },
    {
      n: "03",
      t: "Grade semanal",
      d: "Turmas de manhã, tarde e noite. Muay Thai, Boxe, MMA, Jiu-Jitsu, Kids e Feminino. Você encaixa na sua rotina.",
    },
    {
      n: "04",
      t: "Evolução",
      d: "Graduações, sparring supervisionado e, se quiser, preparação para competir pelo time. Do iniciante ao atleta, na mesma matilha.",
    },
  ];

  const steps = activeTab === "personal" ? stepsPersonal : stepsCT;

  return (
    <section
      id="como-funciona"
      aria-labelledby="comofunciona-heading"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32 section-animate"
    >
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
          <span className="h-px w-8 bg-primary" aria-hidden="true" /> Como funciona
        </div>
        <h2
          id="comofunciona-heading"
          className="text-display max-w-4xl text-5xl leading-[0.9] md:text-7xl"
        >
          Quatro passos até o seu{" "}
          <span className="text-serif-italic text-primary">primeiro round.</span>
        </h2>
      </div>

      {/* Seletor de abas */}
      <div
        role="tablist"
        aria-label="Selecione a jornada: Personal Trainer ou CT Team Quirino"
        className="mb-12 flex w-fit gap-1 rounded-sm border border-border/60 bg-secondary/40 p-1"
      >
        <button
          role="tab"
          id="tab-personal"
          aria-selected={activeTab === "personal"}
          aria-controls="tabpanel-personal"
          onClick={() => setActiveTab("personal")}
          className={`rounded-sm px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-200 ${
            activeTab === "personal"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Personal Trainer
        </button>
        <button
          role="tab"
          id="tab-ct"
          aria-selected={activeTab === "ct"}
          aria-controls="tabpanel-ct"
          onClick={() => setActiveTab("ct")}
          className={`rounded-sm px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-200 ${
            activeTab === "ct"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          CT Team Quirino
        </button>
      </div>

      {/* Conteúdo das abas */}
      <div
        role="tabpanel"
        id={activeTab === "personal" ? "tabpanel-personal" : "tabpanel-ct"}
        aria-labelledby={activeTab === "personal" ? "tab-personal" : "tab-ct"}
      >
        <ol className="grid gap-px overflow-hidden rounded-sm border border-border/70 bg-border md:grid-cols-4">
          {steps.map(({ n, t, d }) => (
            <li key={n} className="bg-card p-8">
              <div className="text-display text-5xl text-primary/70">R{n}</div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>

        {/* CTA contextual abaixo do passo a passo */}
        <div className="mt-8 flex justify-center">
          <a
            href={activeTab === "personal" ? WA_PERSONAL : WA_CT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              activeTab === "personal"
                ? "Agendar avaliação de Personal Trainer — WhatsApp"
                : "Agendar aula experimental no CT — WhatsApp"
            }
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-glow-strong active:scale-95"
          >
            {activeTab === "personal"
              ? "Agendar avaliação particular"
              : "Agendar aula experimental grátis"}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Modalidades (bloco visual das fotos) ─────────────────────────────────────
function Modalidades() {
  return (
    <section
      aria-labelledby="modalidades-heading"
      className="relative border-t border-border/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end section-animate">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" aria-hidden="true" /> Modalidades
            </div>
            <h2
              id="modalidades-heading"
              className="text-display max-w-3xl text-5xl leading-[0.9] md:text-7xl"
            >
              Quatro artes.
              <span className="block text-serif-italic text-primary">Uma só matilha.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-lg">
            No CT Team Quirino a grade é montada para todos os níveis. Do iniciante ao
            atleta, com professores que já subiram no ringue.
          </p>
        </div>

        {/* Grade de fotos — 4 fotos reais do CT */}
        <div className="grid gap-4 md:grid-cols-2 section-animate">
          {/* Linha 1: ação no ringue + sparring outdoor */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-frame">
            <img
              src={julioChuteRingue}
              alt="Julio Quirino aplicando chute alto em luta profissional de Muay Thai no ringue"
              className="h-full w-full object-cover object-top"
              loading="lazy"
              width={640}
              height={480}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/80">Muay Thai · Competição</div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-frame">
            <img
              src={sparringRooftop}
              alt="Sparring de boxe no rooftop em Alphaville com skyline ao fundo"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              width={640}
              height={480}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/80">Boxe · Personal · Alphaville</div>
          </div>
          {/* Linha 2: turma feminina + grande grupo do CT */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-frame">
            <img
              src={feminino2}
              alt="Turma feminina do CT Team Quirino sentada no tatame após treino de Muay Thai"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              width={640}
              height={480}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/80">Turma Feminino · CT Team Quirino</div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-frame">
            <img
              src={ctGrupo}
              alt="Aula de Muay Thai no CT Team Quirino — alunos em posição de guarda com luvas"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              width={640}
              height={480}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/80">Muay Thai · CT Team Quirino</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Prova Social ─────────────────────────────────────────────────────────────
function ProvaSocial() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="prova-heading"
      className="border-t border-border/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 section-animate">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" aria-hidden="true" /> Prova social
          </div>
          <h2
            id="prova-heading"
            className="text-display max-w-3xl text-5xl leading-[0.9] md:text-7xl"
          >
            Visto por quem{" "}
            <span className="text-serif-italic text-primary">entende.</span>
          </h2>
        </div>

        {/* Depoimento destaque — Luciano Viana */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] section-animate">
          <figure className="relative overflow-hidden rounded-sm border border-border/70 bg-card p-8 md:p-12">
            <div className="text-display text-7xl leading-none text-primary/40" aria-hidden="true">"</div>
            <blockquote className="mt-4 text-2xl leading-snug text-foreground md:text-3xl">
              A visão do Julio sobre disciplina, saúde e transformação de vida é rara.
              Ele traduz anos de ringue em um método que serve pra quem quer resultado
              de verdade.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src={podcastLucianoLocal}
                alt="Luciano Viana ao lado de Julio Quirino no estúdio do podcast"
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
                width={64}
                height={64}
              />
              <div>
                <div className="text-sm font-semibold text-foreground">Luciano Viana</div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Podcast Vida Saudável em Debate · EP 142
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="grid gap-4">
            <img
              src={podcastFlyerLocal}
              alt="Flyer do episódio 142 do Podcast Vida Saudável em Debate com Julio Quirino"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-frame"
              loading="lazy"
              width={400}
              height={500}
            />
          </div>
        </div>

        {/* Depoimentos de alunos */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 section-animate">
          {[
            {
              q: "Perdi 9kg em 4 meses. E o melhor: aprendi a bater um jab de verdade. Nunca pensei que ia gostar tanto de treinar.",
              n: "Aluna · Alphaville",
              tag: "Personal + CT",
            },
            {
              q: "Nunca tinha treinado luta na vida. Comecei do zero no Team Quirino e hoje é o melhor momento do meu dia.",
              n: "Aluno · Barueri",
              tag: "CT",
            },
            {
              q: "Coloquei meu filho no Kids e nunca vi ele tão disciplinado. A matilha educa de verdade.",
              n: "Aluna · Santana de Parnaíba",
              tag: "CT · Kids",
            },
          ].map((t) => (
            <blockquote
              key={t.n}
              className="rounded-sm border border-border/70 bg-card/40 p-6 flex flex-col gap-4"
            >
              <p className="text-foreground leading-relaxed">"{t.q}"</p>
              <footer className="flex items-center justify-between gap-4 mt-auto">
                <cite className="text-xs uppercase tracking-[0.22em] text-muted-foreground not-italic">
                  {t.n}
                </cite>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 border border-primary/30 rounded-sm px-2 py-0.5">
                  {t.tag}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Galeria real — grupo feminino + grande turma do CT (com aspect-ratio explícito e imagens absolutas) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 section-animate">
          {/* 4 alunas com equipamento completo sorrindo */}
          <div 
            className="relative overflow-hidden rounded-sm shadow-frame w-full"
            style={{ aspectRatio: "4/5", maxHeight: "520px" }}
          >
            <img
              src={femininoGroup}
              alt="Quatro alunas do CT Team Quirino com luvas e caneleiras, sorrindo após treino feminino"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" /> Turma Feminino
            </div>
          </div>
          {/* Grande grupo do CT */}
          <div 
            className="relative overflow-hidden rounded-sm shadow-frame w-full"
            style={{ aspectRatio: "4/5", maxHeight: "520px" }}
          >
            <img
              src={ctGrupo}
              alt="Grande turma do CT Team Quirino reunida no tatame em posição de guarda"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" /> CT Team Quirino · Alphaville
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function Faq() {
  const items = [
    {
      q: "Qual a diferença entre o Personal Trainer e as turmas do CT?",
      a: "O Personal é atendimento individual e 100% sob medida — sessões 1:1 com Julio Quirino em Alphaville, programa montado para o seu corpo e objetivo específico (emagrecimento, defesa pessoal, condicionamento). O CT é em grupo, com grade fixa de horários, ambiente de time e turmas separadas por modalidade (Muay Thai, Boxe, MMA, Jiu-Jitsu, Kids, Feminino). Nos dois formatos, quem comanda é o mesmo Julio.",
      tag: "Personal + CT",
    },
    {
      q: "Preciso ter experiência prévia com lutas?",
      a: "Não. Todas as turmas do CT e o atendimento Personal recebem iniciantes absolutos. Você aprende a base técnica passo a passo, respeitando seus limites e seu ritmo.",
      tag: "Personal + CT",
    },
    {
      q: "Onde acontecem os treinos?",
      a: "Na região de Alphaville — Barueri / Santana de Parnaíba (SP). Chame no WhatsApp para receber o endereço exato e agendar sua avaliação ou aula experimental.",
      tag: "Personal + CT",
    },
    {
      q: "Como funciona o treino híbrido de musculação e luta (Personal)?",
      a: "É um método exclusivo que combina treino de força (musculação) com técnicas de artes marciais adaptadas ao seu nível. Você ganha condicionamento físico, queima gordura e aprende autodefesa real — sem precisar subir no ringue.",
      tag: "Personal",
    },
    {
      q: "Tem turma feminina e infantil no CT?",
      a: "Sim. O CT tem horários exclusivos para o Feminino e para o Kids, com metodologia adaptada e ambiente seguro para todas as idades e níveis.",
      tag: "CT",
    },
    {
      q: "Preciso lutar ou competir?",
      a: "Só se quiser. A maioria dos alunos treina por saúde, defesa pessoal e cabeça. Quem quer competir tem preparação específica com o time.",
      tag: "Personal + CT",
    },
    {
      q: "Quais as formas de pagamento?",
      a: "Planos mensal, trimestral e semestral. Pix (com desconto especial), cartão de crédito em até 12x e dinheiro.",
      tag: "CT",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border/60 bg-secondary/30 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="section-animate">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" aria-hidden="true" /> FAQ
          </div>
          <h2
            id="faq-heading"
            className="text-display text-5xl leading-[0.9] md:text-7xl"
          >
            Dúvidas antes do{" "}
            <span className="text-serif-italic text-primary">primeiro round.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Se restar alguma, chame no WhatsApp — o Julio responde pessoalmente.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border section-animate">
          {items.map((it, i) => {
            const isOpen = open === i;
            const headingId = `faq-q-${i}`;
            const panelId = `faq-a-${i}`;
            return (
              <div key={it.q}>
                <button
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-primary/70">
                      {it.tag}
                    </span>
                    <span className="text-lg font-medium text-foreground md:text-xl">
                      {it.q}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`text-display text-3xl text-primary transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 text-muted-foreground leading-relaxed">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-border/60 py-24 md:py-36"
    >
      {/* Glow de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.4 0.2 25 / 0.5), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center section-animate">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
          <span className="pulse-dot h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          Agenda limitada em Alphaville
        </div>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="text-display text-6xl leading-[0.88] md:text-8xl"
        >
          Treine comigo,{" "}
          <span className="text-serif-italic text-primary">e fique perigoso(a).</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
          Escolha o seu caminho: treino particular 1:1 em Alphaville ou entre para a
          matilha no CT Team Quirino. O método é real, os resultados também.
        </p>

        {/* Dois CTAs lado a lado */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WA_PERSONAL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero Personal Trainer com Julio Quirino — WhatsApp"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-glow-strong active:scale-95"
          >
            Quero Personal
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
          </a>
          <a
            href={WA_CT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero aula experimental gratuita no CT Team Quirino — WhatsApp"
            className="group inline-flex items-center gap-3 rounded-sm border border-border px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 active:scale-95"
          >
            Quero aula experimental grátis
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Links Instagram */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href={INSTAGRAM_CT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Team Quirino"
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            @teamquirino ↗
          </a>
          <a
            href={INSTAGRAM_PERSONAL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram pessoal do Julio Quirino"
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            @julioo_quirino ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      aria-label="Rodapé — informações de contato e localização"
      className="border-t border-border/60 bg-background py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Logo />

          <div className="flex flex-col gap-1">
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              CT Team Quirino
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
              Alphaville — Barueri / Santana de Parnaíba · SP
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={INSTAGRAM_CT}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do CT Team Quirino"
              className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
            >
              @teamquirino ↗
            </a>
            <a
              href={INSTAGRAM_PERSONAL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram pessoal do Julio Quirino"
              className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
            >
              @julioo_quirino ↗
            </a>
          </div>

          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Julio Quirino no WhatsApp"
            className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            WhatsApp ↗
          </a>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50">
            © {new Date().getFullYear()} Julio Quirino · Todos os direitos reservados
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50">
            Personal Trainer · Head Coach · Atleta Profissional
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp FAB (Floating Action Button com scroll-tracking) ────────────────
function WhatsAppFab() {
  const [waUrl, setWaUrl] = useState(WA_GENERIC);

  useEffect(() => {
    const sections: { id: string; url: string }[] = [
      { id: "personal", url: WA_PERSONAL },
      { id: "ct-turmas", url: WA_CT },
      { id: "ofertas", url: WA_GENERIC },
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id, url }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setWaUrl(url);
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com Julio Quirino"
      className="fab-animate fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-200 hover:scale-110 hover:shadow-[0_12px_40px_-8px_rgba(37,211,102,0.8)] active:scale-95 md:h-16 md:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Botão Voltar ao Topo ─────────────────────────────────────────────────────
function ScrollToTopFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-24 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur border border-border shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary md:h-12 md:w-12 md:bottom-28 md:right-8 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5 md:h-6 md:w-6"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
function Index() {
  useSectionAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Autoridade />
        <SplitOfertas />
        <Diferenciais />
        <ComoFunciona />
        <Modalidades />
        <ProvaSocial />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollToTopFab />
      
      {/* Marca d'água de desenvolvimento fixa e discreta */}
      <div className="fixed bottom-6 left-6 z-40 select-none pointer-events-none opacity-20 md:opacity-30">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 font-medium">
          Desenvolvido por Joyce Masalla
        </span>
      </div>
    </div>
  );
}
