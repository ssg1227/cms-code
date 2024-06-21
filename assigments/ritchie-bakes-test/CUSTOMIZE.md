# STEPS TO CUSTOMIZE AND DEPLOY CMS APP

1. Create new angular app ng new <app name> (to avoid the template name from appearing)
2. Copy and overwrite the src folder and other important files
3. run npm install (If there was any error during app creation) and run the app ng serve
4. Customizations:
  - 'needLogin' and login and role lists moved to 'static-text-other-constants.ts' imported in auth.service.ts - context related copies* login required. Set login on or off   needLogin = true|false in auth.service.ts **To Configure one-off**
  - *contexted-core-content.service.ts  - context related copies* core-content-service.ts spawned off new injectable contexted-core-content.service.ts to contain the image (and other) list references specific to the app
  - *styles.css - context related copies*
  - login-landing and  content-viewer/paged-content-viewr - top ten **to move** content (as innerHTML) to static-text-other-constants.ts

  ### MODIFY OTHER CMS VERSIONS 
  - Move all commonly used JSONs to src/app/settings-and-models, including image and image list related JSONs including imagedetail.ts
    (Look at all files under this folder in the template as reference)
  - To avoid relative path '../..' add the absolute paths in tsconfig.json and use it everywhere it needs
    - '
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "@shared/*": ["src/shared/*"], // Maps '@shared' to the 'src/shared' directory
        "@components/*": ["src/components/*"], // Example for another directory
        "@settings-and-models/*": ["src/app/settings-and-models/*"],
      },'
    - e.g. import {  ImageElement } from '@settings-and-models/image-detail' in an *.image.list.ts file
    - e.g. import { TreeNodeElement } from "@settings-and-models/tree-node-element"