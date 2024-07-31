### Full Stack Automation for CMS Hub applications
#### Front End
Git location '~/cms-code/fullstack-automation/cms-automate-fe/
##### June 2024 functionality
- Move downloaded image file or files to respective image folder under 'assets' of the CMS application
- Write description for the image and along with path name, add a JSON for a set of one or more images for that subject
- insert the JSON in the list file for that image set category.
- Add the listing to an index list which is to be added to scrap book containing the image

##### Changes after the above

- Create a json file for a new category and the corresponding image folder
    - Name of the class and from that name of the list file or vice versa.
    - Three names
        - className/ file name  'ClassNameList' / class-name.list.ts
        - image folder/ key - should be as close to 'class-name' as possible
    - Identify the lines for a blank file. Most of this will be a standard set of lines, except the class name and description
    - Send the file name, with location and lines to backend
    - Create Menutree JSON, lines to add to *contexted.service enter these in a text area
    - Identify menu-tree position and level, roles, etc and paste from above
    - Add classname in *contexted.service file pasted from the 'Create Step'
- July 30
    - Create a json file for a new category and the corresponding image folder
    - Rename image-move component to images-folders and moved to reusables folder, uopdating dependencies
    - (TODO) Delete original image-move and references (mainly app.module.ts)
    - (added some paths to tsconfig.json e.g. @utils/lookup-values)
    - add @Input imageTreeMode to switch functionality between image move and folder creation
- July 29-30
    - High (root) level tabbing interface has been added adding images logic moved to tabbed interface
    - Three root level tabs 'Add Images', 'Add Listing files,image folder', 'Add Category Nodes, folder'
    - 'Add Images' has level 2 tabbing and the existing add images components moved here