import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Algo deu errado
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente recarregar a página.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julio Quirino",
    jobTitle: "Personal Trainer & Head Coach",
    description:
      "Lutador profissional, Personal Fight Coach e Head Coach do CT Team Quirino em Alphaville. Treino particular híbrido (Musculação + Artes Marciais) e turmas de Muay Thai, Boxe, MMA e Jiu-Jitsu.",
    url: "https://julio-quirino.lovable.app",
    sameAs: [
      "https://instagram.com/julioo_quirino",
      "https://instagram.com/teamquirino",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alphaville",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "CT Team Quirino",
    description:
      "Centro de treinamento de artes marciais em Alphaville. Muay Thai, Boxe, MMA, Jiu-Jitsu, turmas Kids e Feminino.",
    url: "https://julio-quirino.lovable.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alphaville — Barueri / Santana de Parnaíba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sport: ["Muay Thai", "Boxe", "MMA", "Jiu-Jitsu"],
  },
]);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "Julio Quirino — Personal Trainer & CT Team Quirino | Alphaville",
        },
        {
          name: "description",
          content:
            "Personal Fight Coach e Head Coach do CT Team Quirino em Alphaville. Treino particular híbrido ou turmas de Muay Thai, Boxe, MMA e Jiu-Jitsu.",
        },
        { name: "author", content: "Julio Quirino" },
        { name: "robots", content: "index, follow" },
        {
          property: "og:title",
          content:
            "Julio Quirino — Personal Trainer & CT Team Quirino | Alphaville",
        },
        {
          property: "og:description",
          content:
            "Personal Fight Coach e Head Coach do CT Team Quirino em Alphaville. Treino particular híbrido ou turmas de Muay Thai, Boxe, MMA e Jiu-Jitsu.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "pt_BR" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Julio Quirino — Personal Trainer & CT Team Quirino | Alphaville",
        },
        {
          name: "twitter:description",
          content:
            "Personal Fight Coach e Head Coach do CT Team Quirino em Alphaville. Treino particular híbrido ou turmas de Muay Thai, Boxe, MMA e Jiu-Jitsu.",
        },
        {
          property: "og:image",
          content:
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9cc25282-76a5-4da2-b7b7-aece92990d8b/id-preview-6059a88c--7e1249df-9115-474a-9e48-b27782c334cc.lovable.app-1785239740793.png",
        },
        {
          name: "twitter:image",
          content:
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9cc25282-76a5-4da2-b7b7-aece92990d8b/id-preview-6059a88c--7e1249df-9115-474a-9e48-b27782c334cc.lovable.app-1785239740793.png",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: jsonLd,
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
