import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import julioPortrait from "@/assets/julio-portrait.webp.asset.json";
import julioSuit from "@/assets/julio-suit.jpg.asset.json";
import teamGroup from "@/assets/team-group.webp.asset.json";
import muayThai from "@/assets/muay-thai-class.webp.asset.json";
import teamFighters from "@/assets/team-fighters.webp.asset.json";
import podcastFlyer from "@/assets/podcast-flyer.jpeg.asset.json";
import podcastLuciano from "@/assets/podcast-luciano.jpeg.asset.json";
import teamLogo from "@/assets/team-quirino-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent("Ol\u00e1! Quero fazer uma aula experimental no CT Team Quirino.");

const INSTAGRAM_URL = "https://instagram.com/teamquirino";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <img
        src={teamLogo.url}
        alt="Escudo Team Quirino Muay Thai"
        className="h-11 w-11 rounded-full object-cover ring-1 ring-primary/50"
      />
      <div className="leading-tight">
        <div className="text-display text-lg tracking-wide text-foreground">TEAM QUIRINO</div>
        <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
          CT · Alphaville
        </div>
      </div>
    </a>
  );
}

function Nav() {
  const items = [
    ["#modalidades", "Modalidades"],
    ["#autoridade", "Coach"],
    ["#ct", "O CT"],
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
          Aula Experimental
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
            Cap. 001 — CT Team Quirino
            <span className="h-px flex-1 bg-border" />
            Alphaville · SP
          </div>
          <h1 className="text-display text-foreground text-[clamp(3.5rem,10vw,8rem)]">
            ENTRE
            <span className="block text-serif-italic text-foreground/90 text-[clamp(3rem,9vw,7rem)] pl-6 md:pl-16">
              para a matilha,
            </span>
            <span className="block text-primary">TREINE</span>
            <span className="block text-primary">
              COMO ATLETA<span className="text-serif-italic text-primary/90">.</span>
            </span>
          </h1>

          <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            O CT do <span className="text-foreground">Team Quirino</span> em Alphaville: Muay Thai,
            Boxe, MMA e Jiu-Jitsu em turmas conduzidas por atletas de verdade. Do primeiro jab ao
            ringue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Agendar aula experimental
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="#modalidades"
              className="inline-flex items-center gap-3 rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver modalidades
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["10+", "Anos formando atletas"],
              ["4", "Modalidades no tatame"],
              ["100+", "Alunos ativos"],
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
              <span className="h-1.5 w-1.5 bg-primary" /> Team Quirino · Alphaville
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            <span className="h-px w-8 bg-primary" /> Cap. 002 — Head Coach
          </div>
          <h2 className="text-display text-5xl leading-[0.9] md:text-7xl">
            Julio Quirino.{" "}
            <span className="text-serif-italic text-primary">Head coach.</span>
            <br />O seu resultado no{" "}
            <span className="text-serif-italic text-primary">tatame.</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Começou no Jiu-Jitsu aos 13 anos. Depois vieram o Boxe, o Muay Thai e o MMA — lutas
              amadoras, competições profissionais e mais de uma década construindo atletas e alunos
              comuns dentro do tatame.
            </p>
            <p>
              Educador físico à frente do CT Team Quirino, onde comanda turmas de todos os níveis —
              do iniciante que nunca calçou uma luva ao atleta em preparação para competir.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["CREF Ativo", "Lutador Profissional", "Faixa em Jiu-Jitsu", "Head do CT"].map((t) => (
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
      t: "Muay Thai",
      d: "A arte das oito armas. Técnica tailandesa, condicionamento brutal e a autoconfiança de quem sabe se defender.",
    },
    {
      n: "02",
      t: "Boxe & MMA",
      d: "Fundamento pesado de boxe e o jogo completo do MMA. Trocação, quedas e finalização em um só round.",
    },
    {
      n: "03",
      t: "Kids & Feminino",
      d: "Turmas exclusivas para crianças e mulheres. Ambiente seguro, técnica de verdade e disciplina para a vida.",
    },
  ];
  return (
    <section id="modalidades" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" /> Cap. 003 — Modalidades
            </div>
            <h2 className="text-display max-w-3xl text-5xl leading-[0.9] md:text-7xl">
              Quatro artes.
              <span className="block text-serif-italic text-primary">Uma só matilha.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-lg">
            No CT Team Quirino a grade é montada para todos os níveis. Turmas do iniciante ao
            atleta, com professores que já subiram no ringue.
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
    ["Ambiente de matilha", "Você não treina sozinho. Turma unida, professor em cima e evolução coletiva."],
    ["Defesa pessoal real", "Muay Thai, Boxe, MMA e Jiu-Jitsu aplicados — nada de coreografia."],
    ["Condicionamento absurdo", "Emagrecimento, força e gás. Todo treino queima e todo treino ensina."],
    ["Cabeça blindada", "Foco, respeito e disciplina que atravessam o tatame e chegam na vida."],
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
  return <CT />;
}

function CT() {
  const steps = [
    ["Aula experimental", "Você chama no WhatsApp, agenda o dia e experimenta uma aula no CT — sem compromisso."],
    ["Matrícula", "Escolhe o plano (mensal, trimestral ou semestral) e libera acesso a todas as modalidades."],
    ["Grade semanal", "Turmas de manhã, tarde e noite. Muay Thai, Boxe, MMA, Jiu-Jitsu, Kids e Feminino."],
    ["Evolução", "Graduações, sparring supervisionado e, se quiser, preparação para competir pelo time."],
  ];
  return (
    <section id="ct" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
        <span className="h-px w-8 bg-primary" /> Cap. 004 — Como entrar no CT
      </div>
      <h2 className="text-display max-w-4xl text-5xl leading-[0.9] md:text-7xl">
        Quatro passos até o seu{" "}
        <span className="text-serif-italic text-primary">primeiro round.</span>
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
              q: "Perdi 9kg em 4 meses no CT. E o melhor: aprendi a bater um jab de verdade.",
              n: "Aluna · Alphaville",
            },
            {
              q: "Nunca tinha treinado luta. Comecei do zero no Team Quirino e hoje é o melhor momento do dia.",
              n: "Aluno · Barueri",
            },
            {
              q: "Coloquei meu filho no Kids e nunca vi ele tão disciplinado. A matilha educa.",
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
      a: "Não. Todas as turmas do CT — Muay Thai, Boxe, MMA e Jiu-Jitsu — recebem iniciantes absolutos. Você aprende a base técnica passo a passo, respeitando seus limites.",
    },
    {
      q: "Onde fica o CT Team Quirino?",
      a: "Na região de Alphaville — Barueri / Santana de Parnaíba (SP). Chame no WhatsApp para receber o endereço exato e agendar sua aula experimental.",
    },
    {
      q: "Tem turma feminina e infantil?",
      a: "Sim. Temos horários exclusivos para o Feminino e para o Kids, com metodologia adaptada e ambiente seguro para todas as idades.",
    },
    {
      q: "Preciso lutar ou competir?",
      a: "Só se quiser. A maioria dos alunos treina por saúde, defesa pessoal e cabeça. Quem quer competir tem preparação específica com o time.",
    },
    {
      q: "Quais os planos e formas de pagamento?",
      a: "Planos mensal, trimestral e semestral. Pix (com desconto especial), cartão de crédito em até 12x e dinheiro.",
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
          Entre para a <span className="text-serif-italic text-primary">matilha.</span>
          <br />Seu round começa aqui.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
          O CT Team Quirino abre vagas com aula experimental gratuita. Chame no WhatsApp, agende
          seu dia e venha sentir o tatame.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Aula experimental grátis
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-border px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            @teamquirino
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
          CT Team Quirino · Alphaville — SP
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
        >
          @teamquirino ↗
        </a>
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
