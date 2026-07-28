import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import julioPortrait from "@/assets/julio-portrait.webp.asset.json";
import julioSuit from "@/assets/julio-suit.jpg.asset.json";
import teamGroup from "@/assets/team-group.webp.asset.json";
import muayThai from "@/assets/muay-thai-class.webp.asset.json";
import teamFighters from "@/assets/team-fighters.webp.asset.json";
import podcastFlyer from "@/assets/podcast-flyer.jpeg.asset.json";
import podcastLuciano from "@/assets/podcast-luciano.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent("Ol\u00e1 Julio! Quero saber mais sobre o Treino H\u00edbrido em Alphaville.");

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md border border-primary/60 bg-primary/10 text-primary text-display text-xl">
        JQ
      </div>
      <div className="leading-tight">
        <div className="text-serif-italic text-lg text-foreground">Julio Quirino</div>
        <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
          Personal Fight Coach
        </div>
      </div>
    </a>
  );
}

function Nav() {
  const items = [
    ["#metodo", "Método"],
    ["#autoridade", "Autoridade"],
    ["#processo", "Processo"],
    ["#alunos", "Alunos"],
    ["#faq", "FAQ"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {items.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-transform hover:-translate-y-0.5 shadow-glow"
        >
          Matricular
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 60 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 60 / 0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-primary" />
            Cap. 001 — Manifesto
            <span className="h-px flex-1 bg-border" />
            Alphaville · SP
          </div>
          <h1 className="text-display text-foreground text-[clamp(3.5rem,10vw,8rem)]">
            TREINE
            <span className="block text-serif-italic text-foreground/90 text-[clamp(3rem,9vw,7rem)] pl-6 md:pl-16">
              comigo,
            </span>
            <span className="block text-primary">FIQUE</span>
            <span className="block text-primary">
              PERIGOSO
              <span className="text-serif-italic text-primary/90">(a).</span>
            </span>
          </h1>

          <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Método híbrido de <span className="text-foreground">musculação × artes marciais</span> em
            Alphaville. Emagrecimento acelerado, autodefesa real e disciplina que atravessa o dia.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Matricular no WhatsApp
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-3 rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Conhecer o método
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["10+", "Anos de ringue"],
              ["1:1", "Presencial em Alphaville"],
              ["3", "Modalidades integradas"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="corner-frame relative aspect-[4/5] overflow-hidden rounded-sm shadow-frame">
            <img
              src={teamGroup.url}
              alt="Turma de alunos treinando com Julio Quirino em Alphaville"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-primary" />
            <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-primary" />
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 bg-primary" /> Personal Fight Coach
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "MUSCULAÇÃO",
    "MUAY THAI",
    "BOXE",
    "MMA",
    "DISCIPLINA",
    "AUTODEFESA",
    "HIPERTROFIA",
    "CONDICIONAMENTO",
  ];
  const row = [...words, ...words];
  return (
    <div className="border-y border-border/60 bg-secondary/40 py-6 overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
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

function Autoridade() {
  return (
    <section id="autoridade" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={julioPortrait.url}
              alt="Retrato do Julio Quirino, Personal Fight Coach"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-frame"
            />
            <img
              src={julioSuit.url}
              alt="Julio Quirino em ambiente lifestyle"
              className="mt-16 aspect-[4/5] w-full rounded-sm object-cover shadow-frame"
            />
          </div>
        </div>
        <div className="lg:pt-8">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" /> Cap. 002 — Autoridade
          </div>
          <h2 className="text-display text-5xl leading-[0.9] md:text-7xl">
            Uma década no{" "}
            <span className="text-serif-italic text-primary">ringue.</span>
            <br />O seu resultado no{" "}
            <span className="text-serif-italic text-primary">tatame.</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Comecei no Jiu-Jitsu aos 13 anos. Depois vieram o Boxe, o Muay Thai e o MMA — lutas
              amadoras, competições profissionais e mais de 10 anos aplicando cada round dentro do
              treino do meu aluno.
            </p>
            <p>
              Sou educador físico e treino gente comum que quer resultado real: emagrecer, ganhar
              shape, aprender a se defender e recuperar a mentalidade de quem não desiste.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["CREF Ativo", "Ex-atleta", "Boxe · Muay Thai · MMA", "Alphaville · SP"].map((t) => (
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

function Metodo() {
  const pillars = [
    {
      n: "01",
      t: "Musculação Estratégica",
      d: "Hipertrofia inteligente com progressão real. Força e shape que servem à sua vida — não só ao espelho.",
    },
    {
      n: "02",
      t: "Boxe & Muay Thai",
      d: "Técnica pura, alto gasto calórico, coordenação e a autoconfiança de quem sabe se defender.",
    },
    {
      n: "03",
      t: "MMA & Condicionamento",
      d: "Circuitos de alta intensidade que integram tudo: força, agilidade, gás e mentalidade de atleta.",
    },
  ];
  return (
    <section id="metodo" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" /> Cap. 003 — O Método
            </div>
            <h2 className="text-display max-w-3xl text-5xl leading-[0.9] md:text-7xl">
              Três disciplinas.
              <span className="block text-serif-italic text-primary">Um só protocolo.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-lg">
            Chega de treino de academia no automático. O método híbrido junta força bruta, técnica
            de luta e cabeça de atleta em cada sessão.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group relative overflow-hidden rounded-sm border border-border/70 bg-card/40 p-8 transition-colors hover:border-primary"
            >
              <div className="text-display text-6xl text-primary/40 transition-colors group-hover:text-primary">
                {p.n}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              <div className="mt-8 h-px w-full bg-border transition-colors group-hover:bg-primary" />
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <img
            src={muayThai.url}
            alt="Aula de Muay Thai — chutes e postura de guarda"
            className="aspect-[16/10] w-full rounded-sm object-cover shadow-frame"
          />
          <img
            src={teamFighters.url}
            alt="Grupo de alunos em pose de guarda ao final da aula"
            className="aspect-[16/10] w-full rounded-sm object-cover shadow-frame"
          />
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const items = [
    ["Emagrecimento acelerado", "Alto gasto calórico da luta somado à densidade da musculação."],
    ["Defesa pessoal real", "Boxe, Muay Thai e MMA aplicados — não coreografia."],
    ["Fim da monotonia", "Cada sessão tem estímulo novo. Ninguém treina no automático."],
    ["Cabeça blindada", "Foco, disciplina e resiliência que atravessam o expediente."],
  ];
  return (
    <section className="border-t border-border/60 bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
          <span className="h-px w-8 bg-primary" /> Diferenciais
        </div>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {items.map(([t, d], i) => (
            <div key={t} className="flex gap-6 border-t border-border/60 pt-8">
              <div className="text-display text-2xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Processo() {
  const steps = [
    ["Avaliação", "Diagnóstico físico, histórico, objetivos e nível técnico. Sem achismo."],
    ["Cronograma", "Grade de treinos híbridos desenhada para o seu resultado — em Alphaville."],
    ["Treino Presencial", "Sessões 1:1 com correção técnica em cada round e cada série."],
    ["Evolução", "Reavaliações constantes. Progressão real de força, shape e técnica."],
  ];
  return (
    <section id="processo" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
        <span className="h-px w-8 bg-primary" /> Cap. 004 — Processo
      </div>
      <h2 className="text-display max-w-4xl text-5xl leading-[0.9] md:text-7xl">
        Quatro rounds até a sua{" "}
        <span className="text-serif-italic text-primary">melhor versão.</span>
      </h2>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/70 bg-border md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <li key={t} className="bg-card p-8">
            <div className="text-display text-5xl text-primary/70">
              R{String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProvaSocial() {
  return (
    <section id="alunos" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-6 md:flex md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" /> Cap. 005 — Prova social
            </div>
            <h2 className="text-display max-w-3xl text-5xl leading-[0.9] md:text-7xl">
              Visto por quem <span className="text-serif-italic text-primary">entende.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <figure className="relative overflow-hidden rounded-sm border border-border/70 bg-card p-8 md:p-12">
            <div className="text-display text-7xl leading-none text-primary/40">"</div>
            <blockquote className="mt-4 text-2xl leading-snug text-foreground md:text-3xl">
              A visão do Julio sobre disciplina, saúde e transformação de vida é rara. Ele traduz
              anos de ringue em um método que serve pra quem quer resultado de verdade.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src={podcastLuciano.url}
                alt="Luciano Viana ao lado de Julio Quirino no estúdio"
                className="h-16 w-16 rounded-full object-cover"
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
              src={podcastFlyer.url}
              alt="Flyer do episódio 142 do Podcast Vida Saudável em Debate com Julio Quirino"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-frame"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              q: "Perdi 9kg em 4 meses. E o melhor: aprendi a bater um jab de verdade.",
              n: "Aluna · Alphaville",
            },
            {
              q: "Nunca tinha treinado luta. Comecei do zero e hoje o treino é o melhor momento do dia.",
              n: "Aluno · Barueri",
            },
            {
              q: "Sai da mesmice da academia. Musculação + Muay Thai virou vício saudável.",
              n: "Aluna · Santana de Parnaíba",
            },
          ].map((t) => (
            <blockquote
              key={t.n}
              className="rounded-sm border border-border/70 bg-card/40 p-6"
            >
              <p className="text-foreground">"{t.q}"</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t.n}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Preciso ter experiência prévia com lutas?",
      a: "Não. As aulas de Muay Thai, Boxe e MMA são adaptadas desde o nível iniciante absoluto. Você aprende toda a base técnica passo a passo, respeitando seus limites.",
    },
    {
      q: "Onde acontecem os treinos?",
      a: "Os atendimentos presenciais são realizados na região de Alphaville — Barueri e Santana de Parnaíba (SP), de forma personalizada.",
    },
    {
      q: "Como funciona o treino híbrido de musculação e luta?",
      a: "Sua rotina integra o estímulo de força e hipertrofia da musculação com a queima calórica, agilidade e condicionamento do Boxe ou Muay Thai — no volume certo para o seu objetivo.",
    },
    {
      q: "O treino é violento ou voltado para competição?",
      a: "Não. O foco é preparação física, emagrecimento, definição e defesa pessoal, em um ambiente seguro e controlado.",
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Pix (com desconto especial), cartão de crédito em até 12x e dinheiro.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border/60 bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" /> Cap. 006 — FAQ
          </div>
          <h2 className="text-display text-5xl leading-[0.9] md:text-7xl">
            Dúvidas antes do <span className="text-serif-italic text-primary">primeiro round.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Se restar alguma, chame no WhatsApp — respondo pessoalmente.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium text-foreground md:text-xl">{it.q}</span>
                  <span
                    className={`text-display text-3xl text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 text-muted-foreground">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.4 0.2 25 / 0.5), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
          <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
          Agenda limitada em Alphaville
        </div>
        <h2 className="text-display text-6xl leading-[0.88] md:text-8xl">
          Seu próximo <span className="text-serif-italic text-primary">round</span>
          <br />começa agora.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
          Vagas presenciais reduzidas. Se quiser um treino que muda corpo e cabeça, chame no
          WhatsApp e vamos alinhar seu primeiro round.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Matricular no WhatsApp
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="https://instagram.com/teamqurino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-border px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
        <Logo />
        <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Alphaville · Barueri · Santana de Parnaíba — SP
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Julio Quirino. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Autoridade />
        <Metodo />
        <Beneficios />
        <Processo />
        <ProvaSocial />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
