# setup

## Blank setup generated via
````ng new rundp --create-application false --skip-install````

## add application
````ng generate application mainApp --skip-install --prefix rundp --routing true --style scss````

### add eslint 
``ng add @angular-eslint/schematics``
- fix eslint error in eslint.config

### add e2e 
``ng add @cypress/schematic``

use Protractor 2 Cypress Migration

# Comit
## comitlint rules

````
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
````

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
2. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
3. BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
4. types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
5. footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

## meanings
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug or adds a feature
- perf: A code change that improves performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Commit message with description and breaking change footer
````
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
````

### Commit message with ! to draw attention to breaking change
````
feat!: send an email to the customer when a product is shipped
````

### Commit message with scope and ! to draw attention to breaking change
````
feat(api)!: send an email to the customer when a product is shipped
````

### Commit message with multi-paragraph body and multiple footers
````
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
````

More details: https://www.conventionalcommits.org/en/v1.0.0/#summary

# Rundp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

git remote add origin https://netTrek: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@github.com/netTrek-angular/rundp.git
