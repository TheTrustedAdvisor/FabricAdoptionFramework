---
publish: true
title: Assess your Fabric adoption strategy
sidebar_position: 2
authors:
  - name: TheTrustedAdvisor
    email: 12225606+thetrustedadvisor@users.noreply.github.com
    github: TheTrustedAdvisor
    realName: Matthias Falland
    badges:
      - mvp
  - name: TheTrustedAdvisor
    email: matthias@falland.ch
    github: TheTrustedAdvisor
    realName: Matthias Falland
    badges:
      - mvp
---

# Assess your Fabric adoption strategy

This article provides a structured way to evaluate and evolve your Microsoft Fabric adoption strategy. It helps you understand your current maturity, surface strategic gaps, and define pragmatic improvement actions. Use it to align data platform modernization with business priorities and to increase time‑to‑value.

> **Who is this for?**
> Platform owners, enterprise/data architects, analytics leaders, governance/security teams, and domain product owners who are jointly responsible for landing Fabric at scale.

> **What will you get?**
> A repeatable assessment method, a maturity model, a gap analysis template, a 90‑day playbook, and example KPIs/OKRs to track progress.

---

## Principles for successful Fabric adoption

* **Business‑first**: Start from outcomes, not tools. Tie every initiative to measurable value (revenue, cost, risk, experience).
* **Product thinking**: Treat data/analytics as products with owners, roadmaps, and SLAs.
* **Secure by default**: Governance, identity, and compliance are built‑in, not bolted‑on.
* **Automate everything**: Source control, CI/CD, testing, and monitoring are non‑negotiable for scale.
* **Federated ownership, centralized guardrails**: Empower domains within a governed platform (data mesh compatible).
* **Iterate fast**: Short feedback loops beat big‑bang migrations.

---

## Fabric adoption dimensions (what to assess)

Assess across 12 dimensions. You can score each 0–5 (see maturity model below):

1. **Strategy & Business Alignment** – Clear business outcomes, executive sponsorship, portfolio of value cases.
2. **Architecture & Platform** – Reference architecture for OneLake, Lakehouse, Warehouse, Real‑Time, and BI; tenancy/regions; network patterns.
3. **Governance, Risk & Compliance (GRC)** – Policies, approvals, data classifications, lifecycle, auditability.
4. **Security & Access** – Entra ID patterns, tenant/workspace settings, RLS/OLS, secrets management.
5. **Data Management & Quality** – Cataloging, lineage, DQ rules, contracts, metadata standards.
6. **DevOps & Change** – Git integration, environments, CI/CD pipelines, tests, release governance.
7. **Operations & FinOps** – Monitoring, SLOs/SLIs, incident/problem mgmt, capacity planning and cost control.
8. **Domain Operating Model** – Roles, ownership, product funding, ways of working, communities of practice.
9. **Analytics & BI** – Semantic model governance, reuse, certification/promotion, self‑service enablement.
10. **Real‑Time & Integration** – Eventstreams/KQL DB, streaming ingestion, event‑driven activation.
11. **AI/ML & Advanced Analytics** – Notebooks, experiment tracking, feature reuse, responsible AI guardrails.
12. **People & Enablement** – Training, playbooks, onboarding journeys, change management.

---

## Assessment process (how to assess)

### 0) Prepare

* **Define scope**: Which business domains, regions, and teams are in scope? What is the adoption horizon (e.g., 12 months)?
* **Collect artifacts**: Tenant/workspace settings, capacity usage, solution inventory, governance docs, incident/cost reports.
* **Align stakeholders**: Identify sponsor, platform owner, governance lead, security architect, domain POs, BI lead, FinOps lead.

### 1) Evaluate your maturity

Use available frameworks and self‑assessment tools together with the maturity model in this guide. Score each dimension (0–5). Example evidence to review:

* Business case(s), OKRs, and roadmap
* Current/reference architecture diagrams
* Governance policies & tenant/workspace settings
* Git strategy, branching model, and deployment pipeline definitions
* Monitoring dashboards, incident tickets, capacity/cost trends
* Data catalog coverage, quality rules, lineage graphs

### 2) Identify strategic gaps

Document gaps per dimension and rate **impact** (High/Med/Low) and **effort** (High/Med/Low). Typical findings:

* Missing decision rights / ownership or unclear RACI
* No workspace/domain architecture standards; environment separation is ad‑hoc
* Incomplete metadata/DQ strategy; catalog and lineage not enforced
* Manual releases without Git/CI; no automated tests
* Limited monitoring and cost controls; capacity hot‑spots
* Security exceptions (broad permissions, lack of RLS/OLS, secret sprawl)

### 3) Define action plans

Turn gaps into action items with owners, due dates, and success criteria. Sequence work using **value vs. effort** or **WSJF**. Examples:

* Establish a **Fabric Governance Board** with charter and decision cadence
* Implement **workspace naming & lifecycle** (dev/test/prod, promotion model)
* Enable **Git** and rollout **CI/CD** for Lakehouse, Warehouse, and BI artifacts
* Set up **monitoring & SLOs** (platform + product), cost alerts, and capacity limits
* Roll out **data product templates** with contracts, DQ checks, and documentation
* Train **domain POs** and **BI leads**; create a community of practice

### 4) Reassess and iterate

Reassess at key milestones:

* Before major expansions (new domain onboarding)
* After launch reviews of data products
* Quarterly governance, security, and cost reviews
  Track KPI trends and adjust the roadmap.

---

## Maturity model (0–5)

Use this rubric to self‑score each dimension. Keep evidence and notes for transparency.

|               Level | Description                                                                                                                                                       |
| ------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0 – Not started** | Ad‑hoc experiments, no strategy or guardrails.                                                                                                                    |
|  **1 – Initiating** | Basic sponsorship; isolated workspaces; minimal governance; manual releases.                                                                                      |
|    **2 – Emerging** | Initial reference architecture and policies; Git enabled for some teams; early monitoring and cataloging.                                                         |
|     **3 – Scaling** | Standardized workspace patterns; CI/CD and testing are default; catalog/lineage/DQ broadly adopted; SLOs and cost controls in place.                              |
|  **4 – Optimizing** | Product operating model across domains; platform SRE practices; automated policy enforcement; comprehensive FinOps; strong reuse of semantic models and features. |
|     **5 – Leading** | Data as a product at enterprise scale; continuous compliance; autonomous domain delivery within guardrails; measurable business impact with OKR tracking.         |

> **Scoring method**: Score each dimension 0–5. Optionally weight dimensions (e.g., Strategy×1.5, Security×1.5, DevOps×1.3, Operations×1.3). Compute a weighted average and track over time.

---

## Quick diagnostic (yes/no)

* [ ] Clear executive sponsor and measurable outcomes exist
* [ ] Reference architecture for OneLake/Lakehouse/Warehouse/Real‑Time/BI is ratified
* [ ] Tenant and workspace settings align with security/governance policies
* [ ] Git + CI/CD are standard for all Fabric artifacts
* [ ] Separate dev/test/prod environments with promotion paths
* [ ] Data catalog coverage >80% and lineage available end‑to‑end
* [ ] DQ rules are automated and break builds on critical failures
* [ ] Platform/ product SLOs defined; alerts and runbooks in place
* [ ] Capacity/cost dashboards reviewed monthly with FinOps
* [ ] RLS/OLS enforced on all certified BI artifacts
* [ ] Data products have owners, roadmaps, and documentation
* [ ] Training pathways for engineers, analysts, and product owners exist

---

## Artifacts to review (evidence)

* Tenant & workspace settings export (governance/security)
* Workspace inventory with environment tags and ownership
* Git repos, branching model, deployment pipeline definitions
* Monitoring dashboards (platform & product), incident/risk logs
* Capacity usage and cost trend reports
* Catalog/lineage coverage reports, DQ run history
* Architecture diagrams and data contracts

---

## Gap analysis template

| Dimension           | Gap description                                   | Impact | Effort | Owner              | Due     | Success criteria                                               |
| ------------------- | ------------------------------------------------- | ------ | ------ | ------------------ | ------- | -------------------------------------------------------------- |
| Security & Access   | Broad workspace admin roles; no RLS on key models | High   | Med    | Security Architect | 2025‑Q4 | All certified models with RLS; least‑privilege workspace roles |
| DevOps & Change     | Manual releases; no versioning for notebooks      | High   | High   | Platform Eng Lead  | 2025‑Q3 | Git+CI/CD with tests for all artifacts                         |
| Operations & FinOps | No capacity budget alerts                         | Med    | Low    | FinOps Lead        | 2025‑Q3 | Monthly budget alerts; less than 5% overrun                             |

> Copy this table per domain or platform area.

---

## Action plan examples (by dimension)

**Strategy & Business Alignment**

* Define a 12‑month portfolio with quantified value cases and risks
* Set OKRs (see examples below)

**Architecture & Platform**

* Publish reference architecture for OneLake (zones), Lakehouse/Warehouse patterns, Real‑Time ingestion, and BI
* Define region strategy, tenancy, and workspace topology (core vs. domain)

**Governance, Risk & Compliance**

* Charter a governance board; approve policy baselines; document exceptions & waiver process
* Standardize classification & retention; align with legal/compliance

**Security & Access**

* Enforce tenant/workspace settings; least‑privilege role model; secrets management
* Mandate RLS/OLS for certified BI; review access quarterly

**Data Management & Quality**

* Data product template: schema, SLAs/SLOs, contracts, DQ rules, lineage, docs
* Automate DQ checks in CI; publish scorecards

**DevOps & Change**

* Enable Git for all workspaces; standardize branching (trunk‑based or GitFlow)
* Implement CI/CD with automated tests and approvals; track deployment lead time & change failure rate

**Operations & FinOps**

* Platform SRE playbooks; on‑call; incident/problem mgmt
* Capacity planning & budgets; cost allocation and showback; alerting on anomalies

**Domain Operating Model**

* Define domain boundaries; nominate product owners; publish RACI and ways of working
* Create a community of practice and reuse catalogue (semantic models, notebooks)

**Analytics & BI**

* Certification/promoted content process; versioned semantic models; reuse strategy
* BI style guide and performance baselines; usage telemetry in reviews

**Real‑Time & Integration**

* Event ingestion standards; KQL usage guidance; near‑real‑time activation patterns
* SLAs for streaming pipelines and back‑pressure handling

**AI/ML & Advanced Analytics**

* Notebook standards; feature store/reuse guidance; experiment tracking
* Responsible AI policy and review process

**People & Enablement**

* Role‑based training paths; onboarding checklists; office hours and clinics
* Adoption communications plan; internal docs site

---

## 90‑day adoption playbook (example)

**Days 0–30 (Foundation)**

* Confirm sponsor, governance board, and scope
* Ratify reference architecture and security baselines
* Enable Git on pilot workspaces; pick 1–2 pilot products
* Stand up monitoring and cost dashboards

**Days 31–60 (Scale the basics)**

* Implement CI/CD & environment separation for pilots
* Roll out workspace patterns and naming/lifecycle policy
* Define data product template (contracts, DQ, docs)
* Begin training for engineers, analysts, and product owners

**Days 61–90 (Operationalize)**

* Certify first semantic models and BI artifacts with RLS/OLS
* Establish SLOs and on‑call/runbooks; start monthly cost reviews
* Publish adoption scorecard and roadmap; onboard next 2–3 domains

---

## Roles and RACI (sample)

| Activity                   | Exec Sponsor | Platform Owner | Gov Lead | Sec Architect | Domain PO | Data Eng | BI Lead |  FinOps |
| -------------------------- | ------------ | -------------: | -------: | ------------: | --------: | -------: | ------: | ------: |
| Set strategy & OKRs        | **A**        |              R |        C |             C |         C |        I |       C |       C |
| Approve policies           | A            |              R |    **A** |             C |         C |        I |       C |       I |
| Workspace standards        | I            |        **A/R** |        C |             C |         C |        R |       C |       I |
| CI/CD enablement           | I            |        **A/R** |        I |             C |         C |        R |       C |       I |
| Data product certification | I            |              C |        R |             C |   **A/R** |        R |       R |       I |
| Cost reviews               | I            |              R |        I |             I |         I |        I |       I | **A/R** |

> **Legend**: A = Accountable, R = Responsible, C = Consulted, I = Informed.

---

## KPIs and OKRs (examples)

**Platform OKRs**

* **O:** Make the platform safe and reliable at scale.

  * **KR1:** 90% of workspaces with Git & CI/CD enabled
  * **KR2:** less than 2% monthly capacity overrun; 100% cost alerts in place
  * **KR3:** P0 incidents ≤ 1 per quarter; MTTR less than  2 hours

**Product/Domain OKRs**

* **O:** Deliver business value with trustworthy data products.

  * **KR1:** 3 certified semantic models reused by ≥ 2 domains each
  * **KR2:** 95% of DQ checks passing on critical datasets
  * **KR3:** Time‑to‑insight for top use case reduced by 30%

**Adoption KPIs**

* Maturity score (weighted) by dimension, quarter‑over‑quarter
* % certified/promoted BI artifacts; BI usage growth
* Lead time for change; change failure rate; deployment frequency

---

## Reassessment cadence & triggers

* **Quarterly** platform/governance reviews (security, cost, policy compliance)
* **Post‑launch** product reviews (SLOs, support load, adoption)
* **On demand** when adding new domains, enabling real‑time workloads, or scaling capacity across regions

**Signals to trigger reassessment**

* Capacity saturation or frequent throttling
* Increase in P1/P2 incidents or change failure rate
* Policy drift detected (tenant/workspace settings)
* Duplicate/competing semantic models and dashboards

---

## Anti‑patterns to avoid

* Big‑bang migration without intermediate value
* Single “catch‑all” workspace per domain mixing dev/test/prod
* Manual releases; no version control; fragile notebooks
* Excessive cross‑workspace permissions; everyone is Admin
* No cost ownership or budgets; “free” capacity mindset
* Treating BI as a side project without semantic model governance

---

## Deliverables checklist (what to produce)

* [ ] Platform reference architecture (with OneLake zones and workspace topology)
* [ ] Governance charter and policy baseline (tenant + workspace)
* [ ] Security/identity model (roles, RLS/OLS, secrets)
* [ ] Dev/Test/Prod environment strategy and promotion paths
* [ ] Git & CI/CD standards; deployment pipeline templates
* [ ] Monitoring/SLOs and runbooks; incident/problem mgmt process
* [ ] FinOps dashboard, budgets, and alerts
* [ ] Data product template with contracts, DQ, lineage, docs
* [ ] Training & onboarding pathways per role
* [ ] Adoption scorecard and quarterly roadmap

---

## Appendix A: Sample scoring sheet (YAML)

```yaml
assessment:
  date: 2025-08-08
  scope: "Domains A, B, C; Regions EU/US"
  weights:
    strategy: 1.5
    security: 1.5
    devops: 1.3
    operations: 1.3
    others: 1.0
  dimensions:
    strategy: {score: 2, notes: "Sponsor named; OKRs pending"}
    architecture: {score: 2, notes: "Ref architecture draft"}
    governance: {score: 1, notes: "No board charter"}
    security: {score: 2, notes: "Workspace roles too broad"}
    data_management: {score: 1, notes: "Catalog coverage low"}
    devops: {score: 2, notes: "Git on pilots; no CI tests"}
    operations: {score: 1, notes: "No SLOs; cost alerts missing"}
    domain_model: {score: 2, notes: "POs identified"}
    analytics_bi: {score: 3, notes: "Two certified models"}
    realtime: {score: 1, notes: "PoC only"}
    ai_ml: {score: 1, notes: "Unstructured"}
    people_enablement: {score: 2, notes: "Training plan draft"}
```

---

## Appendix B: Gap‑to‑action mapping (example)

```text
Gap: No workspace lifecycle standards → Risk of drift and production incidents
Action: Define DEV/TEST/PROD topology, naming, RBAC, and promotion policy
Owner: Platform Owner
Success: 100% of workspaces tagged and aligned; promotion automated; audit report monthly
```

---

## Final notes

Every adoption journey is different. Use this guide as a living playbook: score, prioritize, act, and iterate. Keep the conversation active among business and IT leadership so platform guardrails and domain autonomy evolve together.
