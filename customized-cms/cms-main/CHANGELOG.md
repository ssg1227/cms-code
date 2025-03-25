
# LOG OF CHANGES RECORDED W.E.F. April 28 2024 #
"CMS Picture Gallery" by Shantanu Gadkari
- ***This File to be closed April 27 2025 and saved as CHANGELOG-2024-2025.md and a fresh new  CHANGELOG.md to be initated**  
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
### February 2025 onward
- **March 25 onward. Single code base for CMS apps**
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
### Mid Dec 2024 onward
- ***CLEAN UP USERS AND ROLES LOGIC** 
- Customized and other fields add to ImageDetail. 
  - **HAPPY NEW YEAR 2025** 
   - The initial thrust, and focus is the contexted changes to the CMS for 'art is worship' 
    - gathering all sketches and getting them uploaded and into a physical album
    - maybe filtering out the 'ho-hum's
    - in relation, implementing the 'album' pivot (see below) as a customized add on  **backlog**
    - other: 'Core User type' was buggy, to fix **done**
   - Refining and error free automation and readme to spell out the steps  **ongoing backlog**
   - Refining and contemporary look the UI **ongoing backlog**
   - Start looking out for performance/loading issues  **ongoing backlog**
  - 'core' user type: **Implemented Jan 11 2025**
    -  'exclusive' inner circle of users above super user. 
    -  initial usage 'coreDescription' text visible only to core user type
    -  add image level user based visibility  - using core user type as starting prototype
    -  changes look for 'core user type' in comments
  - In contexted adding fields to pivot lists based on 'albums' - which sketch book collection the drawing is stored. 
- **art-is-worship.web.app: 500 drawings uploaded Dec 14 2024!!**
    - It was the first fortnight of the lunar month of 'Margasheersh'
    - Full moon day, is said to be the birth date of Lord Dattatreya
    - The 500th was (,logically,) a sketch of Him, completed on Dec 14 itself
- Styling changes: look for comment pattern 'Styling changes 12/2024+ '
### 2024
#### Mid November 2024 onward
- Series was Alag full life cycle => Shades and Shines 1
- Testing automation, duplication and recent full stack changes
- reverseStack implementation
#### To last week Oct Mid-November 2024 
- New series 'Shades of Divinity' 
 - Attempt high quality drwaing,using B&W shading. 
 - Up to date with adding sketch to scrapbook and entry
 - To coordinate/coincide with refinement of new category add automation
- **Duplicate Entries to separate list files automation, implement and initial test Nov 6 24**
- **UI upgrades**
- **Slide show implemented with pop up**
- **Automated creation of new category - folder for images and list file** 
- **At 459 images for all categories (Oct 27)** 
- Complete automation of above - classname, keyword, inserting into menutree ts file, etc
- Automate duplicate entries in list file
#### June 1 - 8
- **June 5.. Option of going to 'latest sketches' specific list instead of top root page implemented**
- **Authentication piece mid level** 


#### May 27-31
- Prev ('<<<'') Next('>>>') buttons on expanded modal
- Fixed header styling changes
- **Thumbnail label and tooltip**
  - tooltip - stripped of most if not all html tags
  - label below thumbnail image 
    - the description is &lt;li> - extracted the first &lt;li>&lt;/li> content stripped off html tags as label
    - changed card height to auto with min hieght
    - added a summary label field to replace the above logic (if summarylabel not there USING the logic to extract initial text of description)
    - factored in summary label into automation
- Added CanvassMaterial to automated upload
- *** Crossed unique 400 image sets May 27 4:30 PM PST**
- **Automated full stack image loader and list updating app issues**
    - in inserting JSON to list file, sometimes, it screws up the structure.. eats up some commas, etc
    - Have to refresh browser for new image (set) upload... need to revisit reset and refresh logic
    - Add canvassMaterial
- Authentication piece
- Compile Summary text to place below below thumnbnails and/or tooltip (which is showing html tagged description)
- **RESOLVED - Total based on sketch (Object) not jpegs uploades** Check counts - it should be total counts of file JSON objects across lists (not jpeg, because that pulls in iterations as well; duplicate logic is handled)
- Scrub data, replace with neutral content for public share
#### Log May 22 - 26
- (trivial but) collaborative user added to the Git account and development continued on my original Macbook air
- **Automated full stack image loader and list updating programs updated and being used to upload images and update image lists**
  - Angular form based app as front end
  - Java Spring boot app to update 
  - this is file handling - moving files (images from download folder to assets/... in the app) and inserting text in list files
  - **--Still some logic changes required-- but.. WORKING**
#### Log May 17-19
- **May 24** 
  - Getting automated upload of images and lists update to work - full stack using angular, java spring boot
  - Added a new list - steam (IR locomotives)
- **May 20 wider(public?) release** 
  - **EOD (approx PST)**
    - **PENDING** in place working role based authentication
    - image lists with sketch canvass and content complete for correct frame and background styling
    - some basic aesthetic branch card styling (am 05/20 - think almost there)
  - **May 19 morning** Modal styling changed correction: addressed image was tiny for small screens, description was spilling onto image for large screens, 
  - **May 18 morning COMPLETED** Move logic of Styling - frames of images - black and white, combo, water colors - to service layer
  - Uploaded images categories complete, so descrption is complete as also styling based on categorization
  - Authentication applied to list loading and menus
  - Pop up image styling
  - Not showstopper, but Menus having latest uploaded highlighted
  - Nice to have tooltip on thumbnails without html tags
  - Data scrubbed github repo
####Log May 15-16
- **--MAY16 2024 7:00 PM PST functionally complete--** 
- *SCRAMBLE* to completion
   - AUTHENTICATION *IMPLEMENTED*
     roles: 
      * global  = top level
      * superuser = see all + admin
      * all  = see all images but no admin
      * admin = admin. Not sure on image list viewing
      * sanatani = religious
      * guru = guru 
      * non-religious = self explanatory. However a selected bunch of religious / guru images for art's sake
      * living = (assumed non religious)
      * non-living = also self explanatory
   - LATEST UPLOADS - Timeline *IMPLEMENTED 90 days hard code *
   - DONE (May 15) Completion of existing uploaded lists and images. 
   - Add one Ganesh and Guru atleast (and get time wise latest uploads functional)
  - Styling - frames of images - black and white, combo, water colors
- roles: list of strings - 
#### Log May 13 - 14
- ** Styling tweak ** Black and white sketches have a different border and background (However sketch specs need to be givenl many are missing)
- LOGIC IMPLEMENTED Special lists and summary numbers  except for latest uploads timeline
- latest uploads - new logic - two categories - 60 days or less, latest per theme
- Responsive styling
#### Log May 10 - 12
- ACHIEVED images loading at leaf level for non compiled themes after Merging old code (for now).
- INITIAL publish (art-is-worship; previous backed up art-worship-2023)
- ALL relgious themes, except common user compilation, uploaded
#### Log May 7 - 9 2024
- Base for image loading established.
- Population of (menu) tree node wip
- Navigation implementation direction narrowed down.
- It is now built over the old (menu-tree) logic, using a tree, JSON is a flattened list with key, parent key and leaf parent indicator (true/false)
- Breadcrumbs currently hard coded as a list with each node
- To stitch the image viewing with this logic
#### Log May 3 2024
- Page navigation based on tree implemented for node (branch elements)
- NodeCollection interface introduced. JSON single object with list of TreeNodes - parent key is common - so extracted out of list
- UI card layout introduced with initial set of data - top level and 1 level down
- Routing and breadcrumbs added
- BreadCrumb Interface list info is currently hard coded into the node collection JSON
#### Log: May 1 - 3 2024
- Top Level list *ngFor added to ImageViewer
- app-card from old code merged for card based
- displaying blank cards as per the list
- working refactor based on new JSON fields and logic
- Start of content json refactor  JSON file tree-detail.ts
- Interface TreeNode, has key, label, etc. for child nodes parent-key maps to key of a parent element. isLeafParent: true element will map to the JSON containing the images.
- JSONs are lists of TreeNode Elements. 
#### Log: April 30 2024 (1)
- A **big one**: implementing the tree based navigation on themes, categories, picture lists
  - New approach using recursion 
  - New JSON structure 
#### Log: April 29 2024 (2)
- Login Mechanism, introducing the content pages
- New logic for tree based drill down
#### Log: April 29 2024 (1)
- Landing/Login + Summary page styling 
- Screen composition to be **Master Detail** - about 10-20% of the top is the summary; the rest is detail (DESIGN EXTRACT)
  - Login + Summary: Title and login form on top. Summary below
  - Picture pages: Title and bread crumbs on top. Icons, picture below
- Creation of login page - login-landing.component *(Login mechanism - Login page and summary write up will be one component (DESIGN EXTRACT) unlike prevous
- ***Completion of combining login page  summary write ups***
  - Starting consistent look and structure as above. Application title on left edge of 'Master' div(DESIGN EXTRACT) 
  - Add static text JSON for website title and summary (under 'assets/common-config')
#### Log: April 28 2024 (2)
- Creation of the frame. landing-page.component as the root
- Creation of login page - login-landing.component *(Login mechanism - Login page and summary write up will be one component  unlike previous)*
- App.component load landing-page.component as the ancestral component containing the login-landing or menu => picture list tree
- Config, constant text like the summary under assets/config, unlike previous.
- However, everything will be JSON based (thoughts of moving to noSQL DB, in the future, maybe?)
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
