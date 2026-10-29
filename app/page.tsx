"use client";

import { FormEvent, useState } from "react";

type Post = {
  id: number;
  title: string;
  author: string;
  category: string;
  content: string;
  tags: string[];
  createdAt: string;
};

const starterPosts: Post[] = [
  {
    id: 1,
    title: "The internet should feel like a public notebook",
    author: "Ari",
    category: "Essay",
    content:
      "We are building too many closed spaces online. The Side is a reminder that writing can be open, shared, and alive. Public thought should invite feedback, friction, and conversation rather than stay locked behind dashboards and private logs.",
    tags: ["writing", "community", "internet"],
    createdAt: "2 hours ago"
  },
  {
    id: 2,
    title: "Notes from a rainy afternoon",
    author: "Lina",
    category: "Story",
    content:
      "I sat by the window and wrote down the small things I had been ignoring: streetlight reflections, the rhythm of rain, and the feeling that a decent idea often arrives when you stop chasing it.",
    tags: ["story", "reflection"],
    createdAt: "5 hours ago"
  },
  {
    id: 3,
    title: "A better place to publish ideas",
    author: "Noah",
    category: "Idea",
    content:
      "The best creative tools do not intimidate people. They let writers begin quickly, share openly, and keep a healthy rhythm. A place like The Side should make publishing feel as natural as writing in a notebook.",
    tags: ["product", "ideas"],
    createdAt: "1 day ago"
  }
];

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(starterPosts);
  const [draft, setDraft] = useState({
    title: "",
    author: "",
    category: "Essay",
    content: "",
    tags: ""
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!draft.title.trim() || !draft.content.trim()) {
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      title: draft.title.trim(),
      author: draft.author.trim() || "Anonymous",
      category: draft.category,
      content: draft.content.trim(),
      tags: draft.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      createdAt: "just now"
    };

    setPosts((current) => [newPost, ...current]);
    setDraft({ title: "", author: "", category: "Essay", content: "", tags: "" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90 sticky top-0 z-10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-black tracking-tight">The Side</div>
          <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#feed" className="hover:text-white">Feed</a>
            <a href="#write" className="hover:text-white">Write</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Open writing community
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Everyone can write everything.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            The Side is a shared digital space for essays, stories, notes, observations,
            and ideas. Publish what you think, read what the world shares, and build
            something together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#write"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start writing
            </a>
            <a
              href="#feed"
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500"
            >
              Explore feed
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-cyan-950/30">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-3xl font-black text-cyan-300">24k</div>
              <div className="mt-2 text-sm text-slate-400">published ideas</div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-3xl font-black text-cyan-300">8.1k</div>
              <div className="mt-2 text-sm text-slate-400">weekly readers</div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-3xl font-black text-cyan-300">320</div>
              <div className="mt-2 text-sm text-slate-400">new stories</div>
            </div>
          </div>
        </div>
      </section>

      <section id="write" className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Write to the public</h2>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
              Everyone can publish
            </span>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={draft.title}
                onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                placeholder="Title"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
              />
              <input
                value={draft.author}
                onChange={(event) => setDraft({ ...draft, author: event.target.value })}
                placeholder="Author name"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
              <select
                value={draft.category}
                onChange={(event) => setDraft({ ...draft, category: event.target.value })}
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option>Essay</option>
                <option>Story</option>
                <option>Note</option>
                <option>Idea</option>
                <option>Opinion</option>
              </select>
              <input
                value={draft.tags}
                onChange={(event) => setDraft({ ...draft, tags: event.target.value })}
                placeholder="Tags (comma separated)"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <textarea
              value={draft.content}
              onChange={(event) => setDraft({ ...draft, content: event.target.value })}
              placeholder="Write your thoughts..."
              rows={8}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="feed" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Public feed</h2>
          <span className="text-sm text-slate-400">Fresh writing from the community</span>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {post.category}
                </span>
                <span className="text-sm text-slate-500">{post.createdAt}</span>
              </div>

              <h3 className="text-2xl font-bold text-white">{post.title}</h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <span>By {post.author}</span>
              </div>

              <p className="mt-5 text-base leading-8 text-slate-300">{post.content}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={`${post.id}-${tag}`}
                    className="rounded-full bg-slate-950 px-2.5 py-1 text-xs text-cyan-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-3xl font-bold">The Side is built for expression.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            It is a public writing space for people who want a simple, readable, and open place to
            share their ideas without friction or gatekeeping.
          </p>
        </div>
      </section>
    </main>
  );
}
