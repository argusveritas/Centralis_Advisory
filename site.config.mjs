export const site = {
  name: "Centralis Advisory Group LLC",
  shortName: "Centralis",
  siteUrl: "https://centralis-advisory.example",
  description: "Boutique strategic advisory connecting strategy, people, technology, operations, and finance.",
  email: "[NEEDS: Contact email]",
  phone: "[NEEDS: Telephone number]",
  serviceArea: "[NEEDS: Office address or service area]",
  schedulingUrl: "/contact/",
  social: "[NEEDS: Social-media profiles]",
  legalReview: "Draft for review by qualified counsel before publication.",
};

export const services = [
  {
    slug: "ai-strategy-implementation",
    nav: "AI Strategy",
    title: "AI Strategy and Implementation",
    eyebrow: "Applied intelligence",
    summary: "Identify high-value AI opportunities and move from informed choices to responsible, practical implementation.",
    headline: "Use AI where it creates real business value—not simply where it is available.",
    overview: "Centralis helps leaders evaluate AI through the realities of their operations: the decisions people make, the information they rely on, the systems already in place, and the risks the organization must manage. The result is a focused path from opportunity assessment through adoption and improvement.",
    challenges: ["Too many possible use cases and no disciplined way to prioritize them", "Unclear data, systems, security, privacy, or governance requirements", "Pilots that do not connect to day-to-day workflows", "Workforce uncertainty and limited internal capacity to sustain change"],
    capabilities: ["AI opportunity and readiness assessments", "Use-case identification, prioritization, and business-case development", "Data, systems, vendor, and application evaluation", "Implementation roadmaps and workflow redesign", "Governance, responsible-use policies, privacy, security, and risk considerations", "Workforce preparation, training, and change management", "Pilot design and implementation support", "Performance measurement and continuous improvement"],
    deliverables: ["Prioritized use-case portfolio", "AI readiness assessment", "Business case and risk register", "Vendor-neutral evaluation", "Implementation roadmap", "Governance and adoption plan"],
    faqs: [
      ["Do we need a complete data transformation before starting?", "Not necessarily. The first step is to match the requirements of a specific use case to the quality, accessibility, and controls of the available data. That keeps preparation proportional to the opportunity."],
      ["Does Centralis sell an AI platform?", "No platform is assumed. Recommendations should follow the client’s objectives, systems, risk profile, and operating needs rather than a predetermined product."],
      ["Can an engagement begin with a limited pilot?", "Yes. A narrowly defined pilot can test value, feasibility, controls, and adoption requirements before a broader commitment is made."]
    ]
  },
  {
    slug: "human-capital-consulting",
    nav: "Human Capital",
    title: "Human Capital Consulting",
    eyebrow: "Organization and workforce",
    summary: "Align organization design, leadership, talent, incentives, and change capacity with strategic priorities.",
    headline: "Design the organization and workforce the strategy actually requires.",
    overview: "Strategy becomes operational through roles, decisions, capabilities, incentives, and leadership. Centralis helps clients make those elements explicit, practical, and aligned—particularly when growth, restructuring, or technology change is altering how work gets done.",
    challenges: ["Accountabilities and decision rights have not kept pace with growth", "Critical roles or capabilities are missing or unclear", "Performance measures and incentives pull teams in different directions", "Technology or operating-model changes are outpacing workforce adoption"],
    capabilities: ["Organizational design and operating-model transformation", "Workforce strategy, roles, and responsibilities", "Talent management and succession planning", "Leadership development", "Performance-management systems and incentive alignment", "Employee engagement", "Change management", "Workforce implications of AI and automation"],
    deliverables: ["Target operating model", "Organization and role design", "Decision-rights framework", "Workforce capability plan", "Performance and incentive architecture", "Change and communication plan"],
    faqs: [
      ["Is this limited to human resources functions?", "No. Human-capital questions are operating questions. Work may involve business leaders, finance, operations, technology, and human resources together."],
      ["Can Centralis support implementation?", "Yes. The scope can include working sessions, role clarification, governance, change planning, and practical support as new ways of working are introduced."],
      ["How are AI workforce implications addressed?", "The analysis considers which tasks may change, what capabilities people will need, where oversight remains essential, and how adoption can be managed responsibly."]
    ]
  },
  {
    slug: "operations-consulting",
    nav: "Operations",
    title: "Operations Consulting",
    eyebrow: "Operating performance",
    summary: "Improve processes, decision rights, controls, and management systems so strategic priorities translate into reliable execution.",
    headline: "Turn strategic priorities into reliable day-to-day execution.",
    overview: "Centralis helps organizations clarify how work should move, where decisions should be made, what information teams need, and which controls support consistent performance. The work connects process improvement to technology, people, financial outcomes, and the practical demands of implementation.",
    challenges: ["Core processes depend on informal knowledge, manual handoffs, or inconsistent practices", "Decision rights and accountability are unclear across teams or functions", "Growth has outpaced existing workflows, controls, reporting, or management routines", "Technology investments have not produced the expected operational improvements"],
    capabilities: ["Operating-model and process assessment", "Workflow mapping and redesign", "Decision-rights, governance, and accountability design", "Performance measures and management routines", "Control design and operational-risk reduction", "Technology and automation requirements", "Implementation planning and change coordination", "Continuous-improvement capability development"],
    deliverables: ["Current-state operating assessment", "Target operating model", "Process and decision-rights maps", "Performance-measurement framework", "Control and risk-improvement plan", "Sequenced implementation roadmap"],
    faqs: [
      ["Is operations consulting limited to cost reduction?", "No. Cost may be one consideration, but the broader objective is to improve reliability, clarity, capacity, service, control, and the organization’s ability to execute its priorities."],
      ["Can the work include technology and automation?", "Yes. Technology requirements are evaluated in the context of the workflow, information needs, controls, users, and measurable operating outcomes."],
      ["Does Centralis support implementation?", "Yes. An engagement can extend from assessment and design into sequencing, working sessions, governance, measurement, and practical implementation support."]
    ]
  },
  {
    slug: "corporate-finance-advisory",
    nav: "Corporate Finance",
    title: "Corporate Finance Advisory",
    eyebrow: "Decisions under complexity",
    summary: "Bring disciplined analysis to valuation, transactions, capital structure, restructuring, and strategic alternatives.",
    headline: "Make consequential financial decisions with a clearer view of value, risk, and alternatives.",
    overview: "Centralis supports owners, executives, investors, and boards when financial analysis must connect to operating reality. Work is structured to clarify assumptions, surface tradeoffs, and improve decision quality—not to promote a transaction or predetermined outcome.",
    challenges: ["A major decision depends on uncertain forecasts or competing assumptions", "Transaction opportunities require structured evaluation and diligence support", "Capital structure limits strategic flexibility", "Operating and financial pressure requires credible restructuring alternatives"],
    capabilities: ["Business and asset valuation", "Mergers and acquisitions and transaction strategy", "Financial modeling and analysis", "Due diligence support", "Capital structure assessment", "Operational and financial restructuring", "Strategic alternatives analysis", "Decision support for owners, executives, investors, and boards"],
    deliverables: ["Valuation analysis", "Decision model and scenario analysis", "Transaction or diligence workplan", "Capital structure assessment", "Restructuring alternatives", "Board or stakeholder decision materials"],
    faqs: [
      ["Does Centralis provide investment-banking or securities services?", "No such services are represented by this website. Any engagement would define the advisory scope clearly and coordinate with appropriately qualified legal, tax, banking, or other professionals where needed."],
      ["Can the analysis incorporate operational improvements?", "Yes. Financial outcomes often depend on operational assumptions. Connecting the two helps management evaluate whether a plan is both financially attractive and executable."],
      ["Is valuation work suitable for every formal purpose?", "The required standard, purpose, and intended users should be confirmed before work begins. Certain matters may require specialized credentials, procedures, or independent providers."]
    ]
  },
  {
    slug: "accounting-support",
    nav: "Accounting Support",
    title: "Accounting Support Practice",
    eyebrow: "Reliable information flow",
    summary: "Strengthen monthly accounting, reporting, workflows, and connected business systems around how the organization operates.",
    headline: "Build accounting operations that produce timely information and support the way the business works.",
    overview: "Centralis can provide monthly bookkeeping and accounting support as a focused service or as part of a broader operational or AI implementation. The aim is dependable information, well-defined processes, and a coordinated application environment—not forcing every function into a rigid platform.",
    challenges: ["Monthly close and reconciliations are inconsistent or delayed", "Management reporting does not support timely decisions", "Manual handoffs create errors and duplicate work", "Applications do not exchange information reliably"],
    capabilities: ["Monthly bookkeeping and account reconciliation", "Management reporting and financial close support", "Accounts payable and receivable workflows", "Accounting-process documentation and internal reporting improvements", "Accounting application integration and workflow automation", "Best-of-breed ERP architecture and implementation support", "Coordination with external tax, audit, and legal professionals"],
    deliverables: ["Monthly close calendar", "Reconciliation and reporting package", "Process and control documentation", "Workflow improvement plan", "Application architecture", "Implementation and integration roadmap"],
    faqs: [
      ["What does best-of-breed ERP mean?", "It means selecting applications suited to individual functions, then connecting them into a coordinated flow of information. The architecture accommodates the client’s operating requirements instead of forcing every process into one prebuilt platform."],
      ["Are tax, audit, or assurance services included?", "No. This page does not represent tax, audit, assurance, or other regulated services. Centralis can coordinate information and workflows with the client’s external professionals."],
      ["Can accounting support be combined with AI implementation?", "Yes. Accounting workflows can be a practical setting for automation, but controls, review responsibilities, data handling, and measurable value should be designed into the work."]
    ]
  }
];

export const caseStudies = [
  {
    number: "01",
    lens: "Focused operating decision",
    title: "PackCalc",
    stage: "Live early access",
    summary: "Optimize a packaging choice while seeing the full shipping-cost consequence.",
    problem: "Sellers and fulfillment teams need to choose a practical carton, protect the shipment, and understand total cost without relying on disconnected calculations or tribal knowledge.",
    response: "Centralis developed a packaging-optimization and all-in shipping-cost application that turns item data and operating constraints into a pack plan, documentation, and downstream shipping workflow.",
    capabilities: ["Manual and CSV item intake", "Rotation-aware 3D carton planning", "Dimensional-weight and fragility analysis", "Pack instructions, PDF pack sheets, rates, labels, and box sourcing"],
    evidence: "Live with more than 100 early users and gathering feedback from users, shipping-label providers, and box suppliers."
  },
  {
    number: "02",
    lens: "Connected service workflow",
    title: "QuotePilotAI",
    stage: "Near beta",
    summary: "Move from a site condition to a reviewed, client-ready proposal.",
    problem: "Contractors and home-service businesses often translate photos, field observations, pricing decisions, and commercial terms through a fragmented manual process.",
    response: "Centralis is developing a photo-to-proposal workflow that connects project setup, visual evidence, AI-assisted drafting, commercial review, and controlled proposal delivery without becoming a full field-service ERP.",
    capabilities: ["Before-photo intake and proposed-finish imagery", "Editable line-item drafting and pricing", "Discounts, tax, deposits, terms, and validity controls", "Proposal snapshots, public links, PDFs, expiration, and revocation"],
    evidence: "Active development project approaching beta testing; the description reflects the current product repository and roadmap."
  },
  {
    number: "03",
    lens: "Functional decision system",
    title: "RecruitFlo",
    stage: "Near beta",
    summary: "Turn recruiting judgment into a structured, evidence-based decision process.",
    problem: "Recruiters need consistent screening and comparison while candidates need a clear view of how their experience aligns with a specific role.",
    response: "Centralis is building separate recruiter and candidate workspaces around shared job evidence, weighted criteria, transparent rationale, comparison, and gap analysis.",
    capabilities: ["Success-factor templates and job-description intake", "Editable weighted rubrics and resume ingestion", "Ranking, rationale, fit questions, comparisons, and exports", "Candidate alignment scoring, gap analysis, and read-only AI assistance"],
    evidence: "Active development project approaching beta testing; product claims are limited to current capabilities and roadmap."
  },
  {
    number: "04",
    lens: "Lifecycle intelligence",
    title: "WarrantiVault",
    stage: "Near beta",
    summary: "Convert scattered product records into claim readiness and lifecycle support.",
    problem: "Receipts, warranty documents, manuals, product records, issue evidence, and claim deadlines are difficult to organize when they are needed most.",
    response: "Centralis is developing a warranty-intelligence application that structures coverage, monitors readiness, and guides evidence collection and claim preparation across the ownership lifecycle.",
    capabilities: ["Document ingestion, OCR, and product enrichment", "Warranty-term, expiration, and reminder tracking", "Issue evidence, readiness scoring, and coverage analysis", "Claim checklists, packet drafting, denial support, and audit trails"],
    evidence: "Active development project approaching beta testing; no commercial performance metrics are presented."
  }
];

export const insights = [
  {
    slug: "prioritizing-ai-opportunities",
    category: "Artificial Intelligence",
    title: "A practical filter for prioritizing AI opportunities",
    summary: "A decision framework for separating high-value use cases from attractive distractions.",
    date: "[NEEDS: Publication date]",
    isoDate: "2026-01-01",
    readTime: "6 min read",
    author: "[NEEDS: Author]",
    status: "Editorial draft",
    body: [
      ["Start with the decision or workflow", "Useful AI initiatives begin with a business outcome, a recurring decision, or a workflow that creates meaningful friction. Define what should improve before choosing a model or application."],
      ["Test value and feasibility together", "Potential value is only one side of prioritization. Leaders should also examine data availability, integration effort, control requirements, adoption needs, and the cost of operating the solution after launch."],
      ["Design the pilot to answer a question", "A pilot should test a specific uncertainty: whether the solution is accurate enough, whether people will use it, whether controls are practical, or whether the economics hold. Clear exit criteria keep experimentation useful."],
      ["Plan for the operating model", "Ownership, review, escalation, monitoring, and training determine whether a promising prototype becomes a sustainable capability. Those choices belong in the roadmap from the beginning."]
    ]
  },
  {
    slug: "operating-model-before-org-chart",
    category: "Organizational Strategy",
    title: "Why operating-model choices should precede the organization chart",
    summary: "Clarify decisions, workflows, and accountabilities before moving boxes and reporting lines.",
    date: "[NEEDS: Publication date]",
    isoDate: "2026-01-01",
    readTime: "5 min read",
    author: "[NEEDS: Author]",
    status: "Editorial draft",
    body: [
      ["Structure follows the work", "An organization chart describes reporting relationships, but it rarely explains how the business creates value, makes decisions, or resolves conflicts. Those operating choices should come first."],
      ["Make decision rights explicit", "Growth often exposes decisions that have no clear owner or require too many approvals. Mapping critical decisions reveals where accountability, information, and authority are misaligned."],
      ["Connect measures to responsibilities", "Roles become meaningful when teams understand the outcomes they own, the measures that indicate progress, and the interfaces they must manage with other parts of the organization."],
      ["Treat transition as part of the design", "A sound target model still needs sequencing, communication, leadership behavior, and feedback. Implementation constraints should shape the design rather than appear after it is complete."]
    ]
  },
  {
    slug: "management-reporting-decision-system",
    category: "Accounting Operations",
    title: "Management reporting is a decision system, not a monthly packet",
    summary: "Design reporting around the questions leaders must answer and the actions that follow.",
    date: "[NEEDS: Publication date]",
    isoDate: "2026-01-01",
    readTime: "7 min read",
    author: "[NEEDS: Author]",
    status: "Editorial draft",
    body: [
      ["Begin with management questions", "Reporting should help leaders understand performance, exceptions, cash needs, capacity constraints, and emerging risks. A long packet is not useful if it does not support those decisions."],
      ["Define a reliable information path", "Each measure needs a source, owner, definition, timing expectation, and review process. This reduces debates over whose number is correct and makes exceptions easier to investigate."],
      ["Balance speed and precision", "Not every management decision requires audited precision. The reporting process should make appropriate tradeoffs visible while maintaining controls over information that carries higher risk."],
      ["Close the loop", "Reports create value when they lead to decisions, assigned actions, and follow-up. The meeting rhythm and accountability process are part of the reporting system."]
    ]
  }
];

export const processSteps = [
  ["01", "Understand", "Assess objectives, operating conditions, constraints, and current capabilities."],
  ["02", "Evaluate", "Identify opportunities, risks, dependencies, and credible strategic alternatives."],
  ["03", "Design", "Develop the roadmap, operating model, financial plan, or implementation strategy."],
  ["04", "Implement and improve", "Support execution, measure results, and refine the solution as needs evolve."]
];

export const needs = [
  "Confirmed legal firm name and preferred short name",
  "Approved logo variants and brand standards",
  "Contact email, telephone number, and service area",
  "Leadership names, biographies, headshots, and approved credentials",
  "Firm history, industry experience, selected engagements, and affiliations",
  "Scheduling link and preferred form-delivery destination",
  "Approved social-media profiles",
  "Approval for public product case studies, development-stage labels, supporting metrics, and product visuals",
  "Final canonical domain and hosting decision",
  "Counsel-reviewed privacy policy, terms, disclaimers, and consent language",
  "Approved analytics platform, consent requirements, and retention settings",
  "Photography or additional brand assets, if desired"
];
