# ArtIsWorship 
# JourneyOfDrawings

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Overview
A generic muti-template content management system
## High Level, and description
- Based on the 'https://journey-of-drawings.web.app/' (from art-is-worship) sources, adding different formats of content pages
  - Image dominated content pages which is current as on Jan 19 2024
  - To add a book-chapter based content template
  - To add a blog based template
  - To add quote based template
  - .. add more as per success on the above and requirement
- Each application can be dedicated to one template type or have multiple template types sitting next to each other
- (design thoughts) Loading which template(s) is based on static data
  - A global setting and/or 
  - Setting at the data file level which would override the global
## History and Updates
- Will adopt a micro sprint - as and when an idea is evolved, document and apply it in the code

- Jan 20 2024  
  * Initial content and publish.
  * New component layer and config Steps
    - Going with micro-sprint implement a 'layer' component above RegularViewer/UnpluggedViewer components
    - Rename the existing to include the phrase 'Image'
    - New component will retain the (above mentioned) names
    - Deciding the config settings at global and file level
    - Writing the interface to read the settings
    - In the common component markup use something like ng-if to load based on context
    - Test. (Add one of the other type of viewer components - keep blank if time constraint and change the config)
- Jan 19 2024 morning/ early afternoon
  * There is a soft timeline of publishing a blog by Jan 22 morning IST.
  * New component layer and config Steps
    - Going with micro-sprint implement a 'layer' component above RegularViewer/UnpluggedViewer components
    - Rename the existing to include the phrase 'Image'
    - New component will retain the (above mentioned) names
    - Deciding the config settings at global and file level
    - Writing the interface to read the settings
    - In the common component markup use something like ng-if to load based on context
    - Test. (Add one of the other type of viewer components - keep blank if time constraint and change the config)

1 merging in user based views. Based on roles, some sketch lists and content(categories/ themes ) are to be hidden as also, the menus and group tabs

Accomplished as on 12/21/2023 morning
- Tabs based on user roles
- Menus displayed based on user roles. 
Due and pending 
- Content filtered based on user roles (all theme sketches STILL show in the 'Special Lists' tab categories irrespective of user role)
- I have backed up ListFunnelService - the existing core content manager and making the changes in a base copy of the same 
- More appropriately named CoreContentService, this new version will attempt to use caching, casting off need to (re)load new instances of the content lists.
In conjunction, use a generic list type to collect the content lists to make for more efficient code AND 
 be able to factor in generic applicability like masking or including lists based on user roles... (Once tested will rename the instances of 'listFunnelService' appropriately)

Completion Criteria: Lists and sketches filtered base on user roles. This should apply *even* for the special list contents

### Changes
(Jan 5 - moved to CHANGELOG.md)
