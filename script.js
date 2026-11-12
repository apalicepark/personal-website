// 1) fade sections in as they scroll into view
const io = new IntersectionObserver((items) => {
  items.forEach((i) => { if (i.isIntersecting) { i.target.classList.add("in"); io.unobserve(i.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 2) project filter chips (reads data-tags on each .entry in #projects)
const chips = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll("#projects .entry");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("on"));
    chip.classList.add("on");
    const tag = chip.dataset.tag;
    projects.forEach((p) => p.classList.toggle("hide", tag !== "all" && !p.dataset.tags.split(" ").includes(tag)));
  });
});

// 3) highlight the nav link for the section you're reading
const links = document.querySelectorAll(".nav ul a");
const spy = new IntersectionObserver((items) => {
  items.forEach((i) => {
    if (i.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + i.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
