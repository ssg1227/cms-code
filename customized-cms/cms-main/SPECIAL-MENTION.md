# Extract from CHANGELOG document files that need to be highlighted / special mention
This document starts with a high level version history of my art gallery app, also some idea of data interaction and then the rest is pickings from the changelog docs.
Sort of precis (summarized) cum extracted highlights. 
Date of Creation being July 8 2025, the updates will be 'stack' added - latest being on top. 
Initial entry being on the changes to address small device performance and responsiveness issues and optimizations.
## EVOLUTION 
- [Current as of July 2025.](https://art-is-worship.web.app/home) 
    - Focus on small device performance and responsiveness issues and optimizations.
    - Increasing and corresponding automation added to the upload suite of programs. 
- [last iteration before the current.](https://art-is-worship-a16-25.web.app/home) 
     - Lot of cleanup, complete card look/flex wrap and contemporary styling, *but* issues of responsiveness and performance on dynamically compiled lists when viewed on mobile screens
- [Probably mid 2023](https://art-is-worship-v52023.web.app/) 
    - Focussed on card layout - bad ui and buggy 
- [Creation and upto around start 2023](https://art-worship-2023.web.app) 
    - Using the thumbnails on the top and main content below, carousel slides

## UI HIGH LEVEL, DATA STORAGE AND INTERACTION JULY 2025
- Main presentation element of UI is a card 
- Arranged as a tree structure, at higher levels, the cards represent categories and sub-categories
- The leaf cards are the image holder
- clicking a category card drills down to the next level until the leaf set of images for that path is reached
- *"Everything is a JSON"* 
    - content for category cards is in an array of JSON objects called menu-tree-elements
    - content for the set of image cards for a leaf parent is an array of JSON objects 'image detail'
        - path qualified name of the image file
        - description that goes with the image
        - logistics (mostly available) date of completion, date uploaded, materials and canvass (e.g. A4, color pencils, charcoals, etc)
        - if anything is unique ('changer') of the drawing
        ....

## MAIN CONTENT EXTRACTIONS
 ### June July 2025: Performance and responsiveness issues, and optimizations with specific focus on small devices
     - Removing fancy styling like box shadow, transient etc for smaller screens. These were increasing (unwanted) memory usage and utlizing processor cycles ('after all the focus ought to be on the content rather than frills')
     - Some of the image list were being generated dynamically which was causing processing mostly unwanted
        - **Taking the example of latest uploads** 
        - The logic would scan all the image lists and extract the latest, which was time consuming and sometimes timing out
        - instead, created a latest-uploads json list which is read and processed much quicker
        - corresponding changes in the load program whereby an image json can be loaded to the latest uploads list along with being uploaded to its regular json list
    - caching and local storage usage