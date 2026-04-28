import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

export function ArticleShare() {
  return (
    <section className="bg-secondary py-8">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <Share2 className="h-5 w-5 text-brand" />
            <span className="font-display text-lg font-semibold text-navy">Share this article</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition hover:bg-brand hover:text-white">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition hover:bg-brand hover:text-white">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition hover:bg-brand hover:text-white">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition hover:bg-brand hover:text-white">
              <LinkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
