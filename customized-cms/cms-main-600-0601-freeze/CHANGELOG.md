
# LOG OF CHANGES RECORDED W.E.F. May 1st 20245 #
"CMS Picture Gallery" by Shantanu Gadkari
- *** June 2025 onward** 
   - **Cleanup and serious optimization Start** 'June 2025 C&O' comments
   - ***600 by 06/01!!!*** 
    - ***June 1, 2025***  *by 6:30 PM PST, I uploaded the ***600th unique drawing image*** to [Art is Worship] https://art-is-worship.web.app/ and ***published*** it* 
    - Apart from support by friends, thanks to my codebase. Thanks to the full stack automation program.
   - Coding, upgrade with some 'exam oriented study' (interview ready) work
    - Continued optimization and other trying to use as many angular methods and features as possible
      - emphasis on performance (esp loading) and viewability on mobile and other small screens.
      - code cleanup
      - debuggig
      - **Special item DONE June 02** add a timestamp to date uploaded. I must have uploaded at least 10 on June 1, and latest uploads showed them in incorrect time order. look for comments // // June 2 2025 Sort Date down to time 
      - other 
    - Styling. Getting there. Slideshow
- *** May 20 2025 onward**
  - **May 29 2025 onward**  
    - **DONE** moved this back to cms-main, and moved angular17 to cms-main-angular17 (latter to still add to src control)
    - angular feature based and other optimization look for comments: May 29 2025+ angular feature based and other optimization
  - **May 27 2025 onward** Changes to expanded image and slide show look for comments: *May 27 2025+  Changes to expanded image and slide show*
  - a migration to Angular 17+ on the cards and 'cms-main' folder is created and the app is built
  - ***this*** codebase sits under 'cms-main-angular16'
  - *However* I pulled back a bit because I felt a lot can be changed and optimized before *finally* getting underway to Angular17
    - Some of the styling cues for a contemporary look can be completed here
    - Optimization, code cleanup, delete unwanted files
    - Trim and slice off deadweight before re-copying sources
  - **DONE** Latest Uploads timewise doesnt work on smaller screen sizes. ***Workaround***
    - **May23 2025** changes - look for 'latest uploads workaround and other optimizations May 23 2025 '
      1. ngx-device-detector code to detect device type. **GAVE ERROR USED isMobile**
      2. use a service call to preserve state **N.A** 
      3. for small device type display themewise device only **DONE**
- *** Predecessor CHANGELOG-2024-2025.md closed May 1 2025**  
  - link to github url of this file.
  - carry over only headers and pending items to new file
- This document, along with documents of the same name in full stack component projects - 'cms-automate-fe' (angular) and 'shan-cms-maintain' (java spring boot) attempts to capture changes, and plans in the cms 'suite' from the above date
- It attempts to be a supplement to the README.md of this and the other mentioned projects
- This doc is very much living, and structure is evolving over time.

### Major/Significant TODOs
- **Templatization and customization: This 'art-is-worship' is as on March 19 2025, the latest version of CMS using angular** 
  - (There are other wannabes in my source code files, but now, too little bandwidth to go trace and maintain)
  - Keep working on templatization. 
    - two or three templates totally in 'use-my-software.com' in angularjs and/or javascript
      - need to 'bring these in'
      - need to generate a 'politically correct' p.o.c. to showcase the application of these templates.
    - Find a means, as painlessly as possible, to 
      * maintain common logic. 
      * maintain and update custom logic, 
      * upload context specific data 
      * special mention. Make core-content.service.ts completely generic. move context specific code to contexted-core-content.service.ts
- **Load issues/ Responsiveness, Styling: New look, Highlights, etc**
  - The app is very patchy and looks out of proportion on cellphone size screens.
  - 'Latest uploads' may have a load issue on cellphones. 
- **Code Cleanup and Documentation**
  - Remove unused code.
  - Establish a documentation template/standard/structure. 
- revisit logic and try to debug/optimize isLeafParent/ query params to identify leaf page versus branch
- review and as required, revamp of image load (JSON files on image list are too many; will have to work with the original structure itself)
- solid authentication logic. adding the admin stuff 
- in memory - caching, avoiding time outs
- email form 
- put hard coded paths behind variables, and find right place to keep these variables (e.g. global version of imageRoot)
- Authentication more granularity and drill down specs
- Scrub Data 
- Test singleton persistence to ultimately target new user registration. ETA June 5-6 AM
  - POC. Create a user, store in auth.service 
  - Do not restart server, close browser, logout, do whatever
- User Registration
  - create user registration form (password, cookies, etc later). 
  - as admin, copy paste into a users object (auth service)
- Performance:
  - Pagination - keep a max 15 page limit, ETA JUNE  4 EOD
  - Split - keep a max 15 page limit, generate menus dynamically ETA JUNE 7
  - Pre-load special lists (if 15 page limit doesnt work for mobile displays)
  - dynamic load on demand
### Practices
- Maintaining this log
- console.log should try to keep reference - classname method name 
- localrun, esp when automated upload is running - ***npm start runs ng serve --port 2800**
## 'EVENTS' ##
### February 2025 onward
- **May 1 2025 575th upload** 
(carried forward some excerpts from predecessor below)

- (UE) Responsive - load issues on mobile, etc. April 24 onward 
     -  Responsive **IMPLEMENTED AND SUFFICIENTLY TESTED APRIL 24**
      - **some styling tweaks remaining** 
      - Initial styling changes using display: flex and flex-wrap, removing fixed pos and top/ left coords for smaller dimensions, etc. 
    look for Comment /*April 24 flex ... */
    - Load issues WIP look for comment 'April 25+ load issues'
      - first attempt  'pre-load' latest by caching it.
      - in switch statement, cache list 1st time, then load cached list. This wont fix it.. see below
      - TO IMPLEMENT. move the (above) functionality of switch statement to a separate function, so it can be called from anywhere On loading lists call this function, 
- (UE) More contemporary styling
- IMAGE LEVEL SECURITY (Aprl 5), it may be time to introduce this with careful consideration since 'religious/sensitive' content in method based lists like 'soft copies and compilations' is increasing
- **March 27 new category 'soft copies and compilations' hierarchy introduced**
  - ***These are not 'drawing drawings as such, but a collection of collages, templates and 'software edited' applications of templates, etc.   (NOTE: they will not be added in chronological order)***
- **March 25 onward. Single code base for CMS apps***
  - user 1st and last name display when logged in as username e.g. achyutM = Achyut Morabkar
  - (maintain-and-automate - folder for full-stack-automation, see other CHANGELOGs parent and neighbor folder)
  - **art-is-worship to cms-main Sanity check complete March 25**
    - created (parent) folder customized-cms, added README, CHANGELOG and created folder cms-main to house this app
    - copied these sources under cms-main (as against art-is-worship)
    - compiled, ran locally and checked in initial version
    - code change tested and deployed to confirm sanity check 
      - **feature of adding information for content of 'other' with new field 'contentOther'**
        - look for comments // content:Other, adding contentOther field. initial code changes              
- 'Changers', 'The Best' cleanup. 
  - Check and genericize logic making it year transparent, esp 'Changers'
  - Factor in, in the 'description' for 'The Best' that certain lists and albums will always have top rating
- 'Content' - new categories: Metallic pencils. Charcoal. Mix and Match. Free Text .. (Also cms-automation-fe)
  -  Lookup values. Think combobox for pre-defined vs free text.
  - UI service layer change here, this change in enter
- Styling highlight for categories with latest uploads (past 7 days)
- Email distribution list - send email at every 7 day publish
- **COMMEMORATIVE 550th drawing uploaded March 16** 'Charcoal Times Other Colors Shines' album. Appropriately a tribute to my Art teacher from School
- **Done** March 3-4 2025 First Charcoal pencil based drawings being uploaded. new FLC (Full Life Cycle) List/Physical Album initiated 
  - "Charcoal Times Other Colors Shines"
  - First drawings using charcoal pencils started end Feb 1st week March 2025. From only charcoal (hard, soft, medium, white) to    charcoal with other drawing elements color and metal color pencils. All drawings signed
- implementation of album pivot (as on Feb 17 semi-manual **Done**)
  - manual entry in image JSONs. e.g. `album: { name: 'the-divine-in-colors-so-fine', status: 'added', sequence: 11} `
  - Adding album names to `menu-tree-elements.ts`
    keys - special-lists => group-by-physical-scrapbook-album => *album name*
  - implementation to display as group on core-content.service.ts
- bugs, refinements, adaptations
  - 'changers', 'rating' logic at picture level. adding 2024, 2025
  - 'changers' and 'rating' at collection level (shades and shines, exotic cars, etc)
  - Move special list logic from core-content.service.ts to contexted-core-content.service.ts
  - Starting consistent look and structure as above. Application title on left edge of 'Master' div(DESIGN EXTRACT) 
  - Add static text JSON for website title and summary (under 'assets/common-config')
- However, everything will be JSON based (thoughts of moving to noSQL DB, in the future, maybe?)
........
### Initial Log: April 28 2024 (1)
- A place to host the *hundreds* of drawings of mine, drawn from Q3 2020 onwards
- With my knowledge of JavaScript/Angular and hosting on Google Firebase, the original website is 
[Art is Worship] https://art-is-worship.web.app/ 
- The website has a sort of dated appearance, the code is unstructured and undocumented and ... um .. buggy
- As in Q2 2024, the latest version is [A Journey of Drawings] https://journey-of-drawings.web.app/
- This attempts to get in a contemporary, card based look, but lot of work still needs to be done including doing away with the legacy 'carousel' and the previous attempt to  introduce card look
- This new code base, app structuring may be *new* from the ground app, but component level and lower will be more or less re-using existing code from journey-of-drawings.web.app, refactoring, re-componentizing as required
- Reference website [IRFCA](https://irfca.org/)
- ** Work Start ** new app, ng serve, copied some initial content 
- Renamed "A Journey of Drawings" to "CMS Picture Gallery"
