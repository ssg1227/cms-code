
export const TechDetail: any[] = [
    { header:"Overview", key:'overview',
        content: 
        `<h5>Overview</H5>
        <ul><li>An Angular 11(as on ${new Date().toLocaleDateString()}) application by Shantanu Gadkari</li>
        <li>Hosted on Google Firebase</li>
        <li>This is a content management system of sorts intended to host the sketches I have drawn</li>
        <li>The images and the JSON based lists which included these, and the descriptives are .ts files under the 'assets' folder</li>
        <li>The current iteration named <a href='https://art-is-worship.web.app/' target=_blank>https://art-is-worship.web.app/</a></li>
        <li>Previous versions. Initial version was released somewhere in 2021 on the Angular2-4 platform.
        <br/> <a href='https://art-is-worship-v52023.web.app/' target=_blank>https://art-is-worship-v52023.web.app//</a>
        <br/> <a href='https://art-is-worship-and-peace.firebaseapp.com/' target=_blank>https://art-is-worship-and-peace.firebaseapp.com/</a></li>
        <li>ng build --prod; sync;sync;sync;sync;sync;firebase deploy</li></ul>` },
        { header:"History", key:'history',
        content: 
        `<h5>History - sigificant changes in the application * </H5>
        <ul><li><p><strong>May 2023 - mid to end</strong>, began introducing a 'category' layer in the menus.<br/>
        - The number of menus has become large and the right nav bar has had to have scrolling introduced.<br/>
        - Each menu record has a new field called 'tab' which is the name of a category in a many (menu) to one (category) mapping<br/>
        - The categories would simulate a tabbed look
        - When clicking a category, the 'leaf' menus would show - ONLY those menus grouped under this category<br/>
        - renamed SideNavBarComponent to TopNavBarComponent.. included in the tabbing control TabbingContainerComponent<br/>
        - (will use this for now for above, attempt top make 'ThemeNav' flexible, but that is likely to be low priority()   </p></li>
        <li>(code 'freeze -  <a href='https://art-is-worship-v52023.web.app/' target=_blank>https://art-is-worship-v52023.web.app//</a>)</li>
        <li>.....</li>
        <li>....</li>
        <li>(code 'freeze -  <a href='https://art-is-worship-and-peace.web.app/' target=_blank>https://art-is-worship-and-peace.web.app//</a>)</li>
        <li>   *   (not to be confused with changes in the content, like a new category, new field, etc)</li>
        ` },
        { header:"Component Tree", key:'componentTree',
        content: 
        `<h5>Component Tree / List</H5>
        <ul>
        <li>index.html which encloses app-root Root component<br/> 
        <li>app-root Root component encloses <br/>
          - app-theme-navigation what is as on (as on ${new Date().toLocaleDateString()}) the right navigation bar containing the menus (previously app-side-nav-bar)<br/>
          - router-outlet which is the router based allocation of the viewers and other components
         
        - The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        - Copied at this point, used only in the context of the side nav. (see tabbingContainer later, below)<br/>
        - The menu options have become numerous - will need to widen this component and add scrolling<br/></li>
        <li>ThemeNavigationComponent<br/>
        - The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        - Copied at this point, used only in the context of the side nav. (see tabbingContainer later, below)<br/>
        - The menu options have become numerous - will need to widen this component and add scrolling<br/></li>
       <li><strong> TabbingContainerComponent </strong><em>newly introduced June start 2023</em><br/>
       - List of Categories under which the menu options(items) are grouped
       - Horizontal, spanned across the header area - expected to evolve to a tabbed interface
       - Talks to TopNavBarComponent (below) to select Menus to display </li>
       <li>TopNavBarComponent <em>New - copied and mofied from SideNavBarComponent below</em>.. This shows only those (leaf) menu items which belong to the selected tab<br/>
       </li>
       <li>SideNavBarComponent<em> Defunct - renamed and modified to TopNavBarComponent above</em><br/> 
        - Previous version of The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        </li>
         <li>AreaSummaryPage<br/>
        - the landing page with the content 'A Journey of Drawings'<br/>
         </li>
         <li><strong> TechnicalDetailComponent</strong><em>newly introduced June start 2023</em><br/>
        - This attempts to capture a Readme of this application 
        - technical and semi technical<br/>
         </li>
        </ul>
        ` }, { header:"WIP & To Dos Automation", key:'todoautomation',
        content: 
        `<div>
        <ol><li><h6>Brief explain of data storage </h6></li>
       <li>>Raw data - images - is stored in a folder hierarchy under the assets folder of the angular app</li>
       <li>These images are stored in folders named specific to the their theme. <br/>
          e.g. a sketch of the GG bridge would go under a folder called 'places. scenes, objects'</li>
       <li>The image file names including relative path, details and other demographics are stored in different arrays of JSON objects</li>
       <li>These Arrays are stored in data lists - typescript files, as , imported into the relevant component file and subsequently rendered<br/>
          (These typescript files content is exposed and exported as a class with a contexy relevant name)</li>
       <li>A list of the different themes including special lists is maintained; here the date uploaded is updated for that theme reference in this list.</li>
       <li>The source is saved, built and published to Google firebase (as on June 12, 2023)</li>
       </ol>
       </div>
       <div>
       <ul><li>Automation of the data maintenance process explained with context to my sketches</li>
       <li>b. Typical data process steps:</li>
       <li>b. i.   When the sketch is ready, it is scanned or photographed into a jpeg which is ultimately saved into the downloads folder</li>
       <li>b. ii.  This downloaded image file is appropriately named (theme and date) and then moved to the appropriate folder as per the above(Point 4.)</li>
       <li>b. iii. Information on the sketch - image name with relative path, and other demographics like description, rating, date compleyed and uploaded is 
               entered as a JSON object into the corresponding data list file (manifest -??) as per 5. and 6. above </li>
       <li>b. iv.  The list specified in 8.above is updated</li>
       <li>b. v.   PERIODICALLY a new theme is generated - this involves adding a new data list, a new image folder, new entry in the index list and also 
               importing and refering the new list in the service class</li>
       <li>b. vi. The physical sketch is added to an album 'scrap book' with plastic pockets, and a one line description is added to a text file.</li>
       <li>b. vii. Once the album is filled up, the text file is printed and inserted in the back of the cover page</li>
       <li> c.<strong>As of July 10 2023, automation functionality is more or less achieved<br/>
                <ol><li> items 'b ii' - the move through 'b iv' automated</li>
                    <li> One line descriptor for items 'b vi - vii' entry into a single text dump file, from which it can be cut and pasted into the correct list</li>
                </ol>
                </strong></li>
       </ul>
       </div>
        ` }, { header:"WIP & To Dos: Other", key:'todo',
        content: 
        `<h5>TO DO </H5>
        <blockquote>The emphasis as upto mid 2023 was to get a website with clear rendition of my sketches, with some basic structuring and inoffensive, plain styling. 
        Over time, the structuring has become increasingly unweildy, the data has increased <em>significantly</em><.<br/>
        From filling out the cracks, to leveling bumps, to give this gallery a new new look and feel, there are also some undeniable 'medium priority bugs', 
        some features to add, etc</blockquote>
      
        <ul>
        <li>Role based visibility.. 
        - To filter some pages based on user role. avoiding 'TMI' for some users, keeping some views visible for interested parties,<br/>
        - Current implementation is for 'admin' and 'non admin' where this view is reachable only for the former role<br/>
        - Using authguard/CanActivate, with hard coded users 'shantanu', 'technician' and 'admin', roles 'ADMIN' and 'TECHNICAL'<br/>
        - I'd probably 'mask' some themes from some user roles..<br/>
        - right now, some logical errors connected with technician
        </li>
        <li>Some logical and other errors<br/> 
        - Sometimes this loads in card mode<br/>
        - The 'Technical' view may not be reached<br/>
        - Visibility of the newly added tabbing buttons at the header<br/>
        - Using indexing on this page instead of the master detail - probably correct application of blocking event emission/bubbling
        - others<br/>
        - ...<br/></li>
        <li>Automation of load (see 'To Dos Automation')</li>
        <li>Styling, positioning, etc: reduction of mutiple scroll bars as much as can be done, trying to keep content visible and responsive, contemporary look and feel, etc 
        </ul>
        ` }, { header:"Build Milestones", key:'builds',
        content: 
        `<h5>Builds - randomly added, more for feature changes than content upload </H5>
        <ul><li>June 12 2023.. in transit with UI styling changes connected with the tabbing and other enhancements</li></ul>
        ` },];
