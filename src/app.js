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

const readinessAssessment = document.querySelector("[data-ai-readiness]");
const readinessProfiles = {
  Emerging: {
    description: "The foundations are still taking shape. The most useful next step is to narrow the opportunity, clarify the workflow, and establish the minimum data and governance requirements before committing to a pilot.",
    priorities: ["Choose one measurable business problem", "Map the current workflow and evidence", "Name an accountable executive sponsor"]
  },
  Ready: {
    description: "You have several foundations for a focused pilot. Before scaling, resolve the most important gaps in data, operating ownership, controls, and user adoption around one prioritized use case.",
    priorities: ["Select a bounded, testable use case", "Define pilot success and exit criteria", "Design human review and operating ownership"]
  },
  Advanced: {
    description: "Your organization appears positioned to move from isolated use cases toward a managed portfolio. The emphasis should shift to repeatable governance, value measurement, integration, and continuous improvement.",
    priorities: ["Sequence use cases as a portfolio", "Standardize governance and measurement", "Build reusable implementation capabilities"]
  }
};

readinessAssessment?.addEventListener("change", event => {
  const fieldset = event.target.closest("[data-readiness-question]");
  fieldset?.classList.remove("is-missing");
  const error = fieldset?.querySelector("[data-readiness-error]");
  if (error) error.textContent = "";
});

readinessAssessment?.addEventListener("submit", event => {
  event.preventDefault();
  const questions = [...readinessAssessment.querySelectorAll("[data-readiness-question]")];
  const unanswered = questions.filter(question => !question.querySelector("input:checked"));
  questions.forEach(question => {
    const missing = unanswered.includes(question);
    question.classList.toggle("is-missing", missing);
    question.querySelector("[data-readiness-error]").textContent = missing ? "Select one response." : "";
  });
  if (unanswered.length) {
    const first = unanswered[0];
    first.querySelector("legend")?.focus();
    return;
  }

  const score = questions.reduce((total, question) => total + Number(question.querySelector("input:checked").value), 0);
  const tier = score <= 3 ? "Emerging" : score <= 7 ? "Ready" : "Advanced";
  const profile = readinessProfiles[tier];
  const result = readinessAssessment.querySelector("[data-readiness-result]");
  const percent = score * 10;
  result.innerHTML = `<div class="result-heading"><span>Your result</span><strong>${tier}</strong><span>${score} / 10</span></div><div class="score-track" aria-label="Readiness score ${score} out of 10"><span style="width:${percent}%"></span></div><p>${profile.description}</p><strong>Recommended priorities</strong><ul>${profile.priorities.map(priority => `<li>${priority}</li>`).join("")}</ul><a class="button" href="${readinessAssessment.dataset.schedulingUrl}">Book a Results Review</a>`;
  readinessAssessment.querySelector("[data-assessment-reset]").hidden = false;
  result.focus();
  dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "ai_readiness_complete", tier, score } }));
});

readinessAssessment?.addEventListener("reset", () => {
  readinessAssessment.querySelectorAll("[data-readiness-question]").forEach(question => question.classList.remove("is-missing"));
  readinessAssessment.querySelectorAll("[data-readiness-error]").forEach(error => { error.textContent = ""; });
  const result = readinessAssessment.querySelector("[data-readiness-result]");
  result.replaceChildren();
  readinessAssessment.querySelector("[data-assessment-reset]").hidden = true;
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

const insightGate = document.querySelector("[data-insight-gate]");
const gatedContent = document.querySelector("[data-gated-content]");
const leadGateForm = document.querySelector("[data-lead-gate-form]");
const gateStorageKey = insightGate ? `centralis:guide-access:${insightGate.dataset.resource}` : "";

function revealGatedContent({ focus = false } = {}) {
  if (!insightGate || !gatedContent) return;
  insightGate.hidden = true;
  gatedContent.hidden = false;
  if (focus) {
    const heading = gatedContent.querySelector("h2");
    heading?.setAttribute("tabindex", "-1");
    heading?.focus();
    gatedContent.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
}

if (gateStorageKey) {
  try {
    if (sessionStorage.getItem(gateStorageKey) === "granted") revealGatedContent();
  } catch {
    // Access still works if browser storage is unavailable.
  }
}

leadGateForm?.addEventListener("submit", async event => {
  event.preventDefault();
  const status = leadGateForm.querySelector("[data-gate-status]");
  const email = leadGateForm.elements.email;
  const consent = leadGateForm.elements.consent;
  const emailError = leadGateForm.querySelector("[data-gate-email-error]");
  email.removeAttribute("aria-invalid");
  consent.removeAttribute("aria-invalid");
  emailError.textContent = "";
  status.textContent = "";

  if (!email.validity.valid || !consent.checked) {
    if (!email.validity.valid) {
      email.setAttribute("aria-invalid", "true");
      emailError.textContent = email.validity.typeMismatch ? "Enter a valid email address." : "Enter your business email.";
    }
    if (!consent.checked) consent.setAttribute("aria-invalid", "true");
    status.textContent = !email.validity.valid && !consent.checked ? "Enter a valid email and confirm consent to continue." : !consent.checked ? "Confirm consent to continue." : "Review the email address.";
    (!email.validity.valid ? email : consent).focus();
    return;
  }
  if (leadGateForm.elements.website.value) return;

  const endpoint = insightGate.dataset.endpoint;
  const preview = insightGate.dataset.preview === "true";
  if (!endpoint && !preview) {
    status.textContent = "Guide access is temporarily unavailable. Please contact Centralis for a copy.";
    status.focus();
    return;
  }

  const submit = leadGateForm.querySelector("button[type='submit']");
  submit.disabled = true;
  submit.textContent = "Unlocking…";
  try {
    if (!preview) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.value.trim(), consent: true, resource: insightGate.dataset.resource, submittedAt: new Date().toISOString() })
      });
      if (!response.ok) throw new Error("Lead capture request failed");
    }
    try { sessionStorage.setItem(gateStorageKey, "granted"); } catch { /* Session persistence is optional. */ }
    revealGatedContent({ focus: true });
    dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "insight_gate_complete", resource: insightGate.dataset.resource, preview } }));
  } catch {
    status.textContent = "We could not unlock the guide. Please try again or contact Centralis for a copy.";
    status.focus();
  } finally {
    submit.disabled = false;
    submit.textContent = "Unlock the guide";
  }
});

document.querySelector("[data-print-guide]")?.addEventListener("click", () => window.print());

document.querySelector("[data-download-guide]")?.addEventListener("click", event => {
  const title = document.querySelector(".article-hero h1")?.textContent.trim() || "Centralis guide";
  const sections = [...document.querySelectorAll(".gated-content .article-body > section")];
  const body = sections.map(section => `${section.querySelector("h2")?.textContent.trim()}\r\n\r\n${section.querySelector("p")?.textContent.trim()}`).join("\r\n\r\n");
  const text = `${title}\r\nCentralis Advisory Group\r\n\r\n${body}\r\n\r\nThis guide is for general informational purposes and does not constitute professional advice.\r\n`;
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.currentTarget.dataset.downloadName}.txt`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  dispatchEvent(new CustomEvent("centralis:analytics", { detail: { event: "insight_download", resource: insightGate?.dataset.resource } }));
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
