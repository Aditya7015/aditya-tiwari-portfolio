import React from "react";
import { profile, skills, projects, education, experience, posts } from "../data";

export default function Admin() {
  const initial = React.useMemo(
    () => ({ profile, skills, projects, education, experience, posts }),
    []
  );
  const [jsonStr, setJsonStr] = React.useState(() =>
    JSON.stringify(initial, null, 2)
  );
  const [status, setStatus] = React.useState("");

  function download(filename, text) {
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function handleExport() {
    download("portfolio-data.json", jsonStr);
  }

  function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setJsonStr(reader.result);
    reader.readAsText(file);
  }

  function validate() {
    try {
      JSON.parse(jsonStr);
      setStatus(
        "✅ JSON looks valid. Replace src/data.js content with this JSON or keep using this editor."
      );
    } catch (e) {
      setStatus("❌ Invalid JSON: " + e.message);
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Admin · Data Editor
      </h1>
      <p className="opacity-80 mb-6">
        Edit your content as JSON below. You can <strong>Export</strong> to
        save it and paste into <code>src/data.js</code> or keep re-importing
        the JSON here.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <textarea
          className="card h-[500px] font-mono text-sm p-4 bg-white/80 dark:bg-black/30 rounded-xl shadow-md border border-gray-200 dark:border-white/20"
          value={jsonStr}
          onChange={(e) => setJsonStr(e.target.value)}
        />

        <div className="card p-6 rounded-xl bg-gradient-to-tr from-white/80 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Actions</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            <button className="btn-primary" onClick={validate}>
              Validate JSON
            </button>
            <button className="btn-primary" onClick={handleExport}>
              Export JSON
            </button>
            <label className="btn-primary cursor-pointer">
              Import JSON
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={handleImport}
              />
            </label>
          </div>
          <p
            className={`mt-2 ${
              status.startsWith("✅") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>

          <details className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <summary className="font-semibold cursor-pointer mb-2">
              Quick Add Project
            </summary>
            <QuickProject jsonStr={jsonStr} setJsonStr={setJsonStr} />
          </details>
        </div>
      </div>
    </main>
  );
}

function QuickProject({ jsonStr, setJsonStr }) {
  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [tech, setTech] = React.useState("React, Tailwind");
  const [description, setDescription] = React.useState("");

  function add() {
    let data;
    try {
      data = JSON.parse(jsonStr);
    } catch (e) {
      alert("Fix JSON first");
      return;
    }
    const proj = {
      slug,
      title,
      subtitle,
      description,
      tech: tech.split(",").map((s) => s.trim()),
      links: [],
    };
    data.projects = data.projects || [];
    if (data.projects.find((p) => p.slug === slug)) {
      alert("Slug already exists");
      return;
    }
    data.projects.push(proj);
    setJsonStr(JSON.stringify(data, null, 2));
  }

  return (
    <div className="grid gap-3 mt-2">
      <input
        className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-black/20 border-gray-200 dark:border-white/20"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-black/20 border-gray-200 dark:border-white/20"
        placeholder="Slug (unique)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <input
        className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-black/20 border-gray-200 dark:border-white/20"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <input
        className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-black/20 border-gray-200 dark:border-white/20"
        placeholder="Tech (comma separated)"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      />
      <textarea
        className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-black/20 border-gray-200 dark:border-white/20"
        rows="3"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn-primary w-fit" onClick={add}>
        Add project to JSON
      </button>
    </div>
  );
}
