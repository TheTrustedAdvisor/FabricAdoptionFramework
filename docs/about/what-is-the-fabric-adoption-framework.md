---
publish: true
id: home
slug: /
title: What is the Fabric Adoption Framework?
description: >-
  An introduction to the Fabric Adoption Framework with best practices for
  adopting Microsoft Fabric.
tags:
  - Microsoft Fabric
  - Adoption
  - Governance
  - Cloud Strategy
sidebar_position: 1
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

# What is the Fabric Adoption Framework?

## Table of Contents

- [What is the Fabric Adoption Framework?](#what-is-the-fabric-adoption-framework)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Key Considerations](#key-considerations)
  - [Guidance](#guidance)
  - [Fabric Adoption Scenarios](#fabric-adoption-scenarios)
  - [Additional resources](#additional-resources)
  - [Training](#training)

---

![Overview of the Fabric Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/_images/caf-overview-graphic.png)

## Introduction

The Fabric Adoption Framework is a collection of best practices, documentation, and tools that help organizations shape their strategy for adopting Microsoft Fabric. Based on the proven structure of the Azure Cloud Adoption Framework, this adaptation focuses on enabling scalable, secure, and value-driven data platform modernization.

The goal of this framework is to guide business, IT, and data teams through a structured journey—from initial business alignment and architectural readiness, to secure deployment, governance, and sustainable operations within the Microsoft Fabric ecosystem.

Find here the latest [updates](whats-new.md) of the Fabric Adoption Framework.

## Key Considerations

Adopting Microsoft Fabric is not just a technical migration — it's a strategic transformation. Key considerations include:

- **Business alignment**: What business goals are driving your analytics modernization?
- **Technical readiness**: Are your environments, data pipelines, and workloads ready for a unified platform like Fabric?
- **Security and compliance**: How will you govern data, access, and usage across the organization?
- **Organizational change**: What teams, skills, and roles are needed to manage the transition and operate Fabric sustainably?

## Guidance

The Fabric Adoption Framework is organized into stages inspired by the Cloud Adoption Framework:

- [**Strategy**](docs/methodologies/1-strategy/overview.md): Define business outcomes, identify key stakeholders, and align data initiatives with strategic priorities.
- [**Plan**](docs/methodologies/2-plan/overview.md): Assess your current environment and data, identify skill gaps, and develop an adoption roadmap.
- **Ready**: Build the foundation with Fabric workspaces, domains, and security configurations (including OneLake and Microsoft Purview).
- **Adopt**: Execute workloads using Fabric services like Lakehouse, Warehouse, Real-Time Intelligence, and Power BI.
- **Govern**: Establish policies for data quality, access control, sensitivity labeling, and auditability.
- **Secure**: Implement Zero Trust principles with Microsoft Entra ID, network isolation, encryption, and compliance tooling.
- **Manage**: Monitor, operate, and optimize Fabric usage with built-in monitoring, cost controls, and DevOps practices.

## Fabric Adoption Scenarios


The Fabric Adoption Framework also provides structured guidance for adopting specific technologies or requirements. These Fabric adoption scenarios apply the framework’s principles to each use case and offer actionable steps based on real-world experiences. Each scenario includes best practices to support your cloud journey and can be integrated into your overall cloud strategy. Use the following table to find the correct scenario:

| Scenario | Description |
|----------|-------------|
| [AI Adoption](../adoption-scenarios/ai-adoption/overview.md) | Guidelines for adopting AI workloads securely and effectively using Fabric |
| [Cloud-scale Analytics](../adoption-scenarios/cloud-scale-analytics.md) | Design considerations for scalable analytics workloads in Fabric |
| [High-performance Analytics](../adoption-scenarios/high-performance-analytics.md) | Recommendations for optimizing large-scale and compute-intensive workloads |
| [Highly Sensitive Data](../adoption-scenarios/highly-sensitive-data.md) | Data governance and security strategies for sensitive or regulated environments |
| [Hybrid and Multicloud](../adoption-scenarios/hybrid-and-multicloud.md) | Patterns for integrating Fabric into hybrid or multicloud landscapes |
| [Modern Application Platform](../adoption-scenarios/modern-application-platform.md) | Guidance for integrating data workflows into modern app development pipelines |

## Additional resources

Explore more in-depth documentation and tools to support your Fabric adoption:

- [Microsoft Fabric documentation](https://learn.microsoft.com/en-us/fabric/?wt.mc_id=AZ-MVP-5003447)
- [Microsoft Fabric roadmap](hhttps://roadmap.fabric.microsoft.com?wt.mc_id=AZ-MVP-5003447)
- [Microsoft Fabric architecture guidance](https://learn.microsoft.com/en-us/azure/architecture/analytics/architecture/fabric-deployment-patterns?wt.mc_id=AZ-MVP-5003447)
- [Microsoft Fabric security documentation](https://learn.microsoft.com/en-us/fabric/security/?wt.mc_id=AZ-MVP-5003447)
- [Microsoft Purview governance overview](https://learn.microsoft.com/en-us/purview/data-governance-overview?wt.mc_id=AZ-MVP-5003447)
- [Cloud Adoption Framework for Azure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/fabric/?wt.mc_id=AZ-MVP-5003447)

## Training

Build your team's Fabric skills with Microsoft Learn and community content:

- [Microsoft Learn: Microsoft Fabric learning path](https://learn.microsoft.com/en-us/training/paths/get-started-fabric/?wt.mc_id=AZ-MVP-5003447)
- [Microsoft Fabric YouTube playlist](https://www.youtube.com/playlist?list=PL1N57mwBHtN0JFoOaMp8ZzS4rjQXzvDGs)
- [Microsoft Fabric Events](https://www.the-trusted-advisor.com/events/)
- [Microsoft Fabric blog](https://blog.fabric.microsoft.com/en-US/blog/)


