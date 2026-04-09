---
sidebar_position: 1
---

# Introduction

*Welcome to the **Docusaurus** documentation site, where I explore **Markdown** and its built-in features.*

This documentation describes the UX (User Experience) process used to assess the documentation generator Docusaurus in terms of usability, efficiency, and practicality. The evaluation is carried out through the configuration of specific content requirements for the project and analyzing its behavior with respect to the following aspects.

## Aspects to be evaluated

The evaluation focuses on the following aspects:

- Ease of installation.
- Difficulty setting things up.
- Potential issues with dependencies.
- How much configurations is required during installation and customization.
- Presentation of **concrete examples** (configuration snippets, folder structures, screenshots) accompanied by a summary.
- How difficult is it to **reorder or restructure** sections later?
- How can one link from one documentation page to another? (relative paths, special syntax, auto-resolution by title?)
- What happens when a file is renamed or moved? Do links break silently, or does the build process generate a warning?
- Is it possible to reference a specific heading on another page (e.g., deep-link to "Authentication" section in the Architecture page)?


**Right Sidebar**

- Is it automatically generated from headings? If so, which heading levels are included (H2 only? H2 and H3?)?
- Is it configurable per page or only globally?

**Page Composition (Content)**

- Can a single rendered page be composed from multiple markdown files? (e.g. reusable snippets partials, shared warning boxes)?
- If not supported natively, what workarounds exist (e.g., MDX components, includes, etc.)?
- Can we define reusable content blocks (e.g. a "Prerequisites" box used across 10 or multiple pages)?

**Content Authoring Experience**

- How close is the Markdown syntax to standard/portable Markdown versus tool-specific extensions?
- Is there support for the following features:

  - Code blocks with syntax highlighting (Java, XML, YAML, Gradle, shell)
  - Tabbed code blocks (e.g. Maven vs Gradle)
  - Callouts (tip, warning, danger)
  - Collapsible sections
  - Badges or labels



Code section:

```python
print('Hello world')
```