// 1) fade sections in as they scroll into view
const io = new IntersectionObserver((items) => {
  items.forEach((i) => { if (i.isIntersecting) { i.target.classList.add("in"); io.unobserve(i.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 2) filter chips: each .filters row filters the .entry blocks in its own section
document.querySelectorAll(".filters").forEach((row) => {
  const chips = row.querySelectorAll("button");
  const entries = row.closest("section").querySelectorAll(".entry");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("on"));
      chip.classList.add("on");
      const tag = chip.dataset.tag;
      entries.forEach((e) => e.classList.toggle("hide", tag !== "all" && !(e.dataset.tags || "").split(" ").includes(tag)));
    });
  });
});

// 2b) long experience entries: show the first 3 bullets, fold the rest behind a toggle
document.querySelectorAll("#experience .entry").forEach((entry) => {
  const extra = [...entry.querySelectorAll("p")].slice(3);
  if (!extra.length) return;
  extra.forEach((p) => p.classList.add("folded"));
  const btn = document.createElement("button");
  btn.className = "more";
  btn.textContent = `+ ${extra.length} more`;
  btn.addEventListener("click", () => {
    const open = entry.classList.toggle("open");
    btn.textContent = open ? "show less" : `+ ${extra.length} more`;
  });
  entry.appendChild(btn);
});

// 3) highlight the nav link for the section you're reading
const links = document.querySelectorAll(".nav ul a");
const spy = new IntersectionObserver((items) => {
  items.forEach((i) => {
    if (i.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + i.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
