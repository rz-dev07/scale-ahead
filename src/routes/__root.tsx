import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { motion } from "framer-motion";
import appCss from "../styles.css?url";
import Logo from "../components/Logo";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 relative overflow-hidden">
      {/* Dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59, 151, 135, 0.12) 0%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* Logo */}
        <Link to="/" aria-label="Go to homepage">
          <Logo className="h-8 w-auto mb-12" variant="dark" />
        </Link>

        {/* 404 badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-500 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
          Error 404
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-5xl md:text-6xl font-black text-[#0F172A] leading-tight mb-4"
        >
          Page not
          <br />
          <span className="text-[#3B9787]">found.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-slate-500 text-base leading-relaxed mb-10 max-w-sm"
        >
          The page you're looking for doesn't exist or may have been moved. Let's get you back on
          track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 w-full justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#3B9787] text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-[#2E7D6F] transition-all duration-200"
          >
            ← Back to Home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center border-2 border-[#3B9787]/30 text-[#3B9787] font-semibold px-7 py-3 rounded-full text-sm hover:bg-[#ECF8F6] transition-all duration-200"
          >
            Contact Support
          </a>
        </motion.div>
      </motion.div>

      <p className="absolute bottom-6 text-xs text-slate-400 z-10">
        © 2026 Scaleahead. All rights reserved.
      </p>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Scaleahead" },
      { name: "description", content: "Scaleahead - Digital Agency" },
      { name: "author", content: "Scaleahead" },
      { property: "og:title", content: "Scaleahead" },
      { property: "og:description", content: "Scaleahead - Digital Agency" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return <Outlet />;
}
