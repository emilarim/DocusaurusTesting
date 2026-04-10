---
sidebar_position: 1
---

# Installation Considerations

The documentation generator can be installed by following the installation recommendations provided by its maintainers on **[docusaurus.io](https://docusaurus.io)**.

- It provides the prerequisites for installation and a guide with a simple set of steps to deploy a scaffold project website with a predefined structure.
- It requires the installation of `Node.js` ([Node.js](https://nodejs.org/en/download/) version 20.0 or above) to run the official scaffold commands used to create a Docusaurus project, start the development server, create documentation pages, build the static website, and configure Docusaurus for GitHub Pages.
- This installation uses the classic template, which is automatically added to the project after running the command:
  ```bash
  npm init docusaurus@latest my-website classic
  ```
- Installation of `git` is required to initialize a repository, connect it to GitHub, and host the Docusaurus site.
- Docusaurus supports *Hot reloading*, so when the project files are saved, the website reloads automatically and displays the changes.
- Due to administrative restrictions in the technical environment, all required dependencies for running Docusaurus were installed using the Node.js or Git Command Prompts, while Visual Studio Code was used as the code editor.

### Difficulties Encountered During Installation

- Becoming familiar with the website features configured in the document structure´s left side panel requires time (e.g., docusaurus.config.js) in order to add, edit or delete parameters.

  For example, it is necessary to use the correct folder to reference images (the `static` folder) in order to avoid compilation issues:

  ![CompiledIssues](/img/CompiledIssues.png)

- Implementing the documentation structure may require manually configuring the folder structure inside `docs/`, defining chapters in `sidebars.js`, and creating Markdown `.md`  pages. 

  Basic Project Layout Deployed:
  ```
  hello-docs/
    ├── .docusaurus/
    ├── blog/
    ├── build/
    └── docs/
    ├── node_modules/
    ├── src/
    ├── static/
    |
    ├── docusaurus.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── sidebars.js
  ```

- Sidebar management can present challenges such as maintaining a consistent sidebar order, linking sidebar items to the correct files, and managing a large `sidebars.js` files.

## Exploring Additional Setups

### Right Sidebar

The right sidebar in Docusaurus is called Table of Contents (**TOC**), and it is generated automatically from the headings in the Markdown/MDX page.

The TOC is generated based on Markdown headings (**#**, **##**, **###**, etc.) or MDX headings (h2, h3, etc.). So considering the following example:

```bash
# Testing Mermaid Configurations

## Testing Native Mermaids

### Examples

## Testing Custom Mermaid Components
  ```

Docusaurus automatically builds the table of contents for the current page as follows:

```
  Testing Mermaid Configurations
    └─ Testing Native Mermaids
      ├─ Examples
    └─ Testing Custom Mermaid Components
```

The maximum supported heading level is six. For example:

```md
# H1
## H2
### H3
#### H4
##### H5
###### H6
####### H7 -> Out of the scope
```

![HeadingLevels](/img/HeadingLevels.png)

>Therefore, only headings inside the current page appear. The TOC updates automatically (no sidebar configuration is needed), and it disappears if there are no headings.

### Numbering Sections

Docusaurus does not automatically number sections by default. Instead, it relies on the content structure and only applies numbering when it is explicitly defined, such as:

```md
### 1. Code Blocks
### 2. Tabbed Code Blocks
### 3. Collapsible Sections
### 4. Badges and Labels
```
For automatic heading numbering, it is necessary to either use a plugin such as `@docusaurus/plugin-content-docs` (depending on configuration) or implement visible numbering using CSS:

```css
article h2 {
  counter-increment: section;
}

article h2::before {
  content: counter(section) ". ";
}
```

:::info

It is important to maintain a well-structured format to prevent numbering from becoming confusing across subsections. For practicality, this document uses manual numeric headings.

:::

## GitHub Configuration

To host the full website on GitHub, it is necessary to create a repository on GitHub, and configure the `docusaurus.config.js` for GitHub pages. 

### Difficulties Encountered

- Authentication errors during deployment:

  ![InvalidAuth](/img/InvalidAuth.png)

- As part of the mitigation actions taken to address the vulnerabilities reported in the section [Security Concerns](./testingconfig#security-concerns), acces to the GitHub portal used for website deployment was disabled, and had to be re-authenticated.

  ![AuthErrorToGitHub](/img/AuthErrorToGitHub.png)

  However, during the re-authentication process, a human error occurred: a space between the *username* and *GIT_PASS* caused the platform to retain an incorrect configuration, resulting in deployment failure when running the command: `npm run deploy`.

  ![npmRunDeployFailed](/img/npmRunDeployFailed.png)

  The following actions were taken, to re-establish the connection:

  - Run the correct command:

    `set set GIT_USER=emilarim && GIT_PASS=xxx' && npm run deploy` 

  - Reinitialized existing Git repository:

     ![ReinitializeGitRepo](/img/ReinitializeGitRepo.png)

  - Refresh connection:

    ![FreshStart](/img/FreshStart.png)

  - Remote connection refused:

    ![RemoteConnectionRefused](/img/RemoteConnectionRefused.png)

  - As the remote connection remained unsuccessful, SSH authentication configuration was a succesful alternative:

    ![SuccessfulSSHauth](/img/SuccessfulSSHauth.png)

    - Checking the git remote URL:

      ```bash
      git remote -v
      ```
    ![gitRemote](/img/gitRemote.png)

    - Clearing any lingering environment variables:

      ```bash
      # Clearing all git-related variables
      set GIT_USER=
      set GIT_PASS=
      set GITHUB_TOKEN=
      set GIT_PASSWORD=

      # Forcing SSH
      set USE_SSH=true

      # Verifying it is set

      echo %USE_SSH%
      ```
    - Running the deploy

      ```bash
      set USE_SSH=true
      npm run deploy
      ```

      ![npmRunDeployOK](/img/npmRunDeployOK.png)
  

The website is hosted and available at [https://github.com/emilarim/hello-docs](https://github.com/emilarim/hello-docs).