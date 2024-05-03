
# LOG OF CHANGES #
"CMS Picture Gallery" by Shantanu Gadkari
### Log: May 1 - 3 2024
- Top Level list *ngFor added to ImageViewer
- app-card from old code merged for card based
- displaying blank cards as per the list
- working refactor based on new JSON fields and logic
- Start of content json refactor  JSON file tree-detail.ts
- Interface TreeNode, has key, label, etc. for child nodes parent-key maps to key of a parent element. isLeaf: true element will map to the JSON containing the images.
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
