
# LOG OF CHANGES April 28 #
"CMS Picture Gallery" by Shantanu Gadkari
### TODOs
- revisit logic and try to debug/optimize isLeafParent/ query params to identify leaf page versus branch
- review and as required, revamp of image load (JSON files on image list are too many; will have to work with the original structure itself)
- solid authentication logic. adding the admin stuff 
- in memory - caching, avoiding time outs
- email form 
- put hard coded paths behind variables, and find right place to keep these variables (e.g. global version of imageRoot)
### Practices
- Maintaining this log
- console.log should try to keep reference - classname method name
### June 17 - 31
  - *As on June 24* Latest iteration of CMS oriented to picture gallery is ritchie-bakes-test.
  - ***However*** it is broken - the leaf elements don't generate the modal 
  - #### Targets 
    - Ritchie Bakes potential 'go live' (fit for user consumption) **JUNE 27**
    - **June 24 night** Moving back latest code base and documentation to ritchie-bakes
    - *By June 25 middle of day* structuring and reducing dependency on localstorage etc, fixing regressions etc
      - move common and multiple use entities under new folder app/settings-and-models
    - *By June 25 evening* complete wish list interface
    - *By June 26 evening*: Refine UI and styling. 
    - *By June 26 evening/ early June 27*Update all lists as per the prices and categirization sent by Marissa **TEST THOROUGHLY AND PUBLISH**
  - Made paged-content-viewer redundant ***TO DELETE*** (maintenance headache; will add paging using component variable and ngIf)
  - Added folder directly under 'app' settings-and-models - move all static, re-useable and universally accessed content files here (see Customize.md for tsconfig.json changes)
  - **Target completion of Ritchie Bakes and setup as Template for pictorial CMS** 
  - Complete Ritchie bakes with email sent wishlist
  - ritchie-bakes-test is the latest code as on June 20-21 
  - June 22 POC for Ritchie bakes
### June 9 - 16
- **June 16 Targets**
  - **Ritchie Bakes** 
    - Complete data upload for Ritchies bakes including FSAI Cert **Done added new level2s for contact+FSSAI  and uncategorized**
    - moved imagedetail file and containing folder shared to directly under 'gallery files' (note in customization)
    - Logo top left corner
  - **Generalization, Order/email form, Order CRUD** (nice to have, testimonial)
    - (as per steps below:)
    - Add 'wishlist, cart' + 'shopping cart' buttons with shopping cart form as email form
    - Order crud with  changing status
- **Stepwise Generalization**
  - Copy this to a generic new angular project shantanu-cms
    (for now it will contain all context related content as well with a suitable suffix - .art-is-worship, for example)
  - Copy and customize (mark steps in CUSTOMIZE.md)
  - Keep context specific content in separate folders - e.g. assets-ritchie-bakes etc
  - For now let the development across all apps be in the generic app
- **June 12-13 changes**
  - Ritchie Bakes is a template candidate and as on June 13, the latest version of this document is *here*. 
    - iteratively extract and separate out context specific code,files and other data.
    - document the steps **CREATED NEW FILE: CUSTOMIZE.md**
    - this log
  - Code and markup changes for an online (window) shopping 
    - wish list (shopping cart without checkout) connected to an email form with default content being this list
    - testimonial form
    - proper 'contact us' logic and flow
- **This is the Ritchie Bakes website** Changes and configuration settings
- Using <router-outlet> 
### June 1 - 8
- June 5.. Option of going to 'latest sketches' specific list instead of top root page implemented
- Authentication piece ETA JUNE 3 AM 
- Scrub Data and share on Saayam ETA JUNE 7 AM
- Test singleton persistence to ultimately target new user registration. ETA June 5-6 AM
  - POC. Create a user, store in auth.service 
  - Do not restart server, close browser, logout, do whatever
- Based on above:ETA June 7 AM
  - create user registration form (password, cookies, etc later). 
  - as admin, copy paste into a users object (auth service)
- Performance:
  - Pagination - keep a max 15 page limit, ETA JUNE  4 EOD
  - Split - keep a max 15 page limit, generate menus dynamically ETA JUNE 7
  - Pre-load special lists (if 15 page limit doesnt work for mobile displays)
  - dynamic load on demand

### May 27-31
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
###  Log May 22 - 26
- (trivial but) collaborative user added to the Git account and development continued on my original Macbook air
- **Automated full stack image loader and list updating programs updated and being used to upload images and update image lists**
  - Angular form based app as front end
  - Java Spring boot app to update 
  - this is file handling - moving files (images from download folder to assets/... in the app) and inserting text in list files
  - **--Still some logic changes required-- but.. WORKING**
### Log May 17-19
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
### Log May 15-16
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
### Log May 13 - 14
- ** Styling tweak ** Black and white sketches have a different border and background (However sketch specs need to be givenl many are missing)
- LOGIC IMPLEMENTED Special lists and summary numbers  except for latest uploads timeline
- latest uploads - new logic - two categories - 60 days or less, latest per theme
- Responsive styling
### Log May 10 - 12
- ACHIEVED images loading at leaf level for non compiled themes after Merging old code (for now).
- INITIAL publish (art-is-worship; previous backed up art-worship-2023)
- ALL relgious themes, except common user compilation, uploaded
### Log May 7 - 9 2024
- Base for image loading established.
- Population of (menu) tree node wip
- Navigation implementation direction narrowed down.
- It is now built over the old (menu-tree) logic, using a tree, JSON is a flattened list with key, parent key and leaf parent indicator (true/false)
- Breadcrumbs currently hard coded as a list with each node
- To stitch the image viewing with this logic
### Log May 3 2024
- Page navigation based on tree implemented for node (branch elements)
- NodeCollection interface introduced. JSON single object with list of TreeNodes - parent key is common - so extracted out of list
- UI card layout introduced with initial set of data - top level and 1 level down
- Routing and breadcrumbs added
- BreadCrumb Interface list info is currently hard coded into the node collection JSON
### Log: May 1 - 3 2024
- Top Level list *ngFor added to ImageViewer
- app-card from old code merged for card based
- displaying blank cards as per the list
- working refactor based on new JSON fields and logic
- Start of content json refactor  JSON file tree-detail.ts
- Interface TreeNode, has key, label, etc. for child nodes parent-key maps to key of a parent element. isLeafParent: true element will map to the JSON containing the images.
- JSONs are lists of TreeNode Elements. 
### Log: April 30 2024 (1)
- A **big one**: implementing the tree based navigation on themes, categories, picture lists
  - New approach using recursion 
  - New JSON structure 
### Log: April 29 2024 (2)
- Login Mechanism, introducing the content pages
- New logic for tree based drill down
### Log: April 29 2024 (1)
- Landing/Login + Summary page styling 
- Screen composition to be **Master Detail** - about 10-20% of the top is the summary; the rest is detail (DESIGN EXTRACT)
  - Login + Summary: Title and login form on top. Summary below
  - Picture pages: Title and bread crumbs on top. Icons, picture below
- Creation of login page - login-landing.component *(Login mechanism - Login page and summary write up will be one component (DESIGN EXTRACT) unlike prevous
- ***Completion of combining login page  summary write ups***
  - Starting consistent look and structure as above. Application title on left edge of 'Master' div(DESIGN EXTRACT) 
  - Add static text JSON for website title and summary (under 'assets/common-config')
### Log: April 28 2024 (2)
- Creation of the frame. landing-page.component as the root
- Creation of login page - login-landing.component *(Login mechanism - Login page and summary write up will be one component  unlike previous)*
- App.component load landing-page.component as the ancestral component containing the login-landing or menu => picture list tree
- Config, constant text like the summary under assets/config, unlike previous.
- However, everything will be JSON based (thoughts of moving to noSQL DB, in the future, maybe?)
## Initial Log: April 28 2024 (1)
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
