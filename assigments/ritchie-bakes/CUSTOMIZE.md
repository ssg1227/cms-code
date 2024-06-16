# STEPS TO CUSTOMIZE AND DEPLOY CMS APP
1. Create new angular app ng new <app name> (to avoid the template name from appearing)
2. Copy and overwrite the src folder and other important files
3. run npm install (If there was any error during app creation) and run the app ng serve
4. Customization:
  - *auth.service.ts - context related copies* login required. Set login on or off   needLogin = true|false in auth.service.ts **To Configure one-off**
  - *contexted-core-content.service.ts  - context related copies* core-content-service.ts spawned off new injectable contexted-core-content.service.ts to contain the image (and other) list references specific to the app
  - *styles.css - context related copies*