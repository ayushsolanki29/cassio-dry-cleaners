import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-white text-foreground">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.02_250)] to-[oklch(0.95_0.03_85)]" />
          <div className="pointer-events-none absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-sun/20 blur-3xl" />
        </div>

        <section className="relative mx-auto flex min-h-[calc(100vh-320px)] max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-32 text-center md:pb-20 md:pt-40">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary md:text-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Page not found
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <Image
              src="/assets/cassio-logo.jpeg"
              alt="Cassio Dry Cleaners"
              width={92}
              height={92}
              className="relative rounded-full ring-4 ring-white shadow-card"
              priority
            />
          </div>

          <p className="font-display text-7xl font-bold leading-none text-primary md:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-6xl">
            This page got misplaced
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The page you are looking for is not available. Head back home or browse our cleaning services.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-pop transition hover:scale-105 sm:w-auto md:px-8 md:py-4 md:text-base"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-card sm:w-auto md:px-8 md:py-4 md:text-base"
            >
              View Services
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
