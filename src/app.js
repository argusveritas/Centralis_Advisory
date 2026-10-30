const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

addEventListener("scroll", () => header?.classList.toggle("scrolled", scrollY > 8), { passive: true });

navToggle?.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.querySelector(".sr-only").textContent = open ? "Close navigation" : "Open navigation";
  nav?.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
});

nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navToggle?.setAttribute("aria-expanded", "false");
  nav?.classList.remove("open");
  document.body.classList.remove("nav-open");
}));

const framework = {
  strategy: ["01", "Strategy", "Clarify the choices, priorities, and outcomes that should guide every other decision."],
  people: ["02", "People", "Align roles, capabilities, leadership, incentives, and change capacity with the work ahead."],
  technology: ["03", "Technology", "Select and apply tools according to business value, workflow fit, risk, and maintainability."],
  operations: ["04", "Operations", "Design the processes, information flows, controls, and accountabilities that turn plans into performance."],
  finance: ["05", "Finance", "Test economic logic, resource requirements, risk, value, and the measures that support sound decisions."]
};

document.querySelectorAll("[data-framework-tab]").forEach(button => button.addEventListener("click", () => {
  const key = button.dataset.frameworkTab;
  if (!framework[key]) return;
  document.querySelectorAll(".framework-tabs [data-framework-tab]").forEach(x => x.setAttribute("aria-selected", String(x.dataset.frameworkTab === key)));
  const panel = document.querySelector("#framework-panel");
  if (panel) {
    panel.querySelector("[data-framework-number]").textContent = framework[key][0];
    panel.querySelector("[data-framework-title]").textContent = framework[key][1];
    panel.querySelector("[data-framework-copy]").textContent = framework[key][2];
    panel.focus({ preventScroll: true });
  }
}));

const assessment = document.querySelector("[data-assessment]");
assessment?.addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(assessment);
  const driver = form.get("driver");
  const priority = form.get("priority");
  const integrated = form.get("integrated");
  const result = assessment.querySelector("[data-assessment-result]");
  if (!driver || !priority || !integrated) {
    result.innerHTML = "<strong>Please answer all three questions.</strong>";
    result.focus();
    return;
  }
  const routes = {
    ai: ["AI Strategy and Implementation", "/services/ai-strategy-implementation/"],
    people: ["Human Capital Consulting", "/services/human-capital-consulting/"],
    operations: ["Operations Consulting", "/services/operations-consulting/"],
    finance: ["Corporate Finance Advisory", "/services/corporate-finance-advisory/"],
    accounting: ["Accounting Support Practice", "/services/accounting-support/"]
  };
  const [label, href] = routes[driver];
  const integration = integrated === "yes" ? " Because the issue crosses functions, an integrated engagement may be more useful than a single-practice scope." : " A focused diagnostic can test whether other functions should be included.";
  const action = priority === "implement" ? "implementation planning" : "a focused assessment";
  result.innerHTML = `<h3>A useful starting point: ${label}</h3><p>Begin with ${action}.${integration}</p><a class="text-link" href="${href}">Explore this capability <span aria-hidden="true">→</span></a>`;
  result.focus();
  dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "self_assessment_complete", result: driver, integrated } }));
});

const insightSearch = document.querySelector("[data-insight-search]");
const filters = document.querySelectorAll("[data-insight-filter]");
const insightItems = [...document.querySelectorAll("[data-insight-item]")];
let activeFilter = "all";
const normalizeSearch = value => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function updateInsights() {
  const query = normalizeSearch(insightSearch?.value || "");
  let count = 0;
  insightItems.forEach(item => {
    const matchFilter = activeFilter === "all" || item.dataset.category === activeFilter;
    const matchSearch = !query || normalizeSearch(item.dataset.search).includes(query);
    item.hidden = !(matchFilter && matchSearch);
    if (!item.hidden) count++;
  });
  const countNode = document.querySelector("[data-results-count]");
  if (countNode) countNode.textContent = `${count} ${count === 1 ? "insight" : "insights"}`;
  const empty = document.querySelector("[data-insight-empty]");
  if (empty) empty.hidden = count > 0;
}

insightSearch?.addEventListener("input", updateInsights);
filters.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.insightFilter;
  filters.forEach(x => x.classList.toggle("active", x === button));
  updateInsights();
}));

const formTabs = document.querySelectorAll("[data-form-tab]");
const formType = document.querySelector("[data-form-type]");
formTabs.forEach(tab => tab.addEventListener("click", () => {
  formTabs.forEach(x => x.setAttribute("aria-selected", String(x === tab)));
  if (formType) formType.value = tab.dataset.formTab;
}));

const contactForm = document.querySelector("[data-contact-form]");
contactForm?.addEventListener("submit", async event => {
  event.preventDefault();
  const status = contactForm.querySelector("[data-form-status]");
  contactForm.querySelectorAll("[aria-invalid]").forEach(field => field.removeAttribute("aria-invalid"));
  contactForm.querySelectorAll(".field-error").forEach(node => node.textContent = "");
  const invalid = [...contactForm.querySelectorAll(":invalid")].filter(field => field.name !== "website");
  if (invalid.length) {
    invalid.forEach(field => {
      field.setAttribute("aria-invalid", "true");
      const error = field.closest("label")?.querySelector(".field-error");
      if (error) error.textContent = field.validity.typeMismatch ? "Enter a valid email address." : "Complete this field.";
    });
    status.textContent = "Please review the highlighted fields.";
    status.focus();
    invalid[0].focus();
    return;
  }
  if (contactForm.elements.website.value) return;
  const endpoint = contactForm.dataset.endpoint;
  if (!endpoint) {
    status.innerHTML = "<strong>This review build did not send your information.</strong> Form delivery will be enabled after Centralis approves the recipient, privacy language, retention settings, and secure endpoint.";
    status.focus();
    return;
  }
  const submit = contactForm.querySelector("button[type='submit']");
  submit.disabled = true;
  submit.textContent = "Submitting…";
  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(contactForm))) });
    if (!response.ok) throw new Error("Request failed");
    status.textContent = "Thank you. Your request has been received.";
    contactForm.reset();
    dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: formType?.value === "consultation" ? "consultation_request" : "contact_form_submit" } }));
  } catch {
    status.textContent = "Your request could not be submitted. Please try again or use the direct contact details on this page.";
  } finally {
    submit.disabled = false;
    submit.textContent = "Submit request";
    status.focus();
  }
});

const params = new URLSearchParams(location.search);
const interest = params.get("interest");
if (interest && contactForm?.elements.interest) contactForm.elements.interest.value = interest;
if (params.get("intent") === "consultation") formType && (formType.value = "consultation");

document.querySelector("[data-copy-link]")?.addEventListener("click", async () => {
  const status = document.querySelector("[data-copy-status]");
  try {
    await navigator.clipboard.writeText(location.href);
    status.textContent = "Link copied.";
  } catch {
    status.textContent = "Copy unavailable.";
  }
});

document.querySelectorAll("a[href^='tel:']").forEach(link => link.addEventListener("click", () => dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "telephone_click" } }))));
document.querySelectorAll("a[href^='mailto:']").forEach(link => link.addEventListener("click", () => dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "email_click" } }))));
document.querySelectorAll("a[href*='intent=consultation']").forEach(link => link.addEventListener("click", () => dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "consultation_cta_click", path: location.pathname } }))));

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .15 });
  document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
} else {
  document.querySelectorAll(".reveal").forEach(node => node.classList.add("visible"));
}
