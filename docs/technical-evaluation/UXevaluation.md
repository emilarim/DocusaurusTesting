# UX Evaluation Conclusions

**Technical Considerations Mermaid Native**

To enable Mermaid functionality in Docusaurus, it was necessary to install the Mermaid theme using ```npm install --save @docusaurus/theme-mermaid``` and configure it in ```docusaurus.js```, as shown in the  [Creating Mermaid Diagrams](./testingconfig.md#creating-mermaid-diagrams) section.

- Mermaid theme was simple to install.
- Depending on the Docusaurus version used, Mermaid may need to be explicitly enabled in ```docusaurus.config```, followed by restarting the services. In other cases, this step may be unnecessary because ```remark-mermaid``` is already included in the configuration.
- The ```` ```mermaid ```` syntax is critically important because it tells Docusaurus how to process the code block.

    **Example:**


    ```md
    ```mermaid
    sequenceDiagram;
        participant User;
        participant Docusaurus;
        participant Mermaid;

    User->Docusaurus: Writes documentation;
        Docusaurus->Mermaid: Renders diagram;
        Mermaid-->User: Displays beautiful chart; ```
    ```
- The difficulty of configuration is mainly related to the type of diagram desired.

**Reorder Sections and Pages**

Establishing a new order for sections can be easy in small projects. In fact, Docusaurus automatically generates a sidebar from the `docs` folder structure by default, providing a basic structure that allows folders to be moved and renamed easily.

However, the level of difficulty depends on the project structure and size. For example, manually managing a sidebar with hundreds of pages, or using absolute paths instead of relatives ones, can become difficult and time-consuming.

On the oher hand, Docusaurus support multiple sections and pages with the same order position number. In this case, the most recently added items appear first, while older items appear later (see [Reordering Sections and Pages](./testingconfig.md#reorder-sections-and-pages)).

**Link Configurations**

Docusaurus is very flexible in supporting link configurations through relative paths, syntax based on document IDs, and auto-resolution using the filename as the doc ID. 

It only requires referencing the path to automatically provide the available `md` files, and after typing `#`, it will display the available sections and subsections to choose from (see [Link Configurations](./testingconfig.md#link-configurations)).

**Page Composition Content**

With regard to page composition, Docusaurus provides built-in support for MDX, allowing JSX to be written within Markdown files and rendered as React components. 

It supports Markdown snippet files and MDX componenta to create warning boxes or reusable content such as noteboxes that can be used accross multiple files.

It also provides options to customize theme colors, automatically adapt to light/dark mode, and override CSS for a custom style (see [Page Composition](./testingconfig#page-composition-content)).

Its complexity depends on the amount of scripting involved.

**Content Authoring Experience**

Docusaurus also supports syntax-highlighted code blocks for a wide variety of languages such as Java, XML, YAML, Gradle, and Bash.

It uses the built-in Prism theme under the hood for syntax highlighting. Its usage only requires triple  backticks (```) followed by the language name (see [Content Experience](./testingconfig#content-authoring-experience)).


**Security Concerns**

Finally, all identified security issues are detailed in the section [Security Concerns](./testingconfig.md#security-concerns).

The platform showed considerably instability. After executing the command `npm run fix-force`, the platform reported imcompatibilities with some dependecies, affecting availability and forcing the user to updated them.

On the other hand, as additional features were being tested, it became necessary to update specific Docusaurus dependencies, such as Docusaurus Faster (`npm install @docusaurus/faster --save-dev`).

![Docusaurus Dependencies](/img/FasterOption.png)