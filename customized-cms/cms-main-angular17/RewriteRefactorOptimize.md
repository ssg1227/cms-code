# A Combination of Rewrite, Refactor, Optmization of art-is-worship/cms-main
 > *Shantanu Gadkari, May 22 2025 onward*

## Overview, High Level summary
> Started in Q1 2021, the application to host my sketches ***art-is-worship*** (*Angular 2-16 and hosted on Google firebase*) has seen a few versions, each of which is a sort of logical freeze of code base, a sort of backip. 
- [2023](https://art-is-worship-v52023.firebaseapp.com/)
- [2023 version 2](https://art-worship-2023.web.app/)
- [Ritchie Bakes](https://ritchie-bakes.web.app/view/top-level) (This is the 1st attempt to use the template for some other theme. Cakes)
- [2025 May version](https://art-is-worship-a16-25.web.app/) *(Latest before this version)*

> The transition, initially aiming for a 'swing clear of the angular16 version' development has changed direction a bit.

    1. The source was branched as 
        - cms-main which is the 'swing clear' codebase 
        - cms-main-16 supposedly to have been frozen

    2. HOWEVER, I felt the need to pull back, to get some styling up-levelled, some optimzation, styling and issues fixed on the cms-main-16 folder

    3.  SO, as on May 23 2025, code changes are taking place on cms-main-16 and, realistically be so until 1st week of June. 
    
    This version hopes to achieve 
    - major cleanup (declutter), code optimization and re-structuring where required, 
    - removing bugs and addressing performance issues,
    - responsive, aesthetic, classy and contemporary styling (as on the date above)
    - making this seriously templatized to be able to apply to different themes with little effort
    - organized (in-line and external) documentation

## Steps
> Not a 'from the ground' rewrite or 'editing files', I'm planning to back up inside the code base and then either move and edit earlier files, or rewrite as new files, or a combination
### LOG
May 22 2023
1. Created new folder app-backup. 
2. Moved all content except app.component to this folder and updated changes in app.module to bootstrap app.components


### Hold the thought ideas and plans dump
- go back to router-outlet logic
- separate out login and main content components and logic like a16-25 version, but clean up/rewrite/refactor and use more angular features
- **revisit compareSelected**
- cache latest uploads, changers and best