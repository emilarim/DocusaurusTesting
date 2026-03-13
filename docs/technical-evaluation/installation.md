---
sidebar_position: 1
---

# Installation Considerations

The documentation generator can be installed by following the installation recommendations provided by the maintainers on **[docusaurus.io](https://docusaurus.io)**.

- It provides the prerequisites for installation and a guide with a simple set of steps to deploy a scaffold project website with a predefined structure.
- It requires installation of `Node.js` ([Node.js](https://nodejs.org/en/download/) version 20.0 or above) to run the official scaffold commands used to create a Docusaurus project, start the development server, create documentation pages, build the static website, and configure Docusaurus for GitHub Pages.
- This installation uses the classic template, which is automatically added to the project after running the command:
  ```bash
  npm init docusaurus@latest my-website classic
  ```
- Installation of `git` is required to initialize a repository, connect it to GitHub, and host the Docusaurus site.
- Docusaurus supports *Hot reloading*, so when the project files are saved, the website reloads automatically and displays the changes.
- Due to administrator restrictions, the Command Prompt was used to install all necessary dependencies to run Docusaurus, and Visual Studio Code was used as the code editor.

### Difficulties Encountered

- Becoming familiar with the website features configured in the document structure´s left side panel requires time (e.g., docusaurus.config.js) in order to add, edit or delete parameters.

  For example, using the correct folder to reference images (the `static` folder) helps avoid compilation issues:

  ![CompiledIssues](/img/CompiledIssues.png)

- Implementing documentation structure, may require manually configuring a folder structure inside `docs/`, defining chapters in `sidebars.js`, and creating Markdown pages `.md`. 

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


## GitHub Configuration

To host the full website on GitHub, it is necessary to create a repository on GitHub, and configure the `docusaurus.config.js` for GitHub pages. 

### Difficulties Encountered
- Docusaurus requires a full URL including `https://` in the `url` field:

  ![IncorrectSyntax](/img/IncorrectSyntax.png)

- Incorrect configuration of `url` or `baseUrl` fields:

  ![WrongRepository](/img/WrongRepository.png)

- Authentication errors during deployment:

  ![InvalidAuth](/img/InvalidAuth.png)

- As part of the actions taken to address the vulnerabilities reported in the Security Concerns section, communication with the GitHub portal used to deploy the website was disabled, requiring re-establishment authentication.

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