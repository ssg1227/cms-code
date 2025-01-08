### Full Stack Automation for CMS Hub applications
#### Front End
Git location '~/cms-code/fullstack-automation/cms-automate-fe/
#### TODO 
- **INTRO TO DATABASE INTERACTION** 
  - ONE per gallery (art-is-worship, ritchie bakes) 
  - MenuTree elements store in DB
  - (maybe use noSQL)
- Optimize and removed hard codes off UpdateMenuTreeServiceEntriesComponent and ImageFolderComponent - level1, level2, etc..
- Optimization - the 'folder tree select' UI and logic to be made common like move images from dump to loc 
- **check order of image add to list files** - it could be stack rather than queue  
#### Dec 2024 onward
- **art-is-worship.web.app: 500 drawings uploaded Dec 14 2024!!**
    - It was the first fortnight of the lunar month of 'Margasheersh'
    - Full moon day, is said to be the birth date of Lord Dattatreya
    - The 500th was (,logically,) a sketch of Him, completed on Dec 14 itself
- Some styling changes (comment search 'Styling changes Dec 2024')
    - The 'compile JSON' interface which is table tagged and overflowing the display
#### To End-November 2024 
- Refine and add sub features to creating new categories. Changes in cms-automation-fe - angular app, shan-cms-maintain - spring boot
 - **KEYWORD NEW-CATEGORY-REFINE-11-2024**
 - **November 20 2024 completion** 
    - 'reverseStack' keyword - orders display of images opposite to position in list file. The automation loads new images in stack order. The added keyword and accompanying logic reverses this order. reverseStack='true' in list file triggers this logic
    - (implemented in automation. To Test)
    - Duplicate:true image add logic AND edit content before submittal of image entry in list file
    - Almost complete automation of new image folder, menu tree, list file folder and list file
 - Create new image folder even from images root, **DONE**
 - Create new image list folder even from image lists root **DONE**
 - Substitute hard coded text like CLASSNAME with the real values  **WIP**
 - Create text to paste in core-context.service.ts, and menu-tree.ts **WIP** (nice to have automate file write)
   - new component  app-update-menu-tree-service-entries **DONE**
   - **November 18 Backend change in strategy** (all backend tasks)
        - move file to backup - live site  
        - create new file and write every thing including inserted text -live site
        - copy live file back to automation folder 
        - **IMPLEMENTED INITIAL TESTED** check in
        
   - **menu-tree elements WIP November 17 2024** 
        - **Manual copy paste implemented**
            - physical copy of menu-tree from art-is-worship. This is because spring boot file write was throwing error, and erasing menu tree contents. **Need to debug**
            - build the menu tree  element JSON
            = 'dump' in a large text area for copy-paste
            - **!! problem** have to copy paste in two versions of menu-tree.
                - copy from art-is-worship to maintainence folder (take backup)
                - paste in maintenance version
                - copy back
        - entries are of different tree structure as compared to image and image list hierarchy and let's keep it that way
        - !!universal consistency in keywords and folder names. too much effort in changing existant, but going forward:image folder, image list folder, key to be consistent
        - JSON for menu-tree element, lookup values. these lookup values to add to separate ts file  
        - one-off 
           - copy menu-tree-elements from the gallery website and its dependent interfaces into a (temp) ts file
           - populate the menu tree look up values as an array
           - write using backend to the ts file.
        - in app-update-menu-tree-service-entries mimic the images-folders drop down UI, but with the menu-tree lookups and change logic
        - 
 - **IMPLEMENTED** Automation of Duplicate entries **NEW DOC TECHNIQUE MARK CHANGES WITH PHRASE ... START NOV 3, IMPLEMENTED NOV 6 24**
 -  **KEYWORD DUPLICATE-11-2024**
 - Save 'imageRoot' folder in service. **DONE**
 - Add the 'duplicate:' boolean field irrespective of true or false **DONE needed some changes in logic**
 - Adding to list file, 'Submit Duplicate' button visibility by check box **DONE\\**
 - Chose new list file(s)
 - Submit with 'duplicate:false' substituted by 'duplicate:true' AND ${imageRoot} by the image folder
 - repeat as required
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