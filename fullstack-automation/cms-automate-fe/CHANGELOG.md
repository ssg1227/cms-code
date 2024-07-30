### Full Stack Automation for CMS Hub applications
#### Front End
Git location '~/cms-code/fullstack-automation/cms-automate-fe/
##### June 2024 functionality
- Move downloaded image file or files to respective image folder under 'assets' of the CMS application
- Write description for the image and along with path name, add a JSON for a set of one or more images for that subject
- insert the JSON in the list file for that image set category.
- Add the listing to an index list which is to be added to scrap book containing the image

##### Changes after the above
- Create a json file for a new category
    - Name of the class and from that name of the list file or vice versa.
    - Identify the lines for a blank file. Most of this will be a standard set of lines, except the class name and description
    - Send the file name, with location and lines to backend
    - Identify menu-tree position and level, roles, etc
    - Add classname in *contexted.service file